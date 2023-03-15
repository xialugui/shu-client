<template>
  <n-card :bordered="true" size="medium"
          style="border-width: .2rem;border-color: black;border-radius: .5rem;width: 40rem;"
          content-style="display:flex;text-align: left;font-weight:bold;font-size:xx-large"
          footer-style="display:flex;justify-content: left;"
  >
    <template #cover>
      <n-image src="./src/assets/img1.png" style="height: 100%;"/>
    </template>
    <template #header>
      <n-space size="large">
        <n-tag round :bordered="false" style="background-color: black;color: white">
          <s-h5>类型</s-h5>
        </n-tag>
        <n-tag :bordered="false" :color="{color: 'transparent',textColor:'black'}">
          <s-h5>时间</s-h5>
        </n-tag>
      </n-space>
    </template>
    <n-ellipsis :line-clamp="2">
      电灯熄灭 物换星移 泥牛入海<br>黑暗好像 一颗巨石 按在胸口<br>独脚大盗
      百万富翁 摸爬滚打<br>黑暗好像 一颗巨石 按在胸口
    </n-ellipsis>

    <template #footer>
      <n-space item-style="display:flex">
        <n-avatar
            bordered
            style="border-style: solid;border-color: black;"
            round
            size="large"
            src="../src/assets/logo.png"
        />
        <n-space vertical justify="center" style="height: 100%;">
          <s-h3>陆龟</s-h3>
          <s-h5 style="color:#adadad ">二〇二三年二月二十一日</s-h5>
        </n-space>
      </n-space>
    </template>
  </n-card>
</template>

<script setup lang="ts">
import {NAvatar, NCard, NEllipsis, NImage, NSpace, NTag} from "naive-ui";
import SH3 from "./SH3.vue";
import SH5 from "./SH5.vue";</script>

<style scoped>

</style>