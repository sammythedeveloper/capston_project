class CandidatePage {
  static visit() {
    cy.visit('/web/index.php/recruitment/viewCandidates');
  }

  static addCandidate(candidate) {
    cy.get('.oxd-button').click();
    cy.get('input[name="firstName"]').type(candidate.firstName);
    cy.get('input[name="lastName"]').type(candidate.lastName);
    cy.get('input[type="file"]').selectFile(candidate.resumePath); // if applicable

    // Submit
    cy.get('button').contains('Save').click();
  }
}

export default CandidatePage;
