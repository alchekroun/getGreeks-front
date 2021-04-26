<template>
  <div class="home">
    <Options/>
    <v-divider class="mx-4"></v-divider>
    <SelectGraph/>
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
