<template >
  <ZFormField >
    <template #input="{attrs, state}" >
      <input
        v-bind="attrs"
        :data-state="state"
        class="form-field__input"
        :type="attrs.type ? attrs.type : 'text'"
        @input="$emit('update:modelValue', $event.target.value )" >
    </template>
  </ZFormField>  
</template>

<script >
import ZFormField from '@general_components/atomic/ZFormField.vue'

export default {
  name: 'ZInput',
  components: {
    ZFormField
  },
  emits: [ 'update:modelValue' ],
}
</script>

<style lang="scss" scoped >

</style>