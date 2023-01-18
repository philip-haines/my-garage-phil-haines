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
      <template v-for="bike in bikes">
        <bike-card :bike="bike" />
      </template>
    </div>
  </div>
</template>

<script>
  import BikeCard from '@/components/BikeCard.vue';
  import BikeFilter from '@/components/BikeFilter.vue';

  export default {
    name: 'Bikes',
    components: {
      "bike-card": BikeCard,
      "bike-filter": BikeFilter
    },
    methods: {
      filterBikes(manufacturer){
        this.$store.commit('setFilteredBikes', manufacturer)
      }
    },
    computed:{
      bikes(){
        if(!this.$store.getters.filteredBikes.length) return;

        return this.$store.getters.filteredBikes
      },
      manufacturers(){
        return this.$store.getters.allManufacturers
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