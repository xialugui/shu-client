<template>
  <n-space>
    <n-image src="src/assets/img1.png" width="240" style="border-radius: .5rem;height: 100%" preview-disabled/>
    <n-space vertical style="width: 20rem">
      <blog-card-header/>
      <blog-card-content style="font-size: x-large"/>
      <blog-card-footer size="small"/>
    </n-space>
  </n-space>
</template>

<script setup lang="ts">
import {NImage, NSpace} from "naive-ui";
import BlogCardHeader from "./BlogCardHeader.vue";
import BlogCardContent from "./BlogCardContent.vue";
import BlogCardFooter from "./BlogCardFooter.vue";

/*withDefaults(defineProps<{ boxShadowStyle?: string; }>(), {
  boxShadowStyle: "0 .5rem 1.2rem rgba(215,215,215,5)"
});*/
</script>

<style scoped>
</style>
