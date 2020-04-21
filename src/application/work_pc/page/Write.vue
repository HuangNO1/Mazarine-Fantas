<template>
  <div id="writing" style="overflow: auto; height: 100%; padding: 1.5rem;">
    <div :style="{ padding: '24px', background: '#fff', minHeight: '50rem' }">
      <form>
        <div class="title"><a-icon type="edit" /> TOPIC : {{ title }}</div>
        <!--<div class="descript">{{ description }}</div>-->
        <div>
          <div style="margin: 24px 0" />
          <a-textarea
            v-model="answer"
            style="font-size: 1.2rem;"
            placeholder="Start writing your article."
            :autosize="{ minRows: 10, maxRows: 15 }"
          />
        </div>
        <div class="submit">
          <a-button type="primary" @click="submitAnswer()" ghost>Submit</a-button>
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
  beforeRouteUpdate(to, from, next) {
    this.title = to.query.id;
  },
  data() {
    return {
      collapsed: false,
      title: "Should a computer be a real person?",
      description: "",
      answer: ""
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

    this.title = this.$route.query.id;
  },
  methods: {
    submitAnswer() {
      this.$router.push({ path: "/Result", query: { id: this.answer } });
    }
  }
};
</script>
<style>
#writting {
  overflow: auto;
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
