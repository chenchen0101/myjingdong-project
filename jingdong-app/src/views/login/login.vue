<template>
  <div class="body">
    <img src="src\assets\医药健康@2x.png" class="img" />
    <div class="body__input">
      <input class="content" placeholder="请输入账户名" v-model="username" />
    </div>
    <div class="body__input">
      <input
        type="password"
        class="content"
        placeholder="请输入密码"
        v-model="password"
        autocomplete="new-password"
      />
    </div>
    <div class="login-button" @click="handleLogin">登录</div>
    <div class="login-link" @click="handleToRegister">立即注册 | 忘记密码</div>
  </div>
  <Toast v-if="show" :message="toastMessage" />
</template>

<script>
// 返回 router 实例。相当于在模板中使用 $router。必须在 setup() 中调用。
import { useRouter } from "vue-router";
import { reactive, toRefs } from "vue";
import { post } from "../../utils/request";
import Toast, { useShowToastEffect } from "../../components/Toast.vue";

//与登录相关
const useLoginEffect = (showToast) => {
  const router = new useRouter();
  // 登录数据
  let data = reactive({
    username: "",
    password: "",
  });

  //将username,password从data中解构出来
  const { username, password } = toRefs(data);
  // 点击登录处理程序
  async function handleLogin() {
    try {
      //定义一个result用来接收post函数返回的结果()
      //await是要等post函数里返回的promise执行完毕，拿到result作为结果继续往下执行
      const result = await post("/api/user/login", {
        username: username.value,
        password: password.value,
      });
      if (result.data.errno === 0) {
        localStorage.isLogin = true;
        router.push({ name: "Home" });
      } else {
        showToast("登录失败");
      }
    } catch (e) {
      showToast("请求失败");
    }
  }
  return { username, password, handleLogin };
};

//与注册相关
const useRegisterEffect = function () {
  const router = new useRouter();
  // 点击注册跳转
  function handleToRegister() {
    router.push({ name: "Register" });
  }
  return { handleToRegister };
};
export default {
  components: {
    Toast,
  },
  //setup职责:代码执行流程
  setup() {
    // 提示组件
    const { showToast, toastMessage, show } = useShowToastEffect();
    const { username, password, handleLogin } = useLoginEffect(showToast);
    const { handleToRegister } = useRegisterEffect();

    return {
      username,
      password,
      showToast,
      toastMessage,
      show,
      handleToRegister,
      handleLogin,
    };
  },
};
</script>  


<style lang='scss' scoped>
.body {
  position: absolute;
  top: 50%;
  left: 0;
  right: 0;
  transform: translateY(-50%);
  .img {
    display: block;
    width: 0.66rem;
    height: 0.66rem;
    margin: 0 auto 0.4rem auto;
  }
  &__input {
    width: 2.95rem;
    height: 0.48rem;
    margin: 0 0.4rem 0.16rem 0.4rem;
    background: #f9f9f9;
    border: 1px solid rgba(0, 0, 0, 0.1);
    border-radius: 6px;
    border-radius: 6px;
    .content {
      line-height: 0.24rem;
      width: 100%;
      border: none;
      outline: none;
      background: none;
      font-size: 0.16rem;
      color: rgba(0, 0, 0, 0.5);
      margin: 0.12rem 0 0.12rem 0.16rem;
      &::placeholder {
        color: rgba(0, 0, 0, 0.5);
      }
    }
  }
  .login-button {
    margin: 0.32rem 0.4rem 0.16rem 0.4rem;
    width: 2.95rem;
    line-height: 0.48rem;
    background: #0091ff;
    box-shadow: 0 4px 8px 0 rgba(0, 145, 255, 0.32);
    border-radius: 0.04rem;
    border-radius: 0.04rem;
    font-size: 0.16rem;
    text-align: center;
    color: #fff;
  }
  .login-link {
    text-align: center;
    font-size: 0.14rem;
    color: rgba(0, 0, 0, 0.5);
  }
}
</style>