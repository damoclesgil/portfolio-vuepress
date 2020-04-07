<template>
  <div class="container-layout">
    <img
      class="avatar"
      :src="data.avatar"
      :alt="data.altImg"
      :title="data.altImg"
    />
    <Content></Content>
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
  width: 200px;
  height: 200px;
  object-fit: contain;
  display: block;
  margin: 3rem auto auto auto;
  border-radius: 50%;
}
</style>
