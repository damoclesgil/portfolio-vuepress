<template>
  <div class="container-layout">
    <ul class="front-flex">
      <router-link class="front-teaser" :to="post.path" v-for="post in posts" :key="post.frontmatter.id">
        <div class="head_card">
          <div class="category">
            <span class="bullet" :class="post.frontmatter.category"></span>
            <span class="meta-text">{{post.frontmatter.category}}</span>
          </div>
          <div class="date">
            <p>{{post.frontmatter.date}}</p>
          </div>
        </div>
        <h3 class="t-center">{{post.title}}</h3>
        <p class="t-center" v-html="post.frontmatter.excerpt"></p>
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
    }
  }
};
</script>

<style lang="stylus" scoped>
@import './../styles/config.styl';

ul {
  padding-left: 0;
}

.js {
  background-color: #f5e98c !important;
}

.front-flex {
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
}

.front-teaser {
  flex-basis: 28%;
  position: relative;
  justify-content: space-around;
  padding: 1.25rem;
  flex-direction: column;
  margin: 1em 0.7em;
  border-radius: 3px;
  // border-style: solid;
  // border-width: 1px;
  // border-color: #d5d9dc;
  color: $textColor;
  display: flex;
  justify-content: space-between;
  box-shadow: 1px 1px 15px rgba(0, 0, 0, 0.15);
  background-color: #fff;
  transition: all 0.2s;
}

.head_card {
  display: flex;
  font-size: 0.75rem;
  justify-content: space-between;
  align-items: center;
}

.front-teaser p {
  margin: 0;
}

.bullet {
  position: relative;
  border-radius: 50%;
  width: 8px;
  height: 8px;
  display: inline-block;
}

.t-center {
  text-align: center;
}

.front-teaser h3 {
  font-weight: 400;
}

@media only screen and (min-width: 70.063em) {
  .front-teaser:hover {
    transform: translateY(-2px);
  }
}

@media only screen and (max-width: 72em) {
  .front-flex {
    grid-template-columns: 1fr;
  }

  .front-teaser {
    flex-basis: 100% !important;
    margin: 1.1em 0.7em;
  }
}
</style>