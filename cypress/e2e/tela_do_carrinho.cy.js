// cypress/e2e/cart.cy.js
import tela_do_carrinhoPage from '../support/pages/tela_do_carrinhoPage';


describe('Checkout Completo - SauceDemo', () => {
  beforeEach(() => {
    cy.preencherLogin();
    cy.url().should('include', '/inventory.html');
  });

  it('Adicionar produtos ao carrinho a partir da tela de produto', () => {
    tela_do_carrinhoPage.abrirProduto('Sauce Labs Bike Light');
    tela_do_carrinhoPage.clicarAddToCart();
    tela_do_carrinhoPage.acessarCarrinho();
    tela_do_carrinhoPage.verificarProdutoNoCarrinho('Sauce Labs Bike Light');
  });
});
