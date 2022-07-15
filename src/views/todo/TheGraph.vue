<template >
  <ZView
    ref="view"
    class="flex flex-col max-h-screen overflow-hidden"
    header-title="Todo Graph"
    @VnodeMounted="emitViewInited" >
    <ZUserChart
      ref="chart"
      v-bind="chartParams"
      @VnodeMounted="initChart" />  
  </ZView>
</template>

<script >
import { defineAsyncComponent } from 'vue'
import ZUserChart from '@todo_components/composite/ZUserChart.vue'

export default {
  name: 'TheGraph',
  components: {
    ZView: defineAsyncComponent( () => import( '@general_components/composite/ZView/ZView.vue' ) ),
    ZUserChart
  },
  computed: {
    users() {
      return this.$store.getters[ 'user/users' ]
    },
    userStats() {
      return this.users.reduce( ( acc, user ) => {
        acc.userIds.push( `User ${ user.id }` )
        acc.completed.push( user.completed )
        acc.incompleted.push( user.incompleted )

        return acc
      }, { userIds: [], completed: [], incompleted: [] } )
    },
    chartParams() {
      return {
        labels: this.userStats.userIds,
        datasets: [
          {
            label: 'Completed',
            data: this.userStats.completed,
            backgroundColor: '#fff'
          },
          {
            label: 'Incompleted',
            data: this.userStats.incompleted,
            backgroundColor: '#86463d'
          }
        ]
      }
    },
  },
  methods: {
    initChart() {
      this.$refs.chart.init() 
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