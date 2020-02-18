<template>
  <div id="app">
    <vue-scroll-progress-bar @complete="handleComplete" height="0.3rem" />
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
      <div @click="clickMenu">
        <a href="#app" v-smooth-scroll="{ duration: 1000 }">
          <span class="Menu"><a-icon type="book" /> Massist</span>
        </a>
      </div>
      <div @click="clickMenu">
        <a href="#Features" v-smooth-scroll="{ duration: 1000 }">
          <span><a-icon type="pie-chart" /> Features</span>
        </a>
      </div>
      <div @click="clickMenu">
        <a href="#Support" v-smooth-scroll="{ duration: 1000 }">
          <span><a-icon type="code" /> Support</span>
        </a>
      </div>
      <div @click="clickMenu">
        <a href="#About" v-smooth-scroll="{ duration: 1000 }">
          <span><a-icon type="team" /> About us</span>
        </a>
      </div>
      <div @click="clickMenu">
        <span>
          <a href="https://github.com/HuangNO1/Mazarine-Fantas">
            <a-icon type="github" /> Github
          </a>
        </span>
      </div>
    </a-drawer>
    <div id="Start">
      <a-button type="danger" @click="toLogin" size="large" ghost>
        START
      </a-button>
    </div>
    <div class="Down">
      <div>
        <a href="#Features" v-smooth-scroll="{ duration: 2000 }"
          ><a-icon type="down"
        /></a>
      </div>
    </div>

    <!-- Page -->
    <Header id="Header" class="fixed" />
    <Features id="Features" />
    <Support id="Support" />
    <About id="About" />
    <Footer id="Footer" />
  </div>
</template>

<script>
import Header from "./components/Header.vue";
import Features from "./components/Features.vue";
import Support from "./components/Support.vue";
import About from "./components/About";
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
    Features,
    Support,
    About,
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
    clickMenu() {
      this.visible = false;
    },
    toLogin() {
      document.location.href = "/login_pc#/Login";
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
  height: 500%;
}

a:link,
a:visited {
  color: white;
  text-decoration: none;
}

a:hover,
a:active {
  color: white;
  text-decoration: none;
}

#Nav {
  position: fixed;
  z-index: 4;
  top: 30px;
  left: 30px;
}
#Start {
  width: 100%;
  position: fixed;
  margin: auto;
  display: flex;
  justify-content: center;
  z-index: 0;
  bottom: 15rem;
}
.Down {
  position: absolute;
  width: 100%;
  justify-content: center;
  font-size: 3rem;
  bottom: 2rem;
  color: black;
  animation: DownFloat 0.6s infinite alternate; /*IE*/
  -moz-animation: DownFloat 0.6s infinite alternate; /*FireFox*/
  -webkit-animation: DownFloat 0.6s infinite alternate; /*Chrome, Safari*/
}

.Down > div {
  width: 64px;
  margin: auto;
  display: flex;
  justify-content: center;
}

@keyframes DownFloat {
  from {
    bottom: 2rem;
    font-size: 3rem;
  }
  to {
    bottom: 0.5rem;
    font-size: 3.5rem;
  }
}
@-moz-keyframes DownFloat {
  from {
    bottom: 2rem;
    font-size: 3rem;
  }
  to {
    bottom: 0.5rem;
    font-size: 3.5rem;
  }
}
@-webkit-keyframes DownFloat {
  from {
    bottom: 2rem;
    font-size: 3rem;
  }
  to {
    bottom: 0.5rem;
    font-size: 3.5rem;
  }
}

.fixed {
  position: fixed;
  z-index: -2;
}

#Features {
  position: absolute;
  top: 100%;
  border-bottom: 1px dashed #d1d1d1;
}

#Support {
  position: absolute;
  top: 200%;
  border-bottom: 1px dashed #d1d1d1;
}

#About {
  position: absolute;
  top: 300%;
  border-bottom: 1px dashed #d1d1d1;
}

#Footer {
  position: absolute;
  top: 400%;
}
</style>
