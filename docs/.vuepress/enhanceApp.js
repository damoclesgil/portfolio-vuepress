import Translation from "@theme/plugins/Translation";
import VueDisqus from "vue-disqus";

export default ({ Vue, options, router, siteData }) => {
  Vue.prototype.$themeConfig = siteData.themeConfig;
  Vue.use(Translation);
  Vue.use(VueDisqus);
};
