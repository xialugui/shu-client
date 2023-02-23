<template>
  <div style="font-size: x-large;font-weight: bold">
    {{ content }}
  </div>
</template>

<script setup lang="ts">
defineProps<{ content: string }>()
</script>

<style scoped>

</style>
