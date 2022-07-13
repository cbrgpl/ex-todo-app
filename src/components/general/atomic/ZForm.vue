<template >
  <div class="form__wrapper" >
    <form
      ref="form"
      class="form"
      @submit.prevent.stop="emitSubmit"
      @keypress.enter.prevent="focusNextField" >
      <slot />

      <div class="form__actions" >
        <slot
          name="actions" >
          <ZButtonWithLoader
            ref="button"
            type="submit" >
            {{ buttonText }}
          </ZButtonWithLoader>    
        </slot>
      </div>
    </form>
  </div>
</template>

<script >
import { defineAsyncComponent } from 'vue'

export default {
  name: 'ZForm',
  focusFeature: {
    nodeBuffer: [],
    focusedNodeNumber: 0,
  },
  expose: [ 'focus', 'reset', 'setLoadingState' ],
  components: {
    ZButtonWithLoader: defineAsyncComponent( () => import( '@general_components/composite/ZButtonWithLoader.vue' ) )
  },
  props: {
    vuelidate: {
      type: Object,
      required: true,
    },
    buttonText: {
      type: String,
      default: 'Submit'
    }
  },
  emits: [ 'submitted' ],
  mounted() {
    this.bufferInputs()
    this.focus()
  },
  methods: {
    // Public
    focus() {
      this.setFocusOn( 0 )
    },
    reset() {
      this.$refs.form.reset()
      this.vuelidate.$reset()
      this.$options.focusFeature.focusedNodeNumber = 0
    },
    setLoadingState( state ) {
      this.$refs.button.setLoadingState( state )
    },

    // Private
    bufferInputs() {
      const nodes = this.$refs.form.querySelectorAll( '.form-field__input' )
      this.$options.focusFeature.nodeBuffer = [ ...nodes ]
    },

    async emitSubmit() {
      this.blurForm()

      await this.vuelidate.$reset()
      await this.vuelidate.$touch()
    
      if( this.vuelidate.$error ) {
        return
      }
      
      this.$emit( 'submitted' )
    },

    blurForm() {
      this.setFocusOn( 0 )
      this.$options.focusFeature.nodeBuffer[ 0 ].blur()
    },
    focusNextField() {
      const focusedNodeNumber = this.$options.focusFeature.focusedNodeNumber
      this.setFocusOn( focusedNodeNumber + 1 )
    },
    setFocusOn( number ) {
      const isLastFieldPassed = number ===  this.$options.focusFeature.nodeBuffer.length

      if( !isLastFieldPassed ) {
        this.$options.focusFeature.nodeBuffer[ number ].focus()
        this.$options.focusFeature.focusedNodeNumber = number
      } else {
        this.emitSubmit()
      }
    },

    
  },

}
</script>

<style lang="scss" scoped >
.form {
  &__actions {
    @apply mt-8;
  }
}
</style>