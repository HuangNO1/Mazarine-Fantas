<template>
  <div id="app">
    <!--<div id="Nav">
      <a-button type="link" href="#Footer" size="large">Features</a-button>
      <a-button type="link" size="large">Support</a-button>
      <a-button type="link" size="large">About us</a-button>
    </div>-->
    <div id="Nav">
      <a-button type="primary" @click="showDrawer" size="large" icon="menu-unfold">
      Menu
    </a-button>
    </div>
    
    <a-drawer
      placement="left"
      :closable="false"
      @close="onClose"
      :visible="visible"
      bodyStyle="background-color: #635b5b;height: 100%; color: white;font-size: 3rem;"
      width="300"
    >
    <div>
      <span>Massist</span>
    </div>
    <div>
      <span>Features</span>
    </div>
    <div>
      <span>Support</span>
    </div>
    <div>
      <span>About us</span>
    </div>
    </a-drawer>
    <Header id="Header" class="fixed" />
    <Content id="Content" class="CAbsolute" />
    <Footer id="Footer" class="FAbsolute" />
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
    return {
      visible: false
    };
  },
  created() {},
  components: {
    Header,
    Content,
    Footer
  },
  methods: {
    showDrawer() {
      this.visible = true;
    },
    onClose() {
      this.visible = false;
    }
  }
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
  z-index: 4;
  top: 30px;
  left: 30px;
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
