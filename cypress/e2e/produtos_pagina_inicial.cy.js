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
    
      ProdutosPage.adicionarPrimeiroProduto();
      ProdutosPage.verificarBotaoRemover();
      ProdutosPage.removerPrimeiroProduto();
      ProdutosPage.verificarBotaoAdicionar();
    
  })
})

  