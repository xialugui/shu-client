<template>

  <n-space align="center" style="box-shadow: 0 .1rem 1rem #bdbdbd;border-radius: .5rem;flex-flow: nowrap">
    <n-avatar src="./src/assets/yzn.png" :size="77" round/>
    <n-space inline justify="space-between" align="flex-start">
      <n-space align="center">
        <s-h3>杨xx</s-h3>
        <n-tag :bordered="false" type="error">
          系统分析师
        </n-tag>
      </n-space>
      <n-ellipsis line-clamp="2">
        杨xx先生是跨世纪的伟大物理学家，在粒子物理学、统计力学和凝聚态物理等领域作出里程碑性贡献。他心系祖国科教事业，为国家的科技发展、中外科技文化交流作出了重要贡献，推动了香港中文大学数学科学研究所、清华大学高等研究中心、南开大学理论物理研究室和中山大学高等学术研究中心的成立。
      </n-ellipsis>
    </n-space>
    <n-space align="center" vertical>
      <n-tag type="primary">
        通过
      </n-tag>
      <n-tag type="error">
        不通过
      </n-tag>
    </n-space>
  </n-space>
</template>

<script setup lang="ts">

import {NAvatar, NEllipsis, NSpace, NTag} from "naive-ui"
import SH3 from "./SH3.vue"</script>

<style scoped>

</style>
