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

  adicionarPrimeiroProduto() {
    cy.get('.inventory_item').first().within(() => {
      cy.get('button').contains('Add to cart').should('be.visible').click()
    })
    cy.wait(3000)
  }

  verificarBotaoRemover() {
    cy.get('.inventory_item').first().within(() => {
      cy.get('button').contains('Remove').should('be.visible')
    })
  }

  removerPrimeiroProduto() {
    cy.get('.inventory_item').first().within(() => {
      cy.get('button').contains('Remove').click()
    })
    cy.wait(3000)
  }

  verificarBotaoAdicionar() {
    cy.get('.inventory_item').first().within(() => {
      cy.get('button').contains('Add to cart').should('be.visible')
    })
  }

}

export default new ProdutosPage();
