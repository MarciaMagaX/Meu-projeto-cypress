class inventoryPage {
  acessarPrimeiroProduto() {
    cy.get('.inventory_item_name').first().click();
  }

  validarElementosDetalheProduto() {
    cy.get('.inventory_details_img').should('be.visible');
    cy.get('.inventory_details_name').should('be.visible');
    cy.get('.inventory_details_desc').should('be.visible');
    cy.get('.inventory_details_price').should('be.visible');
    cy.get('button[data-test^="add-to-cart"]').should('be.visible');
  }

  validarTituloDescricaoValor() {
    cy.get('.inventory_details_name').should('be.visible');
    cy.get('.inventory_details_desc').should('be.visible');
    cy.get('.inventory_details_price').should('be.visible');
  }

  adicionarAoCarrinho() {
    cy.get('button[data-test^="add-to-cart"]').click();
  }

  removerDoCarrinho() {
    cy.get('button[data-test^="remove"]').click();
  }

  validarProdutoNoCarrinho(quantidade = '1') {
    cy.get('.shopping_cart_badge').should('have.text', quantidade);
  }

  validarCarrinhoVazio() {
    cy.get('.shopping_cart_badge').should('not.exist');
  }

  clicarEmVoltarParaProdutos() {
    cy.get('[data-test="back-to-products"]').should('be.visible').click();
    cy.url().should('include', '/inventory.html');
    cy.get('.inventory_list').should('be.visible');
  }
}

export default new inventoryPage();
