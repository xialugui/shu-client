<template>
  <n-space size="large">
    <n-tag round :bordered="false" style="background-color: black;color: white">
      <s-h5>类型</s-h5>
    </n-tag>
    <n-tag :bordered="false" :color="{color: 'transparent',textColor:'black'}">
      <s-h5>时间</s-h5>
    </n-tag>
  </n-space>
</template>

<script setup lang="ts">

import {NSpace, NTag} from "naive-ui";
import SH5 from "./SH5.vue";</script>

<style scoped>

</style>