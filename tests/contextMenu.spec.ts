// tests/contextMenu.spec.ts
import { test, expect } from '@playwright/test';
import { ContextMenuPage } from '@pages/contextMenuPage';

test.describe('Context Menu Test', () => {
  let contextMenuPage: ContextMenuPage;

  test.beforeEach(async ({ page }) => {
    contextMenuPage = new ContextMenuPage(page);
    await page.goto('https://the-internet.herokuapp.com/context_menu');
  });

  test('should show alert on right-click', async () => {
    await contextMenuPage.rightClickOnContextMenu();
    const alertText = await contextMenuPage.getAlertText();
    expect(alertText).toBe('You selected a context menu');
  });
});
