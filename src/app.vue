<template>
  <div>
    <inputAndDiv :num="2"></inputAndDiv>
    <router-link to="/">a</router-link>
    <router-link to="/b">b</router-link>
    <router-link to="/c">c</router-link>
    <router-view />
  </div>
</template>

<script>
const inputAndDiv = () => import('./components/inputAndDiv');

export default {
  components: { inputAndDiv },
}
</script>