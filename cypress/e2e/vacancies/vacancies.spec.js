import VacanciesPage from '../pages/vacancyPage';
import LoginPage from '../pages/candidatePage';
import vacancyData from '../fixtures/vacancyData.json';


describe('Recruitment Module - Vacancies', () => {

  before(() => {
    cy.log('Running once before all vacancy tests');
  });

  beforeEach(() => {
    cy.visit('/web/index.php/auth/login');
    cy.get('input[name="username"]').type('Admin');
    cy.get('input[name="password"]').type('admin123');
    cy.get('button[type="submit"]').click();
  });
  

  after(() => {
    cy.log('All vacancy tests finished.');
  });

  afterEach(function () {
    if (this.currentTest.state === 'failed') {
      const testName = this.currentTest.title;
      cy.screenshot(`failed-vacancy-${testName}`);
    }
  });

  vacancyData.forEach((vacancy) => {
    it(`Add vacancy: ${vacancy.jobTitle} - ${vacancy.vacancyName}`, () => {
      VacanciesPage.addVacancy(vacancy);
      if (vacancy.valid) {
        cy.contains('Successfully Saved').should('be.visible');
      } else {
        cy.contains('Required').should('be.visible');
      }
    });
  });

});


