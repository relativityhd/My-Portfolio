<template>
  <div id="app">
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
  },

  beforeDestroy() {
    window.removeEventListener('resize', this.onResize)
  }
}
</script>

<style lang="scss">
@import './assets/styles/_carbon-precompile.css';

html,
body {
  background-color: $ui-background;
  color: $text-01;
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
