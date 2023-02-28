<template>
  <n-space vertical align="center" justify="center" size="large" style="padding: 55% 1rem;background-image: url('src/assets/login.png')" item-style="width:100%">
    <n-input
        type="text"
        size="large"
        :maxlength="8"
        placeholder="用户名"
    />
    <n-input
        type="password"
        show-password-on="mousedown"
        placeholder="密码"
        size="large"
        :maxlength="8"
    />
    <n-button type="info" block style="width: 100%">登录</n-button>
  </n-space>
</template>

<script setup lang="ts">

import {NButton, NInput, NSpace} from "naive-ui"</script>

<style scoped>

</style>
