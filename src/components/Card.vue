<script setup>
import Tag from './Tag.vue'

const props = defineProps({
  title: String,
  tags: Array,
  user: Object
})
</script>

<template>
  <div
    class="flex flex-col h-auto bg-white shadow-sm cursor-pointer rounded-xl hover:outline outline-2 outline-green-600"
  >
    <header class="min-h-10 bg-green-400"></header>
    <div class="p-3">
      <div class="flex gap-1 mb-1">
        <Tag v-for="tag of tags" :key="tag.id" :tag="tag.tag" :id="tag.id" :color="tag.color" />
      </div>
      <h4 class="mb-2">{{ props.title }}</h4>
      <div class="w-6 h-6 ml-auto bg-slate-400 rounded-full"></div>
    </div>
  </div>
</template>
