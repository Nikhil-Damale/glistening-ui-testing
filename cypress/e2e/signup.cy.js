import SignupPage from '../pages/SignupPage';
import LoginPage from '../pages/LoginPage';

describe('Signup and Login Flow', () => {
  it('should sign up, log in, and land on homepage', () => {
    // Step 1: Signup
    SignupPage.visit();
    SignupPage.fillSignupForm('Rani', 'rani123@gmail.com', 'rani@123');
    SignupPage.submitSignup();

    // Step 2: Login after signup
    LoginPage.fillLoginForm('rani123@gmail.com', 'rani@123');
    LoginPage.submitLogin();

    // Step 3: Validate redirect to homepage
    cy.url({ timeout: 10000 }).should('eq', 'https://glistening-gingersnap-7dec72.netlify.app/#');
  });
});
