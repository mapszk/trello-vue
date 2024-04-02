<script setup>
import { onMounted, ref } from 'vue'
import Button from '../Button.vue'

const emit = defineEmits(['close'])

const newCardInput = ref(null)
const newCardName = ref('')

const close = () => emit('close')
onMounted(() => newCardInput.value.focus())
</script>

<template>
  <div v-click-outside="close" class="w-full flex flex-col rounded-xl bg-gray-200">
    <textarea
      ref="newCardInput"
      type="text"
      placeholder="Type your new list name..."
      v-model="newCardName"
      class="h-24 mb-2 resize-none border border-gray-300 text-sm p-2 min-h-12 w-full rounded-xl focus:outline-none"
    ></textarea>
    <div class="flex">
      <Button>
        <Icon icon="radix-icons:plus-circled" class="mr-2" width="16px" />
        Add card
      </Button>
      <Button @click="close" class="p-0">
        <Icon icon="radix-icons:cross-2" width="18px" />
      </Button>
    </div>
  </div>
</template>
