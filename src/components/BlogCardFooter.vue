<template>
  <n-space item-style="display:flex" justify="center" align="center">
    <n-avatar
        bordered
        style="border-style: solid;border-color: black;"
        round
        :size="size==='large'?60:47"
        src="../src/assets/logo.png"
    />
    <n-space vertical justify="center" style="height: 100%;">

      <s-h3 v-if="size==='large'">陆龟</s-h3>
      <s-h5 v-else>陆龟</s-h5>
      <s-h5 style="color:#adadad ">二〇二三年二月二十一日</s-h5>
    </n-space>
  </n-space>
</template>

<script setup lang="ts">

import {NAvatar, NSpace} from "naive-ui";
import SH5 from "./SH5.vue";
import SH3 from "./SH3.vue";

withDefaults(defineProps<{ size?: 'small' | 'large' }>(), {
  size: 'large'
});
</script>

<style scoped lang="less">
</style>