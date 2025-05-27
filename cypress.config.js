// const { defineConfig } = require("cypress");
// require('dotenv').config(); // Carrega variáveis do .env

// module.exports = defineConfig({  
//   e2e: {
//     baseUrl: "https://www.saucedemo.com",
//     setupNodeEvents(on, config) {
//       config.env.email = process.env.CYPRESS_EMAIL;
//       config.env.password = process.env.CYPRESS_PASSWORD;
//       return config;
//     },
//   },
// });

const { defineConfig } = require("cypress");
require('dotenv').config(); // Carrega variáveis do .env

module.exports = defineConfig({
  reporter: 'cypress-mochawesome-reporter',
  reporterOptions: {
    reportDir: 'reports/mochawesome-report',
    overwrite: false,
    html: false,
    json: true
  },
  e2e: {
    baseUrl: "https://www.saucedemo.com",
    setupNodeEvents(on, config) {
      // Mochawesome Reporter
      require('cypress-mochawesome-reporter/plugin')(on);

      // Variáveis de ambiente .env
      config.env.email = process.env.CYPRESS_EMAIL;
      config.env.password = process.env.CYPRESS_PASSWORD;

      return config;
    },
  },
});
