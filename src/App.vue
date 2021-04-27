<template>
  <v-app>
    <v-app-bar
      absolute
      elevate-on-scroll
      app
      dense
      color="rgba(66, 184, 131, 0.1)"
    >
      <v-toolbar-title>GetGreeks</v-toolbar-title>
      <v-spacer></v-spacer>
      <v-btn text to="/">
        Home
      </v-btn>
      <v-btn text to="/doc">
        Documentation
      </v-btn>
      <v-btn text to="/about">
        About
      </v-btn>
    </v-app-bar>
    <v-main>
      <router-view/>
    </v-main>
    <v-footer outlined padless
              color="rgba(66, 184, 131, 0.1)">
      <v-col class="text-center" cols="12">
        &copy; {{ new Date().getFullYear() }} - <strong>Alex</strong>
      </v-col>
    </v-footer>
  </v-app>
</template>

<script>

export default {
  name: 'App',

  data() {
    return {};
  },
};
</script>

<style lang="scss">
$body-font-family: 'Oxygen', sans-serif;
$title-font-family: 'Helvetica', serif !important;

.v-application {
  font-family: $body-font-family;
}

.headline,
.title,
.subheading {
  font-family: $title-font-family;
}
</style>
