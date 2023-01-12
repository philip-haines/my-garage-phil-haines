<template>
  <v-btn 
    class="mx-4 filter-button"
    :value="manufacturer"
    @click="filterBikes(manufacturer)"
  >
    {{ manufacturer }}
  </v-btn>
</template>

<script>
  export default {
    name: "bike-filter",
    props: {
      manufacturer: {
        type: String,
        required: true
      }
    },
    methods: {
      filterBikes(manufacturer){
        this.$emit('filterBikes', manufacturer)
      }
    }
  }
</script>