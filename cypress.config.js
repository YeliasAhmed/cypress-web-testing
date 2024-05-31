const { defineConfig } = require("cypress");


module.exports = defineConfig({
  e2e: {

    baseUrl: 'https://opensource-demo.orangehrmlive.com/web',
    setupNodeEvents(on, config) {
      specPattern: "cypress/e2e/test/test-specs//**/**//*.js"
    },
  },
});
