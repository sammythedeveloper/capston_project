import loginData from '../../fixtures/loginData.json';

describe('Login Module - Valid Login', () => {
  beforeEach(() => {
    cy.visit('/web/index.php/auth/login');
  });

  loginData.filter(d => d.valid).forEach(data => {
    it(`should login successfully with username: ${data.username}`, () => {
      cy.get('input[name="username"]').type(data.username);
      cy.get('input[name="password"]').type(data.password);
      cy.get('button[type="submit"]').click();

      cy.url().should('include', '/dashboard');
    });
  });
});

  