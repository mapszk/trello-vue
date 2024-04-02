<script setup>
import CardModal from '@/components/Card/CardModal.vue'
import Column from '../components/Column/Column.vue'
import NewColumn from '../components/Column/NewColumn.vue'
import { computed } from 'vue'
import { useRoute } from 'vue-router'

const route = useRoute()
const showCardModal = computed(() => route.name === 'card')

const cards0 = []
const cards1 = [
  {
    id: 1,
    title: '[FRONT] Asignar usuarios trial a escuelas recién creadas',
    color: 'green',
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
  }
]
const cards2 = [
  {
    id: 1,
    title: '[FRONT] Asignar usuarios trial a escuelas recién creadas',
    color: 'green',
    tags: [
      { tag: 'Frontend', id: 1, color: '#8c9e2d' },
      { tag: 'Trello', id: 2, color: '#d82f89' }
    ]
  },
  {
    id: 2,
    title: '[FRONT] Revisar errores del Google Search Console de la landing',
    color: 'green',
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
    color: 'green',
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
    color: 'green',
    tags: [
      { tag: 'Frontend', id: 1, color: '#8c9e2d' },
      { tag: 'Trello', id: 2, color: '#d82f89' }
    ]
  },
  {
    id: 7,
    title: '[FRONT] Asignar usuarios trial a escuelas recién creadas',
    color: 'green',
    tags: [
      { tag: 'Frontend', id: 1, color: '#8c9e2d' },
      { tag: 'Trello', id: 2, color: '#d82f89' }
    ]
  }
]
</script>

<template>
  <main class="h-[calc(100vh - 3rem)]">
    <CardModal v-if="showCardModal" />
    <section class="bg-gray-50 h-full w-screen overflow-x-auto flex items-start gap-3 p-4">
      <Column name="In progress" :cards="cards2" />
      <Column name="In revision" :cards="cards1" />
      <Column name="Deployed" :cards="cards0" />
      <NewColumn />
    </section>
  </main>
</template>

<style scoped>
main {
  height: calc(100vh - 3rem);
}
</style>
