import ProdutosPage from "../support/pages/produtosPage";
import inventoryPage from "../support/pages/inventoryPage";

describe('Funcionalidade: Tela de Detalhes do Produto', () => {

  beforeEach(() => {
    cy.preencherLogin();
    cy.url().should('include', '/inventory.html');
  });

  it('Deve exibir nome, descrição, valor e botão "Add to cart" na página de detalhes do produto', () => {
    ProdutosPage.btnAcessarProduto();
    inventoryPage.validarElementosDetalheProduto();
  });

  it('Deve validar título, descrição e valor do produto na tela de detalhes', () => {
    inventoryPage.acessarPrimeiroProduto();
    inventoryPage.validarTituloDescricaoValor();
  });

  it('Deve adicionar item ao carrinho na tela de detalhes e refletir no ícone', () => {
    inventoryPage.acessarPrimeiroProduto();
    inventoryPage.adicionarAoCarrinho();
    inventoryPage.validarProdutoNoCarrinho('1');
    cy.get('button[data-test^="remove"]').should('be.visible');
  });

  it('Deve redirecionar para a lista de produtos ao clicar em "Back to products"', () => {
    inventoryPage.acessarPrimeiroProduto();
    inventoryPage.clicarEmVoltarParaProdutos();
  });

  it('Deve remover o produto do carrinho na tela de detalhes', () => {
    inventoryPage.acessarPrimeiroProduto();
    inventoryPage.adicionarAoCarrinho();
    inventoryPage.removerDoCarrinho();
    inventoryPage.validarCarrinhoVazio();
  });
});
