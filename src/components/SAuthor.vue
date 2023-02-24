<template>
  <n-space align="center">
    <n-avatar
        bordered
        style="border-style: solid;border-color: black;"
        round
        size='small'
        :src=src
    />
    <s-h3>
      <slot/>
    </s-h3>

  </n-space>
</template>

<script setup lang="ts">
import {NAvatar, NSpace, NTime} from "naive-ui";
import SH3 from "./SH3.vue";

withDefaults(defineProps<{ src: string }>(), {})
</script>

<style scoped>

</style>
