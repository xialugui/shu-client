<template>
  <n-tag round :bordered="false" style="background-color: black;color: white">
    <slot/>
  </n-tag>
</template>

<script setup lang="ts">
import {NTag} from "naive-ui";
</script>

<style scoped>

</style>
