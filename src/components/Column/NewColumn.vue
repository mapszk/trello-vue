<script setup>
import { useColumnsStore } from '@/stores/columns'
import Button from '../Button.vue'
import { nextTick, ref } from 'vue'

const newColumnName = ref('')
const newColumnInput = ref(null)
const showPlaceholder = ref(true)
const { addNewColumn } = useColumnsStore()

const togglePlaceholder = async () => {
  showPlaceholder.value = !showPlaceholder.value
  if (!showPlaceholder.value) nextTick(() => newColumnInput.value.focus())
}

const submit = () => {
  newColumnName.value && addNewColumn({ name: newColumnName.value })
  newColumnName.value = ''
}
</script>

<template>
  <button
    v-if="showPlaceholder"
    @click="togglePlaceholder"
    class="w-72 shrink-0 rounded-xl flex items-center p-3 font-semibold text-sm text-gray-700 bg-gray-200 hover:bg-gray-300"
  >
    <Icon class="mr-2" icon="radix-icons:plus" width="18px" />
    Add a new column
  </button>
  <div
    v-else
    v-click-outside="togglePlaceholder"
    class="w-72 max-h-full shrink-0 self-start border border-gray-300 flex flex-col p-2 rounded-xl shadow-sm bg-gray-200"
  >
    <input
      ref="newColumnInput"
      type="text"
      placeholder="Type your new list name..."
      v-model="newColumnName"
      @keypress.enter="submit"
      class="h-8 mb-2 text-sm px-2 w-full rounded-md outline-blue-500"
    />
    <div class="flex gap-1">
      <Button primary @click="submit"> Add column </Button>
      <Button @click="togglePlaceholder" class="p-0">
        <Icon icon="radix-icons:cross-2" width="18px" />
      </Button>
    </div>
  </div>
</template>
