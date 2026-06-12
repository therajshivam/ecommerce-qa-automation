class LoginPage {
  visit() {
    cy.visit('/login')
  }
  enterEmail(email) {
    cy.get('#Email').clear().type(email)
  }
  enterPassword(password) {
    cy.get('#Password').clear().type(password)
  }
  clickLogin() {
    cy.get('.login-button').click()
  }
  clickForgotPassword() {
    cy.get('.forgot-password a').click()
  }
  getErrorMessage() {
    return cy.get('.message-error')
  }
  getEmailError() {
    return cy.get('[data-valmsg-for="Email"]')
  }
}
module.exports = LoginPage