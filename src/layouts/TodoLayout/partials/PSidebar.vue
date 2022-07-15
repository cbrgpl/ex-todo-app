<template >
  <aside class="todo-sidebar" >
    <div class="todo-sidebar__header" >
      <span class="todo-sidebar__title" >
        {{ username }} 
      </span>
    </div>

    <div class="todo-sidebar__section-border" ></div>

    <nav class="flex-grow" >
      <ul class="todo-sidebar__nav-list" >
        <li
          v-for="option of $options.mainNavigation"
          :key="option.routeName" >
          <router-link
            class="todo-sidebar__nav-item" 
            :to="option.routeName"
            exact-active-class="todo-sidebar__nav-item_selected" >
            {{ option.title }}
          </router-link>
        </li>
      </ul>
    </nav>  

    <div class="todo-sidebar__section-border" ></div>

    <ul class="todo-sidebar__nav-list" >
      <li
        :data-loading="loading"
        class="todo-sidebar__nav-item"
        @click="logOut" >
        LogOut
      </li>
    </ul>
  </aside>
</template>

<script >
import { mainNavigation } from '@/enums/nav/todo.mainNavigation'

export default {
  name: 'PSidebar',
  mainNavigation,
  data() {
    return {
      loading: false,
    }
  },
  computed: {
    username() {
      return this.$store.getters[ 'auth/username' ]
    }
  },
  methods: {
    async logOut() {
      this.loading = true
      const actionResult = await this.$store.dispatch( 'auth/logOut' )

      if( !actionResult.error ) {
        this.$router.push( { name: 'auth' } )
      }

      this.loading = false
    }
  }
}
</script>

<style lang="scss" scoped >
@mixin sidebar-px {
  @apply px-2.5 sm:px-4 md:px-6 lg:px-3;
}

.todo-sidebar {
  @apply
    flex flex-col
    w-full h-full
    py-3 sm:py-5 md:py-8
    bg-black shadow-lg
    border-r border-white-darkest border-opacity-25;

  &__header {
    @apply w-full;

    @include sidebar-px;
  }

  &__title {
    @apply text-xl font-semibold;
  }

  &__section-border {
    @apply my-4 w-full;

    @include sidebar-px;

    &::after {
      @apply
        block
        w-full
        border-b border-primary-darkest border-opacity-60;

      content: '';
    }
  }

  &__nav-list {
    @apply
      select-none
      text-white-lighten text-2xl;
  }

  &__nav-item {
    @apply
      block
      transition-colors ease-in
      py-2
      cursor-pointer
      hover:bg-black-lighten;

    @include sidebar-px;

    &_selected {
      @apply text-primary;
    }

    &[data-loading='true'] {
      @apply pointer-events-none text-placeholder text-opacity-80;
    }
  }
}
</style>