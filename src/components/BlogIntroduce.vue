<template>
  <n-space id="container" style="" align="center" justify="space-between" item-style="display:flex"
           @mouseover="y='visible'"
           @mouseout="y='hidden'">
    <n-space align="center" item-style="display:flex">
      <n-icon :component="DocumentTextOutline" size="2rem"/>
      <s-h4>
        <slot/>
      </s-h4>
    </n-space>
    <s-h4>陆龟</s-h4>
    <s-h4>
      <n-time type="datetime" format="MM-dd HH:mm"/>
    </s-h4>
    <n-icon :component="EllipsisHorizontalOutline" :style="{visibility: y}"/>
  </n-space>
</template>

<script setup lang="ts">

import {DocumentTextOutline, EllipsisHorizontalOutline} from "@vicons/ionicons5";
import {NIcon, NSpace, NTime} from "naive-ui";
import SH4 from "./SH4.vue";
import {ref} from "vue";

const y = ref(
    'hidden'
)
</script>

<style scoped>
#container {
  width: 100%;
  height: 5.4rem;
  border-bottom: .1rem solid #f3f3f3;
}

#container:hover {
  background-color: #fafafa;
}
</style>