describe("Vacancies Module - Mandatory Field Validation", () => {
    beforeEach(() => {
      cy.login();
      cy.visit("/web/index.php/recruitment/viewJobVacancy");
    });
  
    it("should show validation errors when mandatory fields are empty", () => {
      cy.get(".orangehrm-header-container > .oxd-button").click(); // Click "Add"
  
      // Click Save without filling any fields
      cy.get('.oxd-button--secondary').click();
  
      cy.get(':nth-child(1) > :nth-child(1) > .oxd-input-group > .oxd-text')
        .should('contain.text', 'Required');
  
        cy.get(':nth-child(3) > :nth-child(1) > .oxd-input-group > .oxd-text')
        .should('exist');
  
      // Or assert specific messages for Job Title, Vacancy, Hiring Manager fields
      cy.contains('Required').should('be.visible');
    });
  });
  