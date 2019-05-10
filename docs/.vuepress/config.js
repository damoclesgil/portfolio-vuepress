const en = require("./config/locales/en");
const pt = require("./config/locales/pt");

module.exports = {
  locales: {
    "/": {
      lang: "en-US",
      title: "Dâmocles Gil",
      description: "Dâmocles Gil Marçal, Front-End Developer"
    },
    "/pt/": {
      lang: "pt-BR",
      title: "Dâmocles Gil",
      description: "Dâmocles Gil Marçal, Desenvolvedor Front-End"
    }
  },
  serviceWorker: true,
  themeConfig: {
    locales: {
      "/": en,
      "/pt/": pt
    },
    logo: "/damoclesgil_logo.svg",
    blackWhite: true,

    serviceWorker: {
      updatePopup: {
        message: "New content 🎉🎉",
        buttonText: "Update"
      }
    }
  },
  markdown: {
    anchor: {
      permalink: false,
      permalinkBefore: false,
      permalinkSymbol: ""
    }
  },
  shouldPrefetch: function() {
    return false;
  }
};
