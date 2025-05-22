// describe('Checkout Completo - SauceDemo', () => {
//   beforeEach(() => {
//     cy.preencherLogin();
//     cy.url().should('include', '/inventory.html');
//   });

//   it('Preencher informações de checkout e visualizar seções de pagamento e entrega', () => {
//     cy.get('[data-test="add-to-cart-sauce-labs-backpack"]').click();
//     cy.get('.shopping_cart_link').click();
//     cy.url().should('include', '/cart.html');
//     cy.get('[data-test="checkout"]').click();

//     cy.get('[data-test="firstName"]').type('João');
//     cy.get('[data-test="lastName"]').type('Silva');
//     cy.get('[data-test="postalCode"]').type('12345');
//     cy.get('[data-test="continue"]').click();

//     cy.contains('Payment Information').should('be.visible');
//     cy.contains('Shipping Information').should('be.visible');
//   });

//   it('Validar informações de pagamento, entrega, produtos e impostos', () => {
//     cy.get('[data-test="add-to-cart-sauce-labs-bike-light"]').click();
//     cy.get('.shopping_cart_link').click();
//     cy.get('[data-test="checkout"]').click();

//     cy.get('[data-test="firstName"]').type('Maria');
//     cy.get('[data-test="lastName"]').type('Oliveira');
//     cy.get('[data-test="postalCode"]').type('54321');
//     cy.get('[data-test="continue"]').click();

//     cy.url().should('include', '/checkout-step-two');
//     cy.contains('Checkout: Overview').should('be.visible');
//     cy.contains('Item total:').should('exist');
//     cy.contains('Tax:').should('exist');
//     cy.contains('Total:').should('exist');
//   });

//   it('Validar valor total da compra', () => {
//     cy.get('[data-test="add-to-cart-sauce-labs-fleece-jacket"]').click();
//     cy.get('.shopping_cart_link').click();

//     cy.get('.cart_item').should('have.length', 1);
//     cy.get('.inventory_item_price').then(($price) => {
//       const itemValue = parseFloat($price.text().replace('$', ''));
//       expect(itemValue).to.be.greaterThan(0);
//     });
//   });

//   it('Validar quantidade e descrição dos produtos no Checkout', () => {
//     cy.get('[data-test="add-to-cart-sauce-labs-onesie"]').click();
//     cy.get('[data-test="add-to-cart-test.allthethings()-t-shirt-(red)"]').click();
//     cy.get('.shopping_cart_link').click();
//     cy.get('[data-test="checkout"]').click();

//     cy.get('[data-test="firstName"]').type('Carlos');
//     cy.get('[data-test="lastName"]').type('Santos');
//     cy.get('[data-test="postalCode"]').type('67890');
//     cy.get('[data-test="continue"]').click();

//     cy.get('.cart_item').should('have.length', 2);
//     cy.get('.inventory_item_name').first().should('be.visible');
//     cy.get('.inventory_item_desc').first().should('be.visible');
//   });

//   it('Finalizar compra com sucesso', () => {
//     cy.get('[data-test="add-to-cart-sauce-labs-bolt-t-shirt"]').click();
//     cy.get('.shopping_cart_link').click();
//     cy.get('[data-test="checkout"]').click();

//     cy.get('[data-test="firstName"]').type('Ana');
//     cy.get('[data-test="lastName"]').type('Lima');
//     cy.get('[data-test="postalCode"]').type('99999');
//     cy.get('[data-test="continue"]').click();
//     cy.get('[data-test="finish"]').click();

//     cy.url().should('include', '/checkout-complete');
//     cy.contains('Thank you for your order!').should('be.visible');
//   });
// });

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

