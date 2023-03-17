<template>
  <n-space class="wrapper"
           style="position:relative;overflow: hidden;padding: 2rem 3rem 3rem 3rem;" justify="center" item-style="flex-grow:1">
    <n-space vertical :size="40">
      <blog-medium-card v-for="mediumCard in content" :key="mediumCard.id"
                        :author="mediumCard.author" :time="new Date(mediumCard.time_info.last_modified_date).getTime()"
                        :content="mediumCard.content" :cover="mediumCard.cover" :title="mediumCard.title"
                        :topic="mediumCard.topic"/>
    </n-space>
  </n-space>
</template>

<script setup lang="ts">
import BScroll from "@better-scroll/core";
import {onMounted, ref} from "vue";
import MouseWheel from "@better-scroll/mouse-wheel";
import PullUp from "@better-scroll/pull-up";
import ScrollBar from "@better-scroll/scroll-bar";
import BlogMediumCard from "./BlogMediumCard.vue";
import {NSpace} from "naive-ui";
import {useLogger} from "../utils/logger";
import {DefaultPage, Page} from "../utils/api";
import {Card, previewCards} from "../utils/preview-cards";
import {get} from "../utils/requests";
import {Url} from "../utils/urls";

BScroll.use(MouseWheel)
BScroll.use(PullUp)
BScroll.use(ScrollBar)
const logger = useLogger()
let scroll: BScroll;

function init() {
  scroll = new BScroll(".wrapper", {
    mouseWheel: true,
    scrollY: true,
    scrollbar: true,
    probeType: 3,
    pullUpLoad: true
  })
  scroll.on('pullingUp', loadBlogCards)
  loadBlogCards()
}


let isPullUpLoad = ref(false);

async function loadBlogCards() {
  if (page.value.last) {
    logger.debug("最后一页，不发出请求。")
    return
  }
  isPullUpLoad.value = true;
  await loadBlogMediumCardsRequest();
  putPreviewCardsIfNotPresent(content.value)
  scroll.finishPullUp()
  scroll.refresh()
  isPullUpLoad.value = false
}

async function loadBlogMediumCardsRequest() {
  page.value = await get(`${Url.Blogs}/medium-cards?size=${page.value?.pageable.page_size}&page=${page.value?.pageable.page_number! + 1}`)
  for (let blogMediumCard of page.value?.content!) {
    content.value.push(blogMediumCard)
  }
}

let page = ref<Page<Card>>(new DefaultPage<Card>())


let content = ref<Card[]>([])
onMounted(() => {
  init()
})

function putPreviewCardsIfNotPresent(cards: Card[]) {
  if (cards && cards.length < 4) {
    logger.debug("博客中卡片数量不足4，生成预览卡片，卡片组长度：", cards.length);
    for (let i = cards.length; i < 4; i++) {
      logger.debug(i)
      cards.push(previewCards[i])
    }
    logger.debug("补足卡片，卡片长度：", cards.length)
  }
}
</script>

<style scoped>

</style>