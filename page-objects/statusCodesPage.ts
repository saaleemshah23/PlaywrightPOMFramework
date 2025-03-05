// pages/statusCodesPage.ts
import { Page, Response } from '@playwright/test';

export class StatusCodesPage {
  private page: Page;

  constructor(page: Page) {
    this.page = page;
  }

  async checkStatusCode(url: string): Promise<number | null> {
    const response = await this.page.goto(url);
    
    // If the response is null, handle accordingly
    if (response === null) {
      console.log("Navigation failed or no response.");
      return null; // You can choose to return a default code or throw an error
    }

    return response.status(); // Safely access the status code
  }
}
