<script setup lang="ts">
import {NBackTop, NSpace} from "naive-ui";
import BlogCard from "../components/BlogCard.vue";
import BlogSmallCard from "../components/BlogSmallCard.vue";
import SNavigator from "../components/SNavigator.vue";
import SSlogan from "../components/SSlogan.vue";
import BlogMediumCards from "../components/BlogMediumCards.vue";
import SFooter from "../components/SFooter.vue";
import MoreBlogs from "../components/MoreBlogs.vue";</script>

<template>
  <n-space vertical>
    <n-space id="introduce" vertical size="large">
      <s-navigator/>
      <s-slogan/>
      <n-space justify="center" size="large">
        <blog-card/>
        <n-space vertical justify="space-around" align="center" style="height: 100%">
          <blog-small-card/>
          <blog-small-card/>
          <blog-small-card/>
        </n-space>
      </n-space>
    </n-space>

    <more-blogs/>

    <div>

      <n-space vertical size="large" align="center">
        <blog-medium-cards style="height: 70rem;width: 80rem"/>
      </n-space>
    </div>

    <div style="height: 5rem"/>

    <s-footer/>
  </n-space>
  <n-back-top :right="100"/>
</template>

<style scoped lang="less">


#introduce {
  padding: 2rem 0;
  background-image: url("../assets/mouse.png");
}
</style>
