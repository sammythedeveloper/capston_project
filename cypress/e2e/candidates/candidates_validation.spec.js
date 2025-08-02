describe("Recruitment Module - Candidate Validation", () => {
  beforeEach(() => {
    cy.login(); // your login command
    cy.visit("/web/index.php/recruitment/viewCandidates"); // candidate list page
    cy.get(".orangehrm-header-container > .oxd-button").contains("Add").click(); // click Add candidate button
  });

  it("should show error messages when mandatory fields are empty", () => {
    // Click Save without filling any mandatory field
    cy.get(".oxd-button--secondary").contains("Save").click();

    // Assert error messages for mandatory fields (adjust selectors/text as needed)
    cy.contains("Required").should("be.visible"); // generic check for error message
  });
});
