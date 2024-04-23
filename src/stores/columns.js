import { ref } from 'vue'
import { defineStore } from 'pinia'

export const useColumnsStore = defineStore('columns', () => {
  const columns = ref([
    {
      id: 1,
      name: 'Stage',
      cards: []
    },
    {
      id: 2,
      name: 'Production',
      cards: []
    },
    {
      id: 3,
      name: 'Deployed',
      cards: []
    }
  ])

  const addNewColumn = (newColumn) => {
    columns.value.push({
      id: Date.now(),
      cards: [],
      ...newColumn
    })
  }
  const deleteColumn = (columnId) => {
    columns.value = columns.value.filter((col) => col.id !== columnId)
  }
  const editColumn = (id, newColumn) => {
    columns.value = columns.value.map((col) =>
      col.id === id ? { ...newColumn, id, cards: col.cards } : col
    )
  }
  const moveColumn = (removedIndex, addedIndex) => {
    if (removedIndex === null && addedIndex === null) return
    const result = [...columns.value]
    let itemToAdd
    if (removedIndex !== null) {
      itemToAdd = result.splice(removedIndex, 1)[0]
    }
    if (addedIndex !== null) {
      result.splice(addedIndex, 0, itemToAdd)
    }
    columns.value = result
  }

  return { columns, addNewColumn, deleteColumn, editColumn, moveColumn }
})
