class tela_do_carrinhoPage {
  abrirProduto(productName) {
    cy.contains(productName).should('be.visible').click();
  }

  clicarAddToCart() {
    cy.get('[data-test="add-to-cart"]').should('be.visible').click();
  }

  acessarCarrinho() {
    cy.get('.shopping_cart_link').should('be.visible').click();
  }

  verificarProdutoNoCarrinho(productName) {
    cy.get('.cart_item').should('be.visible').and('contain.text', productName);
  }
}

export default new tela_do_carrinhoPage();
