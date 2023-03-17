<script setup lang="ts">
import {NBackTop, NSpace} from "naive-ui";
import BlogSmallCard from "../components/BlogSmallCard.vue";
import SNavigator from "../components/SNavigator.vue";
import SSlogan from "../components/SSlogan.vue";
import BlogMediumCards from "../components/BlogMediumCards.vue";
import SFooter from "../components/SFooter.vue";
import {onMounted, ref} from "vue";
import {get} from "../utils/requests";
import {Url} from "../utils/urls";
import BlogCard from "../components/BlogCard.vue";
import {useLogger} from "../utils/logger";
import {previewCards} from "../utils/preview-cards";

const logger = useLogger()

onMounted(() => {
  loadBlogCards()
})

interface Card {
  title: string,
  content: string,
  cover: string,
  topic: {
    name: string
  },
  author: {
    id: bigint,
    name: string,
    avatar: string
  }
  id: bigint
  time_info: { created_date_time: string, last_modified_date: string }
}

let cards = ref<Card[]>()
const card = ref<Card>()
const smallCards = ref<Card[]>()

function loadBlogCards() {
  get(`${Url.Blogs}/cards`).then(data => {
    cards.value = data
    putPreviewCardsIfNotPresent(cards.value!)
    card.value = cards.value?.[0];
    smallCards.value = cards.value?.slice(1, 4)
  })
}

function putPreviewCardsIfNotPresent(cards: Card[]) {
  if (cards && cards.length < 4) {
    logger.debug("博客卡片数量不足4，生成预览卡片，", cards.length);
    for (let i = cards.length; i <= 4; i++) {
      cards.push(previewCards[i])
    }
  }
}


</script>

<template>
  <n-space vertical>
    <n-space id="introduce" vertical size="large">
      <s-navigator/>
      <s-slogan/>
      <n-space justify="center" size="large">
        <blog-card style="width: 45rem;" :key="card.id" :author="card.author" :content="card.content"
                   :cover="card.cover" :topic="card.topic"
                   :time="new Date(card.time_info.last_modified_date).getTime()" :title="card.title"/>
        <n-space vertical justify="space-around" align="center" style="height: 100%">
          <blog-small-card style="width: 50rem;height: 15rem" v-for="smallCard in smallCards" :key="smallCard.id"
                           :author="smallCard.author"
                           :content="smallCard.content"
                           :cover="smallCard.cover" :topic="smallCard.topic"
                           :time="new Date(smallCard.time_info.last_modified_date).getTime()" :title="smallCard.title"/>
        </n-space>
      </n-space>
    </n-space>

    <!--    <more-blogs/>-->

    <n-space vertical size="large" align="center" style="padding: 2rem 0 2rem 0;">
      <blog-medium-cards style="height: 70rem;width: 80rem"/>
    </n-space>
    <div style="height: 5rem"/>

    <s-footer/>
  </n-space>
  <n-back-top :right="100"/>
</template>

<style scoped lang="less">


#introduce {
  padding: 3rem 0 10rem 0;
  background-image: url("../assets/mouse.png");
}
</style>
