const { defineConfig } = require("cypress");

// module.exports = defineConfig({
//   allowCypressEnv: false,

//   e2e: {
//     setupNodeEvents(on, config) {
//       // implement node event listeners here
//     },
//   },
// });

module.exports = defineConfig({
  e2e: {
    baseUrl: "https://demo.nopcommerce.com",
    viewportWidth: 1280,
    viewportHeight: 720,
    video: false,
    screenshotOnRunFailure: true,
    chromeWebSecurity: false,
    defaultCommandTimeout: 30000,
    pageLoadTimeout: 60000,
    setupNodeEvents(on, config) {},
  },
});