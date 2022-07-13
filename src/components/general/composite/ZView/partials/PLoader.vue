<template >
  <div class="loader__wrapper" >
    <div
      ref="loader"
      class="loader" >
      <span class="loader__service-item" />
    </div>
    <h4
      class="loader__title" >
      Loading...
    </h4>
  </div>
</template>
<script >
export default {
  name: 'PLoader',
}
</script>
<style lang="scss" scoped >
@keyframes loader-1 {
  0% {
    transform: rotate(0deg);
  }

  100% {
    transform: rotate(360deg);
  }
}

@keyframes loader-2 {
  0% {
    transform: translate3d(0, 0, 0) scale(1);
  }

  50% {
    transform: translate3d(500%, 0, 0) scale(0.5);
  }

  100% {
    transform: translate3d(0, 0, 0) scale(1);
  }
}

@keyframes loader-3 {
  0% {
    transform: translate3d(0, 0, 0) scale(1);
  }

  50% {
    transform: translate3d(-500%, 0, 0) scale(0.5);
  }

  100% {
    transform: translate3d(0, 0, 0) scale(1);
  }
}

@keyframes loader-4 {
  0% {
    transform: translate3d(0, 0, 0) scale(1);
  }

  50% {
    transform: translate3d(0, 500%, 0) scale(0.5);
  }

  100% {
    transform: translate3d(0, 0, 0) scale(1);
  }
}

@keyframes loader-5 {
  0% {
    transform: translate3d(0, 0, 0) scale(1);
  }

  50% {
    transform: translate3d(0, -500%, 0) scale(0.5);
  }

  100% {
    transform: translate3d(0, 0, 0) scale(1);
  }
}

@mixin loader-circle {
  @apply
    absolute top-0 left-0 bottom-0 right-0
    block w-5 h-5 md:w-6 md:h-6
    bg-white
    m-auto rounded-full;

  content: '';
  animation-duration: 2000ms;
  animation-timing-function: cubic-bezier(0.77, 0, 0.175, 1);
  animation-iteration-count: infinite;
}

.loader__wrapper {
  @apply flex flex-col items-center;
}

.loader {
  @apply
    relative w-40 h-40 md:w-48 md:h-48 lg:w-52 lg:h-52;

  animation: loader-1 2s cubic-bezier(0.77, 0, 0.175, 1) infinite;
}

.loader::before {
  @include loader-circle;

  @apply right-auto;

  animation-name: loader-2;
}

.loader::after {
  @include loader-circle;

  @apply left-auto;

  animation-name: loader-3;
}

.loader .loader__service-item {
  @apply absolute top-0 left-0
    block w-full h-full;
}

.loader .loader__service-item::before {
  @include loader-circle;

  @apply bottom-auto;

  animation-name: loader-4;
}

.loader .loader__service-item::after {
  @include loader-circle;

  @apply top-auto;

  animation-name: loader-5;
}

.loader__title {
  @apply
    font-semibold
    text-xl md:text-2xl lg:text-3xl
    mt-10 md:mt-12 lg:mt-14;
}
</style>