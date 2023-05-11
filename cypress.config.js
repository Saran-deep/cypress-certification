const { defineConfig } = require("cypress");
const { lighthouse, prepareAudit, pa11y } = require("cypress-audit");

module.exports = defineConfig({
  video: true,
  e2e: {
    setupNodeEvents(on, config) {
      require("cypress-failed-log/on")(on);

      on("before:browser:launch", (browser = {}, launchOptions) => {
        prepareAudit(launchOptions);
      });

      on("task", {
        lighthouse: lighthouse((lighthouseReport) => {
          console.log(lighthouseReport); // raw lighthouse reports
        }),
        pa11y: pa11y((pa11yReport) => {
          console.log(pa11yReport); // raw pa11y reports
        }),
      });
    },
    hideXHRInCommandLog: true,
  },
});
