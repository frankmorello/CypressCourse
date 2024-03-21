const { defineConfig } = require("cypress");

module.exports = defineConfig({
  e2e: {
    reporter:"mochawesome",
    "reporterOptions":{
     "charts":true,
     "overwrite":true,
     "html":true,
     "json":true,
     "reportDir":"cypress/report"
    },
    "baseUrl" : "https://saucedemo.com/v1/",
    "testIsolation" : false, // this should be set to false so it can handle multiple tests 
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
  },
});
