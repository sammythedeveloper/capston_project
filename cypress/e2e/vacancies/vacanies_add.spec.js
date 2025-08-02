describe("Vacancies Module - Add New Vacancy", () => {
    const jobTitles = [
      "Senior Developer",
      "Lead Engineer",
      "Software Developer",
      "Backend Specialist",
      "Frontend Architect",
      "Cloud Engineer",
      "QA Analyst",
      "DevOps Lead",
      "Full Stack Developer"
    ];
  
    const randomTitle =
      jobTitles[Math.floor(Math.random() * jobTitles.length)] + " " + Math.floor(Math.random() * 1000);
  
    beforeEach(() => {
      cy.login();
      cy.visit("/web/index.php/recruitment/viewJobVacancy");
    });
  
    it("should add a new vacancy successfully", () => {
      cy.get(".orangehrm-header-container > .oxd-button").click(); // Click "Add"
  
      // Type random vacancy name
      cy.get(
        ".oxd-form > :nth-child(1) > :nth-child(1) > .oxd-input-group > :nth-child(2) > .oxd-input"
      ).type(randomTitle);
  
      // Select job title
      cy.get(".oxd-select-text").eq(0).click();
      cy.get(".oxd-select-dropdown").contains("Software Engineer").click();
  
      // Set Hiring Manager
      cy.get('.oxd-autocomplete-text-input > input').type("Peter Mac Anderson");
      cy.get(".oxd-autocomplete-dropdown > *").contains("Peter Mac Anderson").click();
  
      // Submit form
      cy.get('.oxd-button--secondary').click();
  
      // Optional: confirm success message
      // cy.contains("Successfully Saved").should("be.visible");
    });
  });
  