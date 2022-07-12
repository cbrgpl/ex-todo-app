<template >
  <div
    v-bind="wrapperAttrs"
    :data-loading="loading"
    class="button-with-loader" >
    <ZButton
      v-bind="attrs"
      class="button-with-loader__button" 
      @click.stop="stopClickIfLoading" >
      <span class="button-with-loader__content" >
        <slot />
      </span>
    </ZButton>
    <ZComponentLoader
      v-if="loading"
      center
      class="button-with-loader__loader" />
  </div>
</template>

<script >
import ZButton from '@general_components/atomic/ZButton'
import ZComponentLoader from '@general_components/atomic/ZComponentLoader.vue'

import extenderMix from '@mixins/extender.js'

export default {
  name: 'ZButtonWithLoader',
  expose: [ 'setLoadingState' ],
  components: {
    ZButton,
    ZComponentLoader
  },
  mixins: [ extenderMix ],
  inheritAttrs: false,
  emits: [ 'click' ],
  data( ) {
    return {
      loading: false
    }
  },
  methods: {
    // Public
    setLoadingState( state ) {
      this.loading = !!state
    },

    // Private
    stopClickIfLoading( $ev ) {
      if( !this.loading ) {
        this.$emit( 'click', $ev )
      }
    } 
  }
}
</script>

<style lang="scss" scoped >
.button-with-loader {
  @apply relative cursor-pointer;

  &__button {
    @apply w-full h-full py-2.5 px-3;
  }

  &[data-loading='true'] {
    .button-with-loader__content {
      @apply opacity-0;
    }
  }
}
</style>