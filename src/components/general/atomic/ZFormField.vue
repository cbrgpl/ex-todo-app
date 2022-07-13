<template >
  <label
    class="field"
    v-bind="wrapperAttrs" 
    :data-state="state" >
    <h5 class="field__label" >
      {{ label }}
    </h5>

    <slot
      name="input"
      v-bind="{attrs, props: $props}" />
    
    <div class="field__error-placement" >
      <Transition name="field__error-label-transition" >
        <label
          v-show="errorState"
          class="field__error-label" >
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
      type: [ Boolean, null ],
      default: null,
      validator: ( val ) => [ true, null, false ].includes( val ) 
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
  computed: {
    errorState() {
      return this.state === false
    }
  }
}
</script>

<style lang="scss" scoped >
@mixin field-pl {
  @apply pl-2;
}

.field__label {
  @apply font-semibold leading-tight;
}

::v-deep(.field__input) {
  @apply
    w-full
    bg-transparent text-white
    border-0 border-b border-primary-darkest;

  @include field-pl;

  &:focus {
    @apply shadow-none ring-0 border-primary-lighten;
  }

  &::placeholder {
    @apply text-placeholder;
  }

  &[data-state='true'] {
    @apply border-safety;
  }

  &[data-state='false'] {
    @apply border-danger;
  }
}

.field__error-placement {
  @apply relative h-9;
}

.field__error-label {
  @apply
    text-danger text-sm break-all leading-none
    absolute top-1 left-0;

  @include field-pl;
}

.field__error-label-transition {
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