<template >
  <div class="form__wrapper" >
    <form
      ref="form"
      class="form"
      @submit.prevent.stop="emitSubmit"
      @keypress.enter.prevent="focusNextField" >
      <slot />

      <div class="form__actions" >
        <div class="mb-2" >
          <Transition name="form__error-transition" >
            <h5
              v-show="stateIsError"
              class="form__error-label" >
              {{ errorLabel }}
            </h5>
          </Transition>
        </div>

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
import { exposes } from './index.js'

export default {
  name: 'ZForm',
  focusFeature: {
    nodeBuffer: [],
    focusedNodeNumber: 0,
  },
  expose: exposes,
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
    },
  },
  emits: [ 'submitted' ],
  data() {
    return {
      errorLabel: ''
    }
  },
  computed: {
    stateIsError() {
      return this.errorLabel !== ''
    },
  },
  mounted() {
    this.bufferInputs()
    this.focus()
    this.startListeningBubbleFocus()
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
    setError( errorLabel ) {
      this.errorLabel = errorLabel
    },
    clearError() {
      this.errorLabel = ''
    },

    // Private
    bufferInputs() {
      const nodes = this.$refs.form.querySelectorAll( '.form-field__input' )
      this.$options.focusFeature.nodeBuffer = [ ...nodes ]
    },
    startListeningBubbleFocus() {
      this.$refs.form.addEventListener( 'bubbleFocus', ( event ) => {
        const $focusedInput = event.target
        const focusedInputIndex = this.$options.focusFeature.nodeBuffer.findIndex( ( node ) => node === $focusedInput )
        this.$options.focusFeature.focusedNodeNumber = focusedInputIndex
      } )
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

  &__error-label {
    @apply
      text-danger font-semibold
      line-clamp-2 break-all;
  }
}

.form__error-transition {
  &-enter-from {
    @apply opacity-0 transform -translate-y-2;
  }

  &-enter-active {
    @apply transition-all duration-150 ease-out;
  }
}
</style>