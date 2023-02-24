<template>
  <n-space vertical align="start" style="box-shadow:0 1rem 1rem whitesmoke;border-radius: 1rem;
background-image: url('../assets/img1.png');
"
           item-style="width:100%;">
    <div style="background-image:url('../assets/img1.png'); ">
      111111
      1
    </div>
    <s-h2>
      <n-ellipsis line-clamp="1">
        VUE3_组件间传值的三种方法_setup语法糖_记录11231231222312312
      </n-ellipsis>
    </s-h2>
    <s-h3 style="color: #676767;">
      <n-ellipsis line-clamp="3" style="max-width: 100%">
        1.vue3基础介绍12312312313122
        1.1 vue3带来的新变化
        性能提升（渲染更快，diff算法更快，内存占用更少，打包体积更小）
        更好的Tyoescript支持
        提供新的写代码的方式：Composition API
        1.2 移除的一些语法
        移除了$on方法 （eventBus现有实现模式不再支持，可以使用三方插件替代）sdfadfafdf
        移除过滤器选项 （插值表达式里不能再使用过滤器filter， 可以使用methods替代）
        移除 .sync语法（v-bind时不能使用.sync修饰符了，现在它v-model语法合并了）
        2.组合式API和选项式API
        2.1 Vue2选项式API(option api)
        ————————————————
        版权声明：本文为CSDN博主「_Hello World！」的原创文章，遵循CC 4.0 BY-SA版权协议，转载请附上原文出处链接及本声明。
        原文链接：https://blog.csdn.net/qq_42651173/article/details/118709917
      </n-ellipsis>
    </s-h3>
    <n-space align="center" justify="space-between">
      <s-author src="./src/assets/logo.png">XiaLuGui</s-author>
      <s-tag>Spring boot</s-tag>
      <s-h3>
        <n-time type="datetime" format="yyyy-MM-dd HH:mm:ss"/>
      </s-h3>
    </n-space>
  </n-space>

</template>

<script setup lang="ts">
import SH2 from "./SH2.vue";
import {NEllipsis, NSpace, NTime} from "naive-ui";
import SH3 from "./SH3.vue";

import SAuthor from "./SAuthor.vue";
import STag from "./STag.vue";
</script>

<style scoped>
</style>
