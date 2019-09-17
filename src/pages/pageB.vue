<template>
  <div>
    <span>pageB</span>
    <circle1 color="yellow"></circle1>
    <inputAndDiv></inputAndDiv>
  </div>
</template>

<script>
  const circle1 = () => import('../components/circle');
  const inputAndDiv = () => import('../components/inputAndDiv');

  export default {
    components: { circle1, inputAndDiv },
    data() {
      return {}
    }
  }
</script>