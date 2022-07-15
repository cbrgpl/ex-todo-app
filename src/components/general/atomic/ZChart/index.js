const chartMixin = {
  methods: {
    init( ...args ) {
      this.$refs.chart.init( ...args )
    }
  }
}

const exposes = [ 'init' ]

export {
  chartMixin,
  exposes
}