<template>
  <n-space vertical align="start" style="height: 100%;padding: 0 3rem" wrap-item item-style="width:100%" size="large">
    <div style="height: 3rem"/>
    <n-space vertical>
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
          <s-h4>创建者</s-h4>
          <n-icon :component="ChevronDownOutline"/>
        </n-space>
      </n-popselect>
    </n-space>
    <n-space vertical class="wrapper"
             style="position:relative;min-height:10rem;height:65rem;width: 100%; overflow: hidden;">
      <div>
        <blog-overview v-for="item in content" :id="item.id" :title="item.title" :author="item.author.name"
                       :time="Date.now()"/>
        <n-space align="center" justify="center">
          <s-h4 v-if="!isPullUpLoad">
            下拉加载更多
          </s-h4>
          <s-h4 v-else>
            加载中...
          </s-h4>
        </n-space>
      </div>

    </n-space>

  </n-space>
</template>

<script setup lang="ts">
import {NIcon, NPopselect, NSpace, useMessage} from "naive-ui";
import {onMounted, ref} from "vue";
import BScroll from "@better-scroll/core";
import PullUp from "@better-scroll/pull-up";
import MouseWheel from "@better-scroll/mouse-wheel";
import ScrollBar from "@better-scroll/scroll-bar";
import {useRouter} from "vue-router";
import {get, post} from "../../utils/requests";
import {Url} from "../../utils/urls";
import {DefaultPage, Page} from "../../utils/api";
import BlogOverview from "../../components/BlogOverview.vue";
import SH3 from "../../components/SH3.vue";
import LButton from "../../components/LButton.vue";
import SH4 from "../../components/SH4.vue";
import {ChevronDownOutline, DocumentOutline} from "@vicons/ionicons5";


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

let page = ref<Page<Blog>>(new DefaultPage<Blog>())


let content = ref<Blog[]>([])


function createNewBlog() {
  post(Url.Blogs, {}).then((value) => {
    router.push('/edit/' + value)
  })
}

let scroll: BScroll;
let isPullUpLoad = ref(false);

async function loadBlogs() {
  isPullUpLoad.value = true;
  await loadBlogRequest();
  scroll.finishPullUp()
  scroll.refresh()
  isPullUpLoad.value = false
}


async function loadBlogRequest() {
  page.value = await get(Url.Blogs + "?size=" + page.value?.pageable.page_size + "&page=" + (page.value?.pageable.page_number! + 1))
  for (let blog of page.value?.content!) {
    content.value.push(blog)
  }
}

onMounted(() => {
  scroll = new BScroll(".wrapper", {
    mouseWheel: true,
    scrollY: true,
    scrollbar: true,
    probeType: 3,
    pullUpLoad: true
  });
  scroll.on('pullingUp', loadBlogs)
  loadBlogs()
})

</script>
<style scoped>
.pullup-tips {
  padding: 20px;
  text-align: center;
  color: rgba(0, 0, 0, 0.8)
}
</style>