<template >
  <ZCheckbox
    :checked="modelValue"
    @input="emitUpdateModelValue" />
</template>

<script >
import ZCheckbox from '@general_components/atomic/ZCheckbox.vue'

export default {
  name: 'ZSingleCheckbox',
  components: {
    ZCheckbox
  },
  props: {
    modelValue: {
      type: Boolean,
      required: true,
    }
  },
  emits: [ 'update:modelValue' ],
  methods: {
    emitUpdateModelValue( $event ) {
      const checkedState = $event.target.checked
        
      this.$emit( 'update:modelValue', checkedState )
    }
  }
}
</script>

<style lang="scss" scoped >

</style>