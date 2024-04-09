<script setup>
import InputField from '@/components/common/InputField.vue'
import TypeInputField from '@/components/common/TypeInputField.vue'
import { useFieldStore } from '@/store/counter'
defineProps(['rowData'])
const store = useFieldStore()
</script>

<template>
  <tr>
    <td class="p-3">
      <component :is="InputField" :data="rowData" placeHolder="Name..." />
    </td>
    <td class="p-3">
      <component :is="TypeInputField" :data="rowData" :id="rowData.id" placeHolder="Type..." />
    </td>
    <td class="p-3">
      <p v-if="rowData.options.length === 0">No needed option</p>
      <p v-else>Options</p>
    </td>
    <td>
      <div class="h-full flex justify-center items-center gap-3">
        <div class="cursor-pointer hover:text-red-600" @click="store.removeField(rowData.id)">
          <span class="text-xl"><i class="fa-solid fa-trash-can"></i></span>
        </div>
        <div class="cursor-pointer hover:text-blue-300" @click="store.cloneField({ ...rowData })">
          <span class="text-xl"><i class="fa-solid fa-clone"></i></span>
        </div>
      </div>
    </td>
  </tr>
</template>
