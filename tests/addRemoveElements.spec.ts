import { test, expect } from '@playwright/test';
import { AddRemovePage } from '@pages/addRemovePage';

test.describe('Add/Remove Elements', () => {
  let addRemovePage;

  test.beforeEach(async ({ page }) => {
    addRemovePage = new AddRemovePage(page);
    await page.goto('/add_remove_elements/');
  });

  test('should add and remove an element', async () => {
    await addRemovePage.addElement();
    let count = await addRemovePage.getElementCount();
    expect(count).toBe(1);

    await addRemovePage.removeElement();
    count = await addRemovePage.getElementCount();
    expect(count).toBe(0);
  });
});