<script setup>
import { onMounted, ref } from 'vue'
import Button from '../Button.vue'
import { useCardsStore } from '../../stores/cards'

const props = defineProps({
  cardsAmount: Number,
  columnId: Number
})
const emit = defineEmits(['close'])

const newCardInput = ref(null)
const newCardName = ref('')
const { addNewCard } = useCardsStore()

const close = () => emit('close')

const submit = () => {
  if (!newCardName.value) return
  addNewCard({
    title: newCardName.value,
    columnId: props.columnId,
    order: props.cardsAmount + 1
  })
  close()
}

onMounted(() => newCardInput.value.focus())
</script>

<template>
  <div v-click-outside="close" class="w-full flex flex-col rounded-xl bg-gray-200">
    <textarea
      ref="newCardInput"
      type="text"
      placeholder="Type your new list name..."
      v-model="newCardName"
      @keypress.enter="submit"
      class="h-24 mb-2 resize-none border border-gray-300 text-sm p-2 min-h-12 w-full rounded-xl focus:outline-none"
    ></textarea>
    <div class="flex gap-1">
      <Button primary @click="submit"> Add card </Button>
      <Button @click="close" class="p-0">
        <Icon icon="radix-icons:cross-2" width="18px" />
      </Button>
    </div>
  </div>
</template>
