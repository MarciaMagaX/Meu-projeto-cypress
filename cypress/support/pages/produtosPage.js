class ProdutosPage {

  verificarProduto(){
    cy.get('.inventory_item').should('have.length', 6)

    cy.get('.inventory_item').each(($produto, index) => {
      cy.wrap($produto).within(() => {
        cy.get('.inventory_item_name')
          .should('be.visible')
          .then(($nome) => {
            cy.log(`Produto ${index + 1} - Nome: ${$nome.text()}`)
          })

        cy.get('.inventory_item_price')
          .should('be.visible')
          .then(($preco) => {
            cy.log(`Produto ${index + 1} - Preço: ${$preco.text()}`)
          })
      })
    })
  }

  btnAcessarProduto(){
   cy.get('.inventory_item_name').first().click()
 
  }

}

export default new ProdutosPage();
