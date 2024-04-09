<script setup></script>
<template>
  <div>
    <header class="header sticky top-0">
      <div class="logo">Generator Data</div>
      <ul class="menu">
        <RouterLink to="/">Go to Home</RouterLink>
        <RouterLink to="/about">Go to About</RouterLink>
      </ul>
    </header>
  </div>
</template>

<style lang="scss" scoped>
.header {
  background-color: black;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0 8em;
  height: 60px;
  .logo {
    font-weight: bold;
    font-size: 26px;
    color: whitesmoke;
  }
  .menu {
    color: white;
    list-style-type: none;
    display: flex;
    justify-content: space-between;
    gap: 5em;
  }
}
</style>
