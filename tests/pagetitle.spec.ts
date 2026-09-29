import {test,expect } from '@playwright/test';

test('validate page title', async({page})=>{

    await page.goto('https://playwright.dev/');

    let title = await page.title();

    expect(title).toContain('Playwright');
})

test('click on get started link and verify the new page opened', async({page})=>{

    await page.goto('https://playwright.dev/');

    await page.getByRole('link',{name:'Get started'}).click();

    await expect(page.getByRole('heading',{name:'Installation'})).toBeVisible();
})

test('form interactions', async({page})=>{

    await page.goto('https://www.w3schools.com/html/html_forms.asp');

    await page.getByLabel('First name:').fill('sunitha');

    await page.getByLabel('Last name:').fill('qa');
    await page.getByRole('button',{name:'Submit'}).first().click();

    await expect(page).toHaveURL(/action_page/);
})