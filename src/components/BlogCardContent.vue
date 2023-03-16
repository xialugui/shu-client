<template>
  <s-h2>
    <n-ellipsis>
      {{ title }}
    </n-ellipsis>
  </s-h2>
</template>

<script setup lang="ts">
import {NEllipsis} from "naive-ui";
import SH2 from "./SH2.vue";

withDefaults(defineProps<{
  title: string
}>(), {})
</script>

<style scoped>

</style>