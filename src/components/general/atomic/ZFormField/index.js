const formFieldMixin = {
  emits: [ 'focus' ],
  mounted() {
    this.addInputEventListener()
  },
  methods: {
    addInputEventListener() {
      const $input = this.$refs.input

      $input.addEventListener( 'focus', () => {
        const bubbleFocus = new Event( 'bubbleFocus', {
          'bubbles': true,
        } )

        $input.dispatchEvent( bubbleFocus )
      } )
    }
  }
}


export {
  formFieldMixin
}