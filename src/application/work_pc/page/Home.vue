<template>
  <div style="overflow: auto; height: 100%; padding: 1.5rem;">
    <a-breadcrumb style="margin: 16px 0">
      <a-breadcrumb-item>Home</a-breadcrumb-item>
    </a-breadcrumb>
    <div :style="{ padding: '24px', background: '#fff', minHeight: '50rem', marginBottom: '1.5rem' }">
      Bill is a cat.
    </div>
  </div>
</template>
<script>
function isPC() {
  //是否為PC端
  var userAgentInfo = navigator.userAgent;
  var Agents = [
    "Android",
    "iPhone",
    "SymbianOS",
    "Windows Phone",
    "iPad",
    "iPod"
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
  }
};
</script>