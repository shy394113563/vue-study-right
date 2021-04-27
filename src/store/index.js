import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    rightsList: JSON.parse(sessionStorage.getItem('rightList') || '[]'),
    userName: sessionStorage.getItem('username'),
  },
  mutations: {
    setRightList(state, data) {
      state.rightsList = data
      sessionStorage.setItem('rightList', JSON.stringify(data))
    },
    setUserName(state, data) {
      state.userName = data
      sessionStorage.setItem('username', data)
    },
  },
  actions: {},
  modules: {},
})
