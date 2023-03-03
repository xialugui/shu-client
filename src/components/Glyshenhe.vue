<template>
  <n-space vertical>
    <!--    <n-switch v-model:value="collapsed"/>-->
    <n-layout-header style="height: 4rem; font-size: 2.5rem;" inverted>
      <n-space justify="space-between" style="padding: 0 1rem">
        百名工匠
        <n-space>
          系统管理员
          <n-icon :component="PersonCircle" size="46"/>
          <div style="width: 1rem"></div>
          <n-icon :component="ExitOutline" size="46"/>
        </n-space>
      </n-space>

    </n-layout-header>
    <n-layout has-sider style="height: 100%">
      <n-layout-sider
          bordered
          collapse-mode="width"
          :collapsed-width="64"
          :width="240"
          :collapsed="collapsed"
          show-trigger
          @collapse="collapsed = true"
          @expand="collapsed = false"
      >
        <n-menu
            :collapsed="collapsed"
            :collapsed-width="64"
            :collapsed-icon-size="22"
            :options="menuOptions"
            :render-label="renderMenuLabel"
            :render-icon="renderMenuIcon"
            :expand-icon="expandIcon"
        />
      </n-layout-sider>
      <n-space style=" min-width: 100%" justify="start">
        <n-space>
          <n-input type="text" placeholder="姓名" value="杨"/>
          <n-input type="text" placeholder="职称"/>
          <n-input type="text" placeholder="地址"/>
          <n-input type="text" placeholder="公司"/>
          <n-button type="primary">搜索</n-button>
          <n-button>清空</n-button>
        </n-space>
        <n-data-table style="width: 100rem;height: 50rem;"
            :columns="columns"
            :data="data"
            :pagination="pagination"
            :bordered="false"
        />
      </n-space>

    </n-layout>
    <n-layout-footer style="height: 4rem;font-size: 2.5rem;" inverted>百名工匠管理端</n-layout-footer>
  </n-space>
</template>

<script setup lang="ts">

import {
  MenuOption,
  NButton,
  NDataTable,
  NIcon,
  NInput,
  NLayout,
  NLayoutFooter,
  NLayoutHeader,
  NLayoutSider,
  NMenu,
  NSpace
} from "naive-ui"
import {h, reactive, ref} from "vue";
import {Analytics, CaretDownOutline, Create, ExitOutline, People, PersonCircle, PersonOutline} from "@vicons/ionicons5";

const columns = [
  {
    title: '姓名',
    key: 'name'
  },
  {
    title: '工龄',
    key: 'age'
  },
  {
    title: '年龄',
    key: 'age1'
  },
  {
    title: '地址',
    key: 'address'
  },
  {
    title: '职称',
    key: 'level'
  },
  {
    title: '荣誉',
    key: 'honor'
  }, {
    title: '简介',
    key: 'introduce'
  }, {
    title: '操作',
    key: 'action',
    render(row) {
      return [
        h(
            NButton,
            {
              size: 'small',
              type: 'primary',
              onClick: () => ""
            },
            {default: () => '通过'}
        ), " ", h(
            NButton,
            {
              size: 'small',
              type: 'error',
              onClick: () => ""
            },
            {default: () => '拒绝'}
        ),
      ]
    }
  },
]
const data = Array.from({length: 2}).map((_, index) => ({
  key: index,
  name: `杨 ${index}`,
  age: 10,
  age1: 60,
  address: `上海市浦东新区下南路11${index}号`,
  level: `副高`,
  honor: `上海市技能大赛一等奖`,
  introduce: `曾荣获国家技能大赛一等奖`,
}))
const pagination = reactive({
  page: 2,
  pageSize: 10,
  showSizePicker: true,
  pageSizes: [3, 5, 7],
  onChange: (page: number) => {
    pagination.page = page
  },
  onUpdatePageSize: (pageSize: number) => {
    pagination.pageSize = pageSize
    pagination.page = 1
  }
})


const menuOptions: MenuOption[] = [
  {
    label: '工匠信息',
    key: 'hear',
  },
  {
    label: '工匠信息审核',
    key: 'hear-the',
  },
  {
    label: '工匠信息统计',
    key: 'a',
  },
]
const collapsed = ref(true);

function renderMenuLabel(option: MenuOption) {
  if ('href' in option) {
    return h(
        'a',
        {href: option.href, target: '_blank'},
        option.label as string
    )
  }
  return option.label as string
}

function renderMenuIcon(option: MenuOption) {
  // 渲染图标占位符以保持缩进
  if (option.key === 'hear') return h(People)
  // 返回 falsy 值，不再渲染图标及占位符
  if (option.key === 'hear-the') return h(Create)
  if (option.key === 'a') return h(Analytics)
  return h(NIcon, null, {default: () => h(PersonOutline)})
}

function expandIcon() {
  return h(NIcon, null, {default: () => h(CaretDownOutline)})
}
</script>

<style scoped>

</style>
