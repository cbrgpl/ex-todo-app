<template >
  <div class="flex flex-col" >
    <ZButton
      class="w-36"
      @click="inputError = !inputError" >
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
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewbox="0 0 48 48"
      height="48"
      width="48" >
      <path d="M18.9 35.7 7.7 24.5l2.15-2.15 9.05 9.05 19.2-19.2 2.15 2.15Z" />
    </svg>

    <ZInput
      class="w-64"
      label="Clear"
      on-error="No error should be shownq we qeqweq weqwe"
      placeholder="No error should be shownqeqeqeqe"
      :state="inputError === true ? null : inputError" />
      
    <ZInput
      label="Error"
      on-error="There is a long error message"
      placeholder="There is a long error messageasdasdasdads"
      :state="inputError" />

    <ZInput
      label="Success"
      on-error="No error should be shown"
      placeholder="No error should be shown"
      :state="inputError" />
  
    <ZCheckbox
      class="w-20"
      :value="'check val'"
      label="checkbox lasd asda sdasd asda sdabel" />

    <ZSingleCheckbox
      v-model="singleCheckbox"
      :state="false"
      class="w-20"
      label="signle checkbox" />
  </div>
</template>

<script >
import ZButton from '@general_components/atomic/ZButton.vue'
import ZComponentLoader from '@general_components/atomic/ZComponentLoader.vue'

import ZButtonWithLoader from '@general_components/composite/ZButtonWithLoader.vue'

import ZInput from '@general_components/composite/ZInput.vue'

import ZCheckbox from '@/components/general/atomic/ZCheckbox.vue'
import ZSingleCheckbox from '@general_components/composite/ZSingleCheckbox.vue'

export default {
  name: 'TheTestingPage',
  components: {
    ZButton,
    ZComponentLoader,

    ZButtonWithLoader,

    ZInput,
    ZCheckbox,
    ZSingleCheckbox
  },
  data() {
    return {
      inputError: true,
      singleCheckbox: true
    }
  },
  methods: {
    test() {
      console.log( 'test' )
      this.$refs.buttonWithLoader.setLoadingState( true )
      setTimeout( () => {
        this.$refs.buttonWithLoader.setLoadingState( false )
      }, 2000 )
    },
  }
}
</script>

<style lang="scss" scoped >

</style>