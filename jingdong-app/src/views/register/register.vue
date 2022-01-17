<template>
  <div class="register">
    <img src="src\assets\医药健康@2x.png" class="img" />
    <div class="input">
      <input
        class="content"
        type="number"
        placeholder="请输入手机号"
        v-model="phoneNumber"
      />
    </div>
    <div class="input">
      <input
        class="content"
        type="password"
        placeholder="请输密码"
        autocomplete="new-password"
        v-model="password"
      />
    </div>
    <div class="input">
      <input
        class="content"
        type="password"
        placeholder="确认密码"
        autocomplete="new-password"
        v-model="confirmPassword"
      />
    </div>
    <div class="register-button" @click="handleRegister">注册</div>
    <div class="register-link" @click="handleLink">已有账号去登录</div>
  </div>
  <Toast v-if="show" :message="toastMessage" />
</template>

<script>
import { useRouter } from "vue-router";
import { reactive, toRefs } from "vue";
import { post } from "../../utils/request";
import Toast, { useShowToastEffect } from "../../components/Toast.vue";

const useRegisterEffect = function (showToast) {
  const router = new useRouter();
  let data = reactive({
    phoneNumber: "",
    password: "",
    confirmPassword: "",
  });
  const { phoneNumber, password, confirmPassword } = toRefs(data);
  async function handleRegister() {
    try {
      const result = await post("api/user/register", {
        phoneNumber: phoneNumber.value,
        password: password.value,
      });
      if (result.data.errno === 0) {
        router.push({ name: "Login" });
      } else {
        showToast("注册失败");
      }
    } catch (e) {
      showToast("账号不存在");
    }
  }
  return { phoneNumber, password, confirmPassword, handleRegister };
};

export default {
  components: {
    Toast,
  },
  name: "Register",
  setup() {
    const router = new useRouter();
    const { show, toastMessage, showToast } = useShowToastEffect();
    const { phoneNumber, password, confirmPassword, handleRegister } =
      useRegisterEffect(showToast);
    function handleLink() {
      router.push({ name: "Login" });
    }

    return {
      phoneNumber,
      password,
      confirmPassword,
      handleLink,
      handleRegister,
      showToast,
      toastMessage,
      show,
    };
  },
};
</script>

<style lang='scss' scoped>
.register {
  position: absolute;
  top: 50%;
  left: 0;
  right: 0;
  // margin-top: -50%;
  transform: translateY(-50%);
  .img {
    width: 0.66rem;
    height: 0.66rem;
    margin: 0 1.54rem 0.4rem 1.55rem;
  }
  .input {
    width: 2.95rem;
    height: 0.48rem;
    background: #f9f9f9;
    border: 1px solid rgba(0, 0, 0, 0.1);
    border-radius: 6px;
    border-radius: 6px;
    margin: 0 0.4rem 0.16rem 0.4rem;
    .content {
      width: 100%;
      font-size: 16px;
      color: rgba(0, 0, 0, 0.5);
      letter-spacing: 0;
      line-height: 24px;
      border: none;
      outline: none;
      background: none;
      margin: 0.12rem 0 0.12rem 0.16rem;
      &::placeholder {
        color: rgba(0, 0, 0, 0.5);
      }
    }
  }
  .register-button {
    width: 2.95rem;
    line-height: 0.48rem;
    background: #0091ff;
    box-shadow: 0 4px 8px 0 rgba(0, 145, 255, 0.32);
    border-radius: 4px;
    border-radius: 4px;
    text-align: center;
    font-size: 16px;
    color: #ffffff;
    letter-spacing: 0;
    text-align: center;
    margin: 0.32rem 0.4rem 0.16rem 0.4rem;
  }
  .register-link {
    width: 0.98rem;
    line-height: 0.2rem;
    font-size: 14px;
    color: rgba(0, 0, 0, 0.5);
    letter-spacing: 0;
    margin: 0 1.38rem 0 1.39rem;
  }
}
</style>