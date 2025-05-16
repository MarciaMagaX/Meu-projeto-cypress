import ProdutosPage from "../support/pages/produtosPage";
describe('Funcionalidade: Tela de Detalhes do Produto', () => {

  beforeEach(() => {
    cy.preencherLogin();
    cy.url().should('include', '/inventory.html')
  })

  it('Deve exibir nome, descrição, valor e botão "Add to cart" na página de detalhes do produto', () => {
    ProdutosPage.btnAcessarProduto()    
    cy.get('.inventory_details_img').should('be.visible')
    cy.get('.inventory_details_name').should('be.visible')
    cy.get('.inventory_details_desc').should('be.visible')
    cy.get('.inventory_details_price').should('be.visible')
    cy.get('button[data-test^="add-to-cart"]').should('be.visible')
  })

  it('Deve validar título, descrição e valor do produto na tela de detalhes', () => {
    cy.get('.inventory_item_name').first().click()

    cy.get('.inventory_details_name').should('be.visible')
    cy.get('.inventory_details_desc').should('be.visible')
    cy.get('.inventory_details_price').should('be.visible')
  })

  it('Deve adicionar item ao carrinho na tela de detalhes e refletir no ícone', () => {
    cy.get('.inventory_item_name').first().click()

    cy.get('button[data-test^="add-to-cart"]').click()
    cy.get('.shopping_cart_badge').should('have.text', '1')
    cy.get('button[data-test^="remove"]').should('be.visible')
  })

  it('Deve redirecionar para a lista de produtos ao clicar em "Back to products"', () => {
    cy.get('.inventory_item_name').first().click()

    cy.get('[data-test="back-to-products"]').should('be.visible').click()
    cy.url().should('include', '/inventory.html')
    cy.get('.inventory_list').should('be.visible')
  })

  it('Deve remover o produto do carrinho na tela de detalhes', () => {
    cy.get('.inventory_item_name').first().click()

    cy.get('button[data-test^="add-to-cart"]').click()
    cy.get('button[data-test^="remove"]').should('be.visible').click()
    cy.get('.shopping_cart_badge').should('not.exist')
  })
})
