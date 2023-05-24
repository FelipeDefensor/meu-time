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

    await page.waitForResponse(response => response.status() === 200);

    const countrySelect = await page.$("#countrySelect");
    expect(countrySelect).toBeTruthy();
  });

  test("select boxes are disabled until previous choice is made", async () => {
    const apiKeyInput = await page.isVisible('input[name="apiKey"]');
    expect(apiKeyInput).toBeTruthy();

    await page.fill('input[name="apiKey"]', 'mockpasswd');
    await page.click('text=Entrar');

    await page.waitForResponse(response => response.status() === 200);

    const countrySelect = await page.$("#countrySelect");
    expect(countrySelect).toBeTruthy();

    // league select box must be disabled until a country is selected
    const leagueSelect = await page.$("#leagueSelect");
    let isLeagueDisabled = await leagueSelect!.isDisabled();
    expect(isLeagueDisabled).toBe(true);

    // select a country
    await countrySelect?.selectOption('Brazil');
    await page.waitForResponse(response => response.status() === 200);

    // league select box must now be enabled
    isLeagueDisabled = await leagueSelect!.isDisabled();
    expect(isLeagueDisabled).toBe(false);


    // season select box must be disabled until a league is selected
    const seasonSelect = await page.$("#seasonSelect");
    let isSeasonDisabled = await seasonSelect!.isDisabled();
    expect(isSeasonDisabled).toBe(true);

    // select a league
    await leagueSelect?.selectOption('Serie A');
    // seasons are already in state, no need to wait for response

    // season select box must now be enabled
    isSeasonDisabled = await seasonSelect!.isDisabled();
    expect(isSeasonDisabled).toBe(false);


    // team select box must be disabled until a league is selected
    const teamSelect = await page.$("#teamSelect");
    let isTeamDisabled = await teamSelect!.isDisabled();
    expect(isTeamDisabled).toBe(true);

    // select a league
    await seasonSelect?.selectOption('2023');
    await page.waitForResponse(response => response.status() === 200);

    // team select box must now be enabled
    isTeamDisabled = await teamSelect!.isDisabled();
    expect(isTeamDisabled).toBe(false);

  });

  test('team information is correctly displayed', async () => {
    const apiKeyInput = await page.isVisible('input[name="apiKey"]');
    expect(apiKeyInput).toBeTruthy();

    await page.fill('input[name="apiKey"]', 'mockpasswd');
    await page.click('text=Entrar');

    await page.waitForResponse(response => response.status() === 200);

    // select a country
    const countrySelect = await page.$("#countrySelect");
    await countrySelect?.selectOption('Brazil');
    await page.waitForResponse(response => response.status() === 200);

    // select a league
    const leagueSelect = await page.$("#leagueSelect");
    await leagueSelect?.selectOption('Serie A');

    // select a season
    const seasonSelect = await page.$("#seasonSelect");
    await seasonSelect?.selectOption('2023');
    await page.waitForResponse(response => response.status() === 200);
        
    // select a team
    const teamSelect = await page.$("#teamSelect");
    await teamSelect?.selectOption('Flamengo');
    await page.waitForResponse(response => response.status() === 200);

    expect(page.getByText('Carlos Pereira')).toBeTruthy();
    expect(page.getByText('4-2-3-1')).toBeTruthy();
    expect(page.getByText('Vitórias')).toBeTruthy();
    expect(page.getByText('Gols/tempo de jogo')).toBeTruthy();

  })
});
