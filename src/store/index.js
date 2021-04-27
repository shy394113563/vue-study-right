import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    rightsList: JSON.parse(localStorage.getItem('rightList') || '[]'),
    userName: localStorage.getItem('username'),
  },
  mutations: {
    setRightList(state, data) {
      state.rightsList = data
      localStorage.setItem('rightList', JSON.stringify(data))
    },
    setUserName(state, data) {
      state.userName = data
      localStorage.setItem('username', data)
    },
  },
  actions: {},
  modules: {},
})
