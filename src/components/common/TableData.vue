<script setup>
import { useFieldStore } from '@/store/counter'

const store = useFieldStore()

store.setResult()
</script>

<template>
  <div class="overflow-auto custom-scroll-content h-full">
    <table class="table-auto w-full text-center table-nowrap">
      <thead class="bg-fourth">
        <tr>
          <th class="p-4" v-for="name in store.getListName">{{ name }}</th>
        </tr>
      </thead>
      <tbody>
        <tr class="hover:bg-fourth" v-for="row in store.getResult">
          <td class="p-4" v-for="column in row">
            {{ column }}
          </td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<style scoped>
::selection {
  background-color: #afd4e3;
}

/* Tùy chỉnh thanh cuộn */
.custom-scroll-content::-webkit-scrollbar {
  width: 6px;
}

.custom-scroll-content::-webkit-scrollbar-thumb {
  background-color: rgba(156, 163, 175, 0.5);
  border-radius: 3px;
}

.custom-scroll-content::-webkit-scrollbar-thumb:hover {
  background-color: rgba(209, 213, 219, 0.6);
}
</style>
