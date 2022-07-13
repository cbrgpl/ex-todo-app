<template >
  <ZFormField >
    <template #input="{attrs, props}" >
      <input
        v-bind="attrs"
        :data-state="props.state"
        class="field__input"
        :type="attrs.type ? attrs.type : 'text'" >
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
}
</script>

<style lang="scss" scoped >

</style>