<script setup>
import { PopoverContent, PopoverPortal, PopoverRoot, PopoverTrigger } from 'radix-vue'
import Button from '@/components/Button.vue'
import { useCardsStore } from '@/stores/cards'
import { useRouter } from 'vue-router'

const router = useRouter()
const props = defineProps({
  cardId: Number
})

const { deleteCard } = useCardsStore()

const delCard = () => {
  deleteCard(props.cardId)
  router.push({ name: 'home' })
}
</script>

<template>
  <PopoverRoot>
    <PopoverTrigger>
      <Button alignLeft secondary class="w-full">
        <Icon icon="radix-icons:trash" width="18px" class="mr-3" />
        Delete
      </Button>
    </PopoverTrigger>
    <PopoverPortal>
      <PopoverContent
        side="bottom"
        :align="'end'"
        class="rounded-xl mt-1 p-2 border border-gray-300 shadow-md bg-white"
      >
        <div class="text-center w-[200px]">
          <span class="w-full text-gray-600 font-semibold text-sm block mb-3"
            >Are you sure you want to delete this card?</span
          >
          <Button @click="delCard" delete class="mt-2 ml-auto">Delete</Button>
        </div>
      </PopoverContent>
    </PopoverPortal>
  </PopoverRoot>
</template>
