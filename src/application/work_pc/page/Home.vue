<template>
  <div style="overflow: auto; height: 100%; padding: 1.5rem;">
    <div
      :style="{
        padding: '24px',
        background: '#fff',
        minHeight: '50rem',
        marginBottom: '1.5rem',
      }"
    >
      <a-table :columns="columns" :dataSource="data">
        <a slot="name" slot-scope="text">{{ text }}</a>
        <span slot="customTitle"><a-icon type="smile-o" /> Name</span>
        <span slot="tags" slot-scope="tags">
          <a-tag
            v-for="tag in tags"
            :color="
              tag === 'loser'
                ? 'volcano'
                : tag.length > 5
                ? 'geekblue'
                : 'green'
            "
            :key="tag"
          >
            {{ tag.toUpperCase() }}
          </a-tag>
        </span>
        <span slot="action" slot-scope="text, record">
          <a @click="toWriteAnswer(record)">Answer</a>
        </span>
      </a-table>
    </div>
  </div>
</template>
<script>
const columns = [
  {
    dataIndex: "name",
    key: "name",
    slots: { title: "customTitle" },
    scopedSlots: { customRender: "name" },
  },
  // {
  //   title: "Age",
  //   dataIndex: "age",
  //   key: "age",
  // },
  // {
  //   title: "Address",
  //   dataIndex: "address",
  //   key: "address",
  // },
  {
    title: "Tags",
    key: "tags",
    dataIndex: "tags",
    scopedSlots: { customRender: "tags" },
  },
  {
    title: "Action",
    key: "action",
    scopedSlots: { customRender: "action" },
  },
];

const data = [
  {
    key: "1",
    name: "物流系统的组成是？",
    tags: ["物流作业系统", "物流信息流动", "物流信息系统"],
  },
  {
    key: "2",
    name: "基本的运输方式通常指哪几种及有哪些特点？",
    tags: ["铁路运输", "公路运输", "航空运输", "水路运输", "管道运输"],
  },
  {
    key: "3",
    name: "什么是ABC库存策略？",
    tags: ["A类", "B类", "C类"],
  },
];

function isPC() {
  //是否為PC端
  var userAgentInfo = navigator.userAgent;
  var Agents = [
    "Android",
    "iPhone",
    "SymbianOS",
    "Windows Phone",
    "iPad",
    "iPod",
  ];
  var flag = true;
  for (var v = 0; v < Agents.length; v++) {
    if (userAgentInfo.indexOf(Agents[v]) > 0) {
      flag = false;
      break;
    }
  }
  return flag;
}

export default {
  name: "App",
  data() {
    return {
      collapsed: false,
      data,
      columns,
    };
  },
  created() {
    console.log("isPC");
    if (isPC() === true) {
      console.log("isPC = true");
    } else {
      document.location.href = "/work_mobile";
      console.log("isPC = false");
    }
  },
  methods: {
    toWriteAnswer(item) {
      this.$router.push({ path: "/Write", query: { id: item.name } });
    }
  },
};
</script>
