import LoginPage from "../support/pages/loginPage";

describe('Funcionalidade de Login - SauceDemo', () => {

  beforeEach(() => {
    cy.visit('/')
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
    // cy.get('#password').should('be.visible').type('secret_sauce')
    LoginPage.preencherPassword('secret_sauce')
    // cy.get('#login-button').should('be.visible').click()
    LoginPage.btnLogar()
    // cy.get('[data-test="error"]').should('be.visible').and('contain.text', 'Username and password do not match any user in this service')
    LoginPage.verificarMensagemErro('Username and password do not match any user')
  })

  it('Deve exibir erro ao inserir username e password inválidos', () => {
    LoginPage.preencherUsername('usuario_incorreto')
    LoginPage.preencherPassword('senha_errada')
    LoginPage.btnLogar()
    LoginPage.verificarMensagemErro('Username and password do not match any user in this service')
  })

  it('Deve exibir erro ao inserir password inválida', () => {
    LoginPage.preencherUsername('standard_user')
    LoginPage.preencherPassword('senha_errada')
    LoginPage.btnLogar()
    LoginPage.verificarMensagemErro('Username and password do not match any user in this service')
  })

  it('Deve exibir erro ao deixar o campo username em branco', () => {
    LoginPage.visibilidadeUsername()
    LoginPage.preencherPassword('secret_sauce')
    LoginPage.btnLogar()
    LoginPage.verificarMensagemErro('Username is required')
  })

  it('Deve exibir erro ao deixar o campo password em branco', () => {
    LoginPage.preencherUsername('standard_user')
    LoginPage.visibilidadePassword()
    LoginPage.btnLogar()
    LoginPage.verificarMensagemErro('Password is required')
  })

  it('Deve exibir erro ao deixar username e password em branco', () => {
    LoginPage.visibilidadeUsername()
    LoginPage.visibilidadePassword()
    LoginPage.btnLogar()
    LoginPage.verificarMensagemErro('Username is required')
  })

})


  