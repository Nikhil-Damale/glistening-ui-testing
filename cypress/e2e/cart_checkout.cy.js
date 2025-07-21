import CartPage from '../pages/CartPage';
import CheckoutPage from '../pages/CheckoutPage';

describe('Cart → Checkout Flow', () => {
  it('should proceed from cart to checkout and complete the order', () => {
    // Visit Cart
    CartPage.visit();

    //Proceed to Buy
    CartPage.proceedToBuy();

    //  Fill Address
    CheckoutPage.addNewAddress({
      houseNo: '123',
      road: 'MG Road',
      pincode: '414001'
    });

    // Fill Contact
    CheckoutPage.fillContactDetails({
      name: 'Nikhil Damale',
      phone: '9876543210',
      email: 'nikhil@example.com'
    });

    // Ship to this Address
    CheckoutPage.shipToAddress();

    // Step 6: Load payment page manually (demo site does not auto-navigate)
    cy.visit('https://glistening-gingersnap-7dec72.netlify.app/payment.html');

    // Fill Payment
    CheckoutPage.fillPaymentDetails({
      cardNumber: '4111111111111111',
      expiry: '12/26',
      cvv: '123'
    });

    // Pay Now
    CheckoutPage.payNow();
  });
});
