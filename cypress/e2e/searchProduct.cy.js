import SearchProduct from '../pages/SearchProduct';

describe('Product Listing Page - Handbag Check', () => {
  it('Should display "Handbag Purse" and "Womens Makeup Box', () => {
    SearchProduct.visit();
    SearchProduct.verifyHandbagPurseVisible();
  });
});
