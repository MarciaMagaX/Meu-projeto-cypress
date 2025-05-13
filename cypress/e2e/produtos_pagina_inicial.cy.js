describe('Funcionalidade de Produtos - SauceDemo', () => {
  beforeEach(() => {
    cy.visit('https://www.saucedemo.com/')
    cy.get('#user-name').should('be.visible').type('standard_user')
    cy.get('#password').should('be.visible').type('secret_sauce')
    cy.get('#login-button').should('be.visible').click()
    cy.url().should('eq', 'https://www.saucedemo.com/inventory.html')
  })

  it('Deve verificar o nome e o preço de cada produto exibido', () => {
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
  })

  it('Deve adicionar e remover apenas o primeiro produto do carrinho', () => {
    // Adiciona o primeiro produto
    cy.get('.inventory_item').first().within(() => {
      cy.get('button').contains('Add to cart').should('be.visible').click()
    })

    // Aguarda 3 segundos
    cy.wait(3000)

    // Verifica se o botão virou "Remove"
    cy.get('.inventory_item').first().within(() => {
      cy.get('button').contains('Remove').should('be.visible')
    })

    // Remove o produto
    cy.get('.inventory_item').first().within(() => {
      cy.get('button').contains('Remove').click()
    })

    // Aguarda 3 segundos
    cy.wait(3000)

    // Verifica se voltou para "Add to cart"
    cy.get('.inventory_item').first().within(() => {
      cy.get('button').contains('Add to cart').should('be.visible')
    })
  })
})

  