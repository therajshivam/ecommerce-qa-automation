const LoginPage = require('../../pages/LoginPage')
const loginPage = new LoginPage()

describe('Login Module', () => {

  beforeEach(() => {
    loginPage.visit()
  })

  it('TC-011 | Should login successfully with valid credentials', () => {
    loginPage.enterEmail('demo@nopcommerce.com')
    loginPage.enterPassword('demo@123')
    loginPage.clickLogin()
    cy.url().should('include', '/customer/info')
  })

  it('TC-012 | Should show error with wrong password', () => {
    loginPage.enterEmail('demo@nopcommerce.com')
    loginPage.enterPassword('wrongpassword')
    loginPage.clickLogin()
    loginPage.getErrorMessage().should('be.visible')
  })

  it('TC-013 | Should show error with unregistered email', () => {
    loginPage.enterEmail('notregistered99999@test.com')
    loginPage.enterPassword('anypassword')
    loginPage.clickLogin()
    loginPage.getErrorMessage().should('be.visible')
  })

  it('TC-014 | Should show validation error with empty email', () => {
    loginPage.enterPassword('demo@123')
    loginPage.clickLogin()
    loginPage.getEmailError().should('be.visible')
  })

  it('TC-018 | Should navigate to forgot password page', () => {
    loginPage.clickForgotPassword()
    cy.url().should('include', '/passwordrecovery')
  })

  it('TC-020 | Should logout successfully', () => {
    loginPage.enterEmail('demo@nopcommerce.com')
    loginPage.enterPassword('demo@123')
    loginPage.clickLogin()
    cy.get('.ico-logout').click()
    cy.get('.ico-login').should('be.visible')
  })

})