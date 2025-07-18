class CheckoutPage {
  addNewAddress(address) {
    cy.get('#pin').type(address.pincode);
    cy.get('#house').type(address.houseNo);
    cy.get('#area').type(address.road);
  }

  fillContactDetails(contact) {
    cy.get('#name').type(contact.name);
    cy.get('#number').type(contact.phone);
    cy.get('#email').type(contact.email);
  }

  shipToAddress() {
    cy.get('#ship_address').click();
  }

  fillPaymentDetails(payment) {
    cy.get('#card-number').type(payment.cardNumber);
    cy.get('#card-expiry').type(payment.expiry);
    cy.get('#cvv').type(payment.cvv);
  }

  payNow() {
    cy.get('button.paynow').click();
  }

  verifyPaymentSuccess() {
    cy.contains('Thank you for your order').should('exist');
  }
}

export default new CheckoutPage();
