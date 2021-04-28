<template>
  <v-main>
    <v-container>
      <h1 class="text-center">Documentation</h1>
      <v-row>
        <v-col cols="12" lg="12">
          <h4>Technologies</h4>
        </v-col>
        <v-col class="text-justify" cols="12" lg="6" md="6" xl="6">
          <p>This site is uilt in two parts. The front end makes calls to the API in the back end,
          where the calculations are made. The technologies used are the following :</p>
          <ul>
            <li>VueJS</li>
            <li>ExpressJS</li>
            <li>Flask</li>
            <li>Scipy.stats</li>
          </ul>
          <p>The documentation for the api is available at the following address : <a href="https://api.getgreeks.xyz/apidocs">api.getgreeks.xyz/apidocs</a>.
          </p>
        </v-col>
        <v-col class="d-flex justify-center" cols="12" lg="6" md="6" xl="6">
          <v-img alt="diagramapi" src="../assets/diagapi.png" max-width="250px" max-height="250px"/>
        </v-col>
      </v-row>
      <v-divider></v-divider>
      <v-row>
        <v-col cols="12" lg="12">
          <h4>Formulas</h4>
        </v-col>
        <v-col cols="12" lg="12">
          <p class="text-justify">"Each Greek letter measures a different dimension
            to the risk in an option
            position and the aim of a trader is to manage the Greeks so that all risks
            are acceptable." (Jonh C. Hull in <i>Options, futures and other derivatives</i>)</p>
          <p class="text-justify">All Greeks letter calculated here follow the respective formula.
            With a distinction between the different types of options. <br> At the moment the site
            provides only: </p>
          <ul>
            <li>Vanilla option</li>
            <li>Options with dividend</li>
          </ul>
        </v-col>
        <v-col cols="12" lg="12" md="12" xl="12">
          <h6 class="text-center text-capitalize">Vanilla</h6>
          <v-simple-table>
            <template v-slot:default>
              <thead>
                <tr>
                  <th></th>
                  <th class="text-center text-h5">Call</th>
                  <th class="text-center text-h5">Put</th>
                </tr>
              </thead>
              <tbody>
              <tr>
                <td class="text-center"><i>Price</i></td>
                <td>
                  <div v-katex:display="'S_{0}N(d_{1}) - Ke^{-rT}N(d_{2})'"></div>
                </td>
                <td>
                  <div v-katex:display="'Ke^{-rT}N(-d_{2}) - S_{0}N(-d_{1})'"></div>
                </td>
              </tr>
              <tr>
                <td>
                  <div v-katex:display="'\\Delta = \\frac{\\partial c}{\\partial S}'"
                  ></div>
                </td>
                <td><div v-katex:display="'N(d_{1})'"></div></td>
                <td><div v-katex:display="'-N(d_{1})'"></div></td>
              </tr>
              <tr>
                <td>
                  <div v-katex:display="'\\Theta = \\frac{\\partial^{2} c}{\\partial S^{2}}'"
                  ></div>
                </td>
                <td>
                  <div v-katex:display="'-\\frac{S_{0}N\'(d_{1})\\sigma}{2\\sqrt{T}} ' +
                   '- rKe^{-rT}N(d_{2})'"
                  ></div>
                </td>
                <td>
                  <div v-katex:display="'-\\frac{S_{0}N\'(d_{1})\\sigma}{2\\sqrt{T}} ' +
                   '+ rKe^{-rT}N(-d_{2})'"
                  ></div>
                </td>
              </tr>
              <tr>
                <td>
                  <div v-katex:display="'\\Gamma = \\frac{\\partial c}{\\partial t}'"
                  ></div>
                </td>
                <td>
                  <div v-katex:display="'\\frac{N\'(d_{1})}{S_{0}\\sigma\\sqrt{T}}'"></div>
                </td>
                <td>
                  <div v-katex:display="'\\frac{N\'(-d_{1})}{S_{0}\\sigma\\sqrt{T}}'"></div>
                </td>
              </tr>
              <tr>
                <td>
                  <div v-katex:display="'\\nu = \\frac{\\partial c}{\\partial \\sigma}'"
                  ></div>
                </td>
                <td>
                  <div v-katex:display="'S_{0}\\sqrt{T}N\'(d_{1})'"></div>
                </td>
                <td>
                  <div v-katex:display="'S_{0}\\sqrt{T}N\'(-d_{1})'"></div>
                </td>
              </tr>
              <tr>
                <td>
                  <div v-katex:display="'\\rho = \\frac{\\partial c}{\\partial r}'"
                  ></div>
                </td>
                <td>
                  <div v-katex:display="'KTe^{-rT}N(d_{2})'"></div>
                </td>
                <td>
                  <div v-katex:display="'-KTe^{-rT}N(-d_{2})'"></div>
                </td>
              </tr>
            </tbody>
            </template>
          </v-simple-table>
        </v-col>
        <v-col cols="12" lg="12" md="12" xl="12">
          <h6 class="text-center text-capitalize">Dividend</h6>
          <v-simple-table>
            <template v-slot:default>
              <thead>
              <tr>
                <th></th>
                <th class="text-center text-h5">Call</th>
                <th class="text-center text-h5">Put</th>
              </tr>
              </thead>
              <tbody>
              <tr>
                <td class="text-center"><i>Price</i></td>
                <td>
                  <div v-katex:display="'S_{0}e^{-qT}N(d_{1}) - Ke^{-rT}N(d_{2})'"></div>
                </td>
                <td>
                  <div v-katex:display="'Ke^{-rT}N(-d_{2}) - S_{0}e^{-qT}N(-d_{1})'"></div>
                </td>
              </tr>
              <tr>
                <td>
                  <div v-katex:display="'\\Delta = \\frac{\\partial c}{\\partial S}'"
                  ></div>
                </td>
                <td><div v-katex:display="'e^{-qT}N(d_{1})'"></div></td>
                <td><div v-katex:display="'e^{-qT} * \\big(N(d_{1}) - 1\\big)'"></div></td>
              </tr>
              <tr>
                <td>
                  <div v-katex:display="'\\Theta = \\frac{\\partial^{2} c}{\\partial S^{2}}'"
                  ></div>
                </td>
                <td>
                  <div v-katex:display="'-\\frac{S_{0}N\'(d_{1})\\sigma e^{-qT}}{2\\sqrt{T}} ' +
                   '+ qS_{0}N(d_{1})e^{-qT} - rKe^{-rT}N(d_{2})'"
                  ></div>
                </td>
                <td>
                  <div v-katex:display="'-\\frac{S_{0}N\'(d_{1})\\sigma e^{-qT}}{2\\sqrt{T}} ' +
                   '- qS_{0}N(d_{1})e^{-qT} + rKe^{-rT}N(-d_{2})'"
                  ></div>
                </td>
              </tr>
              <tr>
                <td>
                  <div v-katex:display="'\\Gamma = \\frac{\\partial c}{\\partial t}'"
                  ></div>
                </td>
                <td>
                  <div v-katex:display="'\\frac{N\'(d_{1})e^{-qT}}{S_{0}\\sigma\\sqrt{T}}'"></div>
                </td>
                <td>
                  <div v-katex:display="'\\frac{N\'(-d_{1})e^{-qT}}{S_{0}\\sigma\\sqrt{T}}'"></div>
                </td>
              </tr>
              <tr>
                <td>
                  <div v-katex:display="'\\nu = \\frac{\\partial c}{\\partial \\sigma}'"
                  ></div>
                </td>
                <td>
                  <div v-katex:display="'S_{0}\\sqrt{T}N\'(d_{1})e^{-qT}'"></div>
                </td>
                <td>
                  <div v-katex:display="'S_{0}\\sqrt{T}N\'(-d_{1})e^{-qT}'"></div>
                </td>
              </tr>
              <tr>
                <td>
                  <div v-katex:display="'\\rho = \\frac{\\partial c}{\\partial r}'"
                  ></div>
                </td>
                <td>
                  <div v-katex:display="'-Te^{-qT}S_{0}N(d_{1})'"></div>
                </td>
                <td>
                  <div v-katex:display="'-Te^{-qT}S_{0}N(-d_{1})'"></div>
                </td>
              </tr>
              </tbody>
            </template>
          </v-simple-table>
        </v-col>
      </v-row>
    </v-container>
  </v-main>
</template>
<script>

export default {
  name: 'Documentation',
  data() {
    return {
    };
  },
};

</script>
