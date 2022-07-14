<template >
  <div >
    <router-view
      class="h-screen w-screen"
      @viewInited="disableTemplatePreloader" />
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
    } ),
    disableTemplatePreloader() {
      setTimeout( () => {
        const $templatePreloader = document.querySelector( '#template-preloader' )
        // Из-за hot-reload вылетает ошибка, которой не будет в обычной ситуации
        if( $templatePreloader ) {
          document.body.removeChild( $templatePreloader )
        }
      }, 0 )
    }
     
  }
}

</script>

<style lang="scss" >

</style>
