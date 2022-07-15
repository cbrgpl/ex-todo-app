<template >
  <div >
    <canvas
      ref="canvas"
      class="chart__canvas"
      width="0"
      height="0" ></canvas>
  </div>
</template>

<script >
import { Chart } from '@modules/chart.js'
import { exposes } from './'

export default {
  name: 'ZChart',
  expose: exposes,
  props: {
    type: {
      type: String,
      default: ''
    },
    data: {
      type: Object,
      required: true,
    },
    options: {
      type: Object,
      required: true,
    }
  },
  methods: {
    init() {
      const ctx = this.$refs.canvas

      new Chart( ctx, {
        type: this.type,
        data: this.data,
        options: this.options
      } )
    }
  }
}
</script>

<style lang="scss" scoped >
.chart__canvas {
  @apply w-full h-full #{!important};
}
</style>