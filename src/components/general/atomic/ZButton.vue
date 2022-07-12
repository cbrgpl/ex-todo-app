<template >
  <button class="button" >
    <span class="button__content" >
      <slot />
    </span>
  </button>
</template>

<script >
export default {
  name: 'ZButton',
}
</script>

<style lang="scss" scoped >
.button {
  @apply
    border border-solid border-primary
    shadow-md
    transition-all duration-75;

  &__content {
    @apply
      font-semibold leading-none
      transition-colors duration-75;
  }

  &:hover {
    @apply border-primary-darken;

    .button__content {
      @apply text-white-darken;
    }
  }

  &:active {
    @apply border-primary-darkest shadow-md;

    .button__content {
      @apply text-white-darkest;
    }
  }

  &:disabled {
    @apply border-gray-500;

    pointer-events: none;
  }
}

</style>