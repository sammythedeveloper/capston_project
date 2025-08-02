import LoginPage from '../pages/loginPage';
import loginData from '../fixtures/loginData.json';

describe('Login Module Tests', () => {
  
  before(() => {
    cy.log('Running once before all tests');
  });

  beforeEach(() => {
    LoginPage.visit(); 
  });

  after(() => {
    cy.log('All login tests finished.');
  });

  afterEach(function () {
    if (this.currentTest.state === 'failed') {
      const testName = this.currentTest.title;
      cy.screenshot(`login/${testName}`, { capture: 'runner' });
    }
  });

  loginData.forEach((data) => {
    it(`Login attempt with username: ${data.username}`, () => {
      LoginPage.login(data.username, data.password);
      if (data.valid) {
        cy.url().should('include', '/dashboard');
      } else {
        cy.contains('Invalid credentials').should('be.visible');
      }
    });
  });

});
