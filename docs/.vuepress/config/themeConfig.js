const en = require("./locales/en");
const pt = require("./locales/pt-br");
module.exports = {
  locales: {
    "/": pt,
    "/en/": en
  },
  logo: "/damoclesgil_logo.svg",
  blackWhite: true,
  serviceWorker: {
    updatePopup: {
      message: "New content 🎉🎉",
      buttonText: "Update"
    }
  },
  ga: "UA-76830249-1",
  repo: "damoclesgil"
};
