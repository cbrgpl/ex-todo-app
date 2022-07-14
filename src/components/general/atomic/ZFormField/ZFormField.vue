<template >
  <label
    class="form-field"
    v-bind="wrapperAttrs" >
    <h5 class="form-field__label" >
      {{ label }}
    </h5>

    <slot
      name="input"
      v-bind="{ attrs, state }" />
    
    <div class="form-field__error-placement" >
      <Transition name="form-field__error-label-transition" >
        <label
          v-show="state"
          class="form-field__error-label" >
          {{ onError }}
        </label>
      </Transition>
    </div>
  </label>
</template>

<script >
import extenderMix from '@mixins/extender.js'

export default {
  name: 'ZFormField',
  mixins: [ extenderMix ],
  props: {
    state: {
      type: Boolean,
      default: false
    },
    label: {
      type: String,
      default: '',
    },
    onError: {
      type: String,
      default: ''
    }
  },
}
</script>

<style lang="scss" scoped >
@mixin form-field-pl {
  @apply pl-2;
}

.form-field__label {
  @apply font-semibold leading-tight;
}

::v-deep(.form-field__input) {
  @apply
    w-full
    bg-transparent text-white
    border-0 border-b border-primary-darkest;

  @include form-field-pl;

  &:focus {
    @apply shadow-none ring-0 border-primary-lighten;
  }

  &::placeholder {
    @apply text-placeholder;
  }

  &[data-state='true'] {
    @apply border-danger;
  }
}

.form-field__error-placement {
  @apply relative h-9;
}

.form-field__error-label {
  @apply
    text-danger text-sm break-all leading-none
    absolute top-1 left-0;

  @include form-field-pl;
}

.form-field__error-label-transition {
  &-enter-from {
    @apply opacity-0 transform -translate-y-2;
  }

  &-leave-to {
    @apply opacity-0;
  }

  &-enter-active,
  &-leave-active {
    @apply duration-100 ease-in;
  }
}
</style>