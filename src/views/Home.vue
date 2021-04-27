<template>
  <div class="home">
    <v-container>
      <v-row>
        <v-col class="text-center">
          <h2>Welcome to <strong>getGreeks</strong></h2>
          <p>Calculate the Greeks easily.<br> Feel free to visualize the Greeks on
            <a href="#GraphSection" class="text-decoration-none">Graph section</a> by varying
          the strike, rate, drift, ...</p>
        </v-col>
      </v-row>
    </v-container>
    <Options/>
    <v-divider class="mx-4"></v-divider>
    <SelectGraph id="GraphSection"/>
  </div>
</template>

<script>
// @ is an alias to /src
import Options from '@/components/Options.vue';
import SelectGraph from '@/components/SelectGraph.vue';

export default {
  name: 'Home',
  components: {
    Options,
    SelectGraph,
  },
  data() {
    return {
    };
  },
};
</script>
