<script setup>
import Card from './Card.vue'

const cards = [
  {
    id: 1,
    title: '[FRONT] Asignar usuarios trial a escuelas recién creadas',
    tags: [
      { tag: 'Frontend', id: 1, color: '#8c9e2d' },
      { tag: 'Trello', id: 2, color: '#d82f89' }
    ]
  },
  {
    id: 2,
    title: '[FRONT] Revisar errores del Google Search Console de la landing',
    tags: [
      { tag: 'Frontend', id: 1, color: '#8c9e2d' },
      { tag: 'Trello', id: 2, color: '#d82f89' }
    ]
  },
  {
    id: 3,
    title: '[FRONT] Asignar usuarios trial a escuelas recién creadas',
    tags: [
      { tag: 'Frontend', id: 1, color: '#8c9e2d' },
      { tag: 'Trello', id: 2, color: '#d82f89' }
    ]
  },
  {
    id: 4,
    title: '[FRONT] Asignar usuarios trial a escuelas recién creadas',
    tags: [
      { tag: 'Frontend', id: 1, color: '#8c9e2d' },
      { tag: 'Trello', id: 2, color: '#d82f89' }
    ]
  },
  {
    id: 5,
    title: '[FRONT] Revisar errores del Google Search Console de la landing',
    tags: [
      { tag: 'Frontend', id: 1, color: '#8c9e2d' },
      { tag: 'Trello', id: 2, color: '#d82f89' }
    ]
  },
  {
    id: 6,
    title: '[FRONT] Asignar usuarios trial a escuelas recién creadas',
    tags: [
      { tag: 'Frontend', id: 1, color: '#8c9e2d' },
      { tag: 'Trello', id: 2, color: '#d82f89' }
    ]
  },
  {
    id: 7,
    title: '[FRONT] Asignar usuarios trial a escuelas recién creadas',
    tags: [
      { tag: 'Frontend', id: 1, color: '#8c9e2d' },
      { tag: 'Trello', id: 2, color: '#d82f89' }
    ]
  }
]
</script>

<template>
  <div class="w-72 h-full flex flex-col p-3 rounded-xl shadow-sm bg-gray-200">
    <div class="flex items-center justify-between">
      <span class="text-sm">Nombre de la columna</span>
      <button>...</button>
    </div>
    <div class="cards flex h-full overflow-y-auto p-1 flex-col gap-2 mt-4">
      <Card v-for="card of cards" :key="card.id" :title="card.title" :tags="card.tags" />
    </div>
  </div>
</template>

<style scoped>
/* width */
::-webkit-scrollbar {
  width: 8px;
  margin-left: 25px;
  padding-left: 25px;
}

/* Track */
::-webkit-scrollbar-track {
  background: #f1f1f1;
  border-radius: 4px;
}

/* Handle */
::-webkit-scrollbar-thumb {
  background: #bbbbbb;
  border-radius: 4px;
}

/* Handle on hover */
::-webkit-scrollbar-thumb:hover {
  background: #acacac;
}
</style>
