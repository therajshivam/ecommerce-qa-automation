class RegisterPage {
  visit() {
    cy.visit('/register')
  }
  enterFirstName(name) {
    cy.get('#FirstName').clear().type(name)
  }
  enterLastName(name) {
    cy.get('#LastName').clear().type(name)
  }
  enterEmail(email) {
    cy.get('#Email').clear().type(email)
  }
  enterPassword(password) {
    cy.get('#Password').clear().type(password)
  }
  enterConfirmPassword(password) {
    cy.get('#ConfirmPassword').clear().type(password)
  }
  clickRegister() {
    cy.get('#register-button').click()
  }
  getErrorMessage() {
    return cy.get('.message-error')
  }
  getFirstNameError() {
    return cy.get('[data-valmsg-for="FirstName"]')
  }
  getEmailError() {
    return cy.get('[data-valmsg-for="Email"]')
  }
  getConfirmPasswordError() {
    return cy.get('[data-valmsg-for="ConfirmPassword"]')
  }
}
module.exports = RegisterPage