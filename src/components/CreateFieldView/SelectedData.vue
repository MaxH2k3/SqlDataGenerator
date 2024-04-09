<script setup>
defineProps(['name'])
defineEmits(['handleChange'])
</script>

<template>
  <div>
    <button
      class="w-[150px] border rounded-md bg-yellow-200 hover:bg-yellow-400 p-[6px] text-[16px]"
    >
      {{ name }}
    </button>
  </div>
</template>
