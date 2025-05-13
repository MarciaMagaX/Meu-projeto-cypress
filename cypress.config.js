const { defineConfig } = require("cypress");
require('dotenv').config(); // Carrega variáveis do .env

module.exports = defineConfig({
  reporter: "mochawesome", // Define o reporter
  reporterOptions: {
    reportDir: "cypress/reports/mochawesome", // Pasta onde salva os relatórios
    reportFilename: "report-[datetime]",       // Nome do arquivo com data/hora
    overwrite: false,                          // Não sobrescreve relatórios antigos
    html: true,                                // Gera relatório em HTML
    json: true,                                // Gera relatório em JSON
    charts: true,
    inlineAssets: true,
  },
  e2e: {
    setupNodeEvents(on, config) {
      config.env.email = process.env.CYPRESS_EMAIL;
      config.env.password = process.env.CYPRESS_PASSWORD;
      return config;
    },
  },
});
