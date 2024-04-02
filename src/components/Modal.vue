<script setup>
const emit = defineEmits(['close'])
const closeModal = () => emit('close')
</script>

<template>
  <Teleport to="body">
    <div
      class="modal fixed inset-0 flex items-center justify-center bg-[rgba(0,0,0,0.75)]"
      @click="closeModal"
    >
      <div @click.stop>
        <slot></slot>
      </div>
    </div>
  </Teleport>
</template>
