import LoginPage from "../support/pages/loginPage";

describe('Funcionalidade de Login - SauceDemo', () => {

  beforeEach(() => {
    cy.visit('https://www.saucedemo.com/')
  })

  it('Deve fazer login com credenciais válidas', () => {
    // cy.get('#user-name').should('be.visible').type('standard_user').should('have.value', 'standard_user')
    LoginPage.preencherUsername('standard_user')
    // cy.get('#password').should('be.visible').type('secret_sauce').should('have.value', 'secret_sauce')
    LoginPage.preencherPassword('secret_sauce') 
    // cy.get('#login-button').should('be.visible').click()
    LoginPage.btnLogar()
    // cy.url().should('eq', 'https://www.saucedemo.com/inventory.html')
    LoginPage.acessarInventario()
  })

  it('Deve exibir erro ao inserir username inválido', () => {
    LoginPage.preencherUsername('usuario_falso')
    cy.get('#password').should('be.visible').type('secret_sauce')
    cy.get('#login-button').should('be.visible').click()
    cy.get('[data-test="error"]').should('be.visible').and('contain.text', 'Username and password do not match any user in this service')
  })

  it('Deve exibir erro ao inserir username e password inválidos', () => {
    LoginPage.preencherUsername('usuario_incorreto')
    cy.get('#password').should('be.visible').type('senha_errada')
    cy.get('#login-button').should('be.visible').click()
    cy.get('[data-test="error"]').should('be.visible').and('contain.text', 'Username and password do not match any user in this service')
  })

  it('Deve exibir erro ao inserir password inválida', () => {
    cy.get('#user-name').should('be.visible').type('standard_user')
    cy.get('#password').should('be.visible').type('senha_errada')
    cy.get('#login-button').should('be.visible').click()
    cy.get('[data-test="error"]').should('be.visible').and('contain.text', 'Username and password do not match any user in this service')
  })

  it('Deve exibir erro ao deixar o campo username em branco', () => {
    cy.get('#user-name').should('be.visible') // apenas visível, não preenche
    cy.get('#password').should('be.visible').type('secret_sauce')
    cy.get('#login-button').should('be.visible').click()
    cy.get('[data-test="error"]').should('be.visible').and('contain.text', 'Username is required')
  })

  it('Deve exibir erro ao deixar o campo password em branco', () => {
    cy.get('#user-name').should('be.visible').type('standard_user')
    cy.get('#password').should('be.visible') // visível, mas não preenche
    cy.get('#login-button').should('be.visible').click()
    cy.get('[data-test="error"]').should('be.visible').and('contain.text', 'Password is required')
  })

  it('Deve exibir erro ao deixar username e password em branco', () => {
    cy.get('#user-name').should('be.visible')
    cy.get('#password').should('be.visible')
    cy.get('#login-button').should('be.visible').click()
    cy.get('[data-test="error"]').should('be.visible').and('contain.text', 'Username is required')
  })

})

  