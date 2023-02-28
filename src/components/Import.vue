<template>
  <n-space vertical style="padding: 10% 1rem">
    <n-form
        :label-width="80"
    >
      <n-form-item label="姓名" path="user.name">
        <n-input placeholder="输入姓名"/>
      </n-form-item>
      <n-form-item label="职务" path="user.age">
        <n-input placeholder="职务"/>
      </n-form-item>
      <n-form-item label="职称" path="user.age">
        <n-input placeholder="职称"/>
      </n-form-item>
      <n-form-item label="电话号码" path="phone">
        <n-input placeholder="电话号码"/>
      </n-form-item>
      <n-form-item label="简介" path="textareaValue">
        <n-input
            placeholder="简介"
            type="textarea"
            :autosize="{
          minRows: 3,
          maxRows: 5
        }"
        />
      </n-form-item>
      <n-form-item>
        <n-button attr-type="button" type="info">
          完成
        </n-button>
      </n-form-item>
    </n-form>
    <!--    <n-button type="info" block style="width: 100%">工匠信息导入</n-button>-->
  </n-space>

</template>

<script setup lang="ts">

import {NButton, NForm, NFormItem, NInput, NSpace} from "naive-ui"</script>

<style scoped>

</style>
