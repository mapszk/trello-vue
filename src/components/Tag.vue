<script setup>
const props = defineProps({
  id: Number,
  tag: String,
  big: Boolean,
  color: String
})

const defaultClasses = 'rounded-md bg-blue-300 px-2 inline-flex'
const bigClasses = 'flex items-center px-3 rounded-md bg-blue-300 px-1 inline-flex'

const defaultTextClasses = 'font-bold text-white text-xs'
const bigTextClasses = 'font-semibold text-white text-sm'
</script>

<template>
  <div :class="props.big ? bigClasses : defaultClasses" :style="{ backgroundColor: props.color }">
    <span :class="props.big ? bigTextClasses : defaultTextClasses">{{ props.tag }}</span>
  </div>
</template>
