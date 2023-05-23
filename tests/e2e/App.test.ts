import { describe, test, beforeEach, beforeAll, afterAll } from "vitest";
import { createServer, ViteDevServer } from 'vite'
import  { Page, Browser, chromium } from "playwright";
import { expect } from "@playwright/test"
import {handlers} from '../../src/mocks/handlers'
import { setupServer } from 'msw/node'

let mswServer = setupServer(...handlers);

describe("App Component", () => {
  let server : ViteDevServer
  let browser: Browser
  let page: Page

  beforeAll(async () => {
    // Start the mock server
    mswServer.listen()
  
    // Start the vite dev server
    server = await createServer({
      server: { port: 3000 },
      mode: 'development',
    });

    await server.listen();
  
    server.printUrls()

    console.log(process.env.NODE_ENV)

    // Start a browser context
    browser = await chromium.launch({ headless: false });
    page = await browser.newPage();
  
  });
  

  // afterAll(async () => {
  //   // Close the Vite server
  //   if (server) {
  //     await server.close();
  //   }

  //   // Close the browser context
  //   if (browser) {
  //     await browser.close();
  //   }
  // })

  beforeEach(async () => {
    await page.goto("http://127.0.0.1:3000");
  });

  test("displays the correct title", async () => {
    const title = await page.textContent("h1");
    expect(title).toBe("API-Football");
  });

  test("display APIKeyInput component correctly", async () => {
    const apiKeyInput = await page.isVisible('input[name="apiKey"]');
    expect(apiKeyInput).toBeTruthy();

    await page.fill('input[name="apiKey"]', '123456789');
    await page.click('text=Entrar');

    // Wait for API call to complete
    // await page.waitForResponse(response => response.status() === 200);

    await page.pause()
    // Now, we can continue with our country selection test
    const countrySelect = await page.$("#countrySelect");
    expect(countrySelect).toBeTruthy();
  }, 60000);

  // test("handle Country selection", async () => {
  //   // Assuming country dropdown has an id "countrySelect"
  //   const countrySelect = await page.$("#countrySelect");
  //   expect(countrySelect).toBeTruthy();

  //   // Assuming a country option value as "England"
  //   await page.selectOption("#countrySelect", "England");

  //   // check whether league selection box appears after selecting a country
  //   // Assuming league dropdown has an id "leagueSelect"
  //   const leagueSelect = await page.isVisible("#leagueSelect");
  //   expect(leagueSelect).toBeTruthy();
  // });

  // Similarly, you can write tests for selecting league, season, and team.
  // In addition, you can write tests to verify if the correct data is loaded based on the selections made.
});
