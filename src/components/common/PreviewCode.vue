<script setup>
import { ref, computed } from 'vue'
import { useFieldStore } from '@/store/counter'

const store = useFieldStore()

const previewCode = ref(null)
const selectText = () => {
  var range = document.createRange()
  range.selectNodeContents(previewCode.value)

  // Chọn range vừa tạo
  var selection = window.getSelection()
  selection.removeAllRanges()
  selection.addRange(range)
}

store.setResult()

const check = computed(() => {
  let result = store.getPreviewData
  return result
})
</script>

<template>
  <div
    @click="selectText"
    class="code-review m-8 bg-fourth h-codePreview py-8 px-8 overflow-auto custom-scroll-content"
  >
    <pre class="h-full">
        <code ref="previewCode" class="text-thrid">{{ check }}</code>
      </pre>
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
