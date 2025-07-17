import ProductPage from '../pages/ProductPage';

describe('Verify details of Fjallraven product', () => {
  before(() => {
    ProductPage.visit();
  });

  it('Checks title, price, and rating of Fjallraven product', () => {
    ProductPage.verifySpecificProductDetails(
      'Fjallraven - Foldsack No. 1 Handbag, Fits 15',
      '$109.95',
      'Rating: 3.9'
    );
  });
});
