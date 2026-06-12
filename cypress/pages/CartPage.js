class CartPage {
  openCart() {
    cy.visit('/cart')
  }
  removeFirstItem() {
    cy.get('.remove-btn').first().click()
  }
  clickCheckout() {
    cy.get('#checkout').click()
  }
  getCartItems() {
    return cy.get('.cart-item-row')
  }
  getEmptyMessage() {
    return cy.get('.order-summary-content')
  }
}
module.exports = CartPage