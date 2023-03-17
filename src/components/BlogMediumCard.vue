<template>
  <n-space vertical style="box-shadow:0 1rem 3rem whitesmoke;border-radius: .5rem; padding: 1rem;flex-grow: 1;
" size="large">
    <s-h2>
      <n-ellipsis line-clamp="1">
        {{ title }}
      </n-ellipsis>
    </s-h2>
    <s-h3 style="color: #676767;">
      <n-ellipsis line-clamp="3" :tooltip="false">
        {{ content }}
      </n-ellipsis>
    </s-h3>
    <n-space align="center" justify="space-between">
      <s-author src="./src/assets/logo.png">{{ author.name }}</s-author>
      <s-tag>{{ topic.name }}</s-tag>
      <s-h3>
        <n-time type="datetime" :time="time"/>
      </s-h3>
    </n-space>
  </n-space>

</template>

<script setup lang="ts">
import SH2 from "./SH2.vue";
import {NEllipsis, NSpace, NTime} from "naive-ui";
import SH3 from "./SH3.vue";
import SAuthor from "./SAuthor.vue";
import STag from "./STag.vue";

const props = withDefaults(defineProps<{
  cover: string, topic: { name: string }, title: string, content: string, author: {
    id: bigint,
    name: string,
    avatar: string
  }, time: number
}>(), {})
</script>

<style scoped>
</style>
