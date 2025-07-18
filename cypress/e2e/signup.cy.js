import SignupPage from '../pages/SignupPage';
import LoginPage from '../pages/LoginPage';

describe('Signup and Login Flow', () => {
  it('should sign up, log in, and land on homepage', () => {
    //  Signup
    SignupPage.visit();
    SignupPage.fillSignupForm('Rani', 'rani123@gmail.com', 'rani@123');
    SignupPage.submitSignup();

    // Login after signup
    LoginPage.fillLoginForm('rani123@gmail.com', 'rani@123');
    LoginPage.submitLogin();

    // Validate redirect to homepage
    cy.url({ timeout: 10000 }).should('eq', 'https://glistening-gingersnap-7dec72.netlify.app/#');
  });
});
