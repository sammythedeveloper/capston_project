import CandidatesPage from '../pages/candidatePage';
import LoginPage from '../pages/loginPage';
import candidateData from '../fixtures/candidateData.json';

describe('Candidates Module Tests', () => {
  
  before(() => {
    LoginPage.visit();
    LoginPage.login("Admin", "admin123");
  });

  beforeEach(() => {
    CandidatesPage.navigateTo();
  });

  after(() => {
    cy.log('All candidate tests completed.');
  });

  afterEach(function () {
    if (this.currentTest.state === 'failed') {
      cy.screenshot(`failed-candidates-${this.currentTest.title}`);
    }
  });

  it('Add new candidate', () => {
    CandidatesPage.addCandidate(candidateData[0]);
    cy.contains('Candidate added successfully').should('exist');
  });

  it('Search candidate by job title', () => {
    CandidatesPage.searchByJobTitle(candidateData[0].jobTitle);
    cy.contains(candidateData[0].firstName).should('be.visible');
  });

});

