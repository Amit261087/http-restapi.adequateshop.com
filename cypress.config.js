const { defineConfig } = require("cypress");

module.exports = defineConfig({
  projectId: '5o6v5t',
  e2e: {
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
  },
});
