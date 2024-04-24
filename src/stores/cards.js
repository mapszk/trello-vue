import { ref } from 'vue'
import { defineStore } from 'pinia'

export const useCardsStore = defineStore('cards', () => {
  const cards = ref([
    {
      id: 1,
      title: 'test',
      columnId: 2,
      description: '',
      color: '#3239ff'
    },
    {
      id: 2,
      title: 'test',
      columnId: 2,
      description: '',
      color: '#3239ff'
    },
    {
      id: 3,
      title: 'test',
      columnId: 2,
      description: '',
      color: '#3239ff'
    },
    {
      id: 4,
      title: 'test',
      columnId: 2,
      description: '',
      color: '#3239ff'
    },
    {
      id: 5,
      title: 'test',
      columnId: 2,
      description: '',
      color: '#3239ff'
    },
    {
      id: 6,
      title: 'test',
      columnId: 2,
      description: '',
      color: '#3239ff'
    },
    {
      id: 8,
      title: 'test',
      columnId: 2,
      description: '',
      color: '#3239ff'
    },
    {
      id: 64,
      title: 'test',
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

  return { cards, addNewCard, deleteCard, editCard }
})
