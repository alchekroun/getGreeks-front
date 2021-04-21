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
    <v-footer>
      <v-col class="text-center" cols="12">
        {{ new Date().getFullYear() }} - <strong>Alex</strong>
      </v-col>
    </v-footer>
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
