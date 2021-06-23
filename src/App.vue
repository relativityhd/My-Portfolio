<template>
  <div id="app" :class="$store.state.theme">
    <AppHeader />
    <AppUpdate />
    <router-view id="app-view" />
  </div>
</template>

<script>
import AppHeader from './components/AppHeader'
import AppUpdate from './components/AppUpdate'

export default {
  name: 'App',
  metaInfo() {
    return {
      title: 'Tobias Hölzer - Portfolio',
      meta: [
        { name: 'description', content: this.$t('Home.welcome') },
        { name: 'google-site-verification', content: 'ImEnCTNqAoSvo17jsp6UFzrgXKUnYKcH4knUo-NzG58' }
      ]
    }
  },
  components: {
    AppHeader,
    AppUpdate
  },
  methods: {
    onResize() {
      this.$store.commit('viewChange')
    },
    setLang() {
      if (process.env.NODE_ENV !== 'production') return

      let lang = navigator.language || navigator.userLanguage
      lang = lang.split('-')[0]
      this.$store.dispatch('setLang', lang)
    }
  },
  mounted() {
    window.addEventListener('resize', this.onResize)
    this.setLang()

    if (!window.matchMedia) return

    if (window.matchMedia('(prefers-color-scheme: light)').matches) {
      this.$store.dispatch('setTheme', false)
    } else if (window.matchMedia('(prefers-color-scheme: dark)').matches) {
      this.$store.dispatch('setTheme', true)
    }

    window.matchMedia('(prefers-color-scheme: light)').addEventListener('change', e => {
      if (e.matches) {
        this.$store.dispatch('setTheme', false)
      } else {
        this.$store.dispatch('setTheme', true)
      }
    })
  },

  beforeDestroy() {
    window.removeEventListener('resize', this.onResize)
  }
}
</script>

<style lang="scss">
@import './assets/styles/_carbon-precompile.css';
@import './assets/styles/_theme.scss';

#app {
  background-color: $ui-background;
  color: $text-01;
  // width: 100vw; Doesn't work on windows
  margin: 0;
  padding: 0;
  overflow-x: hidden;

  -webkit-transition: background-color $theme-transition-time $theme-transition-type,
    color $theme-transition-time $theme-transition-type;
  -ms-transition: background-color $theme-transition-time $theme-transition-type,
    color $theme-transition-time $theme-transition-type;
  transition: background-color $theme-transition-time $theme-transition-type,
    color $theme-transition-time $theme-transition-type;
}

#app-view {
  margin-top: calc(48px + 24px);
  min-height: calc(100vh - 48px - 24px);
  padding-bottom: 20px;
}
.bx--number--mobile input[type='number'] {
  width: 100% !important;
}

@keyframes colorWheel {
  0% {
    filter: hue-rotate(0deg);
  }
  100% {
    filter: hue-rotate(360deg);
  }
}
</style>
