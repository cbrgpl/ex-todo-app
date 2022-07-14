<template >
  <ZFormField >
    <template #input="{attrs, state}" >
      <input
        ref="input"
        v-bind="attrs"
        :data-state="state"
        class="form-field__input"
        :type="attrs.type ? attrs.type : 'text'"
        @input="$emit('update:modelValue', $event.target.value )" >
    </template>
  </ZFormField>  
</template>

<script >
import { formFieldMixin } from '@general_components/atomic/ZFormField'
import ZFormField from '@general_components/atomic/ZFormField/ZFormField.vue'

export default {
  name: 'ZInput',
  components: {
    ZFormField
  },
  mixins: [ formFieldMixin ],
  emits: [ 'update:modelValue' ],
}
</script>

<style lang="scss" scoped >

</style>