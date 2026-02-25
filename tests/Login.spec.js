import { test, expect } from '@playwright/test';

test('Login', async ({ browser }) => {
const context =await browser.newContext();
const page = await browser.newPage();
const email = process.env.TEST_EMAIL;
const password = process.env.TEST_PASSWORD;

await page.goto('https://architect-testing.projectsmate.com/login');
await page.fill('input[name="email"]', email);
await page.fill('input[name="password"]',password);
await page.click('button[type="submit"]');
await page.goto('https://architect-testing.projectsmate.com/check-inbox?email=${encodeURIComponent(email)}');
await page.waitForTimeout(60000); 
});