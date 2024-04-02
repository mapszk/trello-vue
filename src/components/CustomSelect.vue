<script setup>
import { ref } from 'vue'

const props = defineProps({
  placeholder: String
})

const options = [
  { label: 'test', id: 1 },
  { label: 'test', id: 2 },
  { label: 'test', id: 3 },
  { label: 'test', id: 4 },
  { label: 'test', id: 5 }
]
const showOptions = ref(false)

const toggleOptions = () => {
  showOptions.value = !showOptions.value
}
</script>

<template>
  <div class="w-full h-8 relative cursor-pointer rounded-md bg-gray-100">
    <div class="flex justify-between items-center px-2 h-8" @click="toggleOptions">
      <span class="text-sm font-semibold text-gray-500">{{ props.placeholder }}</span>
      <Icon icon="radix-icons:chevron-down" class="text-gray-500" width="22px" />
    </div>
    <div
      v-if="showOptions"
      class="w-full absolute flex flex-col rounded-md bg-white border border-gray-300 top-[calc(100%+5px)] z-[100000]"
    >
      <span
        v-for="option of options"
        :key="option.id"
        @click="toggleOptions"
        class="hover:bg-gray-100 text-left px-2 py-1 text-md text-gray-500 font-semibold"
        >{{ option.label }}</span
      >
    </div>
  </div>
</template>
