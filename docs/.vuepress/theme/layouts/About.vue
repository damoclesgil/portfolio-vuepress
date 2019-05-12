<template>
  <div class="container-layout">
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

<style lang="stylus"></style>