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
    loginData.forEach((data) => {
        it(`Login attempt with ${data.username}`, () => {
          LoginPage.login(data.username, data.password);
        });
      });
})