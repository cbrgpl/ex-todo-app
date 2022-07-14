<template >
  <section class="view" >
    <div class="view__header" >
      <div class="view__title" >
        {{ title }}
      </div>


      <slot name="header" />
    </div>

    <slot />

    <div
      v-if="loader"
      class="view__loader-wrapper" >
      <PLoader />
    </div>
  </section>
</template>

<script >
import PLoader from './partials/PLoader.vue'

export default {
  name: 'ZView',
  components: {
    PLoader
  },
  props: {
    title: {
      type: String,
      default: ''
    },
    headerTitle: {
      type: String ,
      default: ''
    },
  },
  emits: [ 'viewInited' ],
  expose: [ 'setLoaderState', 'emitInitEvent' ],
  data() {
    return {
      loader: true
    }
  },
  mounted() {
    this.setHeaderTitle()
  },
  methods: {
    // Public
    setLoaderState( state ) {
      this.loader = state
    },
    emitInitEvent() {
      this.$emit( 'viewInited' )
    },

    // Private 
    setHeaderTitle() {
      if( this.headerTitle ) {
        document.title = this.headerTitle
      } else {
        document.title = process.env.VUE_APP_DEFAULT_TITLE
      }
    }
  }
}
</script>

<style lang="scss" scoped >
.view {
  @apply
    overflow-y-auto
    h-screen
    p-2 lg:p-4 2xl:p-8;

  &__header {
    @apply
      flex justify-between items-center
      mb-4;
  }

  &__title {
    @apply
      leading-none
      font-semibold underline underline-offset-2
      text-xl lg:text-2xl 2xl:text-3xl;
  }

  &__loader-wrapper {
    @apply
      fixed top-0 left-0 z-50
      flex justify-center items-center
      w-screen h-screen
      bg-black bg-opacity-90;
  }
}

</style>