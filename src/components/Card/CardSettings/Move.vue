<script setup>
import { PopoverContent, PopoverPortal, PopoverRoot, PopoverTrigger } from 'radix-vue'
import { useCardsStore } from '@/stores/cards'
import CustomSelect from '@/components/CustomSelect.vue'
import { computed, ref } from 'vue'
import { useColumnsStore } from '@/stores/columns'
import Button from '@/components/Button.vue'

const props = defineProps({
  cardId: Number,
  columnId: Number
})

const cardsStore = useCardsStore()
const columnsStore = useColumnsStore()
const { editCard } = cardsStore
const newColumn = ref(null)
const open = ref(false)

const columnsOptions = computed(() =>
  columnsStore.columns.map((col) => ({ label: col.name, value: col.id }))
)

const editCardColumn = (columnId) => {
  newColumn.value = columnId
}

const toggleOpen = () => {
  open.value = !open.value
}

const submitNewColumn = () => {
  toggleOpen()
  newColumn.value && editCard(props.cardId, { columnId: newColumn.value })
}
</script>

<template>
  <PopoverRoot :open="open">
    <PopoverTrigger @click="toggleOpen">
      <Button alignLeft secondary class="w-full">
        <Icon icon="radix-icons:arrow-right" width="20px" class="mr-3" />
        Move
      </Button>
    </PopoverTrigger>
    <PopoverPortal>
      <PopoverContent
        side="bottom"
        :align="'end'"
        class="rounded-xl mt-1 p-2 border border-gray-300 shadow-md bg-white"
      >
        <div class="text-center w-[200px]">
          <span class="w-full text-gray-600 font-semibold text-sm block mb-3">Move card</span>
          <CustomSelect
            @selectOption="editCardColumn"
            :options="columnsOptions"
            placeholder="Choose a column"
          />
          <Button @click="submitNewColumn" primary class="mt-2 ml-auto">Move</Button>
        </div>
      </PopoverContent>
    </PopoverPortal>
  </PopoverRoot>
</template>
