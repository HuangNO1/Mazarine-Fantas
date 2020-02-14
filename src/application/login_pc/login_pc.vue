<template>
  <div id="app">
    <div class="icon">
      <a href="work_pc">M</a>
    </div>
    <div class="formPadding">
      <div class="forms">
        <a-row>
          <a-col :span="12">
            <div>
              <router-link to="/Login">
                <a-button
                  :type="isClickSignIn"
                  @click="ClickSignIn"
                  size="large"
                  block
                  >Sign In</a-button
                >
              </router-link>
            </div>
          </a-col>
          <a-col :span="12">
            <div>
              <router-link to="/Register">
                <a-button
                  :type="isClickSignUp"
                  @click="ClickSignUp"
                  size="large"
                  block
                  >Sign Up</a-button
                >
              </router-link>
            </div>
          </a-col>
        </a-row>
        <div class="view">
          <router-view></router-view>
        </div>
      </div>
    </div>
    <div class="flexBox">
      <div class="fontIcon">
        <img src="../../assets/icon/icon_blue.png" alt="" />
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "App",
  data() {
    return {
      isClickSignIn: "link",
      isClickSignUp: "primary"
    };
  },
  created() {},
  methods: {
    callback(key) {
      console.log(key);
    },
    ClickSignIn() {
      (this.isClickSignIn = "link"), (this.isClickSignUp = "primary");
    },
    ClickSignUp() {
      (this.isClickSignIn = "primary"), (this.isClickSignUp = "link");
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
  background: #78bef5;
  height: 100%;
  padding-bottom: 10%;
  animation: TestMove3 3s infinite alternate; /*IE*/
  -moz-animation: TestMove3 3s infinite alternate; /*FireFox*/
  -webkit-animation: TestMove3 3s infinite alternate; /*Chrome, Safari*/
}

@keyframes TestMove3 {
  from {
    background-color: #78bef5;
  }
  to {
    background-color: purple;
  }
}
@-moz-keyframes TestMove3 {
  from {
    background-color: #78bef5;
  }
  to {
    background-color: purple;
  }
}
@-webkit-keyframes TestMove3 {
  from {
    background-color: #78bef5;
  }
  to {
    background-color: purple;
  }
}

.icon {
  font-size: 8rem;
  color: #46a6f0;
  margin-left: 1.5rem;
  position: fixed;
}

.formPadding {
  padding-top: 10rem;
}

.forms {
  margin: auto auto 3rem;
  width: 35rem;
  background-color: #ffffff;
  opacity: 80%;
  border-radius: 1em;
}

.view {
  width: 25rem;
  margin: 3rem auto auto;
  padding-bottom: 3rem;
}

.flexBox {
  width: 100%;
  display: flex;
  justify-content: center;
  position: fixed;
  buttom: 1rem;
}

.fontIcon {
  width: 570px;
}
</style>
