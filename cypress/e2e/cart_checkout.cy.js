import CartPage from '../pages/CartPage';
import CheckoutPage from '../pages/CheckoutPage';

describe('Cart → Checkout Flow', () => {
  it('should proceed from cart to checkout and complete the order', () => {
    // Step 1: Visit Cart
    CartPage.visit();

    // Step 2: Proceed to Buy
    CartPage.proceedToBuy();

    // Step 3: Fill Address
    CheckoutPage.addNewAddress({
      houseNo: '123',
      road: 'MG Road',
      pincode: '414001'
    });

    // Step 4: Fill Contact
    CheckoutPage.fillContactDetails({
      name: 'Nikhil Damale',
      phone: '9876543210',
      email: 'nikhil@example.com'
    });

    // Step 5: Ship to this Address
    CheckoutPage.shipToAddress();

    // Step 6: Load payment page manually (demo site does not auto-navigate)
    cy.visit('https://glistening-gingersnap-7dec72.netlify.app/payment.html');

    // Step 7: Fill Payment
    CheckoutPage.fillPaymentDetails({
      cardNumber: '4111111111111111',
      expiry: '12/26',
      cvv: '123'
    });

    // Step 8: Pay Now
    CheckoutPage.payNow();
  });
});
