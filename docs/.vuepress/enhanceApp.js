import Translation from '@theme/plugins/Translation';
import VueTyperPlugin from 'vue-typer';

export default ({ Vue, siteData }) => {
  Vue.prototype.$themeConfig = siteData.themeConfig;
  Vue.use(Translation);
  Vue.use(VueTyperPlugin);
};
