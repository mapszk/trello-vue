<script setup>
const props = defineProps({
  primary: Boolean
})

const defaultClasses =
  'h-8 px-2 flex items-center justify-center rounded-md hover:bg-gray-300 text-sm font-semibold text-gray-600'
const primaryClasses = 'bg-blue-500 hover:bg-blue-600 text-white'

const buttonClasses = [defaultClasses, props.primary && primaryClasses]
</script>

<template>
  <button :class="buttonClasses">
    <slot></slot>
  </button>
</template>
