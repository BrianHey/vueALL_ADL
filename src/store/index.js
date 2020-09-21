import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    juguetes: [
      { id:"001", nombre: "superman", stock: 100, precio: 5000},
      { id:"002", nombre: "batman", stock: 300, precio: 7000},
      { id:"003", nombre: "iron-man", stock: 500, precio: 9000},
    ]
  },
  mutations: {},
  actions: {},
  modules: {},
})
