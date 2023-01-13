<template>
  <div>
    <v-container>
      <v-row>
        <v-col cols="6">
          <v-img 
            :src="setBikeImage(bike.model)"
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
  import axios from "axios"
  import Navigation from "@/components/Navigation.vue"

  export default {
    name: "BikeView",
    components: {
      "vue-navigation": Navigation
    },
    data(){
      return{
        bike: {}
      }
    },
    mounted(){
      this.setBikeData(this.$route.params.id)
    },
    methods:{
      setBikeData(id){
        axios.get(`http://localhost:8000/bikes/${id}`)
        .then(res => this.bike = res.data)
      },
      setBikeImage(model){
        const imagePaths = {
          "Monster 821 Stealth": require("@/assets/images/monster-821-stealth.png"),
          "F 750 GS": require("@/assets/images/f-750-gs.png"),
          "Scout Bobber": require("@/assets/images/scout-bobber.png"),
          "Panigale V4": require("@/assets/images/panigale-v4.png")
        }

        return imagePaths[model]
      }
    }
  }
</script>