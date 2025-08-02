class VacanciesPage {
  elements = {
    addBtn: () => cy.get('.oxd-button--secondary'), // Adjust as needed
    jobTitle: () => cy.get('.oxd-select-text-input'),
    vacancyName: () => cy.get('input[name="vacancyName"]'),
    hiringManager: () => cy.get('input[placeholder="Type for hints..."]'),
    saveBtn: () => cy.get('button[type="submit"]'),
  };

  fillVacancyForm({ jobTitle, vacancyName, hiringManager }) {
    this.elements.jobTitle().click().type(jobTitle).type('{enter}');
    this.elements.vacancyName().type(vacancyName);
    this.elements.hiringManager().type(hiringManager).type('{enter}');
    this.elements.saveBtn().click();
  }
}

export default new VacanciesPage();
