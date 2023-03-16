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
const current = new Date().toDateString()
const previewCard: Card = {
  id: BigInt(1),
  title: "丙寅天津竹枝词",
  content: "俗尚原无理可推，人情大半为求财。\n谷糠未引钱龙至， 鼠猬先驮宝藏来。",
  cover: "",
  topic: {name: "鼠鼠"},
  author: {
    id: BigInt(1),
    name: "冯文洵",
    avatar: "string",
  },
  time_info: {created_date_time: current, last_modified_date: current}
}
const previewCards: Card[] = []
previewCards.push(Object.assign({}, previewCard))
previewCard.title = "诗经·国风·魏风·硕鼠"
previewCard.content = "硕鼠硕鼠，无食我黍！三岁贯汝，莫我肯顾。逝将去汝，适彼乐土。乐土乐土 ，爰得我所。"
previewCard.author.name = "佚名"
previewCards.push(Object.assign({}, previewCard))
previewCard.title = "鼫鼠赞"
previewCard.content = "五能之鼠，技无所执。应气而化，翻飞鴽集。诗人歌之，无食我粒。"
previewCard.author.name = "郭璞"
previewCards.push(Object.assign({}, previewCard))
previewCard.title = "禽虫十二章"
previewCard.content = "一鼠得仙生羽翼，众鼠相看有羡色。岂知飞上未半空，已作乌鸢口中食。"
previewCard.author.name = "白居易"
previewCards.push(Object.assign({}, previewCard))

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

    <n-space vertical size="large" align="center">
      <blog-medium-cards style="height: 70rem;width: 80rem"/>
    </n-space>
    <div style="height: 5rem"/>

    <s-footer/>
  </n-space>
  <n-back-top :right="100"/>
</template>

<style scoped lang="less">


#introduce {
  padding: 3rem 0;
  background-image: url("../assets/mouse.png");
}
</style>
