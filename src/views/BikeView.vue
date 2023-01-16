<template>
  <div>
    <v-container>
      <v-row>
        <v-col cols="6">
          <v-img 
            :src="bikeImagePath"
            :alt="bike.model"
          />
        </v-col>
        <v-col cols="6">
          <div class="mb-3">
            <h1>{{ bike.manufacturer }}</h1>
            <h2>{{ bike.model }}</h2>
          </div>
          <p>{{ bike.description }}</p>
          <v-row>
            <v-col>Color: {{ bike.color }}</v-col>
            <v-col>Year: {{ bike.year }}</v-col>
          </v-row>
          <v-row>
            <v-col>Power: {{ bike.power }}</v-col>
            <v-col>Displacement: {{ bike.displacement }}</v-col>
          </v-row>
        </v-col>
      </v-row>
      <v-row>
        <vue-navigation />
      </v-row>
    </v-container>
  </div>
</template>


<script>
  import Navigation from "@/components/Navigation.vue"

  export default {
    name: "BikeView",
    components: {
      "vue-navigation": Navigation
    },
    mounted(){
      this.setBikeData(this.$route.params.id)
    },
    methods:{
      setBikeData(id){
        this.$store.commit('setSelectedBike', id)
      }
    },
    computed: {
      bike() {
        return this.$store.getters.getSelectedBike
      },
      bikeImagePath(){
        if(!this.$route.params.handle) return
        return require(`@/assets/images/${this.$route.params.handle}.png`)
      }
    }
  }
</script>