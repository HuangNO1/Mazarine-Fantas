<template>
  <div id="app">
    <div id="Nav">
      <a-button type="link" href="#Footer">Link</a-button>
      <a-button type="link">Link</a-button>
      <a-button type="link">Link</a-button>
    </div>
    <Header id="Header" class="fixed" />
    <Content id="Content" class="CAbsolute"/>
    <Footer id="Footer" class="FAbsolute"/>
  </div>
</template>

<script>
import Header from "./components/Header.vue";
import Content from "./components/Content.vue";
import Footer from "./components/Footer.vue";

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
    return {};
  },
  created() {},
  components: {
    Header,
    Content,
    Footer
  },
  methods: {}
};
</script>

<style>
#app {
  font-family: "SF Pro TC", "SF Pro Text", "SF Pro Icons", "PingFang TC",
    "Helvetica Neue", "Helvetica", "Arial", "Microsoft JhengHei", wf_SegoeUI,
    "Segoe UI", Segoe, "Segoe WP", Tahoma, Verdana, Ubuntu,
    "Bitstream Vera Sans", "DejaVu Sans", Tahoma, 微軟正黑體, "LiHei Pro",
    "WenQuanYi Micro Hei", "Droid Sans Fallback", "AR PL UMing TW", Roboto,
    "Helvetica Neue", "Hiragino Maru Gothic ProN", メイリオ,
    "ヒラギノ丸ゴ ProN W4", Meiryo, "Droid Sans", sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
  height: 300%;
}

#Nav {
  position: fixed;
  z-index: 1;
}

.fixed {
  position: fixed;
  z-index: -1;
}

.CAbsolute {
  position: absolute;
  top: 100%;
}
.FAbsolute {
  position: absolute;
  top: 200%;
}
</style>
