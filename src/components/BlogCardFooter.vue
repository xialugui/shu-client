<template>
  <n-space item-style="display:flex" justify="center" align="center" >
    <n-avatar
        bordered
        style="border-style: solid;border-color: black;"
        round
        :size="size==='large'?60:47"
        src="../src/assets/logo.png"
    />
    <n-space vertical justify="center" style="height: 100%;">

      <s-h3 v-if="size==='large'">{{ name }}</s-h3>
      <s-h5 v-else>{{ name }}</s-h5>
      <s-h5 style="color:#adadad ">
        <n-time type="datetime" :time="time"/>
      </s-h5>
    </n-space>
  </n-space>
</template>

<script setup lang="ts">

import {NAvatar, NSpace, NTime} from "naive-ui";
import SH5 from "./SH5.vue";
import SH3 from "./SH3.vue";
import {onMounted} from "vue";
import {useLogger} from "../utils/logger";

const logger = useLogger()

const props = withDefaults(defineProps<{ size?: 'small' | 'large', avatar: string, name: string, time: number }>(), {
  size: 'large'
});
onMounted(() => {
})
</script>

<style scoped lang="less">
</style>