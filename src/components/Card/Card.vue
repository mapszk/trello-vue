<script setup>
import { Draggable } from 'vue3-smooth-dnd'
import Tag from '../Tag.vue'
import Avatar from '@/components/Avatar.vue'
import { useRouter } from 'vue-router'

const router = useRouter()

const goToCard = () => {
  router.push({ name: 'card', params: { id: props.id } })
}

const props = defineProps({
  id: Number,
  order: Number,
  title: String,
  color: String,
  tags: Array,
  user: Object
})
</script>

<template>
  <Draggable
    class="bg-white shadow-sm cursor-pointer text-left rounded-xl hover:outline outline-2 outline-blue-500"
  >
    <div @click="goToCard">
      <header v-if="color" class="h-10 rounded-t-xl" :style="{ backgroundColor: color }"></header>
      <div
        :class="[color ? 'rounded-b-xl' : 'rounded-xl', 'p-2 border border-gray-300 border-t-none']"
      >
        <div class="flex gap-1 mb-1">
          <Tag v-for="tag of tags" :key="tag.id" :tag="tag.tag" :id="tag.id" :color="tag.color" />
        </div>
        <h4 class="mb-2 line-clamp-3 text-ellipsis overflow-hidden">
          {{ props.title }}
        </h4>
        <Avatar class="w-7 h-7 ml-auto text-gray-400" />
      </div>
    </div>
  </Draggable>
</template>

<style scoped></style>
