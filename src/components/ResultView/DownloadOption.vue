<script setup>
import FormatField from '@/components/common/FormatField.vue'
import NumberRows from '@/components/common/NumberRows.vue'
import SupportButton from '@/components/common/SupportButton.vue'
</script>

<template>
  <div class="download-option mt-4">
    <div class="container text-primary shadow-md m-auto">
      <div class="title">
        <h4 class="font-semibold pl-4">Download Options</h4>
      </div>
      <div class="tool-bar flex items-center gap-12 p-6 h-full">
        <FormatField />
        <NumberRows />
        <SupportButton />
      </div>
    </div>
  </div>
</template>
