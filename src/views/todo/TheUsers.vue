<template >
  <ZView
    ref="view"
    header-title="Todo List"
    @VnodeMounted="initUsersEmptyWatcher" >
    Todo list

    <pre >
      {{ users }}
    </pre>
  </ZView>
</template>

<script >
import { defineAsyncComponent } from 'vue'
import { mapGetters } from 'vuex'

export default {
  name: 'TheUsers',
  components: {
    ZView: defineAsyncComponent( () => import( '@general_components/composite/ZView/ZView.vue' ) ),
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