
import { filter } from '../support/pages/filterPage';

describe('Funcionalidade de filtro de produtos - SauceDemo', () => {
  beforeEach(() => {
    filter.visitLoginPage();
    filter.login();
    filter.assertOnInventoryPage();
  });

  it('Scenario: Ordenar produtos por nome de A a Z', () => {
    filter.selectSortOption('Name (A to Z)');

    filter.getProductNames().then(($names) => {
      const nomes = [...$names].map(el => el.innerText);
      const nomesOrdenados = [...nomes].sort();
      expect(nomes).to.deep.equal(nomesOrdenados);
    });
  });

  it('Scenario: Ordenar produtos por nome de Z a A', () => {
    filter.selectSortOption('Name (Z to A)');

    filter.getProductNames().then(($names) => {
      const nomes = [...$names].map(el => el.innerText);
      const nomesOrdenados = [...nomes].sort().reverse();
      expect(nomes).to.deep.equal(nomesOrdenados);
    });
  });

  it('Scenario: Ordenar produtos por preço do menor para o maior', () => {
    filter.selectSortOption('Price (low to high)');

    filter.getProductPrices().then(($precos) => {
      const precos = [...$precos].map(el => parseFloat(el.innerText.replace('$', '')));
      const precosOrdenados = [...precos].sort((a, b) => a - b);
      expect(precos).to.deep.equal(precosOrdenados);
    });
  });

  it('Scenario: Ordenar produtos por preço do maior para o menor', () => {
    filter.selectSortOption('Price (high to low)');

    filter.getProductPrices().then(($precos) => {
      const precos = [...$precos].map(el => parseFloat(el.innerText.replace('$', '')));
      const precosOrdenados = [...precos].sort((a, b) => b - a);
      expect(precos).to.deep.equal(precosOrdenados);
    });
  });
});
