<template >
  <div class="flex flex-col" >
    <ZForm
      ref="form"
      :vuelidate="v$" >
      <ZInput
        v-model="form.name"
        label="Name"
        placeholder="Name"
        :on-error="v$.form.name.$errors[0]?.$message"
        :state="v$.form.name.$error" />

      <ZInput
        v-model="form.email"
        label="Email"
        placeholder="example@gmail.com"
        :on-error="v$.form.email.$errors[0]?.$message"
        :state="v$.form.email.$error" />

      <ZInput
        v-model="form.url"
        label="Some url"
        placeholder="https://url.com"
        :on-error="v$.form.url.$errors[0]?.$message"
        :state="v$.form.url.$error" />

      <ZInput
        v-model.number="form.age"
        label="Age"
        placeholder="Enter your age"
        :on-error="v$.form.age.$errors[0]?.$message"
        :state="v$.form.age.$error" />

      <ZSingleCheckbox
        v-model="form.rememberMe"
        :state="v$.form.rememberMe.$error"
        label="Remember me" />
    </ZForm> 
  </div>
</template>

<script >
import { useVuelidate } from '@vuelidate/core'
import { minLength, required, email, url, between, integer } from '@vuelidate/validators'


import ZInput from '@general_components/composite/ZInput.vue'

import ZSingleCheckbox from '@general_components/composite/ZSingleCheckbox.vue'

import ZForm from '@general_components/atomic/ZForm.vue'

export default {
  name: 'TheTestingPage',
  components: {
    ZInput,
    ZSingleCheckbox,
    ZForm
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
        name: '',
        email: '',
        url: '',
        age: '',
        rememberMe: false
      }
    }
  },
  validations() {
    return {
      form: {
        name: {
          required,
          minLength: minLength( 4 )
        },
        email: {
          required,
          email,
        },
        url: {
          url,
        },
        age: {
          required,
          integer,
          between: between( 18, 99 )
        },
        rememberMe: {
          shouldBeTruly: ( val ) => !!val
        }
      }
    }
  },
  methods: {
    test() {
      console.log( 'test' )
      this.$refs.buttonWithLoader.setLoadingState( true )
      setTimeout( () => {
        this.$refs.buttonWithLoader.setLoadingState( false )
      }, 2000 )
    },
  }
}
</script>

<style lang="scss" scoped >

</style>