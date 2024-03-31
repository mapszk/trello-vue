<script setup>
import Column from '../components/Column.vue'
</script>

<template>
  <main class="h-[calc(100vh - 3rem)]">
    <section class="bg-gray-50 h-full w-screen overflow-x-auto flex gap-4 p-4">
      <Column />
      <Column />
      <Column />
      <Column />
      <Column />
      <Column />
      <Column />
      <Column />
      <Column />
      <Column />
    </section>
  </main>
</template>

<style scoped>
main {
  height: calc(100vh - 3rem);
}
</style>
