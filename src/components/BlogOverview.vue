<template>
  <n-space id="container" style="" align="center" justify="space-between" item-style="display:flex"
           @mouseover="hover='visible'"
           @mouseout="hover='hidden'">
    <n-space align="center" item-style="display:flex">
      <n-icon :component="DocumentTextOutline" size="2rem"/>
      <s-h4 id="title" @click="edit(id)">
        <n-ellipsis line-clamp="1" style="width:fit-content;max-width: 10rem;vertical-align: sub;">
          {{ title }}
        </n-ellipsis>
      </s-h4>
      <n-icon id="edit" @click="edit(id)" :component="BrushOutline" :style="{visibility:hover}"/>
    </n-space>
    <s-h4>{{ author }}</s-h4>
    <s-h4>
      <n-time type="datetime" format="MM-dd HH:mm" :time="time"/>
    </s-h4>
    <n-dropdown trigger="click" :options="options" @select="handleSelect">
      <n-icon id="more" :component="EllipsisHorizontalOutline" :style="{visibility: hover}"/>
    </n-dropdown>
  </n-space>
</template>

<script setup lang="ts">

import {BrushOutline, DocumentTextOutline, EllipsisHorizontalOutline, OpenOutline} from "@vicons/ionicons5";
import {NDropdown, NEllipsis, NIcon, NSpace, NTime} from "naive-ui";
import SH4 from "./SH4.vue";
import {h, ref} from "vue";
import {useRouter} from "vue-router";
import {useLogger} from "../utils/logger";

const logger = useLogger()
const router = useRouter()
const hover = ref(
    'hidden'
)
const props = withDefaults(defineProps<{ id: bigint, author: string, title: string, time: number }>(), {})


function edit(id: bigint) {
  router.push("/edit/" + id)
}

const options = [
  {
    label: '新窗口打开',
    key: 'new',
    icon() {
      return h(NIcon, null, {
        default: () => h(OpenOutline)
      })
    },
  },
]

function handleSelect(key: string) {
  switch (key) {
    case "new":
      logger.debug("选择在新标签打开：", key)
      let page = router.resolve(`/edit/${props.id}`)
      window.open(page.href, '_blank');
      break;
    default:
      logger.debug("其它选择，不处理");

  }
}
</script>

<style scoped>
#container {
  width: 100%;
  height: 5.4rem;
  box-shadow: 0 .1rem 1rem -1rem #1a1a1a;
  border-radius: 1rem;
}

#container:hover {
  background-color: #fafafa;
}

#title {
  /*text-align: center;*/

}

#title:hover, #edit:hover, #more:hover {
  cursor: pointer;
}

</style>