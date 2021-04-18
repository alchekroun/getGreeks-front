<template>
  <v-main>
    <v-container>
      <v-row>
        <v-col>
          <h4>Vega</h4>
        </v-col>
      </v-row>
      <v-row>
        <v-col>
          <h5>Enter the value</h5>
          <v-col class="d-flex" cols="12" sm="12">
            <v-subheader class="p1-0">
              Stock price range
            </v-subheader>
            <v-range-slider v-model="ranges.rangeStock.range"
                            :min="ranges.rangeStock.min"
                            :max="ranges.rangeStock.max"
                            hide-details class="align-center">
              <template v-slot:prepend>
                <v-text-field
                  :value="ranges.rangeStock.range[0]"
                  class="mt-0 pt-0"
                  hide-details
                  single-line
                  type="number"
                  style="width: 60px"
                  @change="$set(ranges.rangeStock.range, 0, $event); calculateVega"
                ></v-text-field>
              </template>
              <template v-slot:append>
                <v-text-field
                  :value="ranges.rangeStock.range[1]"
                  class="mt-0 pt-0"
                  hide-details
                  single-line
                  type="number"
                  style="width: 60px"
                  @change="$set(ranges.rangeStock.range, 1, $event)"
                ></v-text-field>
              </template>
            </v-range-slider>
          </v-col>
          <v-col class="d-flex" cols="12" sm="12">
            <v-subheader class="p1-0">
              Strike
            </v-subheader>
            <v-slider
              v-model="ranges.rangeStrike.slider"
              class="align-center"
              :max="ranges.rangeStrike.max"
              :min="ranges.rangeStrike.min"
              hide-details
              @change="calculateVega"
            >
              <template v-slot:append>
                <v-text-field
                  v-model="ranges.rangeStrike.slider"
                  class="mt-0 pt-0"
                  hide-details
                  single-line
                  type="number"
                  style="width: 60px;">
                </v-text-field>
              </template>
            </v-slider>
          </v-col>
          <v-col class="d-flex" cols="12" sm="12">
            <v-subheader class="p1-0">
              Rate
            </v-subheader>
            <v-slider
              v-model="ranges.rangeRate.slider"
              class="align-center"
              :max="ranges.rangeRate.max"
              :min="ranges.rangeRate.min"
              hide-details
              step="0.1"
              @change="calculateVega"
            >
              <template v-slot:append>
                <v-text-field
                  v-model="ranges.rangeRate.slider"
                  class="mt-0 pt-0"
                  hide-details
                  single-line
                  type="number"
                  style="width: 60px;">
                </v-text-field>
              </template>
            </v-slider>
          </v-col>
          <v-col class="d-flex" cols="12" sm="12">
            <v-subheader class="p1-0">
              Drift
            </v-subheader>
            <v-slider
              v-model="ranges.rangeDrift.slider"
              class="align-center"
              :max="ranges.rangeDrift.max"
              :min="ranges.rangeDrift.min"
              hide-details
              step="0.1"
              @change="calculateVega"
            >
              <template v-slot:append>
                <v-text-field
                  v-model="ranges.rangeDrift.slider"
                  class="mt-0 pt-0"
                  hide-details
                  single-line
                  type="number"
                  style="width: 60px;">
                </v-text-field>
              </template>
            </v-slider>
          </v-col>
          <v-col class="d-flex" cols="12" sm="12">
            <v-subheader class="p1-0">
              Expiration
            </v-subheader>
            <v-slider
              v-model="ranges.rangeExpiration.slider"
              class="align-center"
              :max="ranges.rangeExpiration.max"
              :min="ranges.rangeExpiration.min"
              hide-details
              @change="calculateVega"
            >
              <template v-slot:append>
                <v-text-field
                  v-model="ranges.rangeExpiration.slider"
                  class="mt-0 pt-0"
                  hide-details
                  single-line
                  type="number"
                  style="width: 60px;">
                </v-text-field>
              </template>
            </v-slider>
          </v-col>
        </v-col>
        <v-col>
          <h5>Result</h5>
          <div id="chart">
            <apexchart type="line" height="350" :options="chartOptions" :series="series">
            </apexchart>
          </div>
        </v-col>
      </v-row>
    </v-container>
  </v-main>
</template>

<script>
import VueApexCharts from 'vue-apexcharts';
import axios from 'axios';

export default {
  name: 'Graph',
  components: {
    apexchart: VueApexCharts,
  },
  data() {
    return {
      ranges: {
        rangeStock: {
          min: 1,
          max: 100,
          range: [20, 80],
        },
        rangeStrike: {
          min: 1,
          max: 100,
          slider: 50,
        },
        rangeRate: {
          min: 0.1,
          max: 1,
          slider: 0.05,
        },
        rangeDrift: {
          min: 0.1,
          max: 1,
          slider: 0.05,
        },
        rangeExpiration: {
          min: 1,
          max: 365,
          slider: 30,
        },
      },
      series: [{
        name: 'call',
      }, {
        name: 'put',
      }],
      chartOptions: {
        chart: {
          height: 350,
          type: 'line',
          zoom: {
            enabled: true,
          },
        },
        dataLabels: {
          enabled: false,
        },
        noData: {
          text: 'Loading...',
        },
        title: {
          text: 'Variation du Vega',
          align: 'left',
        },
        yaxis: {
          tickAmount: 5,
        },
        xaxis: {
          type: 'numeric',
          labels: {
            show: true,
          },
          axisTicks: {
            show: true,
          },
          axisBorder: {
            show: true,
          },
          cosshairs: {
            show: true,
          },
        },
      },
    };
  },
  methods: {
    async calculateVega() {
      const spotB = this.ranges.rangeStock.range[0];
      const spotE = this.ranges.rangeStock.range[1];
      const strike = this.ranges.rangeStrike.slider;
      const drift = this.ranges.rangeDrift.slider;
      const rate = this.ranges.rangeRate.slider;
      const expiration = this.ranges.rangeExpiration.slider;
      if (spotB && spotE && strike && drift && rate && expiration) {
        const path = `http://localhost:5000/api/calc/vega/${spotB}/${spotE}/${strike}/${drift}/${rate}/${expiration}/`;
        axios.get(path).then((res) => {
          this.series = [{
            name: 'call',
            data: res.data.call,
          }, {
            name: 'put',
            data: res.data.put,
          }];
        })
          .catch((error) => {
            console.error(error);
          });
      }
    },
  },
};
</script>

<style>

</style>
