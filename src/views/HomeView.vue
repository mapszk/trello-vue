<script setup>
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
</script>

<template>
  <main class="h-[calc(100vh - 3rem)]">
    <CardModal v-if="showCardModal" />
    <section class="bg-gray-50 h-full w-screen overflow-x-auto flex items-start gap-3 p-4">
      <Column
        v-for="col of columns"
        :key="col.id"
        :id="col.id"
        :name="col.name"
        :cards="col.cards"
      />
      <NewColumn />
    </section>
  </main>
</template>

<style scoped>
main {
  height: calc(100vh - 3rem);
}
</style>
