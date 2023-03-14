<template>
  <n-affix :trigger-top="0" :top="0" position="fix"
           style="height: 5rem;width:100%;z-index: 999;border-bottom: .1rem solid rgba(0,0,0,0.05)">
    <n-space style="height: 100%;width:100%;background-color: white" align="center" justify="space-between">
      <n-space id="left" align="center" item-style="display:flex;">
        <n-icon :component="AppsOutline"/>
        <s-h4>{{ blog.title }}</s-h4>
      </n-space>
      <n-space id="right" align="center" item-style="display:flex;">
        <!--        <l-button>发布</l-button>-->
        <l-button @click="update">更新</l-button>
        <n-icon :component="EllipsisHorizontalCircleOutline" size="2rem"/>
      </n-space>
    </n-space>
  </n-affix>
  <n-space vertical style="gap:0">
    <div style="height: 5rem;"></div>
    <div id="vditor"/>

  </n-space>

</template>

<script setup lang="ts">
import Vditor from "vditor";
import {onMounted, ref} from "vue";
import 'vditor/dist/index.css';
import {NAffix, NIcon, NSpace, useMessage} from "naive-ui";
import {AppsOutline, EllipsisHorizontalCircleOutline} from "@vicons/ionicons5";
import SH4 from "../../components/SH4.vue";
import LButton from "../../components/LButton.vue";
import {get, patch} from "../../utils/requests";
import {Url} from "../../utils/urls";
import {useLogger} from "../../utils/logger";
import useHotkey, {HotKey} from "vue3-hotkey";

const logger = useLogger()
const props = withDefaults(defineProps<{ blogId: bigint }>(), {})
const vditor = ref<Vditor | null>();

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

const blog = ref<Blog>()
onMounted(() => {
  vditor.value = new Vditor('vditor', {
    value: 'ir',
    toolbarConfig: {
      "pin": true
    },
    after: () => {
      load(props.blogId)
    },
  });

  function load(id: bigint) {
    logger.debug("博客id为：", id)
    get(Url.Blogs + "/" + id).then(data => {
      blog.value = data
      vditor.value!.setValue(blog.value?.content!);
    })
  }
});
const message = useMessage()

function update() {
  patch(Url.Blogs, {
    id: props.blogId,
    content: vditor.value?.getValue()
  }).then(() => {
    message.success("博客已更新")
  })
}

const hotkeys = ref<HotKey[]>([
  {
    keys: ['ctrl', 's'],
    preventDefault: true,
    handler(keys) {
      logger.debug("按下更新按钮：", keys);
      update()
    }
  }
])
useHotkey(hotkeys.value)
</script>

<style scoped lang="less">
.vditor {
  --toolbar-background-color: white;
  --toolbar-height: 50px;
  --border-color: green;
  border: 0;
  --toolbar-icon-hover-color: #4946ff;
  --textarea-background-color: white;
}

:deep(.vditor-toolbar) {
  border-bottom: 1px solid rgba(0, 0, 0, 0.05);
}

:deep(.vditor-toolbar--pin) {
  top: 5rem;
}
</style>