<script setup>
import { useFieldStore } from '@/store/counter'
const store = useFieldStore()
const props = defineProps(['data', 'placeHolder'])
</script>

<template>
  <input
    class="mt-1 block w-full px-3 py-2 bg-white border border-slate-300 rounded-md text-sm shadow-sm placeholder-slate-400 focus:outline-none focus:border-sky-500 focus:ring-1 focus:ring-sky-500 disabled:bg-slate-50 disabled:text-slate-500 disabled:border-slate-200 disabled:shadow-none invalid:border-pink-500 invalid:text-pink-600 focus:invalid:border-pink-500 focus:invalid:ring-pink-500"
    :value="props.data.name"
    :placeholder="props.placeHolder"
    @change="(event) => store.updateField(props.data.id, 'name', event.target.value)"
    maxlength="20"
  />
</template>
