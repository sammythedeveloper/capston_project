const { defineConfig } = require('cypress');
const mochawesome = require('cypress-mochawesome-reporter/plugin');

module.exports = defineConfig({
  e2e: {
    baseUrl: 'https://opensource-demo.orangehrmlive.com',
    retries: {
      runMode: 2,
      openMode: 1,
    },
    specPattern: 'cypress/e2e/**/*.spec.{js,jsx,ts,tsx}',
    supportFile: 'cypress/support/e2e.js',

    setupNodeEvents(on, config) {
      // 👇 Fix: Call both beforeRunHook and afterRunHook
      const { beforeRunHook, afterRunHook } = require('cypress-mochawesome-reporter/lib');
      
      on('before:run', async (details) => {
        await beforeRunHook(details, {
          config,
          reporterOptions: config.reporterOptions,
        });
      });

      on('after:run', async () => {
        await afterRunHook();
      });

      // Still register the plugin for test logging
      mochawesome(on);

      return config;
    },
  },

  reporter: 'cypress-mochawesome-reporter',
  reporterOptions: {
    reportDir: 'cypress/reports',
    overwrite: false,
    html: true,
    json: true,
    timestamp: 'mmddyyyy_HHMMss',
  },
});
