<script setup>
const props = defineProps(['id'])
const emits = defineEmits(['handleCloseModal'])
import { useFieldStore } from '@/store/counter'
import { listTypeSupport } from '@/store/data'
import OptionItem from '../CreateFieldView/OptionItem.vue'
import SelectedData from '../CreateFieldView/SelectedData.vue'
import { computed, ref, watch } from 'vue'

const type = ['All', ...new Set(listTypeSupport.map((item) => item.type))]

const selectedType = ref('All')
const result = ref([...listTypeSupport.map(({ name }) => ({ name }))])
const searchQuery = ref('')

watch(selectedType, () => {
  if (selectedType.value === 'All') {
    result.value = listTypeSupport.map(({ name }) => ({ name }))
  } else {
    result.value = listTypeSupport
      .filter((obj) => obj.type === selectedType.value)
      .map(({ name }) => ({ name }))
  }
})

const searchResults = computed(() => {
  const query = searchQuery.value.trim().toLowerCase()
  if (query === '') {
    return result.value
  } else {
    return result.value.filter((item) => item.name.toLowerCase().includes(query))
  }
})

function handleSelectType(type) {
  selectedType.value = type
}

function handleChooseValue(name) {
  store.updateField(props.id, 'type', name)
  store.setResult()
  emits('handleCloseModal')
}

const store = useFieldStore()
</script>
<template>
  <div class="fixed w-full h-full z-[1000] left-0 top-0 bg-[#00000080]">
    <div class="w-[80%] bg-[#fefefe] my-[15%] mx-auto pt-1 px-5 pb-4">
      <div class="flex justify-end">
        <span
          class="text-[#aaa] text-2xl font-bold hover:cursor-pointer focus:cursor-pointer hover:text-black focus:text-black hover:no-underline focus:no-underlines"
          @click="$emit('handleCloseModal')"
          >&times;</span
        >
      </div>
      <div class="flex justify-start items-center gap-4 flex-wrap">
        <component
          v-for="item in type"
          :is="OptionItem"
          :btnName="item"
          :selected="selectedType === item"
          @click="handleSelectType(item)"
        ></component>
      </div>
      <div class="search">
        <input
          type="text"
          placeholder="Enter search value..."
          class="w-[25%] mt-3 block px-3 py-2 bg-white border border-slate-300 rounded-md text-sm shadow-sm placeholder-slate-400 focus:outline-none focus:border-sky-500 focus:ring-1 focus:ring-sky-500 disabled:bg-slate-50 disabled:text-slate-500 disabled:border-slate-200 disabled:shadow-none invalid:border-pink-500 invalid:text-pink-600 focus:invalid:border-pink-500 focus:invalid:ring-pink-500"
          v-model="searchQuery"
        />
      </div>
      <div class="flex gap-3 flex-wrap mt-4">
        <p v-if="searchResults.length === 0">No Matched Data</p>
        <component
          v-else
          :is="SelectedData"
          :name="item.name"
          v-for="item in searchResults"
          @click="() => handleChooseValue(item.name)"
        ></component>
      </div>
    </div>
  </div>
</template>
