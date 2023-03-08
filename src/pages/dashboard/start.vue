<template>
  <n-space vertical align="start" item-style="width:100%">
    <n-space>
      <s-h3>开始</s-h3>
    </n-space>

    <n-space align="center" justify="center" item-style="display:flex"
             style="box-shadow: .1rem .1rem .2rem gainsboro; width: fit-content;border-radius: .2rem;padding: .5rem 1rem">
      <n-icon :component="DocumentOutline" size="2rem"/>
      <s-h4>新建博客</s-h4>
    </n-space>
    <l-button @click="router.push('/edit')">
      <n-icon :component="DocumentOutline" size="2rem"/>
      新建
    </l-button>
    <n-space>
      <s-h3>博客</s-h3>
    </n-space>
    <n-space justify="end" style="width: 100%">
      <n-popselect v-model:value="value" :options="options" trigger="click">
        <n-space align="center" item-style="display:flex">
          <SH4>创建者</SH4>
          <n-icon :component="ChevronDownOutline"/>
        </n-space>
      </n-popselect>
    </n-space>
    <div class="wrapper" style="height: 70rem;width: 100%; overflow: hidden;margin: 0 auto;">
      <n-space justify="space-between" vertical item-style="width:100%" align="center"
               style="width:100%;padding-bottom: 12rem">
        <blog-introduce>高级特性</blog-introduce>
        <!--        <blog-introduce>高级特性</blog-introduce>
                <blog-introduce>高级特性</blog-introduce>
                <blog-introduce>高级特性</blog-introduce>
                <blog-introduce>高级特性</blog-introduce>-->
      </n-space>
    </div>
  </n-space>
</template>

<script setup lang="ts">
import SH3 from "../../components/SH3.vue";
import {NIcon, NPopselect, NSpace} from "naive-ui";
import {ChevronDownOutline, DocumentOutline} from "@vicons/ionicons5";
import SH4 from "../../components/SH4.vue";
import {onMounted, ref} from "vue";
import BScroll from "@better-scroll/core";
import PullUp from "@better-scroll/pull-up";
import MouseWheel from "@better-scroll/mouse-wheel";
import ScrollBar from "@better-scroll/scroll-bar";
import BlogIntroduce from "../../components/BlogIntroduce.vue";
import LButton from "../../components/LButton.vue";
import {useRouter} from "vue-router";

BScroll.use(MouseWheel)
BScroll.use(PullUp)
BScroll.use(ScrollBar)
const router = useRouter()
const value = ref('me')
const options = [{
  label: '我',
  value: 'me'
}, {
  label: '其他人',
  value: 'other'
},
]

function goToEditPage() {

}

onMounted(() => {
  const scroll = new BScroll(".wrapper", {
    mouseWheel: true,
    scrollY: true,
    scrollbar: true,
    probeType: 3,
    pullUpLoad: true
  })
})
</script>
<style scoped>

</style>