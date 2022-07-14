<template >
  <section class="view" >
    <div
      v-show="title"
      class="view__header" >
      <div class="view__title" >
        {{ title }}
      </div>


      <slot name="header" />
    </div>

    <div class="flex-grow" >
      <slot />
    </div>

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
  expose: [ 'setLoadingState', 'emitInitEvent' ],
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
    setLoadingState( state ) {
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
    flex flex-col
    container mx-auto
    p-3 sm:p-6 md:py-8 lg:py-10;

  &__header {
    @apply
      flex justify-center md:justify-between items-center pt-16;
  }

  &__title {
    @apply
      leading-none
      font-semibold underline underline-offset-2
      text-2xl lg:text-3xl 2xl:text-4xl;
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