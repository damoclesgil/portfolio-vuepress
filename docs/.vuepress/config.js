const themeConfig = require('./config/themeConfig');
const head = require('./config/head');

module.exports = {
  head,
  themeConfig,
  serviceWorker: true,
  locales: {
    '/': {
      lang: 'en-US',
      title: 'Dâmocles Gil',
      description: 'Dâmocles Gil Marçal, Front-End Developer',
    },
    '/pt/': {
      lang: 'pt-BR',
      title: 'Dâmocles Gil',
      description: 'Dâmocles Gil Marçal, Desenvolvedor Front-End',
    },
  },
  // markdown: {
  //   anchor: {
  //     permalink: false,
  //     permalinkBefore: false,
  //     permalinkSymbol: '',
  //   },
  // },
  // shouldPrefetch: function() {
  //   return false;
  // },
};
