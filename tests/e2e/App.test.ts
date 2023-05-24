import { describe, test, beforeEach, beforeAll, afterAll } from "vitest";
import { Page, Browser, chromium } from "playwright";
import { expect } from "@playwright/test";
import { handlers } from "../../src/mocks/handlers";
import { setupServer } from "msw/node";

const server = setupServer(...handlers);

describe("App Component", () => {
  let browser: Browser;
  let page: Page;

  beforeAll(async () => {
   
    // Start MSW server
    server.listen();

    // Start a browser context
    browser = await chromium.launch({ headless: true });
    page = await browser.newPage();
  });

  afterAll(async () => {
    if (server) {
      server.close();
    }
  });

  beforeEach(async () => {
    await page.goto(`http://localhost:3000`);
  });

  test("displays the correct title", async () => {
    const title = await page.textContent("h1");
    expect(title).toBe("Meu Time");
  });

  test("sending wrong API key triggers error message", async () => {
    const apiKeyInput = await page.isVisible('input[name="apiKey"]');
    expect(apiKeyInput).toBeTruthy();

    await page.fill('input[name="apiKey"]', 'wrongpasswd');
    await page.click('text=Entrar');

    const errorMessage = await page.textContent(".text-danger");
    expect(errorMessage).toBe('Chave inválida.');
  })

  test("sending correct API key loads main page", async () => {
    const apiKeyInput = await page.isVisible('input[name="apiKey"]');
    expect(apiKeyInput).toBeTruthy();

    await page.fill('input[name="apiKey"]', 'mockpasswd');
    await page.click('text=Entrar');

    page.pause()

    await page.waitForResponse(response => response.status() === 200);

    const countrySelect = await page.$("#countrySelect");
    expect(countrySelect).toBeTruthy();
  });
});
