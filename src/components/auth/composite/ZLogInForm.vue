<template >
  <ZForm
    ref="form"
    :vuelidate="v$"
    @submitted="emitSubmitted" >
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

    <ZSingleCheckbox v-model="rememberMe" >
      Remember me
    </ZSingleCheckbox>
  </ZForm> 
</template>

<script >
import { defineAsyncComponent } from 'vue'
import { useVuelidate } from '@vuelidate/core'
import { required } from '@vuelidate/validators'

import { formExtenderMixin, exposes } from '@general_components/atomic/ZForm'

import ZInput from '@general_components/composite/ZInput.vue'
import ZSingleCheckbox from '@general_components/composite/ZSingleCheckbox.vue'

export default {
  name: 'ZLogInForm',
  expose: exposes,
  components: {
    ZForm: defineAsyncComponent( () => import( '@general_components/atomic/ZForm/ZForm.vue' ) ),
    ZInput,
    ZSingleCheckbox
  },
  mixins: [ formExtenderMixin ],
  emits: [ 'submitted' ],
  setup() {
    return {
      v$: useVuelidate()
    }
  },
  data() {
    return {
      form: {
        username: '',
        password: '',
      },
      rememberMe: true
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
      }
    }
  },
  methods: {
    emitSubmitted() {
      const clone = Object.assign( {}, this.form )

      this.$emit( 'submitted', { logInData: clone, rememberMe: this.rememberMe } )
    }
  },
}

</script>

<style lang="scss" scoped >

</style>
