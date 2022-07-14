<template >
  <ZView
    ref="view"
    title="Authentification"
    header-title="Authentification"
    @VnodeMounted="onViewMounted" >
    <div class="w-full h-full flex items-center justify-center" >
      <ZLogInForm
        ref="form"
        class="w-full max-w-lg m-auto"
        @submitted="logIn" />
    </div>
  </ZView> 
</template>

<script >
import { defineAsyncComponent } from 'vue'
import ZLogInForm from '@/components/auth/composite/ZLogInForm.vue'


export default {
  name: 'TheAuth',
  components: {
    ZView: defineAsyncComponent( () => import( '@general_components/composite/ZView/ZView.vue' ) ),
    ZLogInForm
  },
  methods: {
    onViewMounted() {
      this.$refs.view.setLoaderState( false )
      this.$refs.view.emitInitEvent()  
    },

    async logIn( logInData ) {
      const $form = this.$refs.form

      $form.clearError()
      $form.setLoadingState( true )

      const actionResult = await this.$store.dispatch( 'auth/logIn', logInData )

      if( actionResult.error === null ) {
        return
      } else if( !actionResult.error ) {
        console.log( 'push to todo' )
      } else {
        $form.setError( actionResult.payload.errors[ 0 ].message )
      }

      $form.setLoadingState( false )
    }
  },
}

</script>

<style lang="scss" scoped >

</style>