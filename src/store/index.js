import Vue from 'vue'
import Vuex from 'vuex'
import axios from 'axios'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    manufacturer: 'All',
    allBikes: [],
    selectedBikeID: null
  },
  getters: {
    allBikes(state){
      return state.allBikes
    },
    filteredBikes(state, getters){
      if(state.manufacturer === 'All'){
        return getters.allBikes
      }

      return [...getters.allBikes.filter(bike => bike.manufacturer == state.manufacturer)]
    },
    allManufacturers(_, getters){
      return new Set(["All", ...getters.allBikes.map(bike => bike.manufacturer)])
    },
    selectedBike(state){
      return state.allBikes.find(bike => bike.id === state.selectedBikeID)
    },
  },
  mutations: {
    setFilteredBikes(state, manufacturer){
      state.manufacturer = manufacturer
    },
    setSelectedBike(state, bikeID){
      state.selectedBikeID = parseInt(bikeID)
    }
  },
  actions: {
    async setInitialData(){
      await axios.get('http://localhost:8000/bikes').then(response => {
        this.state.allBikes = [...this.state.allBikes, ...response.data]
      })
    }
  },
  modules: {
  }
})
