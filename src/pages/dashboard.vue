<template>
  <n-space id="container" item-style="height:100%" vertical wrap-item>
    <n-layout has-sider style="height:100%">
      <n-layout-sider
          bordered
          style="background-color: #fafafa"
          collapse-mode="width"
          :collapsed-width="60"
          :width="240"
          :collapsed="collapsed"
          show-trigger
          @collapse="collapsed = true"
          @expand="collapsed = false"
      >

        <n-space justify="space-around" align="center">
          <n-space justify="center" align="center" :size="5">
            <n-image src="../src/assets/logo.png" width="28" height="28"/>
            <s-h3 style="font-size: 1.5rem">鼠</s-h3>
          </n-space>
          <n-space justify="center" align="center" wrap-item item-style="display:flex">
            <n-icon :component="NotificationsOutline" size="1.34rem"/>
            <n-space align="center" :size="4" wrap-item item-style="display:flex">
              <n-avatar src="../src/assets/logo.png" round :size="24"/>
              <n-icon :component="ChevronDownOutline" size="1.16rem"/>
            </n-space>
          </n-space>
        </n-space>
        <n-space align="center" wrap-item justify="center">
          <n-space style="background-color: #eff0f0;border-radius: .8rem;height:2.67rem;width: 15rem;" align="center"
                   justify="space-around">
            <n-space align="center" wrap-item item-style="display:flex" :size="4">
              <n-icon :component="SearchOutline" size="1.5rem"/>
              <s-h3 style="font-size: 1.2rem;line-height: initial">搜索</s-h3>
            </n-space>

            <s-h3 style="font-size: 1.2rem;line-height: initial">Ctrl J</s-h3>
          </n-space>
          <n-space
              align="center"
              item-style="display:flex"
              justify="center"
              style="background-color:white;border: .1rem solid whitesmoke;border-radius:.5rem;width: 2.67rem;height:2.67rem;">
            <n-icon :component="AddOutline" size="1.5rem"/>
          </n-space>
        </n-space>
        <n-menu
            style="justify-content: flex-start"
            v-model:value="activeKey"
            :collapsed="collapsed"
            :collapsed-width="60"
            :collapsed-icon-size="18"
            :options="menuOptions"
        />


      </n-layout-sider>
      <n-layout>
        <router-view/>
      </n-layout>
    </n-layout>
  </n-space>
</template>

<script setup lang="ts">

import {MenuOption, NAvatar, NIcon, NImage, NLayout, NLayoutSider, NMenu, NSpace} from "naive-ui";
import {Component, h, ref} from "vue";
import {
  AddOutline,
  ChevronDownOutline,
  NotificationsOutline,
  SearchOutline,
  StarOutline,
  TimeOutline
} from "@vicons/ionicons5";
import SH3 from "../components/SH3.vue";
import {RouterLink} from "vue-router";
import SH4 from "../components/SH4.vue";

const collapsed = ref(false);
const activeKey = ref<string | null>('start');

function renderIcon(icon: Component) {
  return () => h(NIcon, null, {default: () => h(icon)})
}

function renderLabel(route: string, label: string) {
  return () => h(RouterLink, {
    to: route,
  }, {
    default: () => h(SH4, null, {
      default: () => label
    })
  });
}

const menuOptions: MenuOption[] = [
  {
    label: renderLabel("/dashboard/start", "开始"),
    key: 'start',
    icon: renderIcon(TimeOutline)
  },
  {
    label: renderLabel("/dashboard/collections", "收藏"),
    key: 'collections',
    icon: renderIcon(StarOutline),
  },
]
</script>


<style scoped>
#container {
  height: 100%;
  width: 100%;
  background-repeat: no-repeat;
  background-size: cover;
  background-image: url("../assets/login-background.png");
}

</style>