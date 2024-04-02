<script setup>
import { onMounted, onUnmounted } from 'vue'

const emit = defineEmits(['close'])

const closeModal = (evt, keyboard) => {
  if (keyboard || evt.srcElement.id === 'close-modal') emit('close')
}
const closeWithKeyboard = (evt) => {
  if (evt.key === 'Escape') closeModal(null, true)
}

onMounted(() => {
  document.addEventListener('keydown', closeWithKeyboard)
})
onUnmounted(() => {
  document.removeEventListener('keydown', closeWithKeyboard)
})
</script>

<template>
  <Teleport to="body">
    <div
      id="close-modal"
      class="fixed inset-0 overflow-y-auto overflow-x-hidden w-screen bg-[rgba(0,0,0,0.75)]"
      @click="closeModal"
    >
      <div id="close-modal" class="w-11/12 mx-auto min-h-screen flex items-center justify-center">
        <slot></slot>
      </div>
    </div>
  </Teleport>
</template>
