<template>
  <div class="options">
    <div class="container">
      <div class="row">
        <div class="col">
          <h3>Graphs</h3>
        </div>
      </div>
      <div class="row">
        <div class="col">
          <h5>Enter the value</h5>
          <label> Rate
            <input class="form-control" name="rate" id="rate" placeholder="0.1" step="0.01"
                   type="number"/>
          </label>
          <label> Drift
            <input class="form-control" name="drift" id="drift" placeholder="0.5" step="0.01"
                   type="number"/>
          </label>
          <label> Expiration
            <input class="form-control" name="expiration" id="expiration" placeholder="15"
                   type="number"/>
          </label>
          <label> Time
            <select class="form-control" name="timeU" id="timeU">
              <option value="days" selected>days</option>
              <option value="months">months</option>
              <option value="years">years</option>
            </select>
          </label><br>
          <label> Spot
            <input class="form-control" name="spot"
                   id="spot" placeholder="50" type="range" min="0" step="0.5"/>
          </label>
          <label> Strike
            <input class="form-control" name="strike"
                   id="strike" placeholder="51" type="range" min="0" step="0.5"/>
          </label>
        </div>
        <div class="col">
          <h5>Result</h5>
          <div id="chart">
            <apexchart type="line" height="350" :options="chartOptions" :series="series">
            </apexchart>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import VueApexCharts from 'vue-apexcharts';

export default {
  name: 'Graph',
  components: {
    apexchart: VueApexCharts,
  },
  data() {
    return {
      series: [{
        name: 'Desktops',
        data: [10, 41, 35, 51, 49, 62, 69, 91, 148],
      }],
      chartOptions: {
        chart: {
          height: 350,
          type: 'line',
          zoom: {
            enabled: false,
          },
        },
        dataLabels: {
          enabled: true,
        },
        stroke: {
          curve: 'straight',
        },
        title: {
          text: 'Product Trends by Month',
          align: 'left',
        },
        grid: {
          row: {
            colors: ['#000000', 'transparent'], // takes an array which will be repeated on columns
            opacity: 0.5,
          },
        },
        xaxis: {
          categories: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep'],
        },
      },
    };
  },
};
</script>

<style scoped>

</style>
