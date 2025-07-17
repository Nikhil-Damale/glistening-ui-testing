class LoginPage {
  fillLoginForm(email, password) {
    cy.get('#login-email').type(email);
    cy.get('#login-password').type(password);
  }

  submitLogin() {
    cy.get('#login-submit').click();
  }
}

export default new LoginPage();
