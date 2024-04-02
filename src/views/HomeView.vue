<script setup>
import CardModal from '@/components/Card/CardModal.vue'
import Column from '../components/Column/Column.vue'
import NewColumn from '../components/Column/NewColumn.vue'
import { useColumnsStore } from '@/stores/columns'
import { computed } from 'vue'
import { useRoute } from 'vue-router'
import { storeToRefs } from 'pinia'

const route = useRoute()
const showCardModal = computed(() => route.name === 'card')
const store = useColumnsStore()
const { columns } = storeToRefs(store)
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
