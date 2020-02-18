<template>
  <div id="app">
    <a-layout id="components-layout-demo-custom-trigger">
      <a-layout-sider :trigger="null" collapsible v-model="collapsed">
        <div class="logo" />
        <a-menu theme="dark" mode="inline" selectedKeys="[this.$route.path]">
          <a-menu-item key="/Home">
            <router-link to="/Home">
              <a-icon type="desktop" />
              <span>Home</span>
            </router-link>
          </a-menu-item>
          <a-menu-item key="/Home">
            <router-link to="/Home">
              <a-icon type="snippets" />
              <span>Topic</span>
            </router-link>
          </a-menu-item>
          <a-menu-item key="/Home">
            <router-link to="/Home">
              <a-icon type="team" />
              <span>Teacher</span>
            </router-link>
          </a-menu-item>
          <a-menu-item key="/Home">
            <router-link to="/Home">
              <a-icon type="user" />
              <span>User</span>
            </router-link>
          </a-menu-item>
          <a-menu-item key="/Setting">
            <router-link to="/Setting">
              <a-icon type="setting" />
              <span>Settings</span>
            </router-link>
          </a-menu-item>
          <a-menu-item key="/Write">
            <router-link to="/Write">
              <a-icon type="edit" />
              <span>Writing</span>
            </router-link>
          </a-menu-item>
          <a-menu-item key="Github">
            <a href="https://github.com/HuangNO1/Mazarine-Fantas">
              <a-icon type="github" />
              <span>Github</span>
            </a>
          </a-menu-item>
        </a-menu>
      </a-layout-sider>
      <a-layout>
        <a-layout-header
          style="background: #fff; padding: 0; margin: 1rem; border-radius: 10px;"
        >
          <a-icon
            class="trigger"
            :type="collapsed ? 'menu-unfold' : 'menu-fold'"
            @click="() => (collapsed = !collapsed)"
          />
          <a-button type="primary" href="introduction_pc">Primary</a-button>
        </a-layout-header>
        <a-layout-content>
          <router-view></router-view>
        </a-layout-content>
        <a-layout-footer style="text-align: center;">
          Massist ©2020 Created by Mazarine-Fantas
        </a-layout-footer>
      </a-layout>
    </a-layout>
  </div>
</template>

<script>
export default {
  name: "App",
  data() {
    return {
      collapsed: false
    };
  },
  created() {},
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
  height: 100%;
}

#components-layout-demo-custom-trigger {
  height: 100%;
}

#components-layout-demo-custom-trigger .trigger {
  font-size: 18px;
  line-height: 64px;
  padding: 0 24px;
  cursor: pointer;
  transition: color 0.3s;
}

#components-layout-demo-custom-trigger .trigger:hover {
  color: #1890ff;
}

#components-layout-demo-custom-trigger .logo {
  height: 32px;
  background: rgba(255, 255, 255, 0.2);
  margin: 16px;
}
</style>
