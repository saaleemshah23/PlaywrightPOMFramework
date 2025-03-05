import { test, expect } from '@playwright/test';
import { StatusCodesPage } from '@pages/statusCodesPage';

test.describe('Status Codes Test', () => {
  let statusCodesPage: StatusCodesPage;

  test.beforeEach(async ({ page }) => {
    statusCodesPage = new StatusCodesPage(page);
  });

  test('should return status 200 for valid page', async () => {
    const status = await statusCodesPage.checkStatusCode('https://the-internet.herokuapp.com/status_codes/200');
    expect(status).toBe(200);
  });

  test('should return status 404 for not found page', async () => {
    const status = await statusCodesPage.checkStatusCode('https://the-internet.herokuapp.com/status_codes/404');
    expect(status).toBe(404);
  });
});