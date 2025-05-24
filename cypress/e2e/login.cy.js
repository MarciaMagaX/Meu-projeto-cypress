import LoginPage from "../support/pages/LoginPage";

describe('Funcionalidade de Login - SauceDemo', () => {

  beforeEach(() => {
    cy.visit('/')
  })

  it('Deve fazer login com credenciais válidas', () => {
    LoginPage.preencherUsername('standard_user')    

    LoginPage.preencherPassword('secret_sauce') 
    
    LoginPage.btnLogar()
    
    LoginPage.acessarInventario()
  })

  it('Deve exibir erro ao inserir username inválido', () => {
    LoginPage.preencherUsername('usuario_falso')
    
    LoginPage.preencherPassword('secret_sauce')
    
    LoginPage.btnLogar()
    
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


  