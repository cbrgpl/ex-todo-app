<template >
  <ul class="cursor-default leading-tight" >
    <li
      v-for="todo of todos"
      :key="todo.id"
      class="py-2.5 px-2 hover:bg-placeholder hover:bg-opacity-5 transition-colors duration-100 ease-out" >
      {{ todo.title }}
    </li>
  </ul>
</template>

<script >
export default {
  name: 'PTodoList',
  props: {
    todos: {
      type: Array,
      required: true,
    }
  }
}
</script>

<style lang="scss" scoped >

</style>