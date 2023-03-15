<template>
  <n-space class="wrapper"
           style="position:relative;overflow: hidden;padding: 2rem 3rem 3rem 3rem">
    <n-space vertical :size="40">
      <blog-medium-card/>
      <blog-medium-card/>
      <blog-medium-card/>
      <blog-medium-card/>
      <blog-medium-card/>
      <blog-medium-card/>
      <blog-medium-card/>
      <blog-medium-card/>
      <blog-medium-card/>
      <blog-medium-card/>
      <blog-medium-card/>
      <blog-medium-card/>
    </n-space>
  </n-space>
</template>

<script setup lang="ts">
import BScroll from "@better-scroll/core";
import {onMounted} from "vue";
import MouseWheel from "@better-scroll/mouse-wheel";
import PullUp from "@better-scroll/pull-up";
import ScrollBar from "@better-scroll/scroll-bar";
import BlogMediumCard from "./BlogMediumCard.vue";
import {NSpace} from "naive-ui";

BScroll.use(MouseWheel)
BScroll.use(PullUp)
BScroll.use(ScrollBar)

function init() {
  const scroll = new BScroll(".wrapper", {
    mouseWheel: true,
    scrollY: true,
    scrollbar: true,
    probeType: 3,
    pullUpLoad: true
  })
}

onMounted(() => {
  init()
})

</script>

<style scoped>

</style>