describe('Recruitment Module - Candidate Search', () => {
    beforeEach(() => {
      cy.login(); // Assuming you have a custom login command
      cy.visit('/web/index.php/recruitment/viewCandidates');
    });
  
    it('searches candidates by selecting options from dropdowns', () => {
      // Job Title dropdown - click dropdown, select first non "-- Select --" option
      cy.get('.oxd-select-text').eq(0).click();
      cy.get('div[role="listbox"] > *')
        .not(':contains("-- Select --")')
        .first()
        .click();
  
      // Vacancy dropdown - click dropdown, select first non "-- Select --" option
      cy.get('.oxd-select-text').eq(1).click();
      cy.get('div[role="listbox"] > *')
        .not(':contains("-- Select --")')
        .first()
        .click();
  
      // Hiring Manager dropdown - click dropdown, select first non "-- Select --" option
      cy.get('.oxd-select-text').eq(2).click();
      cy.get('div[role="listbox"] > *')
        .not(':contains("-- Select --")')
        .first()
        .click();
  
      // Click the Search button
      cy.get('.oxd-form-actions > .oxd-button--secondary').click();
  
      // Assert results container appears (adjust selector as needed)
      cy.get('.orangehrm-container').should('exist');
    });
  });
  