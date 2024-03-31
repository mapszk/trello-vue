<script setup>
const props = defineProps({
  id: Number,
  tag: String,
  color: String
})
</script>

<template>
  <div class="rounded-sm bg-blue-300 px-1 inline-flex" :style="{ backgroundColor: props.color }">
    <span class="font-bold text-xs opacity-70">{{ props.tag }}</span>
  </div>
</template>
