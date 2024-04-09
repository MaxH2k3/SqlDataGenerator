<script setup>
defineProps(['btnName', 'selected'])
</script>

<template>
  <div>
    <button
      v-if="selected"
      class="w-[10em] border rounded-md bg-orange-400 hover:bg-orange-500 p-[6px] text-[16px]"
    >
      {{ btnName }}
    </button>
    <button
      v-else
      class="w-[10em] border rounded-md bg-blue-200 hover:bg-blue-300 p-[6px] text-[16px]"
    >
      {{ btnName }}
    </button>
  </div>
</template>
