<template>
  <n-image :src="src" fallback-src="https://picsum.photos/200/100" style="height: 100%;" preview-disabled/>
</template>

<script setup lang="ts">

import {NImage} from "naive-ui";

withDefaults(defineProps<{ src: string }>(), {})
</script>

<style scoped>

</style>