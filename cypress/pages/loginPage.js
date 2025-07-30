class LoginPage {
  visit() {
    cy.visit("https://opensource-demo.orangehrmlive.com/web/index.php/auth/login");
    cy.url().should('include', '/auth/login');
  }

  fillUsername(username) {
    cy.get('input[name="username"]', { timeout: 10000 })  
      .should('be.visible')                              
      .type(username);
  }

  fillPassword(password) {
    cy.get('input[name="password"]').should('be.visible').type(password);
  }

  clickLogin() {
    cy.get('button[type="submit"]').click();
  }
  getErrorMessage() {
    return cy.get('.oxd-alert-content-text'); // adjust selector as needed
  }
}

export default new LoginPage(); 
