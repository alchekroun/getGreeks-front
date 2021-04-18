<template>
  <v-app>
    <v-app-bar
      absolute
      elevate-on-scroll
      app
    >
      <v-toolbar-title>GetGreeks</v-toolbar-title>

      <v-spacer></v-spacer>

      <v-btn text to="/">
        Home
      </v-btn>

      <v-btn text to="/about">
        About
      </v-btn>
    </v-app-bar>

    <v-main>
      <Home/>
    </v-main>
  </v-app>
</template>

<script>
import Home from './views/Home.vue';

export default {
  name: 'App',
  components: {
    Home,
  },

  data() {
  },
};
</script>

<style>
</style>
