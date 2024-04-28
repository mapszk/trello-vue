<script setup>
import { Container } from 'vue3-smooth-dnd'
import CardModal from '@/components/Card/Modal/CardModal.vue'
import Column from '../components/Column/Column.vue'
import NewColumn from '../components/Column/NewColumn.vue'
import { useColumnsStore } from '@/stores/columns'
import { computed, onMounted, ref } from 'vue'
import { useRoute } from 'vue-router'
import { storeToRefs } from 'pinia'
import { useCardsStore } from '@/stores/cards'
import router from '@/router'

const route = useRoute()
const columnsStore = useColumnsStore()
const cardsStore = useCardsStore()
const { columns } = storeToRefs(columnsStore)
const isDown = ref(false)
const startX = ref(null)
const scrollLeft = ref(null)
const scrollTop = ref(null)
const container = ref(null)

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

const mouseDown = (evt) => {
  isDown.value = true
  startX.value = evt.pageX - container.value.$el.offsetLeft
  scrollLeft.value = container.value.$el.scrollLeft
  scrollTop.value = container.value.$el.scrollTop
}
const mouseUp = () => {
  isDown.value = false
}
const mouseLeave = () => {
  isDown.value = false
}
const mouseMove = (evt) => {
  if (isDown.value) {
    evt.preventDefault()
    const x = evt.pageX - container.value.$el.offsetLeft
    const walkX = x - startX.value
    container.value.$el.scrollLeft = scrollLeft.value - walkX
  }
}
</script>

<template>
  <main class="h-[calc(100vh-3rem)] bg-blue-500">
    <CardModal v-if="showCardModal" />
    <Container
      ref="container"
      @mousedown="mouseDown"
      @mouseup="mouseUp"
      @mouseleave="mouseLeave"
      @mousemove="mouseMove"
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
