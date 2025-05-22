import ProdutosPage from "../support/pages/produtosPage";
describe('Funcionalidade de Produtos - SauceDemo', () => {
  beforeEach(() => {
    cy.preencherLogin();
    cy.url().should('eq', 'https://www.saucedemo.com/inventory.html')
  })

  it('Deve verificar o nome e o preço de cada produto exibido', () => {
    ProdutosPage.verificarProduto()
  })

  it('Deve adicionar e remover apenas o primeiro produto do carrinho', () => {
    // Adiciona o primeiro produto
    // cy.get('.inventory_item').first().within(() => {
      // cy.get('button').contains('Add to cart').should('be.visible').click()
      ProdutosPage.adicionarPrimeiroProduto();
      ProdutosPage.verificarBotaoRemover();
      ProdutosPage.removerPrimeiroProduto();
      ProdutosPage.verificarBotaoAdicionar();
    // })

    // Aguarda 3 segundos
    // cy.wait(3000)

    // Verifica se o botão virou "Remove"
    // cy.get('.inventory_item').first().within(() => {
      // cy.get('button').contains('Remove').should('be.visible')
    // })

    // Remove o produto
    // cy.get('.inventory_item').first().within(() => {
      // cy.get('button').contains('Remove').click()
    // })

    // Aguarda 3 segundos
    // cy.wait(3000)

    // Verifica se voltou para "Add to cart"
    // cy.get('.inventory_item').first().within(() => {
      // cy.get('button').contains('Add to cart').should('be.visible')
    // })
  })
})

  