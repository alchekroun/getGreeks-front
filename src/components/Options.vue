<template>
  <v-main>
    <v-container>
      <v-row>
        <v-col>
          <h3>Values of an option</h3>
        </v-col>
      </v-row>
      <v-row>
        <v-col>
          <h5>Input</h5>
          <v-form v-model="isFormValid">
            <v-row align="center">
              <v-col class="d-flex" cols="12">
                <v-select :items="types" label="Type"
                          item-text='value.name'
                          item-value='value.name'
                          v-model="formValues.typeOption"
                >
                </v-select>
              </v-col>
            <v-col class="d-flex" cols="12" sm="6">
              <v-text-field label="Spot" :rules="[rules.required, rules.gt0]"
                            hide-details="auto" v-model="formValues.spot">
              </v-text-field>
            </v-col>
            <v-col class="d-flex" cols="12" sm="6">
              <v-text-field label="Strike" :rules="[rules.required, rules.gt0]"
                            hide-details="auto" v-model="formValues.strike">
              </v-text-field>
            </v-col>
            <v-col class="d-flex" cols="12" sm="6">
              <v-text-field label="Drift" :rules="[rules.required, rules.gt0, rules.lte1]"
                            hide-details="auto" v-model="formValues.drift">
              </v-text-field>
            </v-col>
            <v-col class="d-flex" cols="12" sm="6">
              <v-text-field label="Rate" :rules="[rules.required, rules.gt0, rules.lte1]"
                            hide-details="auto" v-model="formValues.rate">
              </v-text-field>
            </v-col>
            <v-col class="d-flex" cols="12" sm="6">
              <v-text-field label="Expiration" :rules="[rules.required, rules.gt0]"
                            hide-details="auto"
                            v-model="formValues.expiration">
              </v-text-field>
            </v-col>
            <v-col class="d-flex" cols="12" sm="6">
              <v-select :items="times" label="Type"
                        item-text='value.name'
                        item-value='value.name'
                        :rules="[rules.required]"
                        v-model="formValues.timeUnity"
                        >
              </v-select>
            </v-col>
            <v-col v-if="!isVanilla" class="d-flex" cols="12" sm="6">
              <v-text-field label="Dividend" :rules="[rules.required, rules.gt0]"
                            hide-details="auto"
                            v-model="formValues.dividend">
              </v-text-field>
            </v-col>
            <v-col class="d-flex" cols="12" sm="6">
              <v-btn class="ma-2" @click="calculateGreeks"
                     :disabled="!isFormValid">Calculate</v-btn>
            </v-col>
          </v-row>
          </v-form>
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
                xs="12"
                sm="12"
                md="6"
                lg="6">
                  <v-card
                      color="rgba(66, 184, 131, 0.1)">
                    <v-card-title>{{item.name}}</v-card-title>
                    <v-list dense v-for="value in valuesAvailable" :key="value"
                            color="rgba(66, 184, 131, 0.1)">
                      <v-list-item>
                        <v-list-item-content>{{value}}:</v-list-item-content>
                        <v-list-item-content class="align-end">{{item[value]}}</v-list-item-content>
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
      isFormValid: false,
      rules: {
        required: (value) => !!value || 'Required',
        gt0: (value) => value > 0 || 'Positive only',
        lte1: (value) => value <= 1 || 'Less or equal than 1',
      },
      formValues: {
        spot: null,
        strike: null,
        drift: null,
        rate: null,
        dividend: null,
        timeUnity: null,
        typeOption: 'Vanilla',
      },
      types: ['Vanilla', 'Dividend'],
      times: ['days', 'months', 'years'],
      valuesAvailable: ['price', 'delta', 'theta', 'gamma', 'vega', 'rho'],
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
  computed: {
    isVanilla() {
      return this.formValues.typeOption === 'Vanilla';
    },
  },
  methods: {
    async calculateGreeks() {
      const { spot } = this.formValues;
      const { strike } = this.formValues;
      const { drift } = this.formValues;
      const { rate } = this.formValues;
      const { expiration } = this.formValues;
      const timeU = this.formValues.timeUnity;
      const type = this.formValues.typeOption;
      const dividend = !this.isVanilla ? this.formValues.dividend : -1;
      if (spot && strike && drift && rate && expiration && timeU && type && dividend) {
        const path = `http://localhost:5000/calc/option/${type}/`;
        axios.post(path, {
          spot,
          strike,
          drift,
          rate,
          expiration,
          time: timeU,
          dividend,
        }).then((res) => {
          this.pricingOption = res.data;
        }).catch((error) => {
          console.error(error);
        });
      }
    },
  },
};
</script>

<style scoped>
</style>
