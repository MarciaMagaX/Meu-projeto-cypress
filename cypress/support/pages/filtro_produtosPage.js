class FilterPage {
  visitLoginPage() {
    cy.visit('https://www.saucedemo.com/');
  }

  login(username = 'standard_user', password = 'secret_sauce') {
    cy.get('[data-test="username"]').type(username);
    cy.get('[data-test="password"]').type(password);
    cy.get('[data-test="login-button"]').click();
  }

  assertOnInventoryPage() {
    cy.url().should('include', '/inventory.html');
    cy.get('.inventory_item', { timeout: 10000 }).should('be.visible');
    cy.get('[data-test="product-sort-container"]').should('be.visible');
  }

  selectSortOption(optionText) {
    cy.get('[data-test="product-sort-container"]').select(optionText);
  }

  getProductNames() {
    return cy.get('.inventory_item_name');
  }

  getProductPrices() {
    return cy.get('.inventory_item_price');
  }
}

export const filter = new FilterPage();
