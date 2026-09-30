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

    await page.goto('https://the-internet.herokuapp.com/login')

    await page.getByLabel('Username').fill('tomsmith');

    await page.getByLabel('Password').fill('SuperSecretPassword!');
    await page.getByRole('button',{name:'Login'}).click();

    await expect(page).toHaveURL('https://the-internet.herokuapp.com/secure');
    await expect(page.getByText('Secure Area', {exact:true})).toBeVisible()
})