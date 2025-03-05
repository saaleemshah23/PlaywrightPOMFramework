// pages/nestedFramesPage.ts
import { Page } from '@playwright/test';

export class NestedFramesPage {
  private page: Page;
  private outerFrameSelector = '#outer-frame';  // Outer iframe selector
  private innerFrameSelector = '#inner-frame';  // Inner iframe selector

  constructor(page: Page) {
    this.page = page;
  }

  async getTextFromInnerFrame() {
    const outerFrame = this.page.frameLocator(this.outerFrameSelector);
    const innerFrame = outerFrame.frameLocator(this.innerFrameSelector);
    return await innerFrame.locator('h3').textContent();
  }
}
