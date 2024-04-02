import { ref } from 'vue'
import { defineStore } from 'pinia'
import { defaultEmptyCard } from '@/constants/cards'

export const useCardsStore = defineStore('cards', () => {
  const cards = ref([])

  const addNewCard = (newCard) => {
    cards.value.push(
      defaultEmptyCard({
        id: Date.now(),
        title: newCard.title,
        columnId: newCard.columnId,
        order: newCard.order
      })
    )
  }
  const deleteCard = (cardId) => {
    cards.value = cards.value.filter((card) => card.id !== cardId)
  }
  const editCard = (id, newCard) => {
    cards.value = cards.value.map((card) => (card.id === id ? { ...card, ...newCard, id } : card))
  }

  return { cards, addNewCard, deleteCard, editCard }
})
