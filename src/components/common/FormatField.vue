<script setup>
import { ref } from 'vue'
import { useFieldStore } from '@/store/counter'
import { listTypeFormat } from '@/store/commonData'

const selected = ref(listTypeFormat[0].value)
const store = useFieldStore()

const updateFormat = () => {
  store.setFormat(selected)
}
</script>

<template>
  <div class="format-type">
    <label for="">Format</label>
    <select
      name="format-type"
      v-model="selected"
      class="form-button w-28"
      v-on:input="updateFormat"
    >
      <option
        v-for="typeFormat in listTypeFormat"
        :key="typeFormat.value"
        :value="typeFormat.value"
      >
        {{ typeFormat.text }}
      </option>
    </select>
  </div>
</template>
