<template >
  <label
    v-bind="wrapperAttrs"
    :data-state="state"
    class="checkbox" >

    <input
      v-bind="attrs"
      class="checkbox__input"
      type="checkbox" >
    <div class="checkbox__fake" >
      <svg
        class="checkbox__check"
        xmlns="http://www.w3.org/2000/svg"
        height="100%"
        width="100%"
        viewBox="0 0 24 24"
        fill="currentColor" >
        <path
          d="M0 0h24v24H0V0z"
          fill="none" />
        <path d="M9 16.2L4.8 12l-1.4 1.4L9 19 21 7l-1.4-1.4L9 16.2z" />
      </svg>

    </div>
    
    <h5 class="checkbox__label" >
      <slot />
    </h5>

  </label>
</template>

<script >
import extenderMix from '@mixins/extender.js'

export default {
  name: 'ZCheckbox',
  mixins: [ extenderMix ],
  props: {
    state: {
      type: Boolean ,
      default: false,
    },
  },
}
</script>

<style lang="scss" scoped >
.checkbox {
  @apply
    relative
    flex items-center
    select-none cursor-pointer;

  &__input {
    @apply absolute -z-50 left-0 top-0 opacity-0;
  }

  &__fake {
    @apply
      flex items-center justify-center flex-shrink-0
      border border-solid border-primary
      w-4 h-4
      mr-1.5;
  }

  &__check {
    @apply
      w-full h-full
      text-primary
      transition-all duration-100 ease-in-out;
  }

  &__label {
    @apply leading-none;
  }
}

.checkbox[data-state='true'] {
  .checkbox__fake {
    @apply border-danger;
  }

  .checkbox__label {
    @apply text-danger;
  }
}

.checkbox__input:not(:checked) {
  + .checkbox__fake > .checkbox__check {
    @apply opacity-0 transform -translate-y-0.5;
  }
}

</style>