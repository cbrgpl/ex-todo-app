<template >
  <div class="font-semibold text-lg" >
    <span class="text-safety" >
      {{ completed }}
    </span>
    / 
    <span class="text-danger" >
      {{ incompleted }}
    </span>
  </div>
</template>

<script >

export default {
  name: 'PTodoRatio',
  props: {
    completed: {
      type: Number,
      required: true,
    },
    incompleted: {
      type: Number, 
      required: true
    }
  }
}

</script>

<style lang="scss" scoped >

</style>