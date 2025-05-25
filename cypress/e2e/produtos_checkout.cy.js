

import OrderCompletionPage from '../support/pages/orderPage';

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

