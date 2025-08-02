const { defineConfig } = require('cypress');

module.exports = defineConfig({
  e2e: {
    baseUrl: 'https://opensource-demo.orangehrmlive.com', // or your local OrangeHRM URL
    retries: {
      runMode: 2,
      openMode: 1,
    },
    setupNodeEvents(on, config) {
      // Add Mochawesome reporter
      require('cypress-mochawesome-reporter/plugin')(on);

      // Optional: log environment values or config
      on('before:run', (details) => {
        console.log('Running tests with config:', config);
      });

      return config;
    },
    specPattern: 'cypress/e2e/**/*.spec.{js,jsx,ts,tsx}', // Adjust if needed
    supportFile: 'cypress/support/e2e.js',
  },

  reporter: 'cypress-mochawesome-reporter',
  reporterOptions: {
    reportDir: 'cypress/reports',
    overwrite: false,
    html: false,
    json: true,
    timestamp: 'mmddyyyy_HHMMss',
  },
});
