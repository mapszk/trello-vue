<script setup>
import { useCardsStore } from '@/stores/cards'
import { nextTick, ref } from 'vue'

const props = defineProps({
  description: String,
  cardId: Number
})

const { editCard } = useCardsStore()
const edition = ref(false)
const newDescription = ref(props.title)
const newDescriptionInput = ref(null)

const toggleEdition = () => {
  edition.value = !edition.value
  if (edition.value) nextTick(() => newDescriptionInput.value.focus())
}

const edit = () => {
  editCard(props.cardId, { description: newDescription })
  edition.value = false
}
</script>

<template>
  <p v-if="!edition && props.description" @click="toggleEdition" class="text-md">
    {{ props.description }}
  </p>
  <textarea
    v-else
    placeholder="Write a description..."
    class="w-full h-32 resize-none bg-gray-100 text-md py-3 px-2 w-full rounded-md outline-blue-500"
    v-model="newDescription"
    ref="newDescriptionInput"
    type="text"
    @blur="edit"
    @keypress.enter="edit"
  ></textarea>
</template>
