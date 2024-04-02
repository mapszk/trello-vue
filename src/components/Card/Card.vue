<script setup>
import { useRouter } from 'vue-router'
import Tag from '../Tag.vue'

const router = useRouter()
const props = defineProps({
  id: Number,
  title: String,
  color: String,
  tags: Array,
  user: Object
})

const showCardModal = () => router.push({ name: 'card', params: { id: props.id } })
</script>

<template>
  <div
    @click="showCardModal"
    class="bg-white shadow-sm cursor-pointer text-left rounded-xl hover:outline outline-2 outline-blue-500"
  >
    <header v-if="color" class="h-10 rounded-t-xl bg-green-400"></header>
    <div
      :class="[color ? 'rounded-b-xl' : 'rounded-xl', 'p-2 border border-gray-300 border-t-none']"
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
</template>
