describe('Add Candidate', () => {
    beforeEach(() => {
      cy.login();
      cy.get(':nth-child(5) > .oxd-main-menu-item > .oxd-text').click(); // Go to Candidates
    });
  
    it('should add a new candidate with all mandatory fields', () => {
      cy.get('.orangehrm-header-container > .oxd-button').click(); // Click Add
  
      cy.get('input[placeholder="First Name"]').type('John');
      cy.get('input[placeholder="Last Name"]').type('Doe');
     
  
      // Select Vacancy dropdown
      cy.get('.oxd-select-text').first().click(); 
      cy.get('.oxd-select-dropdown > :nth-child(2)').click(); // Adjust index or use contains()
      cy.get(':nth-child(3) > .oxd-grid-3 > :nth-child(1) > .oxd-input-group > :nth-child(2) > .oxd-input').type('john.doe@example.com');
      // Check consent
      cy.get('.oxd-checkbox-input > .oxd-icon').click();
  
      // Click Save
      cy.get('.oxd-button--secondary').click();
  
      // Assert success (optional: check toast or presence in list)
      cy.contains('Successfully Saved').should('exist');
    });
  });
  