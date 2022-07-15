<template >
  <div class="flex" >
    <PMobileSidebar class="lg:hidden" />
    <PDesktopSidebar class="hidden lg:block" />
    
    <div class="flex-grow overflow-auto" >
      <router-view @viewInited="$emit('viewInited')" />
    </div>
  </div>
</template>

<script >
import { defineAsyncComponent } from 'vue'

export default {
  name: 'TodoLayout',
  components: {
    PMobileSidebar: defineAsyncComponent( () => import( './partials/PMobileSidebar.vue' ) ),
    PDesktopSidebar:  defineAsyncComponent( () => import( './partials/PDesktopSidebar.vue' ) )
  },
  emits: [ 'viewInited' ]
}
</script>

<style lang="scss" scoped >

</style>