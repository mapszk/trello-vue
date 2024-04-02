<script setup>
import { computed, ref } from 'vue'

const props = defineProps({
  placeholder: String,
  options: Array
})
const emit = defineEmits(['selectOption'])
const showOptions = ref(false)
const selected = ref(null)
const selectedLabel = computed(() => props.options.find((op) => op.value === selected.value).label)

const toggleOptions = () => {
  showOptions.value = !showOptions.value
}
const select = (value) => {
  selected.value = value
  emit('selectOption', value)
  toggleOptions()
}
</script>

<template>
  <div class="w-full h-8 relative cursor-pointer rounded-md bg-gray-100">
    <div class="flex justify-between items-center px-2 h-8" @click="toggleOptions">
      <span v-if="!selected" class="text-sm font-semibold text-gray-500">{{
        props.placeholder
      }}</span>
      <span v-else class="text-sm font-semibold text-gray-500">{{ selectedLabel }}</span>
      <Icon icon="radix-icons:chevron-down" class="text-gray-500" width="22px" />
    </div>
    <div
      v-if="showOptions"
      class="w-full absolute flex flex-col rounded-md bg-white border border-gray-300 top-[calc(100%+5px)] z-[100000]"
    >
      <span
        v-for="option of props.options"
        :key="option.value"
        @click="() => select(option.value)"
        class="hover:bg-gray-100 text-left px-2 py-1 text-sm text-gray-500 font-semibold"
        >{{ option.label }}</span
      >
    </div>
  </div>
</template>
