describe('Product Page Module', () => {

  beforeEach(() => {
    cy.visit('/apple-macbook-pro-13-inch')
  })

  it('TC-029 | Should display all product details', () => {
    cy.get('.product-name').should('be.visible')
    cy.get('.product-price').should('be.visible')
    cy.get('.full-description').should('be.visible')
  })

  it('TC-032 | Should add product to wishlist', () => {
    cy.visit('/login')
    cy.get('#Email').type('demo@nopcommerce.com')
    cy.get('#Password').type('demo@123')
    cy.get('.login-button').click()
    cy.visit('/apple-macbook-pro-13-inch')
    cy.get('.add-to-wishlist-button').click()
    cy.get('.bar-notification').should('be.visible')
  })

  it('TC-034 | Should display product reviews section', () => {
    cy.get('.product-reviews-overview').should('be.visible')
  })

})