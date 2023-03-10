<template>
  <n-space vertical align="start" item-style="width:100%">
    <n-space>
      <s-h3>开始</s-h3>
    </n-space>

    <!--    <n-space align="center" justify="center" item-style="display:flex"
                 style="box-shadow: .1rem .1rem .2rem gainsboro; width: fit-content;border-radius: .2rem;padding: .5rem 1rem">
          <n-icon :component="DocumentOutline" size="2rem"/>
          <s-h4>新建博客</s-h4>
        </n-space>-->
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
    </n-space>
    <div class="wrapper" style="height: 70rem;width: 100%; overflow: hidden;margin: 0 auto;">
      <n-space justify="space-between" vertical item-style="width:100%" align="center"
               style="width:100%;padding-bottom: 12rem">
        <li v-for="(item,index) in content ">
          {{ item.time }} - {{ index }} - {{ item.id }} {{ item.title }}
        </li>

      </n-space>
    </div>
  </n-space>
</template>

<script setup lang="ts">
import SH3 from "../../components/SH3.vue";
import {NIcon, NPopselect, NSpace, useMessage} from "naive-ui";
import {ChevronDownOutline, DocumentOutline} from "@vicons/ionicons5";
import SH4 from "../../components/SH4.vue";
import {onMounted, ref} from "vue";
import BScroll from "@better-scroll/core";
import PullUp from "@better-scroll/pull-up";
import MouseWheel from "@better-scroll/mouse-wheel";
import ScrollBar from "@better-scroll/scroll-bar";
import LButton from "../../components/LButton.vue";
import {useRouter} from "vue-router";
import {get, post} from "../../utils/requests";
import {Url} from "../../utils/urls";
import {Page} from "../../utils/api";


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

let page = ref<Page<Blog> | null>()
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
    // message.success("新建成功")
    router.push('/edit/' + value)
  })
}

function loadBlogs() {
  get(Url.Blogs).then(data => {
    page.value = data

    console.log("page content:", page.value?.content)
    for (let blog of page.value?.content!) {
      content.value.push(blog)
    }
    console.log("content", content)
  })
}

onMounted(() => {
  const scroll = new BScroll(".wrapper", {
    mouseWheel: true,
    scrollY: true,
    scrollbar: true,
    probeType: 3,
    pullUpLoad: true
  })
  loadBlogs()
})
</script>
<style scoped>

</style>