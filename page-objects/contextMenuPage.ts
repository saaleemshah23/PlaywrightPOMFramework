// pages/contextMenuPage.ts
import { Page } from '@playwright/test';

export class ContextMenuPage {
  private page: Page;
  private contextMenuArea = '#hot-spot'; // Context menu area selector
  
  constructor(page: Page) {
    this.page = page;
  }

  async rightClickOnContextMenu(): Promise<void> {
    await this.page.locator(this.contextMenuArea).click({ button: 'right' });
  }

  async getAlertText() {
    const alert = this.page.on('dialog', async (dialog) => {
      return dialog.message(); // Get the alert message
    });
    return alert;
  }
}
