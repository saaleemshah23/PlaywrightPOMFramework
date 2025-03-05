import { test, expect } from '@playwright/test';
import { CheckboxesPage } from '@pages/checkboxesPage';

test.describe('Checkboxes', () => {
  let checkboxesPage;

  test.beforeEach(async ({ page }) => {
    checkboxesPage = new CheckboxesPage(page);
    await page.goto('/checkboxes');
  });

  test('should toggle checkboxes', async () => {
    await checkboxesPage.checkCheckbox(1);
    await checkboxesPage.uncheckCheckbox(2);

    expect(await checkboxesPage.isCheckboxChecked(1)).toBe(true);
    expect(await checkboxesPage.isCheckboxChecked(2)).toBe(false);
  });
});