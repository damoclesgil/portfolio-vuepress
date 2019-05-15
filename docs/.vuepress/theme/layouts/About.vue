<template>
  <div class="container-layout">
    <img class="avatar" :src="data.image" alt>
    <h1>{{ data.title }}</h1>
    <p>{{ data.text }}</p>
    <p>Habilidades: HTML, CSS, JS, VUE e TDD(in progress)</p>
    <p>Contato</p>
  </div>
</template>

<script>
export default {
  computed: {
    data() {
      return this.$page.frontmatter;
    }
  }
};
</script>

<style lang="stylus">
.avatar {
  width: 50px;
  height: 50px;
  object-fit: contain;
  display: block;
  margin: 1rem auto;
}
</style>