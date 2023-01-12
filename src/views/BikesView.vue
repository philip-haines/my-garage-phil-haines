<template>
  <div class="home">
    <div class="bikes-container d-flex justify-space-between align-center flex-wrap">
      <template v-for="bike in bikes">
        <bike-card :bike="bike" />
      </template>
    </div>
  </div>
</template>

<script>
import axios from 'axios';
import BikeCard from '@/components/BikeCard.vue';

  export default {
    name: 'Bikes',
    data(){
      return {
        bikes: []
      }
    },
    components: {
      "bike-card": BikeCard
    },
    mounted(){
      this.getInitialData();
    },
    methods: {
      getInitialData(){
        axios.get('http://localhost:8000/bikes').then(response => this.bikes = response.data)
      }
    },
  }
</script>


<style scoped>
  .bikes-container{
    width: 80%;
    margin: 0 auto;
  }
</style>