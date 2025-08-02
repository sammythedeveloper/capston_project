describe('Login Module - Field Validation', () => {
  beforeEach(() => {
    cy.visit('/web/index.php/auth/login');
  });

  it('should show error messages when fields are empty', () => {
    cy.get('button[type="submit"]').click();

    // Check for error messages for empty fields (adjust selectors/text)
    cy.contains('Required').should('be.visible');
  });

  it('should show error for invalid input formats', () => {
    cy.get('input[name="username"]').type('!@#$%^&*()');
    cy.get('input[name="password"]').type('a'.repeat(51)); // example overly long password
    cy.get('button[type="submit"]').click();

    // Adjust these to your app’s actual validation messages
    cy.contains('Invalid credentials').should('be.visible');
  });
});

