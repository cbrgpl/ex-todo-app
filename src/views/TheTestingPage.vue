<template >
  <div class="flex flex-col" >
    <ZButton
      class="w-36" >
      Button
    </ZButton>

    <div class="relative" >
      <ZComponentLoader
        size="md" />
    </div>

    <ZButtonWithLoader
      ref="buttonWithLoader"
      :loading="true" 
      class="w-36"
      @click="test" >
      Click
    </ZButtonWithLoader>
  </div>
</template>

<script >
import ZButton from '@general_components/atomic/ZButton.vue'
import ZComponentLoader from '@general_components/atomic/ZComponentLoader.vue'

import ZButtonWithLoader from '@general_components/composite/ZButtonWithLoader.vue'

export default {
  name: 'TheTestingPage',
  components: {
    ZButton,
    ZComponentLoader,

    ZButtonWithLoader
  },
  methods: {
    test() {
      console.log( 'test' )
      this.$refs.buttonWithLoader.setLoadingState( true )
      setTimeout( () => {
        this.$refs.buttonWithLoader.setLoadingState( false )
      }, 2000 )
    }
  }
}
</script>

<style lang="scss" scoped >

</style>