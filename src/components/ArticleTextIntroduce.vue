<template>
  <n-space vertical align="center" style="box-shadow:0 1rem 3rem whitesmoke;border-radius: .5rem;
background:linear-gradient(rgba(255,255,255,0.99), rgba(255,255,255,0.93)), url('./src/assets/img1.png') no-repeat;
" size="large" item-style="width:95%;">
    <s-h2>
      <n-ellipsis line-clamp="1">
        VUE3_组件间传值的三种方法_setup语法糖_记录11231231222312312
      </n-ellipsis>
    </s-h2>
    <s-h3 style="color: #676767;display:flex;justify-content: start;align-items: start">
      <n-ellipsis line-clamp="3" style="max-width: 100%;justify-content: start" >
        1.vue3基础介绍12312312313122
      </n-ellipsis>

    </s-h3>
    <div style="height: 1rem" />
    <n-space align="center" justify="space-between">
      <s-author src="./src/assets/logo.png">XiaLuGui</s-author>
      <s-tag>Spring boot</s-tag>
      <s-h3>
        <n-time type="datetime" format="yyyy-MM-dd HH:mm:ss"/>
      </s-h3>
    </n-space>
    <div style="height: .5rem" />
  </n-space>

</template>

<script setup lang="ts">
import SH2 from "./SH2.vue";
import {NEllipsis, NSpace, NTime} from "naive-ui";
import SH3 from "./SH3.vue";

import SAuthor from "./SAuthor.vue";
import STag from "./STag.vue";
</script>

<style scoped>
</style>
