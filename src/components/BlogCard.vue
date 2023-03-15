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
      <blog-card-header/>
    </template>
    <blog-card-content/>
    <template #footer>
      <blog-card-footer/>
    </template>
  </n-card>
</template>

<script setup lang="ts">
import {NCard, NImage} from "naive-ui";
import BlogCardHeader from "./BlogCardHeader.vue";
import BlogCardContent from "./BlogCardContent.vue";
import BlogCardFooter from "./BlogCardFooter.vue";</script>

<style scoped>
:deep(.n-card-cover) {
  width: auto;
  margin: 1rem 1rem 1rem 1rem;
  box-shadow: 0 1rem 10rem rgba(0, 0, 0, .3);
  height: 25rem;
  border-radius: 1rem;
}

</style>