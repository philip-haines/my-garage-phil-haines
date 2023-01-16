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
  import BikeCard from '@/components/BikeCard.vue';
  export default { 
    components: {
      "bike-card": BikeCard,
    },
    computed: {
      bikes(){
        return this.$store.getters.allBikes
      }
    }
  }
</script>