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

    <template v-slot:header-global>
      <cv-header-global-action aria-label="Switch Theme" @click="toggleTheme">
        <Theme20 />
      </cv-header-global-action>
      <cv-header-global-action aria-label="Languages" aria-controls="language-panel" ref="translateIcon">
        <Translate20 />
      </cv-header-global-action>
    </template>

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
import Theme20 from '@carbon/icons-vue/es/brightness-contrast/20'

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
    Translate20,
    Theme20
  },
  data() {
    let links = [
      { name: 'App.home', to: '/' },
      { name: 'App.profile', to: '/profile' },
      { name: 'App.stats', to: '/stats' },
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
    },
    toggleTheme() {
      this.$store.dispatch('setTheme', !this.$store.state.isDark)
    }
  }
}
</script>

<style lang="scss">
.logo {
  height: 24px;
  margin-right: -5px;
}

#app-header {
  width: 100vw;
}
</style>
