import loginData from './loginData.json';

loginData.forEach((data) => {
  it(`Login test with ${data.valid ? 'valid' : 'invalid'} credentials`, () => {
    loginPage.fillUsername(data.username);
    loginPage.fillPassword(data.password);
    loginPage.clickLogin();

    if (data.valid) {
      cy.url().should('include', '/dashboard');
    } else {
      loginPage.getErrorMessage().should('contain', 'Invalid credentials');
    }
  });
});
