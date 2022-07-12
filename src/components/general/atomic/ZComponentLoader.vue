<template >
  <div
    :data-center="center"
    :data-size="size"
    class="loader" >
    <div class="loader__inner" >
      <span class="loader__dot" />
      <span class="loader__dot" />
      <span class="loader__dot" />
    </div>
  </div>
</template>

<script >
export default {
  name: 'ZComponentLoader',
  props: {
    size: {
      type: String,
      default: 'sm',
      validator: ( val ) => [ 'sm', 'md' ].includes( val )
    },
    center: {
      type: Boolean,
      default: false,
    }
  },
}
</script>

<style lang="scss" scoped >
@mixin loader-size($dot-size, $loader-width, $animation-duration) {
  .loader__inner {
    width: $loader-width;
  }

  .loader__dot {
    @apply
      bg-white border border-black border-solid
      block rounded-full;

    width: $dot-size;
    height: $dot-size;
    animation-duration: $animation-duration;
  }
}

.loader {
  @apply
    flex justify-center items-center
    w-full h-full
    absolute;

  &[data-size='sm'] {
    @include loader-size(10px, 48px, 500ms);
  }

  &[data-size='md'] {
    @include loader-size(20px, 92px, 650ms);
  }

  &[data-center='true'] {
    @apply absolute right-2/4 bottom-2/4 transform translate-x-2/4 translate-y-2/4;
  }
}

.loader__inner {
  @apply flex justify-around items-center;
}

.loader__dot {
  animation-name: loader-dot;
  animation-iteration-count: infinite;
  animation-direction: alternate;

  &:nth-child(2) {
    animation-delay: 125ms;
  }

  &:nth-child(3) {
    animation-delay: 250ms;
  }
}

@keyframes loader-dot {
  0% {
    transform: translateY(0) scale(1);
  }

  100% {
    transform: translateY(-80%) scale(0.7);
  }
}

</style>