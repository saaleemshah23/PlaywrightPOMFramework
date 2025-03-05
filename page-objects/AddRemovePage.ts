export class AddRemovePage {
    page;
  
    constructor(page) {
      this.page = page;
    }
  
    async addElement() {
      const addButton = await this.page.locator('button[onclick="addElement()"]');
      await addButton.click();
    }
  
    async removeElement() {
      const deleteButton = await this.page.locator('.added-manually');
      if (await deleteButton.isVisible()) {
        await deleteButton.click();
      }
    }
  
    async getElementCount() {
      return await this.page.locator('.added-manually').count();
    }
  }