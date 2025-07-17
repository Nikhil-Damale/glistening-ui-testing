class HomePage {
  verifyHeaderVisible() {
    cy.get('.top_header').should('be.visible');
  }

  verifyTopHeaderOffer() {
    cy.get('.top_header .Offers')
      .should('be.visible')
      .and('contain.text', 'Festive Deals Await!');
  }

  verifyTopHeaderFeatures() {
    cy.get('.top_header_feature div').should('have.length', 4);
    cy.get('.top_header_feature div').eq(0).should('contain.text', 'Get App');
    cy.get('.top_header_feature div').eq(1).should('contain.text', 'Store & Events');
    cy.get('.top_header_feature div').eq(2).should('contain.text', 'Gift Card');
    cy.get('.top_header_feature div').eq(3).should('contain.text', 'Help');
  }


  verifyLogoVisible() {
    cy.get('img[alt="Nykaa Logo"]').should('be.visible');
  }


  verifyFooterLinkText() {
    cy.get('.bottom_footer .left a').eq(0).should('have.text', 'Terms & Conditions');
    cy.get('.bottom_footer .left a').eq(1).should('have.text', 'Shipping Policy');
    cy.get('.bottom_footer .left a').eq(2).should('have.text', 'Cancellation Policy');
    cy.get('.bottom_footer .left a').eq(3).should('have.text', 'Privacy Policy');
  }
  verifySearchBarVisible() {
    cy.get('input[type="text"]').should('be.visible');
  }
}

export default new HomePage();
