<script setup>
import Column from '../components/Column.vue'
</script>

<template>
  <main class="h-[calc(100vh - 3rem)]">
    <section class="h-full flex flex-row gap-4 p-4">
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
