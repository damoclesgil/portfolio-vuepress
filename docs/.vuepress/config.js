const path = require("path");
const themeConfig = require("./config/themeConfig");
const head = require("./config/head");
const resolve = pathName => path.join(__dirname, pathName);

module.exports = {
  head,
  themeConfig,
  serviceWorker: true,
  // sidebar: true,
  ga: "UA-76830249-1",
  // plugins: ["~/plugins/disqus"],
  // plugins: [["@vuepress/google-analytics", {ga: "UA-76830249-1"}]],
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
  configureWebpack() {
    return {
      resolve: {
        alias: {
          "@public": resolve("./public")
        }
      }
    };
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
