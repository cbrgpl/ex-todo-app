<template >
  <ZChart
    v-bind="$options.chartParams"
    ref="chart" />    
</template>

<script >
import ZChart from '@general_components/atomic/ZChart/ZChart.vue'
import { chartMixin, exposes } from '@/components/general/atomic/ZChart'

const getChartParamsTemplate = () => ( {
  type: 'bar',
  data: {
    labels: null,
    datasets: null 
  },
  options: {
    plugins: {
      title: {
        display: true,
        color: '#fff',
        text: 'Completed/incompleted ratio of users'
      },
      legend: {
        display: true,
      }
    },
    scales: {
      x: {
        stacked: true,
        grid: {
          color: 'rgba(255, 255, 255, 0.15)'
        },

      },
      y: {
        stacked: true,
        grid: {
          color: 'rgba(255, 255, 255, 0.15)'
        },

      }
    }
  }
} )

export default {
  name: 'ZUserChart',
  chartParams: getChartParamsTemplate(),
  components: {
    ZChart
  },
  mixins: [ chartMixin ],
  expose: exposes,
  props: {
    labels: {
      type: Array,
      required: true,
    },
    datasets: {
      type: Array,
      required: true,
    }
  },
  created() {
    this.completeChartParams()
  },
  methods: {
    completeChartParams() {
      const chartParams = this.$options.chartParams

      chartParams.data.labels = this.labels
      chartParams.data.datasets = this.datasets
    }
  }
  
}

</script>

<style lang="scss" scoped >

</style>