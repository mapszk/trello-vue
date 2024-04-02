<script setup>
import { PopoverContent, PopoverPortal, PopoverRoot, PopoverTrigger } from 'radix-vue'
import { useCardsStore } from '@/stores/cards'
import { cardColors } from '@/constants/cards'
import Button from '@/components/Button.vue'
import { ref } from 'vue'

const props = defineProps({
  cardId: Number
})
const { editCard } = useCardsStore()
const open = ref(false)

const editCardColor = (color) => {
  editCard(props.cardId, { color })
  toggleOpen()
}

const toggleOpen = () => {
  open.value = !open.value
}
</script>

<template>
  <PopoverRoot :open="open">
    <PopoverTrigger @click="toggleOpen">
      <Button alignLeft secondary class="w-full">
        <Icon icon="mingcute:palette-line" width="18px" class="mr-3" />
        Color
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
          <span class="w-full text-gray-600 font-semibold text-sm block mb-3">Card color</span>
          <div class="w-full flex gap-1">
            <button
              class="flex-1 w-8 h-8 rounded-md flex items-center justify-center bg-gray-300"
              @click="() => editCardColor(null)"
            >
              <Icon icon="radix-icons:value-none" />
            </button>
            <button
              v-for="color of cardColors"
              @click="() => editCardColor(color)"
              :key="color"
              :style="{ backgroundColor: color }"
              class="flex-1 w-8 h-8 rounded-md"
            ></button>
          </div>
        </div>
      </PopoverContent>
    </PopoverPortal>
  </PopoverRoot>
</template>
