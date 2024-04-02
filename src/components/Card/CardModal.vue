<script setup>
import Tag from '../Tag.vue'
import CardSidebar from './CardSidebar.vue'
import Modal from '../Modal.vue'
import { useRoute, useRouter } from 'vue-router'
import { useCardsStore } from '@/stores/cards'
import { useColumnsStore } from '@/stores/columns'
import { computed } from 'vue'

const emit = defineEmits(['close'])
const router = useRouter()
const route = useRoute()
const cardsStore = useCardsStore()
const columnsStore = useColumnsStore()

const cardInfo = computed(() =>
  cardsStore.cards.find((card) => card.id === Number(route.params.id))
)
const columnName = computed(
  () => columnsStore.columns.find((col) => col.id === cardInfo.value.columnId).name
)

const closeModal = () => {
  emit('close')
  router.go(-1)
}

const tags = [
  { tag: 'Frontend', id: 1, color: '#8c9e2d' },
  { tag: 'Trello', id: 2, color: '#d82f89' }
]
</script>

<template>
  <Modal @close="closeModal">
    <div class="max-w-[800px] min-h-[550px] mt-4 mb-4 md:mt-12 md:mb-12 rounded-xl bg-white">
      <header
        v-if="cardInfo.color"
        class="w-full h-24 md:h-32 rounded-t-xl flex p-2 md:p-4"
        :style="{ backgroundColor: cardInfo.color }"
      >
        <button
          @click="closeModal"
          class="mb-auto ml-auto rounded-md hover:bg-[rgba(0,0,0,0.15)] p-1"
        >
          <Icon icon="radix-icons:cross-2" class="text-gray-800" width="22px" />
        </button>
      </header>
      <div class="flex flex-col md:flex-row">
        <section class="flex-[3_3_0%] p-6 w-full">
          <div class="flex items-start">
            <Icon class="mr-4 mt-1" icon="radix-icons:card-stack" width="22px" />
            <div class="w-full">
              <h4 class="text-xl font-semibold mb-1">
                {{ cardInfo.title }}
              </h4>
              <span class="text-sm text-gray-500">en la lista: {{ columnName }}</span>
              <div class="flex mt-4 gap-1">
                <div class="w-8 h-8 mr-2 rounded-full bg-slate-500"></div>
                <Tag v-for="tag of tags" big :tag="tag.tag" :key="tag.id" :color="tag.color" />
              </div>
            </div>
          </div>
          <div class="flex items-start mt-5">
            <Icon class="mr-4 mt-1" icon="radix-icons:text-align-left" width="23px" />
            <div class="w-full">
              <h4 class="text-xl font-semibold mb-1">Description</h4>
              <p class="text-md">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Minima, consectetur dolor
                aspernatur illum quasi est illo quas inventore magnam architecto, delectus similique
              </p>
            </div>
          </div>
        </section>
        <div class="flex-1 p-6 flex flex-col">
          <button @click="closeModal" class="ml-auto rounded-md hover:bg-[rgba(0,0,0,0.15)] p-1">
            <Icon icon="radix-icons:cross-2" class="text-gray-800" width="22px" />
          </button>
          <CardSidebar :cardId="cardInfo.id" />
        </div>
      </div>
    </div>
  </Modal>
</template>
