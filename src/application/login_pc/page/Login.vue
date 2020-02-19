<template>
  <a-form
    id="components-form-demo-normal-login"
    :form="form"
    class="login-form"
    @submit="handleSubmit"
  >
    <a-form-item>
      <a-input
        v-decorator="[
          'userName',
          {
            rules: [{ required: true, message: 'Please input your username!' }]
          }
        ]"
        placeholder="Username"
      >
        <a-icon slot="prefix" type="user" style="color: rgba(0,0,0,.25)" />
      </a-input>
    </a-form-item>
    <a-form-item>
      <a-input
        v-decorator="[
          'password',
          {
            rules: [{ required: true, message: 'Please input your Password!' }]
          }
        ]"
        type="password"
        placeholder="Password"
      >
        <a-icon slot="prefix" type="lock" style="color: rgba(0,0,0,.25)" />
      </a-input>
    </a-form-item>
    <a-form-item>
      <a-checkbox
        v-decorator="[
          'remember',
          {
            valuePropName: 'checked',
            initialValue: true
          }
        ]"
      >
        Remember me
      </a-checkbox>
      <a class="login-form-forgot" href="">
        Forgot password
      </a>
      <a-button
        type="primary"
        html-type="submit"
        @click="showModal"
        class="login-form-button"
      >
        Sign in
      </a-button>
    </a-form-item>
    <a-button
      type="link"
      class="login-form-button"
      href="login_pc#/Register"
    >
      Sign up
    </a-button>
    <!--驗證碼彈出框-->
    <a-modal
      title="Verification"
      :visible="visible"
      centered
      closable="false"
      @cancel="handleCancel"
    >
      <template slot="footer">
        <div
          class="slideSuccess slider"
          :class="[verSeccuss ? 'visible' : 'invisible']"
        >
          <div><a-icon type="loading" /> {{ msg }}</div>
        </div>
      </template>
      <div class="slider">
        <slide-verify
          :l="42"
          :r="10"
          :w="310"
          :h="155"
          slider-text="Swipe right"
          @success="onSuccess"
          @fail="onFail"
          @refresh="onRefresh"
        ></slide-verify>
      </div>
    </a-modal>
  </a-form>
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
      visible: false,
      confirmLoading: false,
      msg: "",
      verSeccuss: false
    };
  },
  beforeCreate() {
    this.form = this.$form.createForm(this, { name: "normal_login" });
  },
  created() {
    // this.$router.push({ path: "/Login" ,replace: true});
    console.log("isPC");
    if (isPC() === true) {
      console.log("isPC = true");
    } else {
      document.location.href = "/login_mobile";
      console.log("isPC = false");
    }
  },
  methods: {
    handleSubmit(e) {
      e.preventDefault();
      this.form.validateFields((err, values) => {
        if (!err) {
          console.log("Received values of form: ", values);
        }
      });
    },
    handleCancel() {
      this.visible = false;
    },
    showModal() {
      this.visible = true;
    },
    onSuccess() {
      this.msg = "Success";
      this.verSeccuss = true;
      setTimeout(() => {
        this.visible = false;
        this.verSeccuss = false;
        document.location.href = "/work_pc#/Home";
      }, 1000);
    },
    onFail() {
      this.msg = "";
    },
    onRefresh() {
      this.msg = "";
    }
  }
};
</script>
<style>
#components-form-demo-normal-login .login-form {
  max-width: 300px;
}
#components-form-demo-normal-login .login-form-forgot {
  float: right;
}
#components-form-demo-normal-login .login-form-button {
  width: 100%;
}

.slider {
  display: flex;
  justify-content: center;
  margin-buttom: 1rem;
}

.slideSuccess {
  text-align: center;
  color: green;
  font-size: 1.3rem;
}

.visible {
  display: inline;
}

.invisible {
  display: none;
}
</style>
