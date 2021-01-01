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
#app-view {
  margin-top: calc(48px + 24px);
  min-height: calc(100vh - 48px - 24px);
  padding-bottom: 250px;
}
.bx--number--mobile input[type='number'] {
  width: 100% !important;
}
</style>
