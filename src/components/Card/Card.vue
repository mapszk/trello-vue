<script setup>
import { DialogContent, DialogOverlay, DialogPortal, DialogRoot, DialogTrigger } from 'radix-vue'
import Tag from '../Tag.vue'
import CardModal from './CardModal.vue'

const props = defineProps({
  title: String,
  color: String,
  tags: Array,
  user: Object
})
</script>

<template>
  <DialogRoot>
    <DialogTrigger>
      <div
        class="bg-white shadow-sm cursor-pointer text-left rounded-xl hover:outline outline-2 outline-blue-500"
      >
        <header v-if="color" class="h-10 rounded-t-xl bg-green-400"></header>
        <div
          :class="[
            color ? 'rounded-b-xl' : 'rounded-xl',
            'p-2 border border-gray-300 border-t-none'
          ]"
        >
          <div class="flex gap-1 mb-1">
            <Tag v-for="tag of tags" :key="tag.id" :tag="tag.tag" :id="tag.id" :color="tag.color" />
          </div>
          <h4 class="mb-2 line-clamp-3 text-ellipsis overflow-hidden">
            {{ props.title }}
          </h4>
          <div class="w-6 h-6 ml-auto bg-slate-400 rounded-full"></div>
        </div>
      </div>
    </DialogTrigger>
    <DialogPortal>
      <DialogOverlay class="bg-gray-950 opacity-60 fixed inset-0 z-30" />
      <DialogContent
        class="fixed top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%] shadow-[hsl(206_22%_7%_/_35%)_0px_10px_38px_-10px,_hsl(206_22%_7%_/_20%)_0px_10px_20px_-15px] focus:outline-none z-[100]"
      >
        <CardModal />
      </DialogContent>
    </DialogPortal>
  </DialogRoot>
</template>
