class VacanciesPage {
  navigateTo() {
    cy.get(':nth-child(1) > .oxd-main-menu-item').click(); // Recruitment
    cy.contains('Vacancies').click();
  }

  addVacancy(vacancy) {
    cy.contains('Add').click();
    cy.get('.oxd-select-text-input').eq(0).click().type(`${vacancy.jobTitle}{enter}`);
    cy.get('input[placeholder="Type vacancy name"]').type(vacancy.vacancyName);
    cy.get('.oxd-select-text-input').eq(1).click().type(`${vacancy.hiringManager}{enter}`);
    cy.get('input[type="number"]').type(vacancy.positions);
    cy.contains('Save').click();
  }

  searchVacancy(jobTitle) {
    cy.get('.oxd-select-text-input').eq(0).click().type(`${jobTitle}{enter}`);
    cy.contains('Search').click();
  }
}

export default new VacanciesPage();
