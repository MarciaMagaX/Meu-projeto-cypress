// cypress/e2e/cart.cy.js
import cartPage from '../support/pages/cartPage';


describe('Checkout Completo - SauceDemo', () => {
  beforeEach(() => {
    cy.preencherLogin();
    cy.url().should('include', '/inventory.html');
  });

  it('Adicionar produtos ao carrinho a partir da tela de produto', () => {
    cartPage.abrirProduto('Sauce Labs Bike Light');
    cartPage.clicarAddToCart();
    cartPage.acessarCarrinho();
    cartPage.verificarProdutoNoCarrinho('Sauce Labs Bike Light');
  });
});
