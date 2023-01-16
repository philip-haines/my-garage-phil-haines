import Vue from 'vue'
import Vuex from 'vuex'
import axios from 'axios'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    testNumber: 0,
    filteredBikes: [],
    allBikes: [],
    selectedBike: {}
  },
  getters: {
    allBikes(state){
      return state.allBikes
    },
    filteredBikes(state){
      return state.filteredBikes
    },
    allManufacturers(_, getters){
      return new Set(["All", ...getters.allBikes.map(bike => bike.manufacturer)])
    },
    getSelectedBike(state){
      return state.selectedBike
    },
  },
  mutations: {
    setFilteredBikes(state, manufacturer){
      if(manufacturer === 'All'){
        state.filteredBikes = [...state.allBikes]
        return
      }

      state.filteredBikes = [...state.allBikes.filter(bike => bike.manufacturer == manufacturer)]
    },
    setSelectedBike(state, bikeID){
      state.selectedBike = state.allBikes.find(bike => bike.id == bikeID)
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
