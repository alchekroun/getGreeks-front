import Vue from 'vue';
import VueFusionCharts from 'vue-fusioncharts';
import FusionCharts from 'fusioncharts';
import Column2D from 'fusioncharts/fusioncharts.charts';
import FusionTheme from 'fusioncharts/themes/fusioncharts.theme.fusion';
import App from './App.vue';
import router from './router';
import 'bootstrap/dist/css/bootstrap.css';

Vue.config.productionTip = false;

Vue.use(VueFusionCharts, FusionCharts, Column2D, FusionTheme);

new Vue({
  router,
  render: (h) => h(App),
}).$mount('#app');
