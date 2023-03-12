<template>
  <n-space vertical align="start" style="height: 100%" wrap-item item-style="width:100%">
    <!--    <n-space>
          <s-h3>开始</s-h3>
        </n-space>
        <l-button @click="createNewBlog">
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
        </n-space>-->
    <div style="height: 100%">
      <div class="wrapper" style="position:relative;height:30rem;width: 100%; overflow: hidden;">
        <!--      <n-space justify="space-between" wrap-item vertical item-style="width:100%" align="center"
                       style="width:100%;">
                <blog-overview v-for="item in content" :id="item.id" :title="item.title" :author="item.author.name"
                               :time="Date.now()"/>
              </n-space>-->
        <div>
          <!--        <blog-overview v-for="item in content" :id="item.id" :title="item.title" :author="item.author.name"
                                 :time="Date.now()"/>-->
          <ul>
            <li style="height: 50px;" v-for="item in content">{{ item.title }}</li>
          </ul>
        </div>
      </div>
    </div>

  </n-space>
</template>

<script setup lang="ts">
import SH3 from "../../components/SH3.vue";
import {NIcon, NPopselect, NSpace, useMessage} from "naive-ui";
import {ChevronDownOutline, DocumentOutline} from "@vicons/ionicons5";
import SH4 from "../../components/SH4.vue";
import {onActivated, onMounted, ref} from "vue";
import BScroll from "@better-scroll/core";
import PullUp from "@better-scroll/pull-up";
import MouseWheel from "@better-scroll/mouse-wheel";
import ScrollBar from "@better-scroll/scroll-bar";
import LButton from "../../components/LButton.vue";
import {useRouter} from "vue-router";
import {get, post} from "../../utils/requests";
import {Url} from "../../utils/urls";
import {DefaultPage, Page} from "../../utils/api";
import BlogOverview from "../../components/BlogOverview.vue";


BScroll.use(MouseWheel)
BScroll.use(PullUp)
BScroll.use(ScrollBar)
const router = useRouter()
const value = ref('me')
const message = useMessage()
const options = [{
  label: '我',
  value: 'me'
}, {
  label: '其他人',
  value: 'other'
},
]

interface Blog {
  title: string,
  author: {
    id: bigint,
    name: string
  }
  id: bigint
  time_info: { created_date_time: string, last_modified_date: string }
}

let page = ref<Page<Blog> | null>(new DefaultPage<Blog>())


let content = ref<Blog[]>(
    [
      {
        title: "1",
        author: {
          id: BigInt(1634069272160985012),
          name: "1"
        },
        id: BigInt(1634069272160985012),
        time_info: {created_date_time: "2023-03-10T13:50:48.680814", last_modified_date: "2023-03-10T13:50:48.680814"}
      }
    ]
)


function createNewBlog() {
  post(Url.Blogs, {}).then((value) => {
    router.push('/edit/' + value)
  })
}

let scroll: BScroll;
let isPullUpLoad = false

function loadBlogs() {
  if (page.value?.last) {
    return
  }
  isPullUpLoad = true;
  get(Url.Blogs + "?size=" + page.value?.pageable.page_size + "&page=" + (page.value?.pageable.page_number! + 1)).then(data => {
    page.value = data
    for (let blog of page.value?.content!) {
      content.value.push(blog)
    }
    scroll.finishPullUp()
    scroll.refresh()
    isPullUpLoad = false
  })
  scroll.refresh()
}

onMounted(() => {
  scroll = new BScroll(".wrapper", {
    mouseWheel: true,
    scrollY: true,
    scrollbar: true,
    probeType: 3,
    pullUpLoad: true
  });
  initBlogs()
  scroll.on('pullingUp', loadBlogs)
})

function initBlogs() {
  content.value = []
  loadBlogs()
}

</script>
<style scoped>

</style>