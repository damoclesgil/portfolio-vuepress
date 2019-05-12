import Translation from '@theme/plugins/Translation';

export default ({ Vue, siteData }) => {
  Vue.prototype.$themeConfig = siteData.themeConfig;
  Vue.use(Translation);
};
