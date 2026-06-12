describe('Search Module', () => {

  beforeEach(() => {
    cy.visit('/')
  })

  it('TC-021 | Should display results for valid search', () => {
    cy.get('#small-searchterms').type('laptop')
    cy.get('.search-box-button').click()
    cy.get('.product-item').should('have.length.at.least', 1)
  })

  it('TC-023 | Should show no results for invalid search', () => {
    cy.get('#small-searchterms').type('xyzabc123notexist')
    cy.get('.search-box-button').click()
    cy.get('.no-result').should('exist')
  })

  it('TC-024 | Should handle empty search gracefully', () => {
    cy.get('.search-box-button').click()
    cy.url().should('include', '/search')
    cy.get('body').should('be.visible')
  })

  it('TC-025 | Should handle special characters without crashing', () => {
    cy.get('#small-searchterms').type('@@##!!')
    cy.get('.search-box-button').click()
    cy.get('body').should('not.be.empty')
  })

  it('TC-028 | Should be case insensitive', () => {
    cy.get('#small-searchterms').type('Laptop')
    cy.get('.search-box-button').click()
    cy.get('.product-item').should('have.length.at.least', 1)
  })

})