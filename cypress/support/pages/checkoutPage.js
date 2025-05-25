class CheckoutPage {

  adicionarProdutoAoCarrinho(nomeProduto) {
    cy.get(`[data-test="add-to-cart-${nomeProduto}"]`).click();
  }

  irParaCarrinho() {
    cy.get('.shopping_cart_link').click();
    cy.url().should('include', '/cart.html');
  }

  iniciarCheckout() {
    cy.get('[data-test="checkout"]').click();
  }

  preencherDadosCheckout(nome, sobrenome, cep) {
    cy.get('[data-test="firstName"]').type(nome);
    cy.get('[data-test="lastName"]').type(sobrenome);
    cy.get('[data-test="postalCode"]').type(cep);
    cy.get('[data-test="continue"]').click();
  }

  validarSecoesPagamentoEntrega() {
    cy.contains('Payment Information').should('be.visible');
    cy.contains('Shipping Information').should('be.visible');
  }

  validarTotais() {
    cy.contains('Item total:').should('exist');
    cy.contains('Tax:').should('exist');
    cy.contains('Total:').should('exist');
  }

  validarValorProdutoMaiorQueZero() {
    cy.get('.inventory_item_price').then(($price) => {
      const itemValue = parseFloat($price.text().replace('$', ''));
      expect(itemValue).to.be.greaterThan(0);
    });
  }

  validarQuantidadeEDescricaoProdutos(qtdEsperada = 2) {
    cy.get('.cart_item').should('have.length', qtdEsperada);
    cy.get('.inventory_item_name').first().should('be.visible');
    cy.get('.inventory_item_desc').first().should('be.visible');
  }

  finalizarCompra() {
    cy.get('[data-test="finish"]').click();
    cy.url().should('include', '/checkout-complete');
    cy.contains('Thank you for your order!').should('be.visible');
  }

}

export default new CheckoutPage();
