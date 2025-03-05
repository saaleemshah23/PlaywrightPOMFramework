export class ChallengingDomPage {
    page;
  
    constructor(page) {
      this.page = page;
    }
  
    async clickButton() {
      const button = await this.page.locator('button').first();
      await button.click();
    }
  
    async getResult() {
      const result = await this.page.locator('div#result');
      return await result.innerText();
    }
  }