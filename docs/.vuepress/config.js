const en = require('./config/locales/en');
const pt = require('./config/locales/pt');
const head = require('./config/head');

module.exports = {
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
  themeConfig: {
    locales: {
      '/': en,
      '/pt/': pt,
    },
    head,
    serviceWorker: true,
    ga: 'UA-76830249-1',
    logo: '/damoclesgil_logo.svg',
    repo: 'damoclesgil',
    blackWhite: true,
    serviceWorker: {
      updatePopup: {
        message: 'New content 🎉🎉',
        buttonText: 'Update',
      },
    },
  },
  markdown: {
    anchor: {
      permalink: false,
      permalinkBefore: false,
      permalinkSymbol: '',
    },
  },
  shouldPrefetch: function() {
    return false;
  },
};
