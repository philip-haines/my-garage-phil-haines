<template>
  <v-container class="mt-12">
    <v-row>
        <h4>See More Bikes</h4>
      </v-row>
    <v-row justify="space-between">
      <template v-for="bike in bikes">
        <bike-card :bike="bike" :isNavigation="true"/>
      </template>
    </v-row>
  </v-container>
</template>

<script>
  import axios from "axios"
  import BikeCard from '@/components/BikeCard.vue';
  export default { 
    components: {
      "bike-card": BikeCard,
    },
    data(){
      return {
        bikes: []
      }
    },
    mounted(){
      this.getInitialData()
    },
    methods: {
      getInitialData(){
        axios.get('http://localhost:8000/bikes').then(response => {
          this.bikes = response.data
        })
      }
    }}
</script>