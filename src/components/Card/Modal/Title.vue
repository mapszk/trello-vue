<script setup>
import { useCardsStore } from '@/stores/cards'
import { nextTick, ref } from 'vue'

const props = defineProps({
  title: String,
  cardId: Number
})

const { editCard } = useCardsStore()
const edition = ref(false)
const newTitle = ref(props.title)
const newTitleInput = ref(null)

const toggleEdition = () => {
  edition.value = !edition.value
  if (edition.value) nextTick(() => newTitleInput.value.focus())
}

const edit = () => {
  newTitle.value && editCard(props.cardId, { title: newTitle })
  edition.value = false
  if (!newTitle.value) newTitle.value = props.title
}
</script>

<template>
  <h4 v-if="!edition" @click="toggleEdition" class="text-xl font-semibold mb-1">{{ title }}</h4>
  <input
    class="h-8 mb-2 text-sm px-2 w-full rounded-md outline-blue-500"
    v-model="newTitle"
    ref="newTitleInput"
    type="text"
    @blur="edit"
    @keypress.enter="edit"
    v-else
  />
</template>
