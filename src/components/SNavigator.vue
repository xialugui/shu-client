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
    label: '111111',
    key: 'hear-the-wind-sing',
  },
  {
    label: '1973年的弹珠玩具',
    key: 'pinball-1973',
  },
  {
    label: '寻羊冒险记',
    key: 'a-wild-sheep-chase',
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