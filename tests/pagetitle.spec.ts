import {test,expect } from '@playwright/test';

test('validate page title', async({page})=>{

    await page.goto('https://playwright.dev/');

    let title = await page.title();

    expect(title).toContain('Playwright');
})