<template>
  <div class="container-layout">
    <h1>{{ data.title }}</h1>
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