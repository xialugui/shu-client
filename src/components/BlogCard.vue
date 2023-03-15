<template>
  <n-card :bordered="true"
          style="border-width: .2rem;border-color: black;padding:.8rem 0;border-radius: .5rem;width: 40rem;"
          content-style="display:flex;text-align: left;font-weight:bold;font-size:xx-large"
          footer-style="display:flex;justify-content: left;"
  >
    <template #cover>
      <n-image src="./src/assets/img1.png" style="height: 100%;"/>
    </template>
    <template #header>
      <n-space>
        <n-tag round :bordered="false" style="background-color: black;color: white">
          类型
        </n-tag>
        <n-tag :bordered="false" :color="{color: 'white'}">
          时间
        </n-tag>
      </n-space>
    </template>
    <n-ellipsis :line-clamp="2">
      电灯熄灭 物换星移 泥牛入海<br>黑暗好像 一颗巨石 按在胸口<br>独脚大盗
      百万富翁 摸爬滚打<br>黑暗好像 一颗巨石 按在胸口
    </n-ellipsis>

    <template #footer>
      <n-space style="height: 5rem">
        <n-avatar
            bordered
            style="border-style: solid;border-color: black;"
            round
            :size="60"
            src="../src/assets/logo.png"
        />
        <div
            style="display: flex;flex-direction: column;align-items: flex-start;justify-content: center;height: 100%;">
          <div style="font-weight:bold;font-size:large;">陆龟</div>
          <div style="color: #adadad;">二〇二三年二月二十一日</div>
        </div>

      </n-space>
    </template>
  </n-card>
</template>

<script setup lang="ts">
import {NAvatar, NCard, NEllipsis, NImage, NSpace, NTag} from "naive-ui";</script>

<style scoped>

</style>