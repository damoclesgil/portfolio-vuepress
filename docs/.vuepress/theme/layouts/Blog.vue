<template>
  <div class="container-layout">
    <ul class="flex">
      <router-link :to="post.path" v-for="post in posts" :key="post.frontmatter.date">
        <img class="img-post" :src="`${post.frontmatter.image}`" title="Random Photo">
        <h3>{{post.frontmatter.excerpt}}</h3>
        <h3>{{post.title}}</h3>
        <p>{{post.frontmatter.date}}</p>
        <p v-html="post.excerpt"></p>
      </router-link>
    </ul>
  </div>
</template>

<script>
export default {
  name: 'Blog',
  // computed: {
  //   tag() {
  //     return this.$route.query.tag;
  //   },

  //   postsByLang() {
  //     return [
  //       ...this.$posts.filter(post => {
  //         return post.lang === this.$localeConfig.lang;
  //       })
  //     ];
  //   },
  //   filterPosts() {
  //     if (this.tag) {
  //       return this.postsByLang.filter(post => {
  //         if (!post.tags.length) return;
  //         return post.tags.includes(this.tag);
  //       });
  //     }
  //     return this.postsByLang;
  //   }
  // },
  // methods: {
  //   getPosts(start, end) {
  //     const p = [...this.filterPosts];
  //     return p.splice(start, end || p.length);
  //   }
  // }
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
.img-post {
  width: 150px;
  height: 150px;
  object-fit: contain;
}
</style>