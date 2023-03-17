<template>
  <n-space id="container" vertical align="center" item-style="flex-grow: 1">
    <s-h1>{{ blog.title }}</s-h1>
    <div id="vditor" ref="wrapper"/>
    <div ref="outline" style="height: 10rem;width: 10rem;background-color: rebeccapurple">111111</div>
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
import {onMounted, ref} from "vue";
import {get} from "../../utils/requests";
import {Url} from "../../utils/urls";
import {NSpace} from "naive-ui";
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
    Vditor.preview(wrapper.value!, blog.value?.content!)
    Vditor.outlineRender(wrapper.value!, outline.value!)
  })
}
</script>

