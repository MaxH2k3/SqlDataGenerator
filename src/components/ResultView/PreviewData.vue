<script setup>
import TableData from '../common/TableData.vue'
import { useFieldStore } from '@/store/counter'
import PreviewCode from '../common/PreviewCode.vue'

const store = useFieldStore()
</script>

<template>
  <div class="preview-data mt-4 mb-4 h-auto">
    <div class="container text-primary shadow-md m-auto">
      <div class="title">
        <h5 class="font-semibold pl-4">Preview Data</h5>
      </div>
      <div class="main-content h-mainContent">
        <template v-if="store.getFormat.trim() === 'table'">
          <TableData />
        </template>
        <template v-else-if="store.getFormat.trim() !== ''">
          <PreviewCode />
        </template>
        <template v-else> </template>
      </div>
    </div>
  </div>
</template>
