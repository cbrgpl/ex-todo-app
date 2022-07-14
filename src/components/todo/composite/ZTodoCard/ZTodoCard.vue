<template >
  <div class="flex flex-col border border-primary mb-2 max-h-96" >
    <div class="flex items-center justify-between border-b border-placeholder border-opacity-25 py-1 mx-2" >
      <span class="text-2xl" >
        User {{ id }}
      </span>
      <PTodoRatio
        :completed="completed"
        :incompleted="incompleted" />
    </div>

    <div class="flex-grow overflow-auto" >
      <PTodoList :todos="todos" />
    </div>
  </div>
</template>

<script >
import PTodoRatio from './partials/PTodoRatio.vue'
import PTodoList from './partials/PTodoList.vue'

export default {
  name: 'ZTodoCard',
  components: {
    PTodoRatio,
    PTodoList
  },
  props: {
    id: {
      type: Number,
      required: true,
    },
    todos: {
      type: Array,
      required: true
    },
    completed: {
      type: Number,
      required: true,
    },
    incompleted: {
      type: Number,
      required: true,
    }
  }
}
</script>
<style lang="" >

</style>