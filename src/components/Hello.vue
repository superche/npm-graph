<template>
  <div class="hello">
    <highcharts :options="chartOptions"></highcharts>
  </div>
</template>

<script>
import { Chart } from 'highcharts-vue';
import * as Highcharts from 'highcharts';
import * as HighchartsNetworkgraph from 'highcharts/modules/networkgraph';
import { parse } from '../data-parser';
import { packageLock } from '../example_package_lock_json';

HighchartsNetworkgraph(Highcharts);

export default {
  name: 'hello',
  components: {
    highcharts: Chart,
  },
  data() {
    return {
      msg: 'vue-cli dependency graph',
      chartOptions: {
        chart: {
          type: 'networkgraph',
          height: '100%',
        },
        title: {
          text: 'vue-cli dependency graph',
        },
        plotOptions: {
          networkgraph: {
            keys: ['from', 'to'],
            layoutAlgorithm: {
              enableSimulation: true,
            },
          },
        },
        series: [{
          dataLabels: {
            enabled: true,
          },
          data: parse(packageLock),
        }],
      },
    };
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style>
h1, h2 {
  font-weight: normal;
}

ul {
  list-style-type: none;
  padding: 0;
}

li {
  display: inline-block;
  margin: 0 10px;
}

a {
  color: #35495E;
}
</style>
