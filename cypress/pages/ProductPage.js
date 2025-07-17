class ProductPage {
  visit() {
    cy.visit('https://glistening-gingersnap-7dec72.netlify.app/product');
  }

  verifySpecificProductDetails(title, expectedPrice, expectedRating) {
    cy.contains('h4', title).should('be.visible').then(($title) => {
      // Get parent card
      const card = $title.parents('#product-card');

      // Title
      cy.wrap(card).find('h4').should('contain.text', title);

      // Price
      cy.wrap(card).find('p').first().should('contain.text', expectedPrice);

      // Rating
      cy.wrap(card).find('p').eq(1).should('contain.text', expectedRating);
    });
  }
}

export default new ProductPage();
