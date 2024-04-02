import { ref } from 'vue'
import { defineStore } from 'pinia'

export const useCardsStore = defineStore('cards', () => {
  const cards = ref([])

  const addNewCard = (newCard) => {
    const id = Date.now()
    cards.value.push({
      id,
      title: newCard.title,
      columnId: newCard.columnId,
      description: newCard.description || null,
      color: newCard.color || null,
      order: newCard.order
    })
    return id
  }
  const deleteCard = (cardId) => {
    cards.value = cards.value.filter((card) => card.id !== cardId)
  }
  const editCard = (id, newCard) => {
    cards.value = cards.value.map((card) => (card.id === id ? { ...card, ...newCard, id } : card))
  }

  return { cards, addNewCard, deleteCard, editCard }
})
