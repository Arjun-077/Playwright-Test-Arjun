import { test, expect } from '@playwright/test';

test('Login', async ({ browser }) => {
const context =await browser.newContext();
const page = await browser.newPage();
// const emailsign = process.env.TEST_EMAIL;
const passwordsign =process.env.TEST_Password;

await page.goto('https://architect-testing.projectsmate.com/login');
await page.click('text=Create new account');
await page.fill('input[name="name"]',"Arjun");
await page.fill('input[name="email"]',"Testyxxg@gmail.com"); //email id should be changed after creating an account
await page.fill('input[name="password"]',passwordsign);
await page.fill('input[name="organisationName"]',"techlab");
await page.click('button[type="submit"]');
await page.waitForTimeout(60000); 
});