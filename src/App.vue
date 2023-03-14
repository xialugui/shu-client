<script setup lang="ts">
import './assets/font/font.css'
import {GlobalThemeOverrides, NConfigProvider, NMessageProvider} from "naive-ui";

const themeOverrides: GlobalThemeOverrides = {
  common: {
    primaryColor: "#4946ffFF",
    primaryColorHover: "#5946FFFF",
    primaryColorPressed: "#6946FFFF"
  },
}
</script>

<template>
  <n-message-provider>
    <n-config-provider :theme-overrides="themeOverrides">
      <router-view/>
    </n-config-provider>
  </n-message-provider>
</template>

<style scoped>

</style>
