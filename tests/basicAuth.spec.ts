import { test, expect } from '@playwright/test';
import { LoginPage } from '@pages/loginPage';

test.describe('Basic Auth', () => {
  let loginPage;

  test.beforeEach(async ({ page }) => {
    loginPage = new LoginPage(page);
  });

  test('should login using basic auth', async () => {
    await loginPage.login('admin', 'admin');
    const message = await loginPage.getMessage();
    expect(message).toContain('Congratulations!');
  });
});