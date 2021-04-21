<template>
  <v-main>
    <v-container>
      <v-row>
        <v-col>
          <h3> Values of an option</h3>
        </v-col>
      </v-row>
      <v-row>
        <v-col>
          <h5>Enter the value</h5>
          <v-row align="center">
            <v-col class="d-flex" cols="12" sm="6">
              <v-text-field label="Spot" :rules="rules" hide-details="auto" id="spot">
              </v-text-field>
            </v-col>
            <v-col class="d-flex" cols="12" sm="6">
              <v-text-field label="Strike" :rules="rules" hide-details="auto" id="strike">
              </v-text-field>
            </v-col>
            <v-col class="d-flex" cols="12" sm="6">
              <v-text-field label="Drift" :rules="rules" hide-details="auto" id="drift">
              </v-text-field>
            </v-col>
            <v-col class="d-flex" cols="12" sm="6">
              <v-text-field label="Rate" :rules="rules" hide-details="auto" id="rate">
              </v-text-field>
            </v-col>
            <v-col class="d-flex" cols="12" sm="6">
              <v-text-field label="Expiration" :rules="rules" hide-details="auto"
                            id="expiration">
              </v-text-field>
            </v-col>
            <v-col class="d-flex" cols="12" sm="6">
              <v-select :items="items" label="Type"
                        outlined dark id="timeU"
                        item-text='value.name'
                        item-value='value.name'
                        >
              </v-select>
            </v-col>
            <v-col class="d-flex" cols="12" sm="6">
              <v-btn class="ma-2" outlined @click="calculateGreeks">Test</v-btn>
            </v-col>
          </v-row>
        </v-col>
        <v-col>
          <h5>Result</h5>
          <v-data-iterator
            :items="pricingOption"
            :items-per-page="2"
            hide-default-footer
            dark>
            <template v-slot:default="items">
              <v-row>
                <v-col
                v-for="item in items.items"
                :key="item.name"
                cols="6"
                sm="3"
                md="3"
                lg="6">
                  <v-card>
                    <v-card-title>{{item.name}}</v-card-title>
                    <v-divider></v-divider>
                    <v-list dense>
                      <v-list-item>
                        <v-list-item-content>Price:</v-list-item-content>
                        <v-list-item-content class="align-end">{{item.price}}</v-list-item-content>
                      </v-list-item>
                      <v-list-item>
                        <v-list-item-content>Delta:</v-list-item-content>
                        <v-list-item-content class="align-end">{{item.delta}}</v-list-item-content>
                      </v-list-item>
                      <v-list-item>
                        <v-list-item-content>Theta:</v-list-item-content>
                        <v-list-item-content class="align-end">{{item.theta}}</v-list-item-content>
                      </v-list-item>
                      <v-list-item>
                        <v-list-item-content>Gamma:</v-list-item-content>
                        <v-list-item-content class="align-end">{{item.gamma}}</v-list-item-content>
                      </v-list-item>
                      <v-list-item>
                        <v-list-item-content>Vega:</v-list-item-content>
                        <v-list-item-content class="align-end">{{item.vega}}</v-list-item-content>
                      </v-list-item>
                      <v-list-item>
                        <v-list-item-content>Rho:</v-list-item-content>
                        <v-list-item-content class="align-end">{{item.rho}}</v-list-item-content>
                      </v-list-item>
                    </v-list>
                  </v-card>
                </v-col>
              </v-row>
            </template>
          </v-data-iterator>
        </v-col>
      </v-row>
    </v-container>
  </v-main>
</template>

<script>
import axios from 'axios';

export default {
  name: 'Options',
  data() {
    return {
      rules: [
        (value) => !!value || 'Required',
      ],
      items: ['days', 'months', 'years'],
      pricingOption: [
        {
          name: 'Call',
          price: 0,
          delta: 0,
          theta: 0,
          gamma: 0,
          vega: 0,
          rho: 0,
        },
        {
          name: 'Put',
          price: 0,
          delta: 0,
          theta: 0,
          gamma: 0,
          vega: 0,
          rho: 0,
        },
      ],
    };
  },
  methods: {
    async calculateGreeks() {
      const spot = document.getElementById('spot').value;
      const strike = document.getElementById('strike').value;
      const drift = document.getElementById('drift').value;
      const rate = document.getElementById('rate').value;
      const expiration = document.getElementById('expiration').value;
      const timeU = 'days'; // document.getElementById('timeU').value;
      if (spot && strike && drift && rate && expiration && timeU) {
        const path = `http://localhost:5000/api/calc/option/${spot}/${strike}/${drift}/${rate}/${expiration}/${timeU}/`;
        axios.get(path).then((res) => {
          this.pricingOption = res.data;
        })
          .catch((error) => {
            console.error(error);
          });
      }
    },
  },
};
</script>

<style scoped>

#resultsgreeks {
  border-collapse: collapse;
  width: 100%;
}

#resultsgreeks td, #resultsgreeks th{
  border-bottom: 1px solid #515151;
  padding: 6px;
}

</style>
