// describe('Feature: Finalização da compra no SauceDemo', () => {
//   const baseUrl = 'https://www.saucedemo.com/';

//   beforeEach(() => {
//     cy.visit(baseUrl);
//     cy.get('[data-test="username"]').type('standard_user');
//     cy.get('[data-test="password"]').type('secret_sauce');
//     cy.get('[data-test="login-button"]').click();
//     cy.url().should('include', '/inventory.html');
//   });

//   function adicionarProdutoAoCarrinho(produto) {
//     cy.contains('.inventory_item', produto)
//       .find('button')
//       .click();
//   }

//   function preencherInformacoesEntrega() {
//     cy.get('[data-test="firstName"]').type('João');
//     cy.get('[data-test="lastName"]').type('Silva');
//     cy.get('[data-test="postalCode"]').type('12345');
//     cy.get('[data-test="continue"]').click();
//   }

//   it('Scenario: Finalizar compra com sucesso', () => {
//     adicionarProdutoAoCarrinho('Sauce Labs Backpack');
//     cy.get('.shopping_cart_link').click();
//     cy.get('[data-test="checkout"]').click();
//     preencherInformacoesEntrega();
//     cy.get('[data-test="finish"]').click();

//     cy.get('.complete-header').should('contain.text', 'Thank you for your order');
//   });

//   it('Scenario: Validar confirmação de compra', () => {
//     adicionarProdutoAoCarrinho('Sauce Labs Bike Light');
//     cy.get('.shopping_cart_link').click();
//     cy.get('[data-test="checkout"]').click();
//     preencherInformacoesEntrega();
//     cy.get('[data-test="finish"]').click();

//     cy.get('.complete-header').should('contain.text', 'Thank you for your order');
//   });

//   it('Scenario: Verificar descrição da tela de finalização', () => {
//     adicionarProdutoAoCarrinho('Sauce Labs Bolt T-Shirt');
//     cy.get('.shopping_cart_link').click();
//     cy.get('[data-test="checkout"]').click();
//     preencherInformacoesEntrega();
//     cy.get('[data-test="finish"]').click();

//     cy.get('.complete-header').should('contain.text', 'Thank you for your order');
//     cy.get('.complete-text').should(
//       'contain.text',
//       'Your order has been dispatched, and will arrive just as fast as the pony can get there!'
//     );
//   });

//   it('Scenario: Validar redirecionamento com botão Back Home', () => {
//     adicionarProdutoAoCarrinho('Sauce Labs Fleece Jacket');
//     cy.get('.shopping_cart_link').click();
//     cy.get('[data-test="checkout"]').click();
//     preencherInformacoesEntrega();
//     cy.get('[data-test="finish"]').click();

//     cy.get('.complete-header').should('contain.text', 'Thank you for your order');
//     cy.get('.complete-text').should(
//       'contain.text',
//       'Your order has been dispatched, and will arrive just as fast as the pony can get there!'
//     );

//     cy.get('[data-test="back-to-products"]').click();
//     cy.url().should('include', '/inventory.html');
//   });
// });

import OrderCompletionPage from '../support/pages/OrderCompletionPage';

describe('Feature: Finalização da compra no SauceDemo', () => {
  const baseUrl = 'https://www.saucedemo.com/';

  beforeEach(() => {
    cy.visit(baseUrl);
    cy.get('[data-test="username"]').type('standard_user');
    cy.get('[data-test="password"]').type('secret_sauce');
    cy.get('[data-test="login-button"]').click();
    cy.url().should('include', '/inventory.html');
  });

  it('Scenario: Finalizar compra com sucesso', () => {
    OrderCompletionPage.adicionarProdutoAoCarrinho('Sauce Labs Backpack');
    OrderCompletionPage.acessarCarrinho();
    OrderCompletionPage.iniciarCheckout();
    OrderCompletionPage.preencherInformacoesEntrega('João', 'Silva', '12345');
    OrderCompletionPage.finalizarCompra();
    OrderCompletionPage.verificarMensagemSucesso();
  });

  it('Scenario: Validar confirmação de compra', () => {
    OrderCompletionPage.adicionarProdutoAoCarrinho('Sauce Labs Bike Light');
    OrderCompletionPage.acessarCarrinho();
    OrderCompletionPage.iniciarCheckout();
    OrderCompletionPage.preencherInformacoesEntrega('João', 'Silva', '12345');
    OrderCompletionPage.finalizarCompra();
    OrderCompletionPage.verificarMensagemSucesso();
  });

  it('Scenario: Verificar descrição da tela de finalização', () => {
    OrderCompletionPage.adicionarProdutoAoCarrinho('Sauce Labs Bolt T-Shirt');
    OrderCompletionPage.acessarCarrinho();
    OrderCompletionPage.iniciarCheckout();
    OrderCompletionPage.preencherInformacoesEntrega('João', 'Silva', '12345');
    OrderCompletionPage.finalizarCompra();
    OrderCompletionPage.verificarMensagemSucesso();
    OrderCompletionPage.verificarMensagemDescricao();
  });

  it('Scenario: Validar redirecionamento com botão Back Home', () => {
    OrderCompletionPage.adicionarProdutoAoCarrinho('Sauce Labs Fleece Jacket');
    OrderCompletionPage.acessarCarrinho();
    OrderCompletionPage.iniciarCheckout();
    OrderCompletionPage.preencherInformacoesEntrega('João', 'Silva', '12345');
    OrderCompletionPage.finalizarCompra();
    OrderCompletionPage.verificarMensagemSucesso();
    OrderCompletionPage.verificarMensagemDescricao();
    OrderCompletionPage.voltarParaHome();
    OrderCompletionPage.verificarRedirecionamentoParaInventario();
  });
});

