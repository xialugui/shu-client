<script setup lang="ts">
import {NBackTop, NSpace} from "naive-ui";
import BlogSmallCard from "../components/BlogSmallCard.vue";
import SNavigator from "../components/SNavigator.vue";
import SSlogan from "../components/SSlogan.vue";
import BlogMediumCards from "../components/BlogMediumCards.vue";
import SFooter from "../components/SFooter.vue";
import MoreBlogs from "../components/MoreBlogs.vue";
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

function loadBlogCards() {
  get(`${Url.Blogs}/cards`).then(data => {
    // logger.debug("博客卡片组：", data)
    cards.value = data
    card.value = cards.value?.[0];
    // logger.debug("博客卡片：", card.value)

  })
}
</script>

<template>
  <n-space vertical>
    <n-space id="introduce" vertical size="large">
      <s-navigator/>
      <s-slogan/>
      <n-space justify="center" size="large">
        <blog-card :author="card.author" :content="card.content" cover="no" topic="1111"/>
        <n-space vertical justify="space-around" align="center" style="height: 100%">
          <blog-small-card/>
          <blog-small-card/>
          <blog-small-card/>
        </n-space>
      </n-space>
    </n-space>

    <more-blogs/>

    <div>

      <n-space vertical size="large" align="center">
        <blog-medium-cards style="height: 70rem;width: 80rem"/>
      </n-space>
    </div>

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
