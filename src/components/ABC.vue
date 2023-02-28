<template>
  <n-space vertical style="padding: 1rem">
    <n-input-group>
      <n-input :style="{ width: '85%' }" placeholder="请输入工匠信息"/>
      <n-button type="primary" ghost>
        搜索
      </n-button>
    </n-input-group>
    <a-b/>
    <a-b/>
    <a-b/>
    <a-b/>
    <a-b/>
    <a-b/>
  </n-space>
</template>

<script setup lang="ts">

import {NButton, NInput, NInputGroup, NSpace} from "naive-ui"
import AB from "./AB.vue";</script>

<style scoped>

</style>
