<template>
  <v-app>
    <v-app-bar
      app
      dark
    >
    <h1>My Garage</h1>

      <v-spacer></v-spacer>
        <v-btn
        text
        :to="{
          name: 'BikesView', 
        }" 
      >
        <v-icon>mdi-home</v-icon>
      </v-btn>
    </v-app-bar>

    <v-main>
      <router-view :key="$route.path"/>
    </v-main>
  </v-app>
</template>

<script>

export default {
  name: 'App',

  data: () => ({
    //
  }),

  created(){
    this.$store.dispatch('setInitialData')
  }
};
</script>
