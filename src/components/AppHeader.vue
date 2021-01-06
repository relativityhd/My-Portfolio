<template>
  <cv-header id="app-header" aria-label="Carbon header">
    <cv-header-menu-button aria-label="Header menu" aria-controls="side-nav" ref="menuBtn" />
    <cv-skip-to-content to="#main-content">
      {{ $t('App.skipto') }}
    </cv-skip-to-content>
    <cv-header-name to="/" prefix="Portfolio">
      <img class="logo" src="@/assets/images/logo-32x32.png" alt="Logo" />
      obias Hölzer
    </cv-header-name>

    <cv-header-nav aria-label="Carbon nav">
      <cv-header-menu-item v-for="link in links" :key="link.to" :to="link.to" :active="link.active">
        {{ $t(link.name) }}
      </cv-header-menu-item>
    </cv-header-nav>

    <div class="actions">
      <cv-header-global-action aria-label="Languages" aria-controls="language-panel" ref="translateIcon">
        <Translate20 />
      </cv-header-global-action>
    </div>

    <template v-slot:left-panels>
      <cv-side-nav id="side-nav" ref="sideNav" fixed>
        <cv-side-nav-items>
          <cv-side-nav-link v-for="link in links" :key="link.to" :to="link.to" :active="link.active">
            {{ $t(link.name) }}
          </cv-side-nav-link>
        </cv-side-nav-items>
      </cv-side-nav>
    </template>

    <template v-slot:right-panels>
      <cv-header-panel id="language-panel">
        <cv-switcher>
          <cv-switcher-item v-for="lang in languages" :key="lang.isoCode">
            <cv-switcher-item-link
              @click="switchLanguage(lang.isoCode)"
              href="javascript:void(0)"
              :selected="lang.selected"
            >
              {{ lang.name }}
            </cv-switcher-item-link>
          </cv-switcher-item>
        </cv-switcher>
      </cv-header-panel>
    </template>
  </cv-header>
</template>

<script>
import Translate20 from '@carbon/icons-vue/es/translate/20'

import {
  CvHeader,
  CvHeaderMenuButton,
  CvSkipToContent,
  CvHeaderName,
  CvHeaderNav,
  CvHeaderMenuItem,
  CvHeaderGlobalAction,
  CvSideNav,
  CvSideNavItems,
  CvSideNavLink,
  CvHeaderPanel,
  CvSwitcher,
  CvSwitcherItem,
  CvSwitcherItemLink
} from '@carbon/vue/src/components/cv-ui-shell'

export default {
  name: 'AppHeader',
  components: {
    CvHeader,
    CvHeaderMenuButton,
    CvSkipToContent,
    CvHeaderName,
    CvHeaderNav,
    CvHeaderMenuItem,
    CvHeaderGlobalAction,
    CvSideNav,
    CvSideNavItems,
    CvSideNavLink,
    CvHeaderPanel,
    CvSwitcher,
    CvSwitcherItem,
    CvSwitcherItemLink,
    Translate20
  },
  data() {
    let links = [
      { name: 'App.home', to: '/' },
      { name: 'App.profile', to: '/profile' },
      { name: 'App.imprint', to: '/imprint' }
    ]
    links.forEach(link => {
      link.active = link.to === this.$router.currentRoute.fullPath
    })
    return {
      links,
      languages: this.$store.state.languages
    }
  },
  mounted() {
    this.$router.afterEach(to => {
      this.switchPage(to)
      if (!this.$refs.sideNav || !this.$refs.menuBtn) return
      this.$refs.sideNav.dataExpanded = false
      this.$refs.menuBtn.dataActive = false
    })
    this.$root.$on('openLang', () => {
      this.$refs.translateIcon.$el.click()
    })
  },
  methods: {
    switchLanguage(lang) {
      this.$store.dispatch('setLang', lang)
    },
    switchPage(to) {
      this.links.forEach(link => {
        link.active = link.to === to.fullPath
      })
    }
  }
}
</script>

<style lang="scss">
.logo {
  height: 24px;
  margin-right: -5px;
}

/* #app-header {
  background-color: $interactive-01;
} */

.actions {
  display: flex;
  flex: 1 1;
  justify-content: flex-end;
  height: 100%;
}

/* .bx--header__action:hover,
.bx--header__menu-item:hover {
  background-color: $hover-primary !important;
}

.bx--header__action:active,
.bx--header__menu-item:active,
a.bx--side-nav__link[aria-current='page']::before,
a.bx--side-nav__link--current::before {
  background-color: $active-primary !important;
}

a.bx--header__menu-item[aria-current='page']::after,
.bx--header__menu-item--current::after {
  border-bottom-color: $active-primary;
}
.bx--switcher__item-link--selected,
.bx--switcher__item-link:hover {
  background-color: $interactive-03 !important;
}
.bx--header-panel {
  background-color: $interactive-02;
  overflow-y: auto;
}

.bx--switcher__item-link--selected {
  background-color: $active-primary;
}

.bx--switcher__item-link:hover:not(.bx--switcher__item-link--selected) {
  background-color: $hover-primary;
} */
</style>
