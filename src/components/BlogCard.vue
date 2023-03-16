<template>
  <n-card :bordered="true" size="medium"
          style="border-width: .2rem;border-color: black;border-radius: .5rem;"
          content-style="display:flex;text-align: left;font-weight:bold;font-size:xx-large"
          footer-style="display:flex;justify-content: left;"
  >
    <template #cover>
      <s-image :src="cover"/>
    </template>
    <template #header>
      <blog-card-header :readTime="calculateReadTime(content)" :topic="topic.name"/>
    </template>
    <blog-card-content :title="title"/>
    <template #footer>
      <blog-card-footer :avatar="author.avatar" :name="author.name" :time="time"/>
    </template>
  </n-card>
</template>

<script setup lang="ts">
import {NCard} from "naive-ui";
import BlogCardHeader from "./BlogCardHeader.vue";
import BlogCardContent from "./BlogCardContent.vue";
import BlogCardFooter from "./BlogCardFooter.vue";
import {onMounted} from "vue";
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

onMounted(() => {
});
</script>


<style scoped>
:deep(.n-card-cover) {
  width: auto;
  margin: 1rem 1rem 1rem 1rem;
  box-shadow: 0 1rem 10rem rgba(0, 0, 0, .3);
  height: 25rem;
  border-radius: 1rem;
}

</style>