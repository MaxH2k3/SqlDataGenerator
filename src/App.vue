<script setup>
import Header from './layouts/Header.vue'
</script>

<template>
  <div class="app-container">
    <Header></Header>
    <div class="body">
      <RouterView />
    </div>
  </div>
</template>

<style scoped>
@import url(assets/main.css);
.app-container {
  overflow: auto;
  height: 100vh;
}
.body {
  margin: 1em;
  border: gray solid 1px;
  border-radius: 10px;
}
</style>
