const formExtenderMixin = {
  methods: {
    focus( ...args ) {
      this.$refs.form.focus( ...args )
    },
    reset( ...args ) {
      this.$refs.form.reset( ...args )
    },
    setLoadingState( ...args ){
      this.$refs.form.setLoadingState( ...args )
    },
    setError( ...args ){
      this.$refs.form.setError( ...args )
    },
    clearError( ...args ){
      this.$refs.form.clearError( ...args )
    }
  }
}

const exposes = [ 'focus', 'reset', 'setLoadingState', 'setError', 'clearError' ]

export {
  formExtenderMixin,
  exposes
}