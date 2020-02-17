<template>
  <div id="writing">
    <a-breadcrumb style="margin: 16px 0">
      <a-breadcrumb-item>Writting</a-breadcrumb-item>
    </a-breadcrumb>
    <div :style="{ padding: '50px', background: '#fff', minHeight: '50rem' }">
      <form>
        <div class="title"><a-icon type="edit" /> TOPIC : {{ title }}</div>
        <div class="descript">{{ description }}</div>
        <div>
          <div style="margin: 24px 0" />
          <a-textarea
            style="font-size: 1.2rem;"
            placeholder="Start writing your article."
            :autosize="{ minRows: 10, maxRows: 15 }"
          />
        </div>
        <div class="submit">
          <a-button type="primary" ghost>Submit</a-button>
        </div>
      </form>
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
  data() {
    return {
      collapsed: false,
      title: "Should a computer be a real person?",
      description:
        "Computers are widely used today in education causing some people to think that one day computers will completely replace teachers in the classroom. What is your opinion about computers replacing teachers in the future?"
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
  methods: {}
};
</script>
<style>
#writting {
    height: 50rem;
}

.title {
  font-size: 2rem;
  color: #0080ff;
}

.descript {
  font-size: 1.3rem;
  color: #757575;
}

.submit {
    display: flex;
    justify-content: center;
    bottom: 1rem;
}
</style>
