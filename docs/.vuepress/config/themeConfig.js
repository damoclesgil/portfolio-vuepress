const en = require('./locales/en');
const pt = require('./locales/pt');
module.exports = {
  locales: {
    '/': en,
    '/pt/': pt,
  },
  logo: '/damoclesgil_logo.svg',
  blackWhite: true,
  serviceWorker: {
    updatePopup: {
      message: 'New content 🎉🎉',
      buttonText: 'Update',
    },
  },
  ga: 'UA-76830249-1',
  repo: 'damoclesgil',
  lazyLoad: {},
};
