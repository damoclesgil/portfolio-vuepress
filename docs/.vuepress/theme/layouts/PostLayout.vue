<template>
  <div class="container-layout">
    <article>
      <Content></Content>
      <h5 class="t_right">Publicado em: {{$page.frontmatter.date}}</h5>
    </article>
  </div>
</template>

<script>
export default {
  name: 'PostLayout'
};
</script>

<style lang="stylus">
.t_right {
  text-align: right;
  padding-right: 1rem;
}
</style>