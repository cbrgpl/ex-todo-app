<template >
  <div >
    <router-view @viewInited="$emit('viewInited')" />
  </div>
</template>

<script >
export default {
  name: 'TodoLayout',
  emits: [ 'viewInited' ],
}
</script>

<style lang="scss" scoped >

</style>