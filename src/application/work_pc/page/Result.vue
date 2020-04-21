<template>
  <div style="overflow: auto; height: 100%; padding: 1.5rem;">
    <div :style="{ padding: '24px', background: '#fff', minHeight: '50rem' }">
      <div style="font-size: 3rem">
        Result
      </div>
      <div>
        <ve-pie :data="chartData"></ve-pie>
      </div>
      <div>
        <h3 :style="{ marginBottom: '16px' }">Judgement</h3>
        <a-list bordered :dataSource="data">
          <a-list-item slot="renderItem" slot-scope="item, index">{{
            item
          }}</a-list-item>
        </a-list>
      </div>
    </div>
  </div>
</template>
<script>
const data = [
  "Racing car sprays burning fuel into crowd.",
  "Japanese princess to wed commoner.",
  "Australian walks 100km after outback crash.",
  "Man charged over missing wedding girl.",
  "Los Angeles battles huge wildfires.",
];

export default {
  data() {
    return {
      chartData: {
        columns: ["日期", "访问用户"],
        rows: [
          { 日期: "1/1", 访问用户: 1393 },
          { 日期: "1/2", 访问用户: 3530 },
          { 日期: "1/3", 访问用户: 2923 },
          { 日期: "1/4", 访问用户: 1723 },
          { 日期: "1/5", 访问用户: 3792 },
          { 日期: "1/6", 访问用户: 4593 },
        ],
      },
      data,
    };
  },
};
</script>
