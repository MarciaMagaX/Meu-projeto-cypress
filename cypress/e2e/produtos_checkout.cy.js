describe('Funcionalidade de Produtos e Checkout - SauceDemo', () => {

  beforeEach(() => {
    cy.preencherLogin('standard_user', 'secret_sauce')
  })

  it('Validar a página de produtos - "Products"', () => {
    cy.url().should('include', '/inventory.html')
    cy.get('.title').should('have.text', 'Products')
  })

  it('Acessar o menu About e validar redirecionamento', () => {
    cy.get('#react-burger-menu-btn').click()
    cy.get('#about_sidebar_link').click()
    cy.wait(1000)
    cy.origin('https://saucelabs.com', () => {
        cy.url().should('include', 'saucelabs.com')
        cy.get('body').should('be.visible') 
    })
  })

  it('Fazer logout pelo menu', () => {
    cy.get('#react-burger-menu-btn').click()
    cy.get('#logout_sidebar_link').click()
    cy.url().should('include', 'saucedemo.com')
  })

  it('Verificar se o carrinho está vazio', () => {
    cy.get('.shopping_cart_link').click()
    cy.get('.cart_item').should('not.exist')
  })

  it('Carrinho -> Checkout', () => {
    cy.get('[data-test="add-to-cart-sauce-labs-backpack"]').click()
    cy.get('.shopping_cart_link').click()
    cy.get('[data-test="checkout"]').click()
    cy.url().should('include', 'checkout-step-one.html')
  })

  it('Carrinho -> Continue Shopping', () => {
    cy.get('[data-test="add-to-cart-sauce-labs-backpack"]').click()
    cy.get('.shopping_cart_link').click()
    cy.get('[data-test="continue-shopping"]').click()
    cy.url().should('include', '/inventory.html')
  })

  it('Finalizar compra com dados válidos', () => {
    cy.get('[data-test="add-to-cart-sauce-labs-bike-light"]').click()
    cy.get('.shopping_cart_link').click()
    cy.get('[data-test="checkout"]').click()
    cy.get('[data-test="firstName"]').type('João')
    cy.get('[data-test="lastName"]').type('Silva')
    cy.get('[data-test="postalCode"]').type('12345')
    cy.get('[data-test="continue"]').click()
    cy.get('.summary_info').should('exist')
    cy.get('[data-test="finish"]').click()
    cy.get('.complete-header').should('contain.text', 'Thank you for your order!')
  })

  it('Checkout com produto grátis (total $0)', () => {
    cy.get('.shopping_cart_link').click()
    cy.get('[data-test="checkout"]').click()
    cy.get('[data-test="firstName"]').type('Ana')
    cy.get('[data-test="lastName"]').type('Souza')
    cy.get('[data-test="postalCode"]').type('99999')
    cy.get('[data-test="continue"]').click()
    cy.get('.summary_total_label').should('contain', '$0.00') // ajuste necessário se tiver produto
  })

  it('Checkout com campos obrigatórios em branco', () => {
    cy.get('[data-test="add-to-cart-sauce-labs-onesie"]').click()
    cy.get('.shopping_cart_link').click()
    cy.get('[data-test="checkout"]').click()
    cy.get('[data-test="continue"]').click()
    cy.get('[data-test="error"]').should('contain', 'First Name is required')
  })

  it('Checkout com dados inválidos nos campos obrigatórios', () => {
    cy.get('[data-test="add-to-cart-sauce-labs-onesie"]').click()
    cy.get('.shopping_cart_link').click()
    cy.get('[data-test="checkout"]').click()
    cy.get('[data-test="firstName"]').type('@@@')
    cy.get('[data-test="lastName"]').type('1234')
    cy.get('[data-test="postalCode"]').type('abcde')
    cy.get('[data-test="continue"]').click()
    cy.url().should('include', 'checkout-step-two.html') // continua normalmente
  })

  it('Checkout -> Continuar após preencher os dados', () => {
    cy.get('[data-test="add-to-cart-test.allthethings()-t-shirt-(red)"]').click()
    cy.get('.shopping_cart_link').click()
    cy.get('[data-test="checkout"]').click()
    cy.get('[data-test="firstName"]').type('Lucas')
    cy.get('[data-test="lastName"]').type('Pereira')
    cy.get('[data-test="postalCode"]').type('54321')
    cy.get('[data-test="continue"]').click()
    cy.url().should('include', 'checkout-step-two.html')
  })

  it('Cancelar o processo de checkout', () => {
    cy.get('[data-test="add-to-cart-sauce-labs-fleece-jacket"]').click()
    cy.get('.shopping_cart_link').click()
    cy.get('[data-test="checkout"]').click()
    cy.get('[data-test="firstName"]').type('Carlos')
    cy.get('[data-test="lastName"]').type('Ferreira')
    cy.get('[data-test="postalCode"]').type('88888')
    cy.get('[data-test="continue"]').click()
    cy.get('[data-test="cancel"]').click()
    cy.url().should('include', '/inventory.html')
  })

})
