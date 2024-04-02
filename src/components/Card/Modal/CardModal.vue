<script setup>
import Modal from '@/components/Modal.vue'
import { useRoute, useRouter } from 'vue-router'
import { useCardsStore } from '@/stores/cards'
import { useColumnsStore } from '@/stores/columns'
import { computed } from 'vue'
import Color from '../CardSettings/Color.vue'
import Move from '../CardSettings/Move.vue'
import Copy from '../CardSettings/Copy.vue'
import Delete from '../CardSettings/Delete.vue'
import Title from './Title.vue'
import Description from './Description.vue'
import Avatar from '@/components/Avatar.vue'

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
  router.push({ name: 'home' })
}
const copied = (id) => {
  closeModal()
  router.push({ name: 'card', params: { id } })
}

const tags = []
</script>

<template>
  <Modal @close="closeModal">
    <div class="md:min-w-[800px] max-w-[800px] mt-4 mb-4 md:mt-12 md:mb-12 rounded-xl bg-white">
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
      <div class="flex flex-col md:flex-row min-h-[400px]">
        <section class="flex-[3_3_0%] p-6 w-full">
          <div class="flex items-start">
            <Icon class="mr-4 mt-1" icon="radix-icons:card-stack" width="22px" />
            <div class="w-full">
              <Title :cardId="cardInfo.id" :title="cardInfo.title" />
              <span class="text-sm text-gray-500">en la lista: {{ columnName }}</span>
              <div class="flex mt-4 gap-1">
                <Avatar class="w-9 h-9 mr-auto text-gray-400" />
                <Tag v-for="tag of tags" big :tag="tag.tag" :key="tag.id" :color="tag.color" />
              </div>
            </div>
          </div>
          <div class="flex items-start mt-5">
            <Icon class="mr-4 mt-1" icon="radix-icons:text-align-left" width="23px" />
            <div class="w-full">
              <h4 class="text-xl font-semibold mb-1">Description</h4>
              <Description class="mt-2" :cardId="cardInfo.id" :description="cardInfo.description" />
            </div>
          </div>
        </section>
        <div class="flex-1 p-6 flex flex-col">
          <button
            v-if="!cardInfo.color"
            @click="closeModal"
            class="ml-auto rounded-md hover:bg-[rgba(0,0,0,0.15)] p-1"
          >
            <Icon icon="radix-icons:cross-2" class="text-gray-800" width="22px" />
          </button>
          <aside class="flex flex-col gap-2">
            <span class="text-xs font-semibold text-gray-600">Settings</span>
            <Color :cardId="cardInfo.id" />
            <span class="text-xs font-semibold text-gray-600 mt-4">Actions</span>
            <Move :cardId="cardInfo.id" :columnId="cardInfo.columnId" />
            <Copy :card="cardInfo" @copy="copied" />
            <Delete :cardId="cardInfo.id" />
          </aside>
        </div>
      </div>
    </div>
  </Modal>
</template>
