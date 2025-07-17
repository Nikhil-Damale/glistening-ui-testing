class SignupPage {
  visit() {
    cy.visit('https://glistening-gingersnap-7dec72.netlify.app/login.html');
  }

  fillSignupForm(name, email, password) {
    cy.get('#signup-name').type(name);
    cy.get('#signup-email').type(email);
    cy.get('#signup-password').type(password);
  }

  submitSignup() {
    cy.get('#signup-submit').click();
  }
}

export default new SignupPage();
