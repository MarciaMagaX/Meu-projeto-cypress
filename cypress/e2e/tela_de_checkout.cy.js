import CheckoutPage from "../support/pages/tela_de_checkoutPage";

describe('Checkout Completo - SauceDemo', () => {
  beforeEach(() => {
    cy.preencherLogin();
    cy.url().should('include', '/inventory.html');
  });

  it('Preencher informações de checkout e visualizar seções de pagamento e entrega', () => {
    CheckoutPage.adicionarProdutoAoCarrinho('sauce-labs-backpack');
    CheckoutPage.irParaCarrinho();
    CheckoutPage.iniciarCheckout();
    CheckoutPage.preencherDadosCheckout('João', 'Silva', '12345');
    CheckoutPage.validarSecoesPagamentoEntrega();
  });

  it('Validar informações de pagamento, entrega, produtos e impostos', () => {
    CheckoutPage.adicionarProdutoAoCarrinho('sauce-labs-bike-light');
    CheckoutPage.irParaCarrinho();
    CheckoutPage.iniciarCheckout();
    CheckoutPage.preencherDadosCheckout('Maria', 'Oliveira', '54321');
    cy.url().should('include', '/checkout-step-two');
    cy.contains('Checkout: Overview').should('be.visible');
    CheckoutPage.validarTotais();
  });

  it('Validar valor total da compra', () => {
    CheckoutPage.adicionarProdutoAoCarrinho('sauce-labs-fleece-jacket');
    CheckoutPage.irParaCarrinho();
    cy.get('.cart_item').should('have.length', 1);
    CheckoutPage.validarValorProdutoMaiorQueZero();
  });

  it('Validar quantidade e descrição dos produtos no Checkout', () => {
    CheckoutPage.adicionarProdutoAoCarrinho('sauce-labs-onesie');
    CheckoutPage.adicionarProdutoAoCarrinho('test.allthethings()-t-shirt-(red)');
    CheckoutPage.irParaCarrinho();
    CheckoutPage.iniciarCheckout();
    CheckoutPage.preencherDadosCheckout('Carlos', 'Santos', '67890');
    CheckoutPage.validarQuantidadeEDescricaoProdutos();
  });

  it('Finalizar compra com sucesso', () => {
    CheckoutPage.adicionarProdutoAoCarrinho('sauce-labs-bolt-t-shirt');
    CheckoutPage.irParaCarrinho();
    CheckoutPage.iniciarCheckout();
    CheckoutPage.preencherDadosCheckout('Ana', 'Lima', '99999');
    CheckoutPage.finalizarCompra();
  });
});

