<script setup>
import { PopoverContent, PopoverPortal, PopoverRoot, PopoverTrigger } from 'radix-vue'
import CustomSelect from '@/components/CustomSelect.vue'
import { useCardsStore } from '@/stores/cards'
import { useColumnsStore } from '@/stores/columns'
import { computed, ref } from 'vue'
import Button from '@/components/Button.vue'

const props = defineProps({
  card: Object
})
const emit = defineEmits(['copy'])

const cardsStore = useCardsStore()
const { addNewCard } = cardsStore
const columnsStore = useColumnsStore()
const newColumn = ref(null)
const open = ref(false)

const columnsOptions = computed(() =>
  columnsStore.columns.map((col) => ({ label: col.name, value: col.id }))
)

const editCardCopyColumn = (columnId) => {
  newColumn.value = columnId
}

const toggleOpen = () => {
  open.value = !open.value
}

const submitCopy = () => {
  if (newColumn.value) {
    const id = addNewCard({
      title: props.card.title,
      columnId: newColumn.value,
      color: props.card.color,
      order: columnsStore.columns.find((col) => col.id === newColumn.value).cards.length + 1
    })
    toggleOpen()
    emit('copy', id)
  }
}
</script>

<template>
  <PopoverRoot :open="open">
    <PopoverTrigger @click="toggleOpen">
      <Button alignLeft secondary class="w-full">
        <Icon icon="radix-icons:copy" width="18px" class="mr-3" />
        Copy
      </Button>
    </PopoverTrigger>
    <PopoverPortal>
      <PopoverContent
        @pointerDownOutside="toggleOpen"
        side="bottom"
        :align="'end'"
        class="rounded-xl mt-1 p-2 border border-gray-300 shadow-md bg-white"
      >
        <div class="text-center w-[200px]">
          <span class="w-full text-gray-600 font-semibold text-sm block mb-3">Copy card</span>
          <CustomSelect
            :options="columnsOptions"
            @selectOption="editCardCopyColumn"
            placeholder="Choose a column"
          />
          <Button @click="submitCopy" primary class="mt-2 ml-auto">Copy</Button>
        </div>
      </PopoverContent>
    </PopoverPortal>
  </PopoverRoot>
</template>
