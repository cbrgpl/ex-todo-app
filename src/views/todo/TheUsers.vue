<template >
  <ZView
    ref="view"
    header-title="Todo User List"
    @VnodeMounted="emitViewInited" >
    <div class="mb-4 border-b border-placeholder border-opacity-20 pb-4" >
      <ZButtonWithLoader
        ref="button"
        class="w-full sm:max-w-xs ml-auto"
        @click="uploadUsers" >
        Upload
      </ZButtonWithLoader>
    </div>

    <div class="grid grid-cols-1 gap-y-3 sm:grid-cols-2 sm:gap-x-4 lg:grid-cols-3 lg:gap-x-6 2xl:grid-cols-4 2xl:gap-x-10" >
      <ZTodoCard
        v-for="user of users"
        :key="user.id"
        v-bind="user" />
    </div>
  </ZView>
</template>

<script >
import { defineAsyncComponent } from 'vue'
import { mapGetters } from 'vuex'

import ZTodoCard from '@/components/todo/composite/ZTodoCard/ZTodoCard.vue'

export default {
  name: 'TheUsers',
  components: {
    ZView: defineAsyncComponent( () => import( '@general_components/composite/ZView/ZView.vue' ) ),
    ZButtonWithLoader: defineAsyncComponent( () => import( '@general_components/composite/ZButtonWithLoader.vue' ) ),
    ZTodoCard
  },
  computed: {
    ...mapGetters( {
      users: 'user/users'
    } )
  },
  methods: {
    uploadUsers() {
      this.$refs.button.setLoadingState( true )

      // ТЗ Специально добавляю задержку
      setTimeout( async () => {

        await this.$store.dispatch( 'todo/requestTodos' )
        this.$store.dispatch( 'user/composeUsers' )
      
        this.$refs.button.setLoadingState( false )
      }, 650 + Math.random() * 800 )
    },
    emitViewInited() {
      this.$refs.view.setLoadingState( false )
      this.$refs.view.emitInitEvent()
    }
  }
}
</script>

<style lang="scss" scoped >

</style>