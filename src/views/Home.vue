<template>
  <div class="home">
    <Options/>
    <v-divider></v-divider>
    <v-container><h3>Graphs</h3></v-container>
    <GraphDelta/>
    <GraphTheta/>
    <GraphGamma/>
    <GraphVega/>
    <GraphRho/>
  </div>
</template>

<script>
// @ is an alias to /src
import Options from '@/components/Options.vue';
import GraphDelta from '@/components/GraphDelta.vue';
import GraphTheta from '@/components/GraphTheta.vue';
import GraphGamma from '@/components/GraphGamma.vue';
import GraphVega from '@/components/GraphVega.vue';
import GraphRho from '@/components/GraphRho.vue';

export default {
  name: 'Home',
  components: {
    Options,
    GraphDelta,
    GraphTheta,
    GraphGamma,
    GraphVega,
    GraphRho,
  },
};
</script>

<style>
/*
.container {
  background: #424242;
  border-radius: 0.3rem;
  box-shadow: 0 2px 4px -1px rgba(0, 0, 0, 0.2),
  0 4px 5px 0 rgba(0, 0, 0, 0.14), 0 1px 10px 0 rgba(0, 0, 0, 0.12);
  transition: box-shadow 0.28s cubic-bezier(0.4, 0, 0.2, 1);
  margin-top: 20px;
}

.container:hover{
  box-shadow: 0 11px 15px -7px rgba(0, 0, 0, 0.2),
  0 24px 38px 3px rgba(0, 0, 0, 0.14), 0 9px 46px 8px rgba(0, 0, 0, 0.12);
}*/
</style>
