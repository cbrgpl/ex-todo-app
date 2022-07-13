<template >
  <div class="flex flex-col" >
    <ZForm
      ref="form"
      :vuelidate="v$"
      @submitted="logIn" >
      <ZInput
        v-model="form.username"
        label="Username"
        placeholder="Enter username"
        :on-error="v$.form.username.$errors[0]?.$message"
        :state="v$.form.username.$error" />

      <ZInput
        v-model="form.password"
        label="Password"
        placeholder="***"
        type="password"
        :on-error="v$.form.password.$errors[0]?.$message"
        :state="v$.form.password.$error" />
    </ZForm> 
  </div>
</template>

<script >
import { useVuelidate } from '@vuelidate/core'
import { required } from '@vuelidate/validators'

import { authService } from '@services/authService'

export default {
  name: 'TheTestingPage',
  components: {
  },
  setup() {
    return {
      v$: useVuelidate()
    }
  },
  data() {
    return {
      inputError: true,
      singleCheckbox: true,
      form: {
        username: '',
        password: ''
      }
    }
  },
  validations() {
    return {
      form: {
        username: {
          required,
        },
        password: {
          required,
        },
        // rememberMe: {
        // shouldBeTruly: ( val ) => !!val
        // }
      }
    }
  },
  methods: {
    async logIn() {
      this.$refs.form.setLoadingState( true )
      const form = Object.assign( {}, this.form )

      const authResponse = await authService.logIn( form )
      
      console.log( await authResponse.json() )
      this.$refs.form.setLoadingState( false )
    
    }
  }
}
</script>

<style lang="scss" scoped >

</style>