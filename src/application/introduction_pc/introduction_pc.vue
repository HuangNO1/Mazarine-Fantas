<template>
  <div id="app">
    <!-- Menu -->
    <div id="Nav">
      <a-button
        type="primary"
        @click="showDrawer"
        size="large"
        icon="menu-unfold"
      >
        Menu
      </a-button>
    </div>
    <a-drawer
      placement="left"
      :closable="true"
      @close="onClose"
      :visible="visible"
      bodyStyle="background-color: #0ca5f7;height: 100%; color: white;font-size: 2rem;padding-top: 5rem;line-height: 4rem;"
      width="300"
    >
      <div>
        <span><a-icon type="book" /> Massist</span>
      </div>
      <div>
        <span><a-icon type="pie-chart" /> Features</span>
      </div>
      <div>
        <span><a-icon type="code" /> Support</span>
      </div>
      <div>
        <span><a-icon type="team" /> About us</span>
      </div>
      <div>
        <span><a-icon type="github" /> Github</span>
      </div>
    </a-drawer>

    <div class="Down">
      <div>
        <a href="#Content" v-smooth-scroll="{duration: 2000}"><a-icon type="down"/></a>
      </div>
    </div>

    <!-- Page -->
    <Header id="Header" class="fixed" />
    <Content id="Content" class="CAbsolute" />
    <Footer id="Footer" class="FAbsolute" />
  </div>
</template>

<script>
import Header from "./components/Header.vue";
import Content from "./components/Content.vue";
import Footer from "./components/Footer.vue";
import SmoothScroll from "smooth-scroll"

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
var scroll = new SmoothScroll('a[href*="#"]');
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
  mounted() {},
  methods: {
    showDrawer() {
      this.visible = true;
    },
    onClose() {
      this.visible = false;
    },
    goAnchor(val) {
      let anchor = this.$el.querySelector(val);
      this.$nextTick(() => {
        document.querySelector(".el-main").scrollTop = anchor.offsetTop;
      });
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
body {
  scroll-behavior: smooth;
}
#Nav {
  position: fixed;
  z-index: 4;
  top: 30px;
  left: 30px;
}

.Down {
  position: absolute;
  width: 100%;
  justify-content: center;
  font-size: 3rem;
  top: 90%;
}

.Down > div {
  width: 64px;
  margin: auto;
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
