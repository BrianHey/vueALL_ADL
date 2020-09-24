import Vue from 'vue'
import Vuex from 'vuex'
import { v4 as uuidv4 } from 'uuid'
Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    juguetes: [
      { id: uuidv4().slice(30), nombre: 'superman', stock: 100, precio: 5000, color: 'red', fecha: new Date() },
      { id: uuidv4().slice(30), nombre: 'batman', stock: 300, precio: 7000, color: 'blue', fecha: new Date() },
      { id: uuidv4().slice(30), nombre: 'iron-man', stock: 500, precio: 9000, color: 'yellow', fecha: new Date() },
    ],
    historialDeVentas: [],
  },
  getters: {
    productosConStock: (state) => {
      return state.juguetes.filter((producto) => {
        return producto.stock > 0
      })
    },
    productoDisponiblePorId: (state, getters) => (producto) => {
      return getters.productosConStock.filter((p) => p.id == producto || p.nombre.includes(producto))
    },
  },
  mutations: {
    DESCONTAR(state, newJuguetes) {
      state.juguetes = newJuguetes
    },
    REGISTRO(state, newHistorial) {
      state.historialDeVentas = newHistorial
    },
  },
  actions: {
    descontar({ commit, state, dispatch }, payload) {
      let registro
      let newJuguetes = state.juguetes.map((e) => {
        if (e.id == payload.trim()) {
          e.stock--
          registro = e
        }
        return e
      })
      commit('DESCONTAR', newJuguetes)
      console.log(registro)
      dispatch('registro', registro)
    },
    registro({ commit, state }, registro) {
      registro.fecha = new Date()
      let historial = state.historialDeVentas
      historial.push(registro)
      let newHistorial = historial
      commit('REGISTRO', newHistorial)
    },
  },

  modules: {},
})
