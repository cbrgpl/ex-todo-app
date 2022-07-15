<template >
  <div >
    <canvas
      ref="canvas"
      width="1"
      height="1" ></canvas>
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

</style>