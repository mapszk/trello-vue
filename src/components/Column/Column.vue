<script setup>
import { PopoverContent, PopoverPortal, PopoverRoot, PopoverTrigger } from 'radix-vue'
import Card from '../Card/Card.vue'
import AddCard from './AddCard.vue'
import { nextTick, ref } from 'vue'
import Button from '../Button.vue'
import { useColumnsStore } from '@/stores/columns'

const props = defineProps({
  id: Number,
  name: String,
  cards: Array
})

const isEdition = ref(false)
const showNewCard = ref(false)
const columnInput = ref(null)
const cardsContainer = ref(null)
const columnName = ref(props.name)
const { deleteColumn, editColumn } = useColumnsStore()

const toggleEdition = () => {
  isEdition.value = !isEdition.value
  if (isEdition.value) nextTick(() => columnInput.value.focus())
  columnName.value && editColumn(props.id, { name: columnName.value })
}

const toggleNewCard = async () => {
  showNewCard.value = !showNewCard.value
  if (cardsContainer.value) {
    await nextTick()
    cardsContainer.value.scrollTop = cardsContainer.value.scrollHeight
  }
}

const editCol = () => {
  columnName.value && editColumn(props.id, { name: columnName.value })
  isEdition.value = false
}
</script>

<template>
  <div
    class="w-72 max-h-full shrink-0 self-start border border-gray-300 flex flex-col p-2 rounded-xl shadow-sm bg-gray-200"
  >
    <div class="flex items-center h-8 shrink-0 gap-2 justify-between">
      <span
        v-show="!isEdition"
        @click="toggleEdition"
        class="text-sm text-gray-600 font-semibold px-2"
      >
        {{ props.name }}
      </span>
      <input
        v-show="isEdition"
        ref="columnInput"
        @keypress.enter="editCol"
        @blur="editCol"
        type="text"
        v-model="columnName"
        class="h-full text-sm px-2 w-full rounded-md outline-blue-500"
      />
      <PopoverRoot>
        <PopoverTrigger>
          <button class="w-6 h-6 p-1 rounded-md hover:bg-gray-300 flex justify-center items-center">
            <Icon icon="radix-icons:dots-horizontal" width="16px" />
          </button>
        </PopoverTrigger>
        <PopoverPortal>
          <PopoverContent
            side="bottom"
            :align="'end'"
            class="rounded-xl p-2 shadow-md bg-gray-100 w-[200px]"
          >
            <ul>
              <li>
                <button
                  @click="() => deleteColumn(props.id)"
                  class="rounded-md w-full text-left px-2 py-1 font-semibold text-gray-600 hover:bg-gray-300"
                >
                  Delete
                </button>
              </li>
            </ul>
          </PopoverContent>
        </PopoverPortal>
      </PopoverRoot>
    </div>
    <div
      ref="cardsContainer"
      v-if="props.cards.length || showNewCard"
      class="cards flex overflow-y-auto p-1 flex-col gap-2 mt-2"
    >
      <Card
        v-for="card of props.cards"
        :key="card.id"
        :id="card.id"
        :title="card.title"
        :color="card.color"
        :tags="card.tags"
      />
      <AddCard v-if="showNewCard" @close="toggleNewCard" />
    </div>
    <div v-if="!showNewCard" class="shrink-0 mt-1 p-1">
      <Button
        @click="toggleNewCard"
        class="flex items-center rounded-md hover:bg-gray-300 p-2 text-gray-600 text-sm font-semibold"
      >
        <Icon icon="radix-icons:plus-circled" class="mr-2" width="16px" />
        Add a new card
      </Button>
    </div>
  </div>
</template>
