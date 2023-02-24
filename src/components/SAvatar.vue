<template>
  <n-avatar
      bordered
      style="border-style: solid;border-color: black;"
      round
      :size=size
      :src=src
  />
</template>

<script setup lang="ts">
import {NAvatar} from "naive-ui";

withDefaults(defineProps<{ size?: number, src: string }>(), {
  size: 47
})
</script>

<style scoped>

</style>
