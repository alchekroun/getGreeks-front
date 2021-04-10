<template>
  <div class="home">
    <HelloWorld msg="Welcome to Your Vue.js App"/>
    <Options/>
    <Graph/>
  </div>
</template>

<script>
// @ is an alias to /src
import HelloWorld from '@/components/HelloWorld.vue';
import Options from '@/components/Options.vue';
import Graph from '@/components/Graph.vue';

export default {
  name: 'Home',
  components: {
    Graph,
    Options,
    HelloWorld,
  },
};
</script>

<style>

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
}
</style>
