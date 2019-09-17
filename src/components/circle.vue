<template>
  <div>
    <div :class="$style['circle1']" :style="{background: color}">
    </div>
  </div>
</template>

<script>
  export default {
    props: ['color'],
  }
</script>

<style module>
  .circle1 {
    width: 100px;
    height: 100px;
    border-radius: 50%;
  }
</style>