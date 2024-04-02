import { ref } from 'vue'
import { defineStore } from 'pinia'

export const useColumnsStore = defineStore('columns', () => {
  const columns = ref([
    {
      id: 1,
      order: 0,
      name: 'Stage',
      cards: []
    },
    {
      id: 2,
      order: 1,
      name: 'Production',
      cards: []
    },
    {
      id: 3,
      order: 2,
      name: 'Deployed',
      cards: []
    }
  ])

  const addNewColumn = (newColumn) => {
    columns.value.push({
      id: Date.now(),
      order: columns.value.length + 1,
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

  return { columns, addNewColumn, deleteColumn, editColumn }
})
