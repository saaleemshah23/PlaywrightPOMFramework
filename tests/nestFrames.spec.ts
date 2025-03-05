// tests/nestedFrames.spec.ts
import { test, expect } from '@playwright/test';
import { NestedFramesPage } from '@pages/nestedFramesPage';

test.describe('Nested Frames Test', () => {
  let nestedFramesPage: NestedFramesPage;

  test.beforeEach(async ({ page }) => {
    nestedFramesPage = new NestedFramesPage(page);
    await page.goto('https://the-internet.herokuapp.com/nested_frames');
  });

  test('should retrieve text from the inner frame', async () => {
    const text = await nestedFramesPage.getTextFromInnerFrame();
    expect(text).toBe('Middles');
  });
});
