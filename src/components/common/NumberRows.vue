<template>
  <div class="number-row">
    <label for="">Preview Rows</label>
    <input
      v-model="numOfRow"
      v-on:input="checkNumOfRow(), updateRows()"
      class="w-20 form-button"
      type="number"
      name="preview-row"
    />
  </div>
</template>

<script setup>
import { ref } from 'vue'
import { useFieldStore } from '@/store/counter'

const numOfRow = ref(10)

const store = useFieldStore()

const updateRows = () => {
  store.setRows(numOfRow)
  store.setResult()
}

const checkNumOfRow = () => {
  if (numOfRow.value < 0) {
    numOfRow.value = 0
  } else if (numOfRow.value > 50) {
    numOfRow.value = 50
  }
}
</script>
