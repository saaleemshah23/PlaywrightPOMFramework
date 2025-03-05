export class CheckboxesPage {
    page;
  
    constructor(page) {
      this.page = page;
    }
  
    async checkCheckbox(index: number) {
      const checkbox = await this.page.locator(`input[type="checkbox"]:nth-of-type(${index})`);
      await checkbox.check();
    }
  
    async uncheckCheckbox(index: number) {
      const checkbox = await this.page.locator(`input[type="checkbox"]:nth-of-type(${index})`);
      await checkbox.uncheck();
    }
  
    async isCheckboxChecked(index: number) {
      const checkbox = await this.page.locator(`input[type="checkbox"]:nth-of-type(${index})`);
      return await checkbox.isChecked();
    }
  }