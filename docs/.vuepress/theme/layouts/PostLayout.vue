<template>
  <div class="container-layout">
    <article>
      <h2>{{$page.frontmatter.title}}</h2>
      <label class="text-grey-dark">
        <span>{{$page.frontmatter.date}}</span>
      </label>
    </article>

    <Content></Content>
  </div>
</template>

<script>
export default {
  name: 'PostLayout'
};
</script>

<style lang="stylus"></style>