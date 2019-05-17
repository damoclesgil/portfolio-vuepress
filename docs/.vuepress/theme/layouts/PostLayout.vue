<template>
  <div class="container-layout">
    <article>
      <Content></Content>
      <h5 class="t_right">Publicado em: {{$page.frontmatter.date || bobo}}</h5>
    </article>
    <vue-disqus class="mt-30" :shortname="this.$site.themeConfig.disqus"/>
  </div>
</template>

<script>
export default {
  name: 'PostLayout',
  components: {
    VueDisqus: () => import(/* webpackChunkName = "vue-disqus" */ 'vue-disqus/dist/vue-disqus.vue'),
  },
};
</script>

<style lang="stylus">
.t_right {
  text-align: right;
  padding-right: 1rem;
}
.mt-30{
  margin-top: 30px;
}
</style>