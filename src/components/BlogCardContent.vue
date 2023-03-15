<template>
  <s-h2>
    <n-ellipsis :line-clamp="2">
      {{ content }}
    </n-ellipsis>
  </s-h2>
</template>

<script setup lang="ts">
import {NEllipsis} from "naive-ui";
import SH2 from "./SH2.vue";

withDefaults(defineProps<{
  content: string
}>(), {content: "无内容"})
</script>

<style scoped>

</style>