<template>
  <n-affix :trigger-top="0" :top="0" position="fix"
           style="height: 5rem;width:100%;z-index: 999;border-bottom: .1rem solid rgba(0,0,0,0.05)">
    <n-space style="height: 100%;width:100%;background-color: white" align="center" justify="space-between">
      <n-space id="left" align="center" item-style="display:flex;">
        <n-icon :component="AppsOutline"/>
        <s-h4>无标题</s-h4>
      </n-space>
      <n-space id="right" align="center" item-style="display:flex;">
        <l-button>发布</l-button>
        <l-button @click="save">保存</l-button>
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

const props = withDefaults(defineProps<{ blogId: string }>(), {
  blogId: ""
})
const vditor = ref<Vditor | null>();
onMounted(() => {
  vditor.value = new Vditor('vditor', {
    value: 'ir',
    toolbarConfig: {
      "pin": true
    },
    after: () => {
      // vditor.value is a instance of Vditor now and thus can be safely used here
      vditor.value!.setValue('Vue Composition API + Vditor + TypeScript Minimal Example');
    },
  });
});
const message = useMessage()

function save() {
  message.info(vditor.value!.getValue());
  console.log("id", props.blogId)
  // logger.info("id:", props.blogId)
  // patch("",vditor.value?.getValue())
}
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