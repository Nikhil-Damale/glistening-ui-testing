class CartPage {
  visit() {
    cy.visit('https://glistening-gingersnap-7dec72.netlify.app/cart');
  }

  proceedToBuy() {
    cy.get('button.right-top-button').click(); 
  }
}

export default new CartPage();
