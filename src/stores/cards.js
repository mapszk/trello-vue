import { ref } from 'vue'
import { defineStore } from 'pinia'

export const useCardsStore = defineStore('cards', () => {
  const cards = ref([
    // {
    //   id: 1,
    //   title: 'primera',
    //   columnId: 2,
    //   description: '',
    //   order: 1,
    //   color: '#ab2498'
    // },
    // {
    //   id: 2,
    //   title: 'segunda',
    //   columnId: 2,
    //   description: '',
    //   order: 2,
    //   color: '#6822fa'
    // },
    // {
    //   id: 3,
    //   title: 'tercera',
    //   columnId: 2,
    //   description: '',
    //   order: 3,
    //   color: '#3239ff'
    // }
  ])

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
