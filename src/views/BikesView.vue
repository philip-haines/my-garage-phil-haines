<template>
  <div class="home">
    <v-container class="d-flex align-center justify-center mt-4 filter-container">
      <bike-filter 
        v-for="manufacturer in manufacturers" 
        :key="manufacturer"
        :manufacturer="manufacturer"
        @filterBikes="filterBikes(manufacturer)"
      />
    </v-container>
    <div class="bikes-container d-flex justify-space-between align-center flex-wrap">
      <template v-for="bike in filteredBikes">
        <bike-card :bike="bike" />
      </template>
    </div>
  </div>
</template>

<script>
  import axios from 'axios';

  import BikeCard from '@/components/BikeCard.vue';
  import BikeFilter from '@/components/BikeFilter.vue';

  export default {
    name: 'Bikes',
    data(){
      return {
        bikes: [],
        filteredBikes: [],
      }
    },
    components: {
      "bike-card": BikeCard,
      "bike-filter": BikeFilter
    },
    mounted(){
      this.getInitialData();
    },
    methods: {
      getInitialData(){
        axios.get('http://localhost:8000/bikes').then(response => {
          this.bikes = response.data
          this.filteredBikes = [...this.bikes]
        })
      },
      filterBikes(manufacturer){
        if(manufacturer === "All") {
          this.filteredBikes = [...this.bikes]
          return 
        }

        const filteredBikes = this.bikes.filter(bike => bike.manufacturer == manufacturer)
        this.filteredBikes = filteredBikes
      }
    },
    computed:{
      manufacturers(){
        if(!this.bikes) return;

        return new Set(["All", ...this.bikes.map(bike => bike.manufacturer)])
      }
    }
  }
</script>


<style scoped>
  .bikes-container{
    width: 80%;
    margin: 0 auto;
  }
</style>