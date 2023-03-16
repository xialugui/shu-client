<template>
  <n-space style="flex-wrap: nowrap">
    <s-image :src="cover" style="border-radius: .5rem;"/>
    <n-space vertical style="height: 100%;" justify="space-between" align="flex-start">
      <blog-card-header :readTime="calculateReadTime(content)" :topic="topic.name"/>
      <blog-card-content :title="title" style="font-size: x-large"/>
      <blog-card-footer size="small" :avatar="author.avatar" :name="author.name" :time="time"/>
    </n-space>
  </n-space>
</template>

<script setup lang="ts">
import {NSpace} from "naive-ui";
import BlogCardHeader from "./BlogCardHeader.vue";
import BlogCardContent from "./BlogCardContent.vue";
import BlogCardFooter from "./BlogCardFooter.vue";
import {useLogger} from "../utils/logger";
import SImage from "./SImage.vue";

const logger = useLogger()

const props = withDefaults(defineProps<{
  cover: string, topic: { name: string }, title: string, content: string, author: {
    id: bigint,
    name: string,
    avatar: string
  }, time: number
}>(), {})

function calculateReadTime(content: string): number {
  return content.trim().length / 60;
}
</script>

<style scoped>
</style>
