<template >
  <div class="w-60" >
    <PSidebar />
  </div>
</template>

<script >
import { defineAsyncComponent } from 'vue'

export default {
  name: 'PDesktopSidebar', 
  components: {
    PSidebar: defineAsyncComponent( () => import( './PSidebar.vue' ) )
  },
}
</script>
<style lang="scss" scoped >

</style>