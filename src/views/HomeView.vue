<script setup>
import { Container } from 'vue3-smooth-dnd'
import CardModal from '@/components/Card/Modal/CardModal.vue'
import Column from '../components/Column/Column.vue'
import NewColumn from '../components/Column/NewColumn.vue'
import { useColumnsStore } from '@/stores/columns'
import { computed, onMounted } from 'vue'
import { useRoute } from 'vue-router'
import { storeToRefs } from 'pinia'
import { useCardsStore } from '@/stores/cards'
import router from '@/router'

const route = useRoute()
const columnsStore = useColumnsStore()
const cardsStore = useCardsStore()
const { columns } = storeToRefs(columnsStore)

const cardExists = computed(() =>
  cardsStore.cards.find((card) => card.id === Number(route.params.id))
)
const showCardModal = computed(() => route.name === 'card' && cardExists.value)

onMounted(() => {
  if (!cardExists.value && route.name === 'card') router.push({ name: 'home' })
})

const onDrop = ({ removedIndex, addedIndex }) => {
  if (removedIndex !== addedIndex) columnsStore.moveColumn(removedIndex, addedIndex)
}
</script>

<template>
  <main class="h-[calc(100vh-3rem)] bg-blue-500">
    <CardModal v-if="showCardModal" />
    <Container
      orientation="horizontal"
      drag-handle-selector=".column-dnd"
      @drop="onDrop"
      :style="{ display: 'flex' }"
      class="bg-gray-50 h-full w-screen overflow-x-auto flex items-start gap-3 p-4"
    >
      <Column
        v-for="col in columns"
        :key="col.id"
        :id="col.id"
        :name="col.name"
        :cards="col.cards"
      />
      <NewColumn />
    </Container>
  </main>
</template>

<style scoped></style>
