<template >
  <div
    :data-sidebar-opened="opened"
    class="mobile-sidebar__wrapper" >
    <div class="relative h-full" >
      <PSidebar />

      <button
        class="mobile-sidebar__button"
        @click="opened = !opened" >
        &#5171;
      </button>
    </div>
  </div>
</template>

<script >
import { defineAsyncComponent } from 'vue'
export default {
  name: 'PMobileSidebar',
  components: {
    PSidebar: defineAsyncComponent( () => import( './PSidebar.vue' ) )
  },
  data() {
    return {
      opened: false,
    }
  },
}
</script>

<style lang="scss" scoped >
.mobile-sidebar__button {
  @apply
    absolute -right-3 top-2
    transform translate-x-full
    transition-transform ease-out
    w-14 h-14
    border border-white-darkest border-opacity-25
    shadow-md rounded-full bg-black
    text-2xl font-semibold;
}

.mobile-sidebar__wrapper {
  @apply
    fixed z-50
    h-full w-3/4
    transition-transform duration-500 ease-out
    transform -translate-x-full;

  &[data-sidebar-opened='true'] {
    @apply translate-x-0;

    .mobile-sidebar__button {
      @apply rotate-180;
    }
  }
}
</style>