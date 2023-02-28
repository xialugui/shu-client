<script setup lang="ts">
import {onMounted, ref} from 'vue'
import {MenuOption, NAvatar, NBackTop, NButton, NCard, NEllipsis, NImage, NMenu, NSpace, NTag, NTime} from "naive-ui";
import ArticleIntroduce from "./ArticleIntroduce.vue";
import SH3 from "./SH3.vue";
import ArticleTextIntroduce from "./ArticleTextIntroduce.vue";
import BScroll from "@better-scroll/core";
import PullUp from "@better-scroll/pull-up";
import MouseWheel from "@better-scroll/mouse-wheel";
import ScrollBar from "@better-scroll/scroll-bar";

BScroll.use(MouseWheel)
BScroll.use(PullUp)
BScroll.use(ScrollBar)


const activeKey = ref<string | null>(null);
const menuOptions: MenuOption[] = [
  {
    label: '111111',
    key: 'hear-the-wind-sing',
  },
  {
    label: '1973年的弹珠玩具',
    key: 'pinball-1973',
  },
  {
    label: '寻羊冒险记',
    key: 'a-wild-sheep-chase',
  }
]
const cardb = ref(null)


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
  cardb.value.children[0].children[0].style = "width:auto;margin-left:1rem;margin-right:1rem;box-shadow:0 .5rem 1.2rem rgba(215,215,215,5);height:25rem;border-radius: 1rem;";
})

</script>

<template>


  <n-space vertical>

    <n-space id="introduce" style="flex-direction:column;justify-content: center">
      <div id="navigator">
        <n-image
            width="50"
            height="50"
            src="./src/assets/logo.png"
        />
        <n-menu id="menu" v-model:value="activeKey" mode="horizontal" :options="menuOptions"/>
        <n-button type="info" id="subscribe" size="large" round>
          点击订阅
        </n-button>
      </div>
      <div id="slogan">
        <div style="font-size: x-large;margin-top: 6rem">
          shu
        </div>
        <div style="font-size: xx-large;font-weight: bold;margin-top: 2rem;margin-bottom: 2rem">
          <span style="font-size: xxx-large">鼠</span>牛虎兔龙蛇马羊猴鸡狗猪
        </div>
        <div style="font-size: x-large;color: #adadad;padding-bottom: 6rem">
          一个有点意思的博客，不妨试试！
        </div>
      </div>
      <div id="selected-articles" style="display:flex;margin:0 auto;width: 84rem;justify-content: space-between"
           ref="cardb">
        <n-card :bordered="true"
                style="border-width: .2rem;border-color: black;padding:.8rem .0rem;border-radius: .5rem;width: 40rem;"
                content-style="display:flex;text-align: left;font-weight:bold;font-size:xx-large"
                footer-style="display:flex;justify-content: left;"
        >
          <template #cover>
            <n-image src="./src/assets/img1.png" style="height: 100%;"/>
          </template>
          <template #header>
            <n-space>
              <n-tag round :bordered="false" style="background-color: black;color: white">
                类型
              </n-tag>
              <n-tag :bordered="false" :color="{color: 'white'}">
                时间
              </n-tag>
            </n-space>
          </template>
          <n-ellipsis :line-clamp="2">
            电灯熄灭 物换星移 泥牛入海<br>黑暗好像 一颗巨石 按在胸口<br>独脚大盗
            百万富翁 摸爬滚打<br>黑暗好像 一颗巨石 按在胸口
          </n-ellipsis>

          <template #footer>
            <n-space style="height: 5rem">
              <n-avatar
                  bordered
                  style="border-style: solid;border-color: black;"
                  round
                  :size="60"
                  src="../src/assets/logo.png"
              />
              <div
                  style="display: flex;flex-direction: column;align-items: flex-start;justify-content: center;height: 100%;">
                <div style="font-weight:bold;font-size:large;">陆龟</div>
                <div style="color: #adadad;">二〇二三年二月二十一日</div>
              </div>

            </n-space>
          </template>
        </n-card>
        <div style="display: flex;flex-direction:column;justify-content: space-around">
          <article-introduce/>
          <article-introduce/>
          <article-introduce/>
        </div>
      </div>

    </n-space>
    <n-space vertical size="large">
      <div style="height: 2rem"/>
      <n-space justify="space-around">
        <s-h3>所有博客</s-h3>
        <s-h3>更多>></s-h3>
      </n-space>
      <div style="height: 2rem"/>
      <div class="wrapper" style="width:61.8%;height: 70rem; overflow: hidden;margin: 0 auto;">
        <n-space vertical wrap-item align="center" :size="88" style="padding-bottom: 12rem">
          <article-text-introduce/>
          <article-text-introduce/>
          <article-text-introduce/>
          <article-text-introduce/>
          <article-text-introduce/>
          <article-text-introduce/>
          <article-text-introduce/>
          <article-text-introduce/>
          <article-text-introduce/>
          <article-text-introduce/>
        </n-space>
      </div>


    </n-space>

    <div style="height: 5rem"/>
    <n-space style="color: #d3d3d3" justify="space-around">
      <s-h3>京ICP备10036305号-7</s-h3>
      <s-h3>京公网安备11010802022657号</s-h3>
      <s-h3>隐私声明</s-h3>
      <s-h3>Cookie法律声明</s-h3>
      <s-h3>反馈</s-h3>
      <s-h3>
        @
        <n-time format="yyyy" type="date"/>
        陆龟
      </s-h3>
    </n-space>
  </n-space>
  <n-back-top :right="100"/>
</template>

<style scoped>
.n-card-cover {
  box-shadow: 0 .2rem .2rem black;
}

#subscribe {
  background-color: #4946ff;
  font-size: large;
  border-radius: .8rem;
}

#menu {
  font-size: x-large;
  font-weight: bold;
}

#navigator {
  display: flex;
  align-items: center;
  justify-content: space-between;
}


#introduce {
  padding-left: 2rem;
  padding-right: 2rem;
  background-image: url("../assets/mouse.png");
  height: 90rem;
}
</style>
