import { ref, watch } from 'vue'
import { defineStore } from 'pinia'

export const useCardsStore = defineStore('cards', () => {
  const defaultValue = [
    {
      id: 1,
      title: 'Create a navbar',
      columnId: 1,
      description: '',
      order: 1,
      color: '#22c55e'
    },
    {
      id: 2,
      title: 'Integrate links in card description',
      columnId: 1,
      description: '',
      order: 2,
      color: '#22c55e'
    },
    {
      id: 3,
      title: 'Checkout Martin portfolio',
      columnId: 2,
      description: 'https://pzk.com.ar',
      order: 1,
      color: '#f97316'
    },
    {
      id: 4,
      title: 'Card modal',
      columnId: 4,
      description: 'Create a modal for the cards',
      order: 1,
      color: '#d946ef'
    },
    {
      id: 5,
      title: 'Integrate drag and drop',
      columnId: 4,
      description: 'Integrate drag and drop for cards and columns',
      order: 2,
      color: '#d946ef'
    },
    {
      id: 6,
      title: 'Create columns',
      columnId: 4,
      description: 'Create board columns',
      order: 2,
      color: '#d946ef'
    }
  ]

  const cards = ref(JSON.parse(localStorage.getItem('cards')) || defaultValue)

  watch(
    () => cards.value,
    () => localStorage.setItem('cards', JSON.stringify(cards.value)),
    { deep: true }
  )

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
  const changeCardColumn = ({ cardId, newColumnId, oldColumnId, newOrder, oldOrder }) => {
    cards.value = cards.value
      .map((card) => {
        if (card.columnId === newColumnId)
          return { ...card, order: card.order >= newOrder ? card.order + 1 : card.order }
        else if (card.columnId === oldColumnId)
          return { ...card, order: card.order >= oldOrder ? card.order - 1 : card.order }
        else return card
      })
      .map((card) =>
        card.id === cardId ? { ...card, columnId: newColumnId, order: newOrder } : card
      )
  }
  const changeCardOrder = (removed, added) => {
    cards.value = cards.value.map((card) => {
      if (card.id === removed.id) return { ...card, order: added.order }
      else if (card.id === added.id) return { ...card, order: removed.order }
      else return card
    })
  }

  return { cards, addNewCard, deleteCard, editCard, changeCardColumn, changeCardOrder }
})
