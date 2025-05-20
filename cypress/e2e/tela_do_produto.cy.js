import ProdutosPage from "../support/pages/produtosPage";
import TelaDoProdutoPage from "../support/pages/tela_do_produtoPage";

describe('Funcionalidade: Tela de Detalhes do Produto', () => {

  beforeEach(() => {
    cy.preencherLogin();
    cy.url().should('include', '/inventory.html');
  });

  it('Deve exibir nome, descrição, valor e botão "Add to cart" na página de detalhes do produto', () => {
    ProdutosPage.btnAcessarProduto();
    TelaDoProdutoPage.validarElementosDetalheProduto();
  });

  it('Deve validar título, descrição e valor do produto na tela de detalhes', () => {
    TelaDoProdutoPage.acessarPrimeiroProduto();
    TelaDoProdutoPage.validarTituloDescricaoValor();
  });

  it('Deve adicionar item ao carrinho na tela de detalhes e refletir no ícone', () => {
    TelaDoProdutoPage.acessarPrimeiroProduto();
    TelaDoProdutoPage.adicionarAoCarrinho();
    TelaDoProdutoPage.validarProdutoNoCarrinho('1');
    cy.get('button[data-test^="remove"]').should('be.visible');
  });

  it('Deve redirecionar para a lista de produtos ao clicar em "Back to products"', () => {
    TelaDoProdutoPage.acessarPrimeiroProduto();
    TelaDoProdutoPage.clicarEmVoltarParaProdutos();
  });

  it('Deve remover o produto do carrinho na tela de detalhes', () => {
    TelaDoProdutoPage.acessarPrimeiroProduto();
    TelaDoProdutoPage.adicionarAoCarrinho();
    TelaDoProdutoPage.removerDoCarrinho();
    TelaDoProdutoPage.validarCarrinhoVazio();
  });
});
