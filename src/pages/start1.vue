<template>
  <n-space vertical wrap-item item-style="width:100%">
    <div class="wrapper">
      <div class="content">
        <!--        <div v-for="i of data" :key="i" class="pullup-list-item">
                  {{ i % 5 === 0 ? 'use your mousewheel please 👆🏻' : `I am item ${i} ` }}
                </div>-->
<!--        <div v-for="a of content" :key="a" class="pullup-list-item">
          {{ a }}
        </div>-->
        <div v-for="a in content" :key="a.id" class="pullup-list-item">
          {{ a.id }}{{ a.title}}
        </div>
        <div class="pullup-tips">
          <div v-if="!isPullUpLoad" class="before-trigger">
            <span class="pullup-txt">mousewheel trigger pullingup and load more</span>
          </div>
          <div v-else class="after-trigger">
            <span class="pullup-txt">Loading...</span>
          </div>
        </div>
      </div>
    </div>
  </n-space>
</template>

<script setup lang="ts">
import {NSpace} from "naive-ui";
import {onMounted, ref} from "vue";
import BScroll from "@better-scroll/core";
import PullUp from "@better-scroll/pull-up";
import MouseWheel from "@better-scroll/mouse-wheel";
import ScrollBar from "@better-scroll/scroll-bar";
import {useRouter} from "vue-router";
import {get} from "../utils/requests";
import {Url} from "../utils/urls";
import {DefaultPage, Page} from "../utils/api";


BScroll.use(MouseWheel)
BScroll.use(PullUp)
BScroll.use(ScrollBar)
const router = useRouter()
const data = ref(100)

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


let scroll: BScroll;
let isPullUpLoad = ref(false)

async function ajaxGet(/* url */): Promise<number> {
  return new Promise(resolve => {
    setTimeout(() => {
      resolve(20)
    }, 1000)
  })
}

async function requestData() {
  try {
    const newData: number = await ajaxGet(/* url */).then()
  } catch (err) {
    // handle err
    console.log(err)
  }
}

async function requestData1() {
  page.value = await get(Url.Blogs + "?size=" + page.value?.pageable.page_size + "&page=" + (page.value?.pageable.page_number! + 1))
  for (let blog of page.value?.content!) {
    content.value.push(blog)
  }
}

async function loadBlogs() {
  /*  if (page.value?.last) {
      return
    }*/
  isPullUpLoad.value = true
  /*
    scroll.finishPullUp()
    scroll.refresh()
    isPullUpLoad = false*/
  /*  if (page.value?.last) {
      return
    }
    isPullUpLoad = true;*/
  /*  page.value = await get(Url.Blogs + "?size=" + page.value?.pageable.page_size + "&page=" + (page.value?.pageable.page_number! + 1))

    content.value += 10*/
  // content.value += 10
  // await requestData1
  await requestData1();

  scroll.finishPullUp()
  scroll.refresh()
  isPullUpLoad.value = false


}

onMounted(() => {
  scroll = new BScroll(".wrapper", {
    mouseWheel: true,
    scrollY: true,
    scrollbar: true,
    probeType: 3,
    pullUpLoad: true
  });
  // initBlogs()
  scroll.on('pullingUp', loadBlogs)
})

function initBlogs() {
  // content.value = []
  loadBlogs()
}

</script>
<style scoped>
.wrapper {
  position: relative;
  height: 100px;
  padding: 0 10px;
  border: 1px solid #ccc;
  overflow: hidden
}

.pullup-list-item {
  padding: 10px 0;
  height: 100px;
  border-bottom: 1px solid #ccc
}

.pullup-tips {
  padding: 20px;
  text-align: center;
  color: #999
}
</style>