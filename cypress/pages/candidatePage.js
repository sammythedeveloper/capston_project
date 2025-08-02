class CandidatesPage {
    navigateTo() {
      cy.get(':nth-child(1) > .oxd-main-menu-item').click(); // Recruitment
      cy.contains('Candidates').click();
    }
  
    addCandidate(candidate) {
      cy.contains('Add').click();
      cy.get('input[name="firstName"]').type(candidate.firstName);
      cy.get('input[name="middleName"]').type(candidate.middleName);
      cy.get('input[name="lastName"]').type(candidate.lastName);
      cy.get('input[type="email"]').type(candidate.email);
      cy.contains('Save').click();
    }
  
    searchByJobTitle(jobTitle) {
      cy.get('.oxd-select-text-input').eq(0).click().type(`${jobTitle}{enter}`);
      cy.contains('Search').click();
    }
  }
  
  export default new CandidatesPage();
  