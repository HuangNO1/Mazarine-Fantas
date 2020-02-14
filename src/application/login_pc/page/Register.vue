<template>
  <a-form :form="form" @submit="handleSubmit">
    <a-form-item v-bind="formItemLayout" label="Username">
      <a-input
        v-decorator="[
          'userName',
          {
            rules: [{ required: true, message: 'Please input your username!' }]
          }
        ]"
      >
      </a-input>
    </a-form-item>
    <a-form-item v-bind="formItemLayout" label="E-mail">
      <a-input
        v-decorator="[
          'email',
          {
            rules: [
              {
                type: 'email',
                message: 'The input is not valid E-mail!'
              },
              {
                required: true,
                message: 'Please input your E-mail!'
              }
            ]
          }
        ]"
      />
    </a-form-item>
    <a-form-item v-bind="formItemLayout" label="Password">
      <a-input
        v-decorator="[
          'password',
          {
            rules: [
              {
                required: true,
                message: 'Please input your password!'
              },
              {
                validator: validateToNextPassword
              }
            ]
          }
        ]"
        type="password"
      />
    </a-form-item>
    <a-form-item v-bind="formItemLayout" label="Confirm Password">
      <a-input
        v-decorator="[
          'confirm',
          {
            rules: [
              {
                required: true,
                message: 'Please confirm your password!'
              },
              {
                validator: compareToFirstPassword
              }
            ]
          }
        ]"
        type="password"
        @blur="handleConfirmBlur"
      />
    </a-form-item>
    <a-form-item v-bind="tailFormItemLayout">
      <a-checkbox v-decorator="['agreement', { valuePropName: 'checked' }]">
        I have read the
        <a href="">
          agreement
        </a>
      </a-checkbox>
    </a-form-item>
    <a-form-item v-bind="tailFormItemLayout">
      <a-button type="primary" html-type="submit" @click="showModal">
        Sign up
      </a-button>
    </a-form-item>
    <!--驗證碼彈出框-->
    <a-modal
      title="Verification"
      centered
      :visible="visible"
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
export default {
  data() {
    return {
      confirmDirty: false,
      autoCompleteResult: [],
      formItemLayout: {
        labelCol: {
          xs: { span: 24 },
          sm: { span: 8 }
        },
        wrapperCol: {
          xs: { span: 24 },
          sm: { span: 16 }
        }
      },
      tailFormItemLayout: {
        wrapperCol: {
          xs: {
            span: 24,
            offset: 0
          },
          sm: {
            span: 16,
            offset: 8
          }
        }
      },
      visible: false,
      confirmLoading: false,
      msg: "",
      verSeccuss: false
    };
  },
  beforeCreate() {
    this.form = this.$form.createForm(this, { name: "register" });
  },
  methods: {
    handleSubmit(e) {
      e.preventDefault();
      this.form.validateFieldsAndScroll((err, values) => {
        if (!err) {
          console.log("Received values of form: ", values);
        }
      });
    },
    handleConfirmBlur(e) {
      const value = e.target.value;
      this.confirmDirty = this.confirmDirty || !!value;
    },
    compareToFirstPassword(rule, value, callback) {
      const form = this.form;
      if (value && value !== form.getFieldValue("password")) {
        callback("Two passwords that you enter is inconsistent!");
      } else {
        callback();
      }
    },
    validateToNextPassword(rule, value, callback) {
      const form = this.form;
      if (value && this.confirmDirty) {
        form.validateFields(["confirm"], { force: true });
      }
      callback();
    },
    handleWebsiteChange(value) {
      let autoCompleteResult;
      if (!value) {
        autoCompleteResult = [];
      } else {
        autoCompleteResult = [".com", ".org", ".net"].map(
          domain => `${value}${domain}`
        );
      }
      this.autoCompleteResult = autoCompleteResult;
    },
    showModal() {
      this.visible = true;
    },
    handleCancel() {
      this.visible = false;
    },
    onSuccess() {
      this.msg = "Success";
      this.verSeccuss = true;
      setTimeout(() => {
        this.visible = false;
        this.verSeccuss = false;
        document.location.href = "/login_pc#/Login";
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
