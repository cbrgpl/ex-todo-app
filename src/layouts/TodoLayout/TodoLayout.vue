<template >
  <div >
    <router-view @viewInited="$emit('viewInited')" />
  </div>
</template>

<script >
export default {
  name: 'TodoLayout',
  emits: [ 'viewInited' ],
  created() {
    this.composeUsers()
  },
  methods: {
    async composeUsers() {
      await this.$store.dispatch( 'todo/requestTodos' )
      this.$store.dispatch( 'user/composeUsers' )
    }
  }

}
</script>

<style lang="scss" scoped >

</style>