describe('Funcionalidade de Login - SauceDemo', () => {

    beforeEach(() => {
      cy.visit('https://www.saucedemo.com/')
    })
  
  
    it('Usa o comando customizado de login', () => {
        cy.preencherLogin('standard_user', 'secret_sauce')
        })
  })
  
    