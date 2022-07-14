<template >
  <ZView
    ref="view"
    header-title="Todo List"
    @VnodeMounted="initUsersEmptyWatcher" >
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
    ZTodoCard
  },
  computed: {
    ...mapGetters( {
      todosLoaded: 'todo/todosLoaded',
      users: 'user/users'
    } )
  },
  methods: {
    initUsersEmptyWatcher() {
      this.$watch(
        () => this.todosLoaded,
        () => {
          this.emitViewInited()
        },
        {
          immediate: true,
        }
      )
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