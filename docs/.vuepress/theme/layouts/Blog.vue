<template>
  <div class="container-layout">
    <ul class="front-flex">
      <router-link class="front-teaser" :to="post.path" v-for="post in posts" :key="post.frontmatter.date">
        <span class="ribbon">vue</span>
        <p>{{post.frontmatter.date}}</p>
        <h3>{{post.title}}</h3>
        <p v-html="post.frontmatter.excerpt"></p>
        <p>{{post.frontmatter.tags[0]}}</p>
      </router-link>
    </ul>
  </div>
</template>

<script>
export default {
  name: 'Blog',
  computed: {
    posts() {
      return this.$site.pages.filter(x => x.path.startsWith('/blog/') && !x.frontmatter.blog_index);
      // .filter(x => x.path.startsWith('/blog/') && !x.frontmatter.blog_index)
      // .sort((a, b) => new Date(b.frontmatter.date) - new Date(a.frontmatter.date));
    }
  }
};
</script>

<style lang="stylus">
.front-flex {
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
}

.ribbon {
  position: absolute;
  right: -5px;
  top: -5px;
  z-index: 1;
  overflow: hidden;
  width: 75px;
  height: 75px;
  color: #000;
  text-align: right;
}

.front-teaser {
  flex-basis: 28%;
  position: relative;
  justify-content: space-around;
  padding: 1.25rem;
  flex-direction: column;
  margin: 1em 0.7em;
  border-radius: 3px;
  display: flex;
  align-items: center;
  justify-content: center;
  box-shadow: 1px 1px 15px rgba(67, 38, 100, 0.15);
  background-color: #fff;
  transition: all 0.2s;
}

@media only screen and (min-width: 70.063em) {
  .front-teaser:hover {
    transform: translateY(-2px);
  }
}
</style>