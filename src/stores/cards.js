import { ref } from 'vue'
import { defineStore } from 'pinia'

export const useCardsStore = defineStore('cards', () => {
  const cards = ref([
    {
      id: 4,
      title: 'primera',
      columnId: 2,
      description: '',
      color: '#ab2498'
    },
    {
      id: 5,
      title: 'segunda',
      columnId: 2,
      description: '',
      color: '#6822fa'
    },
    {
      id: 6,
      title: 'tercera',
      columnId: 2,
      description: '',
      color: '#3239ff'
    }
  ])

  const addNewCard = (newCard) => {
    const id = Date.now()
    cards.value.push({
      id,
      title: newCard.title,
      columnId: newCard.columnId,
      description: newCard.description || null,
      color: newCard.color || null
    })
    return id
  }
  const deleteCard = (cardId) => {
    cards.value = cards.value.filter((card) => card.id !== cardId)
  }
  const editCard = (id, newCard) => {
    cards.value = cards.value.map((card) => (card.id === id ? { ...card, ...newCard, id } : card))
  }
  const moveCard = (removedIndex, addedIndex, cardId, columnId) => {
    if (cardId && columnId) {
      console.log('cambiar col')
      cards.value = cards.value.map((card) => (card.id === cardId ? { ...card, columnId } : card))
    } else {
      console.log('cambiar pos')
      const result = [...cards.value]
      let itemToAdd
      if (removedIndex !== null) {
        itemToAdd = result.splice(removedIndex, 1)[0]
      }
      if (addedIndex !== null) {
        result.splice(addedIndex, 0, itemToAdd)
      }
      cards.value = result
    }
  }

  return { cards, addNewCard, deleteCard, editCard, moveCard }
})
