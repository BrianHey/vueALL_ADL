import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    data: {}
  },
  mutations: {
    CONSUMIR_API(state, data){
      state.data = data
    }
  },
  actions: {
    consumirApi(store){
      fetch('https://images-api.nasa.gov/search?q=venus')
      .then(res => res.json())
      .then(data => store.commit('CONSUMIR_API', data))},
  },
  modules: {
  }
})
