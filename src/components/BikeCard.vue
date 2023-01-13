<template>
  <v-hover v-slot="{ hover }">
    <v-card
      :key="bike.id"
      class="mt-6"
      :img="setBikeImage(bike.model)"
      :class="[hover ? 'pointer' : '', isNavigation ? 'nav-card' : 'bike-card']"
      :to="{
          name: 'BikeView', 
          params: {handle: handelizedModel, id: bike.id},
        }"
    >
      <v-expand-transition>
        <div v-if="hover" class="overlay transition-fast-in-fast-out v-card--reveal display-3" style="height: 100%;">
          <v-card-title tag="p" class="red--text">{{ bike.manufacturer }} </v-card-title>
          <v-card-title tag="h3" class="d-flex align-center justify-center bike-model white--text text--lighten-4">{{ bike.model }}</v-card-title>
        </div>
      </v-expand-transition>
    </v-card>
  </v-hover>
</template>

<script>
  export default {
    name: "bike-card",
    props: {
      bike: {
        type: Object,
        required: true
      },
      isNavigation: {
        type: Boolean,
        required: false,
        default: false
      }
    },
    methods: {
      setBikeImage(model){
        const imagePaths = {
          "Monster 821 Stealth": require("@/assets/images/monster-821-stealth.png"),
          "F 750 GS": require("@/assets/images/f-750-gs.png"),
          "Scout Bobber": require("@/assets/images/scout-bobber.png"),
          "Panigale V4": require("@/assets/images/panigale-v4.png")
        }

        return imagePaths[model]
      }
    },
    computed: {
      handelizedModel(){
        if(!this.bike.model) return

        return this.bike.model.toLocaleLowerCase().split(" ").join("-")
      }
    }
  }
</script>

<style scoped>
  .pointer{
    cursor: pointer
  }

  .bike-card{
    width: 49%;
    height: 325px;
  }

  .nav-card{
    width: 24%;
    height: 200px;
  }

  .overlay{
    background-color: rgba(0, 0, 0, 0.275);
  }

  .bike-model{
    width: 100%;
    height: 80%;
  }
</style>