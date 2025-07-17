class SearchProduct {
  visit() {
    cy.visit('https://glistening-gingersnap-7dec72.netlify.app/product');
  }

  verifyHandbagPurseVisible() {
    cy.contains('handbag Purse').should('be.visible');
  }

  verifyWomensMakeupBoxVisible() {
    cy.contains('Womens Makeup Box').should('be.visible');
  }
}

export default new SearchProduct();
