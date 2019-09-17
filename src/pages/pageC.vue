<template>
  <div>
    <span>pageC</span>
    <circle1 color="red"></circle1>
  </div>
</template>

<script>
  const circle1 = () => import('../components/circle');

  export default {
    components: { circle1 },
    data() {
      return {}
    }
  }
</script>