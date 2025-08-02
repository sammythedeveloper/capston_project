class LoginPage {
  visit() {
    cy.visit('/web/index.php/auth/login');
  };
  elements = {
    username: () => cy.get('input[name="username"]'),
    password: () => cy.get('input[name="password"]'),
    loginBtn: () => cy.get('button[type="submit"]'),
    errorMsg: () => cy.get('.oxd-alert-content-text') // adjust if needed
  };

  login(username, password) {
    this.elements.username().type(username);
    this.elements.password().type(password);
    this.elements.loginBtn().click();
  }
}

export default new LoginPage();
