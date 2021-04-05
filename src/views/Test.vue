<template>
  <div id="test">
    <fusioncharts
    :type="type"
    :width="width"
    :height="height"
    :dataFormat="dataFormat"
    :dataSource="dataSource"
    id="k"
  ></fusioncharts>
  </div>
</template>

<script>
import FusionCharts from 'fusioncharts';
import Charts from 'fusioncharts/fusioncharts.charts';
// import { FCComponent } from 'vue-fusioncharts';

// Resolves charts dependency
Charts(FusionCharts);

const dataSource = {
  chart: {
    caption: 'Average Fastball Velocity',
    yaxisname: 'Velocity (in mph)',
    subcaption: '[2005-2016]',
    numbersuffix: ' mph',
    rotatelabels: '1',
    setadaptiveymin: '1',
    theme: 'Fusion',
  },
  data: [
    {
      label: '2005',
      value: '89.45',
    },
    {
      label: '2006',
      value: '89.87',
    },
    {
      label: '2007',
      value: '89.64',
    },
    {
      label: '2008',
      value: '90.13',
    },
    {
      label: '2009',
      value: '90.67',
    },
    {
      label: '2010',
      value: '90.54',
    },
    {
      label: '2011',
      value: '90.75',
    },
    {
      label: '2012',
      value: '90.8',
    },
    {
      label: '2013',
      value: '91.16',
    },
    {
      label: '2014',
      value: '91.37',
    },
    {
      label: '2015',
      value: '91.66',
    },
    {
      label: '2016',
      value: '91.8',
    },
  ],
};

export default {
  name: 'test',
  data: () => ({
    type: 'line',
    width: '100%',
    height: '100%',
    dataFormat: 'json',
    dataSource,
  }),
};
</script>

<style scoped>

#test {
  display:flex;
  justify-content:center;
  align-items:center;
  height: 500px;
}

#test #k{
  height: 500px;
}
</style>
