<script setup>
import { useFieldStore } from '@/store/counter'

const store = useFieldStore()
</script>

<template>
  <div class="button-add" @click="store.addField">
    <span><i class="fa-solid fa-plus"></i></span>
    Add new field
  </div>
</template>

<style scoped>
.button-add {
  padding: 8px;
  width: 9em;
  border: 1px thick black;
  border-radius: 8px;
  cursor: pointer;
  background-color: green;
  font-weight: bold;
  color: white;
}

.button-add:hover {
  background-color: rgb(6, 66, 6);
}
</style>
