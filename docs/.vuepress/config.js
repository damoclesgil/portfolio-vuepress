const themeConfig = require("./config/themeConfig");
const head = require("./config/head");

module.exports = {
  head,
  themeConfig,
  serviceWorker: true,
  // sidebar: true,
  ga: "UA-76830249-1",
  // plugins: [
  //   [
  //     "@vuepress/google-analytics",
  //     {
  //       ga: "UA-76830249-1"
  //     }
  //   ]
  // ],
  locales: {
    "/": {
      lang: "pt-br",
      title: "Dâmocles Gil Marçal - Desenvolvedor Front End",
      description:
        "Um portfólio de um desenvolvedor Front End, fã de VUE, Javascript e novas tecnologias. Atualmente trabalhando na Daxplace."
    },
    "/en/": {
      lang: "en",
      title: "Dâmocles Gil Marçal - Front End Developer",
      description:
        "Um portfólio de um desenvolvedor Front End, fã de VUE, Javascript e novas tecnologias. Atualmente trabalhando na Daxplace."
    }
  },
  markdown: {
    anchor: {
      permalink: false,
      permalinkBefore: false,
      permalinkSymbol: ""
    }
  }
  // shouldPrefetch: function() {
  //   return false;
  // },
};
