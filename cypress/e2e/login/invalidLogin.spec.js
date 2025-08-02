import loginData from '../../fixtures/loginData.json';

describe('Login Module - Invalid Login', () => {
  beforeEach(() => {
    cy.visit('/web/index.php/auth/login');
  });

  loginData.filter(d => !d.valid).forEach(data => {
    it(`should show error for invalid login with username: ${data.username}`, () => {
      cy.get('input[name="username"]').type(data.username);
      cy.get('input[name="password"]').type(data.password);
      cy.get('button[type="submit"]').click();

      cy.contains('Invalid credentials').should('be.visible');
      cy.url().should('include', '/auth/login');
    });
  });
});

  