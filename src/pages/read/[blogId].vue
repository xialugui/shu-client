<template>

  <n-space id="container" item-style="flex-grow: 1" style="flex-wrap: nowrap;flex-grow: 1">

    <n-space vertical>
      <s-h1 style="width: fit-content">{{ blog.title }}</s-h1>
      <div id="vditor" ref="wrapper">
      </div>
    </n-space>

    <n-space>
      <n-affix
          :trigger-top="0"
          :top="30"
          position="fix"
      >
        <div ref="outline" style="display: flex;"></div>
      </n-affix>
    </n-space>

  </n-space>
</template>
<style scoped>
#container {
  padding: 3rem;
  flex-grow: 1;
}
</style>
<script setup lang="ts">
import {useLogger} from "../../utils/logger";
import Vditor from "vditor";
import 'vditor/dist/index.css'
import {onMounted, ref} from "vue";
import {get} from "../../utils/requests";
import {Url} from "../../utils/urls";
import {NAffix, NSpace} from "naive-ui";
import SH1 from "../../components/SH1.vue";

const props = withDefaults(defineProps<{ blogId: bigint }>(), {})
const wrapper = ref<HTMLDivElement>()
const outline = ref<HTMLDivElement>()

interface Blog {
  title: string,
  author: {
    id: bigint,
    name: string
  },
  content: string,
  id: bigint
  time_info: { created_date_time: string, last_modified_date: string }
}

const logger = useLogger()
const blog = ref<Blog>()
onMounted(() => {
  load(props.blogId)
})

function load(id: bigint) {
  logger.debug("博客id为：", id)
  get(`${Url.Blogs}/${id}`).then(data => {
    blog.value = data
    Vditor.preview(wrapper.value!, blog.value?.content!, {
      mode: 'light', after() {
        Vditor.outlineRender(wrapper.value!, outline.value!)
      }
    })

  })
}
</script>

