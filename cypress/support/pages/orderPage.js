class OrderCompletionPage {
  adicionarProdutoAoCarrinho(produto) {
    cy.contains('.inventory_item', produto)
      .find('button')
      .should('be.visible')
      .click();
  }

  acessarCarrinho() {
    cy.get('.shopping_cart_link').should('be.visible').click();
  }

  iniciarCheckout() {
    cy.get('[data-test="checkout"]').should('be.visible').click();
  }

  preencherInformacoesEntrega(primeiroNome, sobrenome, cep) {
    cy.get('[data-test="firstName"]').should('be.visible').type(primeiroNome);
    cy.get('[data-test="lastName"]').should('be.visible').type(sobrenome);
    cy.get('[data-test="postalCode"]').should('be.visible').type(cep);
    cy.get('[data-test="continue"]').click();
  }

  finalizarCompra() {
    cy.get('[data-test="finish"]').should('be.visible').click();
  }

  verificarMensagemSucesso() {
    cy.get('.complete-header').should('contain.text', 'Thank you for your order');
  }

  verificarMensagemDescricao() {
    cy.get('.complete-text').should(
      'contain.text',
      'Your order has been dispatched, and will arrive just as fast as the pony can get there!'
    );
  }

  voltarParaHome() {
    cy.get('[data-test="back-to-products"]').click();
  }

  verificarRedirecionamentoParaInventario() {
    cy.url().should('include', '/inventory.html');
  }
}

export default new OrderCompletionPage();
