<template>
  <div class="home">
    <HelloWorld msg="Welcome to Your Vue.js App"/>
    <Options/>
  </div>
</template>

<script>
// @ is an alias to /src
import HelloWorld from '@/components/HelloWorld.vue';
import Options from '@/components/Options.vue';

export default {
  name: 'Home',
  components: {
    Options,
    HelloWorld,
  },
};
</script>
