<template>
  <div style="display:flex;width:42rem;height: 14rem;justify-content: space-between">
    <n-image src="src/assets/img1.png" width="240" style="border-radius: .5rem"/>
    <div style="display:flex;justify-content: space-between;flex-direction: column;width: 20rem">
      <n-space>
        <n-tag round :bordered="false" style="background-color: black;color: white">
          类型
        </n-tag>
        <n-tag :bordered="false" :color="{color: 'none'}">
          时间
        </n-tag>
      </n-space>

      <n-ellipsis :line-clamp="2" style="text-align: left;font-weight:bold;font-size:x-large">
        电灯熄灭 物换星移 泥牛入海<br>黑暗好像 一颗巨石 按在胸口<br>独脚大盗
        百万富翁 摸爬滚打<br>黑暗好像 一颗巨石 按在胸口
      </n-ellipsis>
      <div style="display: flex; justify-content: left;">
        <n-avatar
            bordered
            style="border-style: solid;border-color: black;"
            round
            :size="47"
            src="../src/assets/logo.png"
        />
        <div
            style="display: flex;flex-direction: column;align-items: flex-start;justify-content: center;height: 100%;margin-left: 1rem">
          <div style="font-weight:bold;font-size:large;">陆龟</div>
          <div style="color: #adadad;">二〇二三年二月二十一日</div>
        </div>

      </div>
    </div>

  </div>

</template>

<script setup>

import {NAvatar, NEllipsis, NImage, NSpace, NTag} from "naive-ui";
</script>

<style scoped>

</style>
