const RegisterPage = require('../../pages/RegisterPage')
const registerPage = new RegisterPage()

describe('Registration Module', () => {

  beforeEach(() => {
    registerPage.visit()
  })

  it('TC-001 | Should register successfully with valid details', () => {
    registerPage.enterFirstName('Shivam')
    registerPage.enterLastName('Raj')
    registerPage.enterEmail(`testuser${Date.now()}@test.com`)
    registerPage.enterPassword('Test@1234')
    registerPage.enterConfirmPassword('Test@1234')
    registerPage.clickRegister()
    cy.url().should('include', '/registerresult')
  })

  it('TC-002 | Should show error for already existing email', () => {
    registerPage.enterFirstName('Shivam')
    registerPage.enterLastName('Raj')
    registerPage.enterEmail('demo@nopcommerce.com')
    registerPage.enterPassword('Test@1234')
    registerPage.enterConfirmPassword('Test@1234')
    registerPage.clickRegister()
    registerPage.getErrorMessage().should('be.visible')
  })

  it('TC-003 | Should show error when first name is empty', () => {
    registerPage.enterLastName('Raj')
    registerPage.enterEmail('newuser@test.com')
    registerPage.enterPassword('Test@1234')
    registerPage.enterConfirmPassword('Test@1234')
    registerPage.clickRegister()
    registerPage.getFirstNameError().should('be.visible')
  })

  it('TC-004 | Should show error for invalid email format', () => {
    registerPage.enterFirstName('Shivam')
    registerPage.enterLastName('Raj')
    registerPage.enterEmail('invalidemail@')
    registerPage.enterPassword('Test@1234')
    registerPage.enterConfirmPassword('Test@1234')
    registerPage.clickRegister()
    registerPage.getEmailError().should('be.visible')
  })

  it('TC-005 | Should show error for mismatched passwords', () => {
    registerPage.enterFirstName('Shivam')
    registerPage.enterLastName('Raj')
    registerPage.enterEmail('newuser@test.com')
    registerPage.enterPassword('Test@1234')
    registerPage.enterConfirmPassword('Test@5678')
    registerPage.clickRegister()
    registerPage.getConfirmPasswordError().should('be.visible')
  })

})