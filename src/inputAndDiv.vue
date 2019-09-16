<template>
  <div>
    {{num}}<input type="text" v-model="text">
    <div>{{text}}</div>
  </div>
</template>

<script>
  export default {
    props: ['num'],
    data() {
      return {
        text: ''
      }
    }
  }
</script>