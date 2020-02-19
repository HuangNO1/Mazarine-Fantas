<template>
  <div id="Footer">
    <div style="width: 50%; height: 50%;">
      <div style="font-size: 4rem;color: #ffffff;">
        <a-icon type="book" />
      </div>
      <div style="font-size: 4rem;color: #c9c9c9;">
        Welcome to Massist.
      </div>
      <div style="margin-top: 5rem;">
        <a-button type="primary" @click="toLogin" size="large" ghost
          >START</a-button
        >
      </div>
      <div style="margin-top: 5rem;">
        Massist ©2020 Created by Mazarine-Fantas
      </div>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {};
  },
  created() {},
  mounted() {},
  methods: {
    toLogin() {
      document.location.href = "/login_pc#/Login";
    }
  }
};
</script>
<style>
#Footer {
  background: #525252;
  height: 100%;
  width: 100%;
  text-align: center;
  display: flex;
  align-items: center;
  justify-content: center;
}
</style>
