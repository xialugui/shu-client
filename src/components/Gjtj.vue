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
      <n-space style="width: 100%;flex-flow: row wrap; justify-content: center">
        <n-space vertical>
          <div id="container" style="width: 50rem">

          </div>
          工匠工龄人数折线图
        </n-space>
        <n-space vertical style="width: 50rem">
          <div id="container1">

          </div>
          工匠职称人数柱状图
        </n-space>
        <n-space vertical style="width: 50rem">
          <div id="container2">

          </div>
          工匠荣誉获得数人数条形图
        </n-space>
        <n-space vertical style="width: 50rem">
          <div id="container4">

          </div>
          工匠荣誉获得数人数饼图
        </n-space>
      </n-space>

    </n-layout>
    <n-layout-footer style="height: 4rem;font-size: 2.5rem;" inverted>百名工匠管理端</n-layout-footer>
  </n-space>

</template>

<script setup lang="ts">

import {MenuOption, NIcon, NLayout, NLayoutFooter, NLayoutHeader, NLayoutSider, NMenu, NSpace} from "naive-ui"
import {h, onMounted, ref} from "vue";
import {Analytics, CaretDownOutline, Create, ExitOutline, People, PersonCircle, PersonOutline} from "@vicons/ionicons5";
import {Bar, Column, Line, Pie} from "@antv/g2plot";


onMounted(() => {
  const data4 = [
    {type: '1项荣誉', value: 27},
    {type: '2项荣誉', value: 25},
    {type: '3项荣誉', value: 18},
    {type: '4项荣誉', value: 15},
    {type: '5项荣誉', value: 10},
    {type: '6项荣誉', value: 5},
    {type: '其它', value: 2},
  ];

  const piePlot = new Pie('container4', {
    appendPadding: 10,
    data: data4,
    angleField: 'value',
    colorField: 'type',
    radius: 1,
    innerRadius: 0.6,
    label: {
      type: 'inner',
      offset: '-50%',
      content: '{value}',
      style: {
        textAlign: 'center',
        fontSize: 14,
      },
    },
    interactions: [{type: 'element-selected'}, {type: 'element-active'}],
    statistic: {
      title: false,
      content: {
        style: {
          whiteSpace: 'pre-wrap',
          overflow: 'hidden',
          textOverflow: 'ellipsis',
        },
        content: '',
      },
    },
  });

  piePlot.render();


  const data2 = [
    {
      type: '1项荣誉',
      sales: 38,
    },
    {
      type: '2项荣誉',
      sales: 52,
    },
    {
      type: '3项荣誉',
      sales: 61,
    },
    {
      type: '4项荣誉',
      sales: 145,
    },
    {
      type: '5项荣誉',
      sales: 48,
    },
    {
      type: '6项荣誉',
      sales: 38,
    }
  ];

  const barPlot = new Bar('container2', {
    data: data2,
    xField: 'sales',
    yField: 'type',
    meta: {
      type: {
        alias: '类别',
      },
      sales: {
        alias: '销售额',
      },
    },
    minBarWidth: 20,
    maxBarWidth: 20,
  });

  barPlot.render();

  const data1 = [
    {
      type: '初级',
      sales: 38,
    },
    {
      type: '中级',
      sales: 252,
    },
    {
      type: '副高',
      sales: 161,
    },
    {
      type: '正高',
      sales: 145,
    },
  ];


  const columnPlot = new Column('container1', {
        data: data1,
        xField: 'type',
        yField: 'sales',
        xAxis: {
          label: {
            autoHide: true,
            autoRotate: false,
          },
        },
        meta: {
          type: {
            alias: '类别',
          },
          sales: {
            alias: '销售额',
          },
        },
        minColumnWidth: 20,
        maxColumnWidth: 20,
      }
  );

  columnPlot.render();


  const data = [
    {year: '1', 人数: 3},
    {year: '2', 人数: 4},
    {year: '3', 人数: 3.5},
    {year: '4', 人数: 5},
    {year: '5', 人数: 4.9},
    {year: '6', 人数: 6},
    {year: '7', 人数: 7},
    {year: '8', 人数: 9},
    {year: '9', 人数: 13},
  ];
  const line = new Line('container', {
    data,
    xField: 'year',
    yField: '人数',
  });
  line.render();
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
