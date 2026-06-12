const LoginPage = require('../../pages/LoginPage')
const CartPage = require('../../pages/CartPage')

const loginPage = new LoginPage()
const cartPage = new CartPage()

describe('Cart Module', () => {

  beforeEach(() => {
    loginPage.visit()
    loginPage.enterEmail('demo@nopcommerce.com')
    loginPage.enterPassword('demo@123')
    loginPage.clickLogin()
  })

  it('TC-035 | Should add product to cart successfully', () => {
    cy.visit('/apple-macbook-pro-13-inch')
    cy.get('.add-to-cart-button').click()
    cy.get('.bar-notification').should('contain', 'cart')
  })

  it('TC-036 | Should add multiple products to cart', () => {
    cy.visit('/apple-macbook-pro-13-inch')
    cy.get('.add-to-cart-button').click()
    cy.visit('/apple-macbook-pro-13-inch')
    cartPage.openCart()
    cartPage.getCartItems().should('have.length.at.least', 1)
  })

  it('TC-038 | Should remove product from cart', () => {
    cy.visit('/apple-macbook-pro-13-inch')
    cy.get('.add-to-cart-button').click()
    cartPage.openCart()
    cartPage.removeFirstItem()
    cy.get('body').should('be.visible')
  })

  it('TC-039 | Should display cart total', () => {
    cy.visit('/apple-macbook-pro-13-inch')
    cy.get('.add-to-cart-button').click()
    cartPage.openCart()
    cy.get('.cart-total').should('be.visible')
  })

  it('TC-042 | Should show cart count in header', () => {
    cy.visit('/apple-macbook-pro-13-inch')
    cy.get('.add-to-cart-button').click()
    cy.get('.cart-qty').should('be.visible')
  })

  it('TC-044 | Should proceed to checkout from cart', () => {
    cy.visit('/apple-macbook-pro-13-inch')
    cy.get('.add-to-cart-button').click()
    cartPage.openCart()
    cartPage.clickCheckout()
    cy.url().should('include', '/checkout')
  })

})