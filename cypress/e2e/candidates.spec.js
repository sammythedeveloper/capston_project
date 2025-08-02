import CandidatePage from "../pages/candidatePage";
import LoginPage from "../pages/loginPage";
import candidateData from "../fixtures/candidateData.json";

describe("Recruitment Module - Candidates", () => {
  before(() => {
    cy.log("Running once before all candidate tests");
    cy.visit('/web/index.php/auth/login');
    cy.get('input[name="username"]').type('Admin');
    cy.get('input[name="password"]').type('admin123');
    cy.get('button[type="submit"]').click();
    cy.get(':nth-child(5) > .oxd-main-menu-item > .oxd-text').click(); // Go to Candidates page
  });

  it('should add a new candidate successfully', () => {
    cy.get('.orangehrm-header-container > .oxd-button').click();
    cy.get('input[name="firstName"]').type('John');
    cy.get('input[name="lastName"]').type('Doe');
    cy.get('input[placeholder="Type here"]').type('john.doe@example.com');
    // Add any required submit button here if needed
  });

  candidateData.forEach((candidate) => {
    it(`Add candidate: ${candidate.firstName} ${candidate.lastName}`, () => {
      CandidatePage.addCandidate(candidate);
      if (candidate.valid) {
        cy.contains("Successfully Saved").should("be.visible");
      } else {
        cy.contains("Required").should("be.visible");
      }
    });
  });

  after(() => {
    cy.log("All candidate tests finished.");
    // Optional: Logout
    cy.get('.oxd-userdropdown-tab').click(); // Open profile dropdown
    cy.contains('Logout').click(); // Click logout
  });

  afterEach(function () {
    if (this.currentTest.state === "failed") {
      const testName = this.currentTest.title;
      cy.screenshot(`failed-candidate-${testName}`);
    }
  });
});
