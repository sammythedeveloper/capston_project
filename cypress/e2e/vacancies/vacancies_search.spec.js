describe("Search Vacancies", () => {
  beforeEach(() => {
    cy.login();
    cy.visit("/web/index.php/recruitment/viewJobVacancy");
  });

  it("searches by Job Title, Hiring Manager, and Vacancy", () => {
    // Select Job Title
    cy.get(".oxd-select-text").eq(0).click();
    cy.get(".oxd-select-dropdown").contains("Software Engineer").click();

    // Select Vacancy
    cy.get(".oxd-select-text").eq(1).click();
    cy.get(".oxd-select-dropdown").contains("Software Developer 555").click();
    // Select Hiring Manager
    cy.get(".oxd-select-text").eq(2).click();
    cy.get(".oxd-select-dropdown").contains("Peter Anderson").click();

    // Click Search
    cy.get(".oxd-form-actions > .oxd-button--secondary").click();

    // Assert that results container appears or results match filter
    cy.get(".orangehrm-container").should("exist");
  });
});
