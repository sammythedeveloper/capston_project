import LoginPage from '../pages/loginPage';
import loginData from '../fixtures/loginData.json';

describe('Login Module Tests', () => {
  
  before(() => {
    cy.log('Running once before all tests');
    // Example: could load additional test data here
  });

  beforeEach(() => {
    LoginPage.visit(); // Visit login page before each test
  });

  after(() => {
    cy.log('All login tests finished.');
    // Example: remove temp data, send logs to server, etc.
  });

  afterEach(function () {
    if (this.currentTest.state === 'failed') {
      const testName = this.currentTest.title;
      cy.screenshot(`failed-${testName}`);
    }
  });

  loginData.forEach((data) => {
    it(`Login attempt with ${data.username}`, () => {
      LoginPage.login(data.username, data.password);
      if (data.valid) {
        cy.url().should('include', '/dashboard');
      } else {
        cy.contains('Invalid credentials').should('be.visible');
      }
    });
  });

});

