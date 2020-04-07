<template>
  <div class="container-layout">
    <ul class="front-flex">
      <router-link
        class="front-teaser"
        :to="post.path"
        v-for="post in posts"
        :key="post.frontmatter.id"
      >
        <div class="head_card">
          <div class="category">
            <span class="bullet" :class="post.frontmatter.category"></span>
            <span class="meta-text">{{ post.frontmatter.category }}</span>
          </div>
          <div class="date">
            <p>{{ post.frontmatter.date }}</p>
          </div>
        </div>
        <h3 class="t-center">{{ post.title }}</h3>
        <p class="t-center" v-html="post.frontmatter.excerpt"></p>
      </router-link>
    </ul>
  </div>
</template>

<script>
export default {
  name: "Blog",
  computed: {
    posts() {
      if (this.$page.frontmatter.lang === "en") {
        return this.$site.pages.filter(
          x => x.path.startsWith("/en/blog/") && !x.frontmatter.blog_index
        );
      }
      return this.$site.pages.filter(
        x => x.path.startsWith("/blog/") && !x.frontmatter.blog_index
      );
    }
  }
};
</script>

<style lang="stylus">
@import './../styles/config.styl';
ul
  padding-left 0

.js
  background-color #f5e98c !important

.vue
  background-color #72cda4 !important

.front-flex
  display grid
  grid-template-columns 1fr 1fr 1fr

.front-teaser
    flex-basis 28%
    position relative
    justify-content space-around
    padding 1.25rem
    color $textColor
    flex-direction column
    margin 1em 0.7em
    border-radius 3px
    display flex
    justify-content space-between
    box-shadow 1px 1px 15px rgba(0, 0, 0, 0.15)
    background-color #fff
    transition all 0.2s
    p
        margin 0
    h3
        font-weight 400

.head_card
    display flex
    font-size 0.75rem
    justify-content space-between
    align-items center

.bullet
    position relative
    border-radius 50%
    width 8px
    height 8px
    display inline-block

.t-center
    text-align center

@media only screen and (min-width: 70.063em)
    .front-teaser
        &:hover
            transform translateY(-2px)

@media only screen and (max-width: 72em)
    .front-flex
        grid-template-columns 1fr
    .front-teaser
        flex-basis 100% !important
        margin 1.1em 0.7em
</style>
