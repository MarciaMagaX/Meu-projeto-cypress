class LoginPage {

  preencherUsername(username){
    cy.get('#user-name').should('be.visible').type(username)
  }

  preencherPassword(password){
    cy.get('#password').should('be.visible').type(password)
  }

  btnLogar(){
    cy.get('#login-button').should('be.visible').click()
  }

  acessarInventario(){
    cy.url().should('eq', 'https://www.saucedemo.com/inventory.html')
  }

  verificarMensagemErro(mensagem) {
    cy.get('[data-test="error"]').should('be.visible').and('contain.text', mensagem)
  }

  visibilidadeUsername() {
    cy.get('#user-name').should('be.visible')
  }

  visibilidadePassword() {
    cy.get('#password').should('be.visible')
  }

}

export default new LoginPage();
