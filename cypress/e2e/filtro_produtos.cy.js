
// describe('Funcionalidade de filtro de produtos - SauceDemo', () => {
//   beforeEach(() => {
//     cy.visit('https://www.saucedemo.com/');

//     cy.get('[data-test="username"]').type('standard_user');
//     cy.get('[data-test="password"]').type('secret_sauce');
//     cy.get('[data-test="login-button"]').click();

//     // Confirma que mudou para a página de inventário
//     cy.url().should('include', '/inventory.html');

//     // Espera os produtos aparecerem
//     cy.get('.inventory_item', { timeout: 10000 }).should('be.visible');

//     // Espera o dropdown de filtro estar visível
//     cy.get('[data-test="product-sort-container"]').should('be.visible');
//   });

//   it('Scenario: Ordenar produtos por nome de A a Z', () => {
//     cy.get('[data-test="product-sort-container"]').select('Name (A to Z)');

//     cy.get('.inventory_item_name').then(($names) => {
//       const nomes = [...$names].map(el => el.innerText);
//       const nomesOrdenados = [...nomes].sort();
//       expect(nomes).to.deep.equal(nomesOrdenados);
//     });
//   });

//   it('Scenario: Ordenar produtos por nome de Z a A', () => {
//     cy.get('[data-test="product-sort-container"]').select('Name (Z to A)');

//     cy.get('.inventory_item_name').then(($names) => {
//       const nomes = [...$names].map(el => el.innerText);
//       const nomesOrdenados = [...nomes].sort().reverse();
//       expect(nomes).to.deep.equal(nomesOrdenados);
//     });
//   });

//   it('Scenario: Ordenar produtos por preço do menor para o maior', () => {
//     cy.get('[data-test="product-sort-container"]').select('Price (low to high)');

//     cy.get('.inventory_item_price').then(($precos) => {
//       const precos = [...$precos].map(el => parseFloat(el.innerText.replace('$', '')));
//       const precosOrdenados = [...precos].sort((a, b) => a - b);
//       expect(precos).to.deep.equal(precosOrdenados);
//     });
//   });

//   it('Scenario: Ordenar produtos por preço do maior para o menor', () => {
//     cy.get('[data-test="product-sort-container"]').select('Price (high to low)');

//     cy.get('.inventory_item_price').then(($precos) => {
//       const precos = [...$precos].map(el => parseFloat(el.innerText.replace('$', '')));
//       const precosOrdenados = [...precos].sort((a, b) => b - a);
//       expect(precos).to.deep.equal(precosOrdenados);
//     });
//   });
// });


import { filter } from '../support/pages/filtro_produtosPage';

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
