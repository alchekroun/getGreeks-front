<template>
  <div class="options">
    <div class="container">
      <div class="row">
        <div class="col">
          <h3> Values of an option</h3>
        </div>
      </div>
      <div class="row">
        <div class="col">
          <h5>Enter the value</h5>
          <label> Spot
            <input class="form-control" name="spot" id="spot" placeholder="50" type="number"/>
          </label>
          <label> Strike
            <input class="form-control" name="strike" id="strike" placeholder="51" type="number"/>
          </label>
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
          <button class="btn btn-dark" @click="calculateGreeks">Calculate</button>
        </div>
        <div class="col">
          <h5>Result</h5>
          <table id="resultsgreeks">
            <thead>
              <tr><td></td><td>Call</td><td>Put</td></tr>
            </thead>
            <tbody>
            <tr>
              <td>Price</td>
              <td>{{ pricingOption.call.price }}</td>
              <td>{{ pricingOption.put.price }}</td>
            </tr>
            <tr>
              <td>Delta</td>
              <td>{{ pricingOption.call.delta }}</td>
              <td>{{ pricingOption.put.delta }}</td>
            </tr>
            <tr>
              <td>Theta</td>
              <td>{{ pricingOption.call.theta }}</td>
              <td>{{ pricingOption.put.theta }}</td>
            </tr>
            <tr>
              <td>Gamma</td>
              <td>{{ pricingOption.call.gamma }}</td>
              <td>{{ pricingOption.put.gamma }}</td>
            </tr>
            <tr>
              <td>Vega</td>
              <td>{{ pricingOption.call.vega }}</td>
              <td>{{ pricingOption.put.vega }}</td>
            </tr>
            <tr>
              <td>Rho</td>
              <td>{{ pricingOption.call.rho }}</td>
              <td>{{ pricingOption.put.rho }}</td>
            </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import axios from 'axios';

export default {
  name: 'Options',
  data() {
    return {
      pricingOption: {
        call: {
          price: 0,
          delta: 0,
          theta: 0,
          gamma: 0,
          vega: 0,
          rho: 0,
        },
        put: {
          price: 0,
          delta: 0,
          theta: 0,
          gamma: 0,
          vega: 0,
          rho: 0,
        },
      },
    };
  },
  methods: {
    calculateGreeks() {
      const spot = document.getElementById('spot').value;
      const strike = document.getElementById('strike').value;
      const drift = document.getElementById('drift').value;
      const rate = document.getElementById('rate').value;
      const expiration = document.getElementById('expiration').value;
      const timeU = document.getElementById('timeU').value;

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

.container {
  background: #424242;
  box-shadow: 0 2px 4px -1px rgba(0, 0, 0, 0.2),
    0 4px 5px 0 rgba(0, 0, 0, 0.14), 0 1px 10px 0 rgba(0, 0, 0, 0.12);
  transition: box-shadow 0.28s cubic-bezier(0.4, 0, 0.2, 1);
}

.container:hover{
  box-shadow: 0 11px 15px -7px rgba(0, 0, 0, 0.2),
  0 24px 38px 3px rgba(0, 0, 0, 0.14), 0 9px 46px 8px rgba(0, 0, 0, 0.12);
}

#resultsgreeks {
  border-collapse: collapse;
  width: 100%;
}

#resultsgreeks td, #resultsgreeks th{
  border-bottom: 1px solid #515151;
  padding: 6px;
}

</style>
