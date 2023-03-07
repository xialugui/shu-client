<template>
  <n-space id="container" justify="center" align="center">
    <n-form :rules="rules" :model="user" ref="formRef">
      <n-form-item path="name">
        <n-input-group>
          <n-input-group-label size="large" style="display: flex;align-items: center">
            <n-icon :component="PersonOutline" size="large"/>
          </n-input-group-label>
          <n-input v-model:value="user.name" size="large" class="input" placeholder="用户名" clearable/>
        </n-input-group>
      </n-form-item>
      <n-form-item path="password">
        <n-input-group>
          <n-input-group-label size="large" style="display: flex;align-items: center">
            <n-icon :component="InfiniteOutline" size="large"/>
          </n-input-group-label>
          <n-input type="password" class="input" size="large" placeholder="密码" show-password-on="click"
                   v-model:value="user.password"
                   clearable/>
        </n-input-group>
      </n-form-item>
      <n-form-item>
        <s-button style="width: 100%" @click="login">登录</s-button>
      </n-form-item>
    </n-form>
  </n-space>
</template>

<script setup lang="ts">
import {onMounted, ref} from "vue";
import {FormInst, NForm, NFormItem, NIcon, NInput, NInputGroup, NInputGroupLabel, NSpace, useMessage} from "naive-ui";
import {InfiniteOutline, PersonOutline} from "@vicons/ionicons5";
import SButton from "../components/SButton.vue";

const message = useMessage()
const formRef = ref<FormInst | null>()
const rules = {
  name: {
    required: true,
    message: "请输入用户名",
    trigger: ['input', 'blur']
  }
}
const user = ref({
  name: 'admin',
  password: '123456'
})

function login(e: MouseEvent) {
  e.preventDefault();
  formRef.value?.validate((errors) => {
    if (!errors) {
      message.success("验证成功");
    } else {
      message.error("验证失败")
    }
  });
}


onMounted(() => {

});
</script>

<style scoped>
#container {
  height: 100%;
  width: 100%;
  background-repeat: no-repeat;
  background-size: cover;
  background-image: url("../assets/login-background.png");
}

.input {
  border-radius: .8rem;
}

.input:focus {
  outline: #4946ff;
}
</style>