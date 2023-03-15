<template>
  <n-space item-style="display:flex" justify="space-around" align="center">
    <n-image preview-disabled
             width="50"
             height="50"
             src="./src/assets/logo.png"
    />
    <n-menu id="menu" v-model:value="activeKey" mode="horizontal" :options="menuOptions"/>
    <n-space>
      <n-button id="login" size="large" round>
        <router-link to="/login" style="color: white">登录</router-link>
      </n-button>
      <n-button size="large" round style="font-size: large;border-radius: .8rem;">
        <router-link to="/dashboard/start">编辑</router-link>
      </n-button>
    </n-space>
  </n-space>
</template>

<script setup lang="ts">
import {ref} from "vue";
import {MenuOption, NButton, NImage, NMenu, NSpace} from "naive-ui";

const activeKey = ref<string | null>(null);
const menuOptions: MenuOption[] = [
  {
    label: 'Gitee',
    key: 'gitee',
  },
  {
    label: 'Github',
    key: 'github',
  },
  {
    label: '插件',
    key: 'plugin',
  }
]</script>

<style scoped>
#menu {
  font-size: x-large;
  font-weight: bold;
}

#login {
  background-color: #4946ff;
  font-size: large;
  border-radius: .8rem;
}
</style>