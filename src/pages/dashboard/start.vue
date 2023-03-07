<template>
  <n-space vertical align="start" item-style="width:100%">
    <n-space>
      <s-h3>开始</s-h3>
    </n-space>

    <n-space align="center" justify="center" item-style="display:flex" style="border: .2rem solid whitesmoke;border-radius:.5rem;
height:3rem;width: 11rem;
">
      <n-icon :component="DocumentOutline" size="2rem"/>
      <SH4>新建博客</SH4>
    </n-space>
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
  </n-space>
</template>

<script setup lang="ts">
import SH3 from "../../components/SH3.vue";
import {NIcon, NPopselect, NSpace} from "naive-ui";
import {ChevronDownOutline, DocumentOutline} from "@vicons/ionicons5";
import SH4 from "../../components/SH4.vue";
import {ref} from "vue";

const value = ref('me')
const options = [{
  label: '我',
  value: 'me'
}, {
  label: '其他人',
  value: 'other'
},
]
</script>
<style scoped>

</style>