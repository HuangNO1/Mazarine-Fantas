<template>
  <div id="app">
    <button type="button" class="btn btn-primary">Primary</button>
    <button type="button" class="btn btn-secondary">Secondary</button>
    <button type="button" class="btn btn-success">Success</button>
    <button type="button" class="btn btn-danger">Danger</button>
    <button type="button" class="btn btn-warning">Warning</button>
    <button type="button" class="btn btn-info">Info</button>
    <button type="button" class="btn btn-light">Light</button>
    <button type="button" class="btn btn-dark">Dark</button>

    <button type="button" class="btn btn-link">Link</button>
    <router-view></router-view>
  </div>
</template>

<script>
//import HelloWorld from './components/HelloWorld.vue'

export default {
  name: "App",
  data() {
    return {
      collapsed: false,
      selectedKeys: "/Home"
    };
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
  height: 100%;
}
</style>
