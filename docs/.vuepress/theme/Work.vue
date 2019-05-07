<template>
  <transition name="fade">
    <div class="work" :key="$page.key">
      <h1>{{data.title}}</h1>
      <a :href="data.url">{{data.url}}</a>
      <div class="info">
        <div class="tech">
          <li v-for="item in data.tech">
            {{ item }}
            <div :class="item"></div>
          </li>
        </div>
        <div class="description">
          <p>{{ data.description }}</p>
        </div>
      </div>
      <div class="header">
        <img v-if="data.header" :src="$withBase(data.header)" alt>
      </div>

      <Content custom/>

      <div class="footer" v-if="data.footer">{{ data.footer }}</div>
    </div>
  </transition>
</template>

<script>
import NavLink from './NavLink.vue';

export default {
  components: { NavLink },
  computed: {
    data() {
      return this.$page.frontmatter;
    }
  }
};
</script>

<style lang="stylus">
.work {
  padding: 3.6rem 2rem 0;
  max-width: 800px;
  margin: 0px auto;

  h1 {
    font-size: 3rem;
    padding-left: 20px;
    margin-bottom: 5px;
  }

  a {
    display: block;
    padding-left: 20px;
    margin-bottom: 30px;
  }
}

.info {
  display: flex;
  margin-bottom: 35px;
  position: relative;

  &:after {
    content: '';
    position: absolute;
    left: 0;
    width: 1px;
    height: 100%;
    background: gray;
  }

  .tech {
    position: absolute;
    list-style-type: none;
    display: block;
    padding-right: 20px;
    text-align: right;
    white-space: nowrap;
    left: -220px;
    min-width: 200px;

    li {
      line-height: 2;
      text-transform: capitalize;
      color: #d4d4d4;
      font-size: 0.8rem;
    }

    div {
      border-radius: 80%;
      height: 0.6rem;
      width: 0.6rem;
      display: inline-block;
      margin-left: 5px;
    }
  }

  .description {
    padding-left: 20px;

    p {
      margin: 0;
    }
  }
}

.header {
  border-radius: 5px;
  overflow: hidden;
  box-shadow: 0 3px 12px rgba(0, 0, 0, 0.1);
  margin: 0 auto;
  margin-bottom: 40px;
  width: 95%;

  img {
    width: 100%;
    display: block;
  }
}

.vue, .vuepress {
  background: lighten(#3eaf7c, 30%);
}

.javascript {
  background: lighten(#f1e05a, 30%);
}

.electron {
  background: lighten(#9feaf9, 30%);
}

.netlify {
  background: lighten(#44a4bd, 30%);
}

.stylus {
  background: lighten(#ff6347, 30%);
}

.node {
  background: lighten(#43853d, 30%);
}

.express {
  background: lighten(#eee, 30%);
}

.magento {
  background: lighten(#f26322, 30%);
}

.html {
  background: lighten(#e34c26, 30%);
}
</style>
