import VacanciesPage from '../pages/vacancyPage';
import LoginPage from '../pages/candidatePage';
import vacancyData from '../fixtures/vacancyData.json';

describe('Vacancies Module Tests', () => {
  
  before(() => {
    LoginPage.visit();
    LoginPage.login("Admin", "admin123");
  });

  beforeEach(() => {
    VacanciesPage.navigateTo();
  });

  after(() => {
    cy.log('All vacancy tests completed.');
  });

  afterEach(function () {
    if (this.currentTest.state === 'failed') {
      cy.screenshot(`failed-vacancies-${this.currentTest.title}`);
    }
  });

  it('Add new vacancy', () => {
    VacanciesPage.addVacancy(vacancyData[0]);
    cy.contains('Vacancy added successfully').should('exist');
  });

  it('Search vacancy by job title', () => {
    VacanciesPage.searchVacancy(vacancyData[0].jobTitle);
    cy.contains(vacancyData[0].vacancyName).should('be.visible');
  });

});

