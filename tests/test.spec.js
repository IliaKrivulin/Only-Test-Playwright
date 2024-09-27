import { test, expect } from '@playwright/test';

test('Link to test', async ({ page }) => {
    
    const selectors = {
        mailInputField: 'input[name="email"]',
        passwordInputField: 'input[name="password"]',
        loginButton: 'button.sc-hKgILt.dEpBxZ',
        menuTests: 'li > [href="/tests"]',
        selectButtonTest: 'div.Select__value-container.css-1hwfws3 > div.Select__placeholder.css-1wa3eu0-placeholder',
        findButton: 'button.sc-hKgILt.DkQrQ',
        selectButtonTest1: 'tr[data-row-key="26"] > td.rc-table-cell.rc-table-row-expand-icon-cell > button.sc-cOajty.knvcGI',
        choosingAPersonalAccount: '[for="canAccessDashboard26"]',
        userReportSelection: '[for="reportViewed26"]',
        restrictionsSelect: 'div.sc-eHfQar.hhRQON > div.sc-hzMMCg.kRzfai',
        enterAddressButton: 'div.sc-jXktwP.hdiogm > button',
        saveButton: 'div.sc-ctaXAZ.cNjYvm > button.sc-hKgILt.sc-eGCarw.dEpBxZ.khDpoc',
        linkButtonTest: 'tbody.rc-table-tbody > tr.sc-hTZhsR.gWQOBx.rc-table-expanded-row.rc-table-expanded-row-level-1 > td.rc-table-cell > form.sc-tYoTV.bNeaU > div.sc-eHfQar.hhRQON > button'
    };

    await page.goto('http://qacase.it-only.online/');
    await page.fill(selectors.mailInputField, 'client6@test.ru');
    await page.fill(selectors.passwordInputField, '3141526asd');
    await page.click(selectors.loginButton);   
    
    await page.click(selectors.menuTests);
    await page.click(selectors.selectButtonTest);
    await page.locator('#react-select-2-option-2').click();
    await page.click(selectors.findButton);
    await page.click(selectors.selectButtonTest1);
    
    await page.click(selectors.choosingAPersonalAccount);
    await page.click(selectors.userReportSelection);
    await page.click(selectors.restrictionsSelect);
    await page.getByText('Ограничения по почте', { exact: true }).click();
    
    await page.click(selectors.enterAddressButton);
    await page.locator('div').filter({ hasText: /^Адреса электронной почты$/ }).nth(3).click();
    await page.locator('#react-select-4-input').fill('1@mail.ru');
    await page.getByText('Create "1@mail.ru"', { exact: true }).click();
    
    await page.click(selectors.saveButton);
    await page.click(selectors.linkButtonTest);
});
