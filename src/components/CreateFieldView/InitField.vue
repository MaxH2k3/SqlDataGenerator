<script setup>
import RowField from '@/components/common/RowField.vue'
import { tableHeader } from '@/store/commonData.js'
import { useFieldStore } from '@/store/counter'
const store = useFieldStore()
</script>

<template>
  <div class="p-0 mt-[10px]">
    <table class="w-full border-collapse text-center">
      <thead>
        <th width="15%" class="font-bold">{{ tableHeader[0] }}</th>
        <th width="15%" class="font-bold">{{ tableHeader[1] }}</th>
        <th width="30%" class="font-bold">{{ tableHeader[2] }}</th>
        <th width="10%" class="font-bold">{{ tableHeader[3] }}</th>
      </thead>
      <tbody>
        <tr v-if="store.list.length === 0">
          <td colspan="4" class="p-4">
            <p class="text-lg text-gray mx-auto">No Item Available</p>
          </td>
        </tr>

        <component v-else v-for="item in store.list" :is="RowField" :rowData="item"></component>
      </tbody>
    </table>
  </div>
</template>
