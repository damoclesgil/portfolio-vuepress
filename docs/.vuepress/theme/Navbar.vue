<template>
  <header class="navbar">
    <SidebarButton @toggle-sidebar="$emit('toggle-sidebar')"/>

    <router-link :to="$localePath" class="home-link">
      <svg xmlns="http://www.w3.org/2000/svg" class="logo" viewBox="0 0 56.32 13.39">
        <path
          d="M7.45 3.44L.94 7.49l6.51 4.12-.66.83L0 8.19V6.77l6.86-4.25zM14.12 2.27H18s-.2.36-.55 1L16 5.74 14.18 9l-.06.12V2.27zm4.72.13a6.36 6.36 0 0 1 1.24.45 6.9 6.9 0 0 1 .76.47 6.33 6.33 0 0 1 .58.47c.22.23.38.4.48.52a7.53 7.53 0 0 1 .46.67 5.42 5.42 0 0 1 .76 2.76v.07a5.26 5.26 0 0 1-.6 2.43A4.77 4.77 0 0 1 22 11a5.36 5.36 0 0 1-.46.52 3.92 3.92 0 0 1-.63.53 4.67 4.67 0 0 1-.42.29 5.38 5.38 0 0 1-2.7.74h-3.68v-2.16s.21-.4.63-1.15c0 0 .5-.89 1.46-2.63l1.85-3.34.79-1.4zm-3.91.69V6s.46-.8 1.33-2.35l.3-.53zm4.3.28l-1.68 3c-1.16 2.11-1.77 3.2-1.82 3.28l-.8 1.44v1.21h2.82a4.56 4.56 0 0 0 2.81-1c.11-.09.27-.23.48-.44a4.8 4.8 0 0 0 .5-.63 4.19 4.19 0 0 0 .43-.8 4.44 4.44 0 0 0 .33-1.64v-.07a4.71 4.71 0 0 0-.41-1.86 4.07 4.07 0 0 0-.4-.7 3.81 3.81 0 0 0-.5-.63 5.06 5.06 0 0 0-.48-.43 4.66 4.66 0 0 0-1.28-.73zM30.61 2.21c-1 2.06-1.56 3.15-1.63 3.28l-1.42 2.89c-.91 1.85-1.38 2.79-1.4 2.83l-.54-.85a5.47 5.47 0 0 1-.31-.67 5.28 5.28 0 0 1-.39-2v-.04a5.46 5.46 0 0 1 3.41-5 5.6 5.6 0 0 1 .91-.27 6.24 6.24 0 0 1 .72-.1zm-4.88 5.43v.1a4.52 4.52 0 0 0 .36 1.74s.21-.41.56-1.13c.06-.1.55-1.09 1.48-3 .69-1.41 1.05-2.13 1.06-2.17a5.3 5.3 0 0 0-.71.26 4.37 4.37 0 0 0-.66.36 5 5 0 0 0-.51.39 4.19 4.19 0 0 0-.43.44 4.88 4.88 0 0 0-.54.76 5 5 0 0 0-.35.76 4.44 4.44 0 0 0-.26 1.49zm7.15-4.76a4.75 4.75 0 0 1 .71.44 5.69 5.69 0 0 1 1.19 1.21 5.34 5.34 0 0 1 .52.89c.09.21.17.4.23.58l-.78.25a4.46 4.46 0 0 0-.35-.79 4.76 4.76 0 0 0-.47-.7 5.7 5.7 0 0 0-.66-.65 3.39 3.39 0 0 0-.62-.42c-.2-.11-.36-.19-.5-.25L30.4 7l-1 2h6.26c-.16.45-.29.79-.4 1a6.56 6.56 0 0 1-.49.82 4.5 4.5 0 0 1-.47.55 3.63 3.63 0 0 1-.48.45 5.72 5.72 0 0 1-.92.62 5.46 5.46 0 0 1-2.51.63h-.07a5.46 5.46 0 0 1-2.61-.68c-.19-.11-.42-.26-.7-.45 1.09-2.21 1.68-3.39 1.76-3.55 0 0 .3-.63.92-1.88l1.7-3.44.35-.7a6.91 6.91 0 0 1 1.14.51zM29 9.84l-.92 1.86a4.63 4.63 0 0 0 4.92-.24 4.8 4.8 0 0 0 .62-.52 4.52 4.52 0 0 0 .48-.57 5.09 5.09 0 0 0 .34-.53zM44.5 7.11l-2.58 6.28H41l2.34-5.63zm-.6-.81L46.49 0h.92l-2.3 5.65zM56.32 6.79v1.4l-6.78 4.25-.67-.88 6.5-4.07-6.5-4.09.58-.88z"
        ></path>
      </svg>
    </router-link>

    <div class="links" :style="{
        'max-width': linksWrapMaxWidth + 'px'
      }">
      <AlgoliaSearchBox v-if="isAlgoliaSearch" :options="algolia"/>
      <SearchBox v-else-if="$site.themeConfig.search !== false"/>
      <NavLinks class="can-hide"/>
    </div>
  </header>
</template>

<script>
import SidebarButton from './SidebarButton.vue';
import AlgoliaSearchBox from '@AlgoliaSearchBox';
import SearchBox from './SearchBox.vue';
import NavLinks from './NavLinks.vue';

export default {
  components: {
    SidebarButton,
    NavLinks,
    SearchBox,
    AlgoliaSearchBox
  },

  data() {
    return {
      linksWrapMaxWidth: null
    };
  },

  mounted() {
    const MOBILE_DESKTOP_BREAKPOINT = 719; // refer to config.styl
    const NAVBAR_VERTICAL_PADDING = parseInt(css(this.$el, 'paddingLeft')) + parseInt(css(this.$el, 'paddingRight'));
    const handleLinksWrapWidth = () => {
      if (document.documentElement.clientWidth < MOBILE_DESKTOP_BREAKPOINT) {
        this.linksWrapMaxWidth = null;
      } else {
        this.linksWrapMaxWidth = this.$el.offsetWidth - NAVBAR_VERTICAL_PADDING - ((this.$refs.siteName && this.$refs.siteName.offsetWidth) || 0);
      }
    };
    handleLinksWrapWidth();
    window.addEventListener('resize', handleLinksWrapWidth, false);
  },

  computed: {
    algolia() {
      return this.$themeLocaleConfig.algolia || this.$site.themeConfig.algolia || {};
    },

    isAlgoliaSearch() {
      return this.algolia && this.algolia.apiKey && this.algolia.indexName;
    }
  }
};

function css(el, property) {
  // NOTE: Known bug, will return 'auto' if style value is 'auto'
  const win = el.ownerDocument.defaultView;
  // null means not to return pseudo styles
  return win.getComputedStyle(el, null)[property];
}
</script>

<style lang="stylus">
@import './styles/config.styl';

$navbar-vertical-padding = 0.7rem;
$navbar-horizontal-padding = 1.5rem;

.navbar {
  padding: $navbar-vertical-padding $navbar-horizontal-padding;
  line-height: $navbarHeight - 1.4rem;
  position: relative;

  a, span, img {
    display: inline-block;
  }

  .logo {
    height: $navbarHeight - 1.4rem;
    min-width: $navbarHeight - 1.4rem;
    margin-right: 0.8rem;
    vertical-align: top;
  }

  .logo path {
    fill: #2c3e50;
  }

  .site-name {
    font-size: 1.3rem;
    font-weight: 600;
    color: $textColor;
    position: relative;
  }

  .links {
    padding-left: 1.5rem;
    box-sizing: border-box;
    background-color: white;
    white-space: nowrap;
    font-size: 0.9rem;
    position: absolute;
    right: $navbar-horizontal-padding;
    top: $navbar-vertical-padding;
    display: flex;

    .search-box {
      flex: 0 0 auto;
      vertical-align: top;
    }

    .nav-links {
      flex: 1;
    }
  }
}

@media (max-width: $MQMobile) {
  .navbar {
    padding-left: 4rem;

    .can-hide {
      display: none;
    }

    .links {
      padding-left: 1.5rem;
    }
  }
}
</style>
