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
  themeConfig: {
    locales: {
      "/": en,
      "/pt/": pt
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
