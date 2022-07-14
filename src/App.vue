<template >
  <div >
    <router-view />
  </div>
</template>

<script >
import { mapGetters, mapActions } from 'vuex'

export default {
  name: 'TheApp',
  computed: {
    ...mapGetters( {
      errorBufferEmpty: 'error/errorBufferEmpty'
    } )
  },
  watch: {
    errorBufferEmpty( errorBufferEmpty ) {
      if( !errorBufferEmpty ) {
        this.logErrors()
        this.$store.commit( 'error/clearErrorBuffer' )
      }
    }
  },
  methods: {
    ...mapActions( {
      logErrors: 'error/logErrors'
    } )
  }
}

</script>

<style lang="scss" >

</style>
