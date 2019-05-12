<template>
  <div
    class="layout-main"
    :class="{ 'layout-main__nm--opened': nmOpened, 'layout-main__negative': negative }"
    @touchstart="onTouchStart"
    @touchend="onTouchEnd"
  >
    <Navbar v-if="shouldShowNavbar" @toggle-sidebar="toggleSidebar"/>

    <!-- <div class="sidebar-mask" @click="toggleSidebar(false)"></div> -->
    <!-- 
    <Sidebar :items="sidebarItems" @toggle-sidebar="toggleSidebar">
      <slot name="sidebar-top" slot="top"/>
      <slot name="sidebar-bottom" slot="bottom"/>
    </Sidebar>-->

    <transition-group name="fade" @after-leave="afterLeave">
      <template>
        <component :is="$page.frontmatter.layout" :key="$page.key"/>
      </template>
    </transition-group>
    <BlackWhite v-if="$site.themeConfig.blackWhite" class="header-top__toggle"/>
    <SWUpdatePopup :updateEvent="swUpdateEvent"/>

    <div class="footer">{{ $t('footer') }}</div>
  </div>
</template>

<script>
import Vue from 'vue';
import nprogress from 'nprogress';
import Navbar from './Navbar.vue';
import Home from './layouts/Home.vue';
import Blog from './layouts/Blog.vue';
import PostLayout from './layouts/PostLayout.vue';
import About from './layouts/About.vue';
import Page from './layouts/Page.vue';
import Sidebar from './Sidebar.vue';
import SWUpdatePopup from './SWUpdatePopup.vue';
import { resolveSidebarItems } from './util';
import Work from './layouts/Work.vue';
import EventBus from '@theme/plugins/EventBus';

export default {
  components: {
    Home,
    Page,
    Sidebar,
    Navbar,
    SWUpdatePopup,
    Work,
    About,
    Blog,
    PostLayout,
    BlackWhite: () =>
      import(/* webpackChunkName = BlackWhite */ '@theme/components/BlackWhite')
  },

  data() {
    return {
      isSidebarOpen: false,
      nmOpened: false,
      swUpdateEvent: null,
      negative: false
    };
  },

  computed: {
    shouldShowNavbar() {
      const { themeConfig } = this.$site;
      const { frontmatter } = this.$page;
      if (frontmatter.navbar === false || themeConfig.navbar === false) {
        return false;
      }
      return (
        this.$title ||
        themeConfig.logo ||
        themeConfig.repo ||
        themeConfig.nav ||
        this.$themeLocaleConfig.nav
      );
    },

    shouldShowSidebar() {
      const { frontmatter } = this.$page;
      return (
        !frontmatter.layout &&
        !frontmatter.home &&
        frontmatter.sidebar !== false &&
        this.sidebarItems.length
      );
    },

    sidebarItems() {
      return resolveSidebarItems(
        this.$page,
        this.$route,
        this.$site,
        this.$localePath
      );
    },

    pageClasses() {
      const userPageClass = this.$page.frontmatter.pageClass;
      return [
        {
          'no-navbar': !this.shouldShowNavbar,
          'sidebar-open': this.isSidebarOpen,
          'no-sidebar': !this.shouldShowSidebar
        },
        userPageClass
      ];
    }
  },

  created() {
    EventBus.$on('show_nm', data => {
      this.nmOpened = data;
    });
    if (this.$site.themeConfig.blackWhite) {
      EventBus.$on('toggle_black_white', data => {
        this.negative = data;
      });
    }
    // update existing scrollBehavior in $rooter.options
    let scrollBehavior = (to, from, savedPosition) => {
      return new Promise(resolve => {
        // wait for triggerScroll to be emitted from javascript hook
        this.$root.$once('triggerScroll', () => {
          resolve({ x: 0, y: 0 });
        });
      });
    };
    this.$router.options.scrollBehavior = scrollBehavior;
  },

  mounted() {
    window.addEventListener('scroll', this.onScroll);

    // configure progress bar
    nprogress.configure({ showSpinner: false });

    this.$router.beforeEach((to, from, next) => {
      if (to.path !== from.path && !Vue.component(to.name)) {
        nprogress.start();
      }
      next();
    });

    this.$router.afterEach(() => {
      nprogress.done();
      this.isSidebarOpen = false;
    });

    this.$on('sw-updated', this.onSWUpdated);
  },

  methods: {
    toggleSidebar(to) {
      this.isSidebarOpen = typeof to === 'boolean' ? to : !this.isSidebarOpen;
    },

    // side swipe
    onTouchStart(e) {
      this.touchStart = {
        x: e.changedTouches[0].clientX,
        y: e.changedTouches[0].clientY
      };
    },

    onTouchEnd(e) {
      const dx = e.changedTouches[0].clientX - this.touchStart.x;
      const dy = e.changedTouches[0].clientY - this.touchStart.y;
      if (Math.abs(dx) > Math.abs(dy) && Math.abs(dx) > 40) {
        if (dx > 0 && this.touchStart.x <= 80) {
          this.toggleSidebar(true);
        } else {
          this.toggleSidebar(false);
        }
      }
    },

    afterLeave() {
      // console.log('leaving');
      this.$root.$emit('triggerScroll');
    },

    onSWUpdated(e) {
      this.swUpdateEvent = e;
    }
  }
};
</script>

<style src="./styles/theme.styl" lang="stylus"></style>

<style lang="stylus">
$transitionSpeed = 400ms;
$transitionDelay = 400ms;

.fade-enter-active {
  transition: all $transitionSpeed $transitionDelay;
}

.fade-leave-active {
  transition: all $transitionSpeed ease-in;
}

.fade-enter {
  opacity: 0;
}

.fade-enter-to, .fade-leave {
  opacity: 1;
}

.fade-leave-to {
  opacity: 0;
}

.header-top__toggle {
  position: fixed;
  bottom: 25px;
  right: 35px;
}

.layout-main__negative {
  background-color: #000 !important;
  color: #ccc !important;
  box-shadow: none !important;
  fill: #000 !important;
}
</style>

