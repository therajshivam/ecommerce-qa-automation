describe('Network Intercept Module', () => {

  beforeEach(() => {
    cy.visit('/login')
    cy.get('#Email').type('demo@nopcommerce.com')
    cy.get('#Password').type('demo@123')
    cy.get('.login-button').click()
  })

  it('NET-001 | Should intercept add to cart POST request', () => {
    cy.intercept('POST', '**/addproducttocart/**').as('addToCart')
    cy.visit('/apple-macbook-pro-13-inch')
    cy.get('.add-to-cart-button').click()
    cy.wait('@addToCart')
    cy.get('@addToCart').its('response.statusCode').should('eq', 200)
  })

  it('NET-002 | Should validate 200 response on add to cart', () => {
    cy.intercept('POST', '**/addproducttocart/**').as('cartRequest')
    cy.visit('/apple-macbook-pro-13-inch')
    cy.get('.add-to-cart-button').click()
    cy.wait('@cartRequest').then((interception) => {
      expect(interception.response.statusCode).to.eq(200)
    })
  })

  it('NET-003 | Should handle stubbed 500 error gracefully', () => {
    cy.intercept('POST', '**/addproducttocart/**', {
      statusCode: 500,
      body: { error: 'Internal Server Error' }
    }).as('failedCart')
    cy.visit('/apple-macbook-pro-13-inch')
    cy.get('.add-to-cart-button').click()
    cy.wait('@failedCart')
    cy.get('body').should('be.visible')
  })

  it('NET-004 | Should intercept search GET request', () => {
    cy.intercept('GET', '**/search**').as('searchRequest')
    cy.visit('/search?q=laptop')
    cy.wait('@searchRequest')
    cy.get('@searchRequest').its('response.statusCode').should('eq', 200)
  })

  it('NET-005 | Should validate page loads after search', () => {
    cy.intercept('GET', '**/search**').as('searchResponse')
    cy.visit('/search?q=laptop')
    cy.wait('@searchResponse')
    cy.get('body').should('be.visible')
  })

})