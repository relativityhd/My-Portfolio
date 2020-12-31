import Vue from 'vue'
import Vuex from 'vuex'
import i18n from '../i18n'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    mobile: window.innerWidth <= 800,
    lang: 'en',
    languages: [
      { isoCode: 'de', name: 'Deutsch', selected: false },
      { isoCode: 'en', name: 'English', selected: true }
    ]
  },
  mutations: {
    viewChange(state) {
      state.mobile = window.innerWidth <= 800
    }
  },
  actions: {
    setLang({ state }, lang) {
      const isoCodes = state.languages.map(l => l.isoCode)
      lang = isoCodes.includes(lang) ? lang : 'en'
      state.lang = lang
      i18n.locale = lang
      state.languages.forEach(language => {
        language.selected = language.isoCode === lang
      })
    }
  },
  modules: {}
})
