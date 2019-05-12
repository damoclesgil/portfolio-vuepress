<template>
  <div class="flex flex-col h-full">
    <article class="flex-1 mx-auto leading-normal container">
      <h2>{{$page.frontmatter.title}}</h2>
      <label class="text-grey-dark">
        <!-- <span>{{$page.readingTime.text}}</span> • -->
        <span>{{$page.frontmatter.date}}</span>
      </label>
    </article>
  </div>
</template>

<script>
export default {
  name: 'PostLayout'
};
</script>

<style lang="stylus"></style>