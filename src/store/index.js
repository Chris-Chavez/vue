import Vue from 'vue'
import Vuex from 'vuex'
import axios from 'axios'
Vue.use(Vuex)
export default new Vuex.Store({
  state: {
    generos: [],
    peliculas: [],
    loading: false,
  },
  mutations: {
    SET_GENEROS(state, generos) {
      state.generos = generos
    },
    SET_PELICULAS(state, peliculas) {
      state.peliculas = peliculas
    },
    SET_LOADING(state, load) {
      state.loading = load
    }
  },
  actions: {
    setGeneros({commit}){
      commit('SET_LOADING', true)
      axios.get('http://localhost:3000/Generos')
      .then( response => {
        console.log(response)
        commit('SET_GENEROS', response.data)
      })
      .finally(() => commit('SET_LOADING', false))
    },
    crearGenero({commit}, {params, onComplete, onError}) {
      axios.post('http://127.0.0.1:3000/agregar-genero', params)
      .then(onComplete)
      .catch(onError)
    },
    obtenerGenero({commit}, { id, onComplete, onError}) {
      axios.get(`http://localhost:3000/Generos/EditarG/${id}`)
      .then(onComplete)
      .catch(onError)
    },
    editarGenero({commit}, {id, params, onComplete, onError}) {
      axios.put(`http://localhost:3000/Generos/EditarG/${id}`, params)
      .then(onComplete)
      .catch(onError)
    },
    eliminarGenero({commit}, {id, onComplete, onError}) {
      axios.delete(`http://localhost:3000/Generos/${id}`)
      .then(onComplete)
      .catch(onError)
    },
    setPeliculas({commit}){
      commit('SET_LOADING', true)
      axios.get('http://localhost:3000/peliculas')
      .then( response => {
        console.log(response)
        commit('SET_PELICULAS', response.data)
      })
      .finally(() => commit('SET_LOADING', false))
    },
    crearPelicula({commit}, {params, onComplete, onError}) {
      axios.post('http://localhost:3000/agregar-peliculas', params)
      .then(onComplete)
      .catch(onError)
    },
      obtenerPelicula({commit}, { id, onComplete, onError}) {
      axios.get(`http://localhost:3000/peliculas/EditarP/${id}`)
      .then(onComplete)
      .catch(onError)
    },
    editarPelicula({commit}, {id, params, onComplete, onError}) {
      axios.put(`http://localhost:3000/peliculas/EditarP/${id}`, params)
      .then(onComplete)
      .catch(onError)
    },
    eliminarPelicula({commit}, {id, onComplete, onError}) {
      axios.delete(`http://localhost:3000/peliculas/${id}`)
      .then(onComplete)
      .catch(onError)
    },
  },
  getters: {
    allPersonas: state => {
      return state.generos
    },
    allPeliculas: state => {
      return state.peliculas
    },
    getLoading: state => {
      return state.loading
    }
  }
})