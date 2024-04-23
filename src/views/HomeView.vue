<script setup>
import { Container, Draggable } from 'vue3-smooth-dnd'
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
  <main>
    <CardModal v-if="showCardModal" />
    <section class="bg-gray-50 h-full w-screen overflow-x-auto">
      <Container
        orientation="horizontal"
        @drop="onDrop"
        :style="{ display: 'flex' }"
        class="h-full overflow-x-auto flex items-start gap-3 p-4"
      >
        <Draggable v-for="col of columns" :key="col.id">
          <Column :id="col.id" :name="col.name" :cards="col.cards" />
        </Draggable>
        <NewColumn />
      </Container>
    </section>
  </main>
</template>

<style scoped>
main {
  height: calc(100vh - 3rem);
}
</style>
