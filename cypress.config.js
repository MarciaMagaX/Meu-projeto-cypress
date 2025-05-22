const { defineConfig } = require("cypress");
require('dotenv').config(); // Carrega variáveis do .env

module.exports = defineConfig({  
  e2e: {
    baseUrl: "https://www.saucedemo.com",
    setupNodeEvents(on, config) {
      config.env.email = process.env.CYPRESS_EMAIL;
      config.env.password = process.env.CYPRESS_PASSWORD;
      return config;
    },
  },
});
