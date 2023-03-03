<template>
  <n-space vertical>
    <!--    <n-switch v-model:value="collapsed"/>-->
    <n-layout-header style="height: 4rem; font-size: 2.5rem;" inverted>
      <n-space justify="space-between" style="padding: 0 1rem">
        百名工匠
        <n-space>
          杨宏昌
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
      <n-form
          label-placement="left"
          label-width="auto"
          require-mark-placement="right-hanging"
          style="width: 100%;padding: 1rem 20rem;"
      >
        <n-form-item label="姓名" path="inputValue">
          <n-input placeholder="姓名" value="杨宏昌"/>
        </n-form-item>
        <n-form-item label="工龄" path="inputValue">
          <n-input placeholder="工龄" value="10"/>
        </n-form-item>
        <n-form-item label="电话" path="inputValue">
          <n-input placeholder="电话" value="13512345678"/>
        </n-form-item>
        <n-form-item label="地址" path="inputValue">
          <n-input placeholder="地址" value="上海市浦东新区"/>
        </n-form-item>
        <n-form-item label="公司" path="inputValue">
          <n-input placeholder="公司" value="特x拉（上海）有限责任公司"/>
        </n-form-item>
        <n-form-item label="职称" path="saf">
          <n-radio-group>
            <n-space>
              <n-radio value="1">
                初级
              </n-radio>
              <n-radio value="2">
                中级
              </n-radio>
              <n-radio value="3">
                副高
              </n-radio>
              <n-radio value="4" checked>
                正高
              </n-radio>
            </n-space>
          </n-radio-group>
        </n-form-item>
        <n-form-item label="技能等级" path="radioGroupValue">
          <n-radio-group>
            <n-space>
              <n-radio value="1">
                一级
              </n-radio>
              <n-radio value="2">
                二级
              </n-radio>
            </n-space>
          </n-radio-group>
        </n-form-item>
        <n-form-item label="简介" path="textareaValue">
          <n-input
              placeholder="简介"
              type="textarea"
              value="杨宏昌，男，安徽合肥人，中国理论物理学家，研究领域有统计力学、粒子物理学。他曾于抗日战争时期西南联合大学念本科、硕士，后赴美念博士。 1954年，杨xx创立了“杨”，是研究凝聚原子核的力的精深理论。杨xx和米xx把电磁作用是由定域规范不变性所决定的观念推广到对易性的定域对称群。"
              :autosize="{
          minRows: 3,
          maxRows: 5
        }"
          />
        </n-form-item>

        <n-form-item label="出生日期" path="datetimeValue">
          <n-date-picker type="datetime"/>
        </n-form-item>
        <n-form-item label="荣誉" path="checkboxGroupValue">
          <n-checkbox-group>
            <n-space>
              <n-checkbox value="首席技师">
                首席技师
              </n-checkbox>
              <n-checkbox value="国家技能大赛二等奖" checked-value>
                国家技能大赛二等奖
              </n-checkbox>
              <n-checkbox value="上海市技能大赛一等奖">
                上海市技能大赛一等奖
              </n-checkbox>
            </n-space>
          </n-checkbox-group>
        </n-form-item>
        <n-form-item label="性别" path="radioGroupValue">
          <n-radio-group>
            <n-space>
              <n-radio value="男">
                男
              </n-radio>
              <n-radio value="女">
                女
              </n-radio>
            </n-space>
          </n-radio-group>
        </n-form-item>
        <n-button round type="primary">
          提交
        </n-button>
      </n-form>
    </n-layout>
    <n-layout-footer style="height: 4rem;font-size: 2.5rem;" inverted>百名工匠管理端</n-layout-footer>
  </n-space>
</template>

<script setup lang="ts">

import {
  MenuOption,
  NButton,
  NCheckbox,
  NCheckboxGroup,
  NDatePicker,
  NForm,
  NFormItem,
  NIcon,
  NInput,
  NLayout,
  NLayoutFooter,
  NLayoutHeader,
  NLayoutSider,
  NMenu,
  NRadio,
  NRadioGroup,
  NSpace
} from "naive-ui"
import {h, ref} from "vue";
import {CaretDownOutline, ExitOutline, PersonCircle, PersonOutline} from "@vicons/ionicons5";

const menuOptions: MenuOption[] = [
  {
    label: '个人信息',
    key: 'hear-the-wind-sing',
    // href: 'https://baike.baidu.com/item/%E4%B8%94%E5%90%AC%E9%A3%8E%E5%90%9F/3199'
  },
  /*  {
      label: '1973年的弹珠玩具',
      key: 'pinball-1973',
      disabled: true,
      children: [
        {
          label: '鼠',
          key: 'rat'
        }
      ]
    },
    {
      label: '寻羊冒险记',
      key: 'a-wild-sheep-chase',
      disabled: true
    },
    {
      label: '舞，舞，舞',
      key: 'dance-dance-dance',
      children: [
        {
          type: 'group',
          label: '人物',
          key: 'people',
          children: [
            {
              label: '叙事者',
              key: 'narrator'
            },
            {
              label: '羊男',
              key: 'sheep-man'
            }
          ]
        },
        {
          label: '饮品',
          key: 'beverage',
          children: [
            {
              label: '威士忌',
              key: 'whisky',
              href: 'https://baike.baidu.com/item/%E5%A8%81%E5%A3%AB%E5%BF%8C%E9%85%92/2959816?fromtitle=%E5%A8%81%E5%A3%AB%E5%BF%8C&fromid=573&fr=aladdin'
            }
          ]
        },
        {
          label: '食物',
          key: 'food',
          children: [
            {
              label: '三明治',
              key: 'sandwich'
            }
          ]
        },
        {
          label: '过去增多，未来减少',
          key: 'the-past-increases-the-future-recedes'
        }
      ]
    }*/
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
  if (option.key === 'sheep-man') return true
  // 返回 falsy 值，不再渲染图标及占位符
  if (option.key === 'food') return null
  return h(NIcon, null, {default: () => h(PersonOutline)})
}

function expandIcon() {
  return h(NIcon, null, {default: () => h(CaretDownOutline)})
}
</script>

<style scoped>

</style>
