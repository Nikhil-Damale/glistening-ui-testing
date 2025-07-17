import HomePage from '../pages/Homepage';

describe('Homepage UI Tests - POM Based', () => {
  beforeEach(() => {
    cy.visit('https://glistening-gingersnap-7dec72.netlify.app/');
  });

  it('Should display header section', () => {
    HomePage.verifyHeaderVisible();
  });

  it('Should display top header offer text', () => {
    HomePage.verifyTopHeaderOffer();
  });

  it('Should display top header features', () => {
    HomePage.verifyTopHeaderFeatures();
  });

  it('Should display Nykaa logo', () => {
    HomePage.verifyLogoVisible();
  });

  it('Should display footer links', () => {
    HomePage.verifyFooterLinkText(); 
  });

  it('Should display search bar', () => {
    HomePage.verifySearchBarVisible();
  });
});
