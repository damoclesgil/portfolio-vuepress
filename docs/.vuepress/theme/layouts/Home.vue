<template>
  <div class="home">
    <div class="hero">
      <!-- <img v-if="data.heroImage" :src="$withBase(data.heroImage)" alt="hero"> -->

      <!-- <h1>{{ data.heroText }}</h1> -->
      <div class="title-hero">
        <span>{{ data.txtBegin }}</span>
      </div>

      <p class="action">
        <router-link class="action-button" :to="data.aboutLink">{{
          data.txtAbout
        }}</router-link>
      </p>
    </div>

    <div class="features" v-if="data.features && data.features.length">
      <div
        class="feature"
        v-for="(feature, index) in data.features"
        :key="index"
      >
        <h2>{{ feature.title }}</h2>
        <p>{{ feature.details }}</p>
      </div>
    </div>

    <Content custom />
  </div>
</template>

<script>
import NavLink from "@theme/components/NavLink.vue";

export default {
  components: {
    NavLink
  },

  computed: {
    data() {
      return this.$page.frontmatter;
    },

    actionLink() {
      return {
        link: this.data.actionLink,
        text: this.data.actionText
      };
    }
  }
};
</script>

<style lang="stylus">
@import './../styles/config.styl';

.home {
  padding: $navbarHeight 2rem 0;
  max-width: 960px;
  margin: 0px auto;
  margin-bottom: 10rem;

  .hero {
    height: 87vh;
    display: flex;
    justify-content: center;
    flex-direction: column;
    align-items: center;

    .title-hero {
      font-size: 2.4rem;
      color: #2c3e50;
      font-family: 'Silka';
      line-height: 1.45;
      display: block;
    }
  }

  h2 {
    border-bottom: none;
    font-weight: 300;
    line-height: 1.5;
  }

  a {
    color: #2c3e50;
    border-bottom: 3px solid #2c3e50;
    font-weight: 600;
  }

  .content span {
    font-size: 1.3rem;
  }

  .action-button {
    display: inline-block;
    font-size: 1.1rem;
    padding: 0.4rem 1.4rem;
    border-radius: 4px;
    transition: all 0.3s ease;
    box-sizing: border-box;
    border: 1px solid $accentColor;
    color: $textColor;
    background-color: transparent;
  }

  .action-button:nth-child(1) {
    margin-right: 20px;
  }

  .action-button:hover {
    background-color: lighten($accentColor, 90%);
    border: 1px solid lighten($textColor, 90%);
    color: $accentColor;
  }

  .features {
    border-top: 1px solid $borderColor;
    padding: 1.2rem 0;
    margin-top: 2.5rem;
    display: flex;
    flex-wrap: wrap;
    align-items: flex-start;
    align-content: stretch;
    justify-content: space-between;
  }

  .feature {
    flex-grow: 1;
    flex-basis: 30%;
    max-width: 30%;

    h2 {
      font-size: 1.4rem;
      font-weight: 500;
      border-bottom: none;
      padding-bottom: 0;
      color: lighten($textColor, 10%);
    }

    p {
      color: lighten($textColor, 25%);
    }
  }

  .footer {
    padding: 2.5rem;
    border-top: 1px solid $borderColor;
    text-align: center;
    color: lighten($textColor, 25%);
  }
}

@media (max-width: $MQMobile) {
  .home {
    .features {
      flex-direction: column;
    }

    .feature {
      max-width: 100%;
      padding: 0 2.5rem;
    }
  }
}

@media (max-width: $MQMobileNarrow) {
  .home {
    padding-left: 1.5rem;
    padding-right: 1.5rem;

    .hero {
      img {
        max-height: 210px;
        margin: 2rem auto 1.2rem;
      }

      h1 {
        font-size: 2rem;
      }

      h1, .description, .action {
        margin: 1.2rem auto;
      }

      .description {
        font-size: 1.2rem;
      }

      .action-button {
        font-size: 1rem;
        padding: 0.6rem 1.2rem;
      }
    }

    .feature {
      h2 {
        font-size: 1.25rem;
      }
    }
  }
}
</style>
