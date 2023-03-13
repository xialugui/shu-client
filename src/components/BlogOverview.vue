<template>
  <n-space id="container" style="" align="center" justify="space-between" item-style="display:flex"
           @mouseover="hover='visible'"
           @mouseout="hover='hidden'">
    <n-space align="center" item-style="display:flex">
      <n-icon :component="DocumentTextOutline" size="2rem"/>
      <s-h4 id="title" @click="edit(id)">
        {{ title }}
      </s-h4>
      <n-icon id="edit" @click="edit(id)" :component="BrushOutline" :style="{visibility:hover}"/>
    </n-space>
    <s-h4>{{ author }}</s-h4>
    <s-h4>
      <n-time type="datetime" format="MM-dd HH:mm" :time="time"/>
    </s-h4>
    <n-icon id="more" :component="EllipsisHorizontalOutline" :style="{visibility: hover}"/>
  </n-space>
</template>

<script setup lang="ts">

import {BrushOutline, DocumentTextOutline, EllipsisHorizontalOutline} from "@vicons/ionicons5";
import {NIcon, NSpace, NTime} from "naive-ui";
import SH4 from "./SH4.vue";
import {ref} from "vue";
import {useRouter} from "vue-router";

const router = useRouter()
const hover = ref(
    'hidden'
)
withDefaults(defineProps<{ id: bigint, author: string, title: string, time: number }>(), {})


function edit(id: bigint) {
  router.push("/edit/" + id)
}
</script>

<style scoped>
#container {
  width: 100%;
  height: 5.4rem;
  box-shadow: 0 .1rem 1rem -1rem #1a1a1a;
  border-radius: 1rem;
}

#container:hover {
  background-color: #fafafa;
}

#title:hover, #edit:hover, #more:hover {
  cursor: pointer;
}

</style>