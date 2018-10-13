<template>
  <div class="container">
    <el-form ref="form" :model="loginForm" :rules="loginRules" auto-complete="on" class="form" label-position="left">
      <h3 class="title">后台管理系统</h3>
      <el-form-item prop="username">
        <span class="svg-container svg-container_login">
          <svg-icon icon-class="user" />
        </span>
        <el-input v-model="loginForm.username" name="username" type="text" auto-complete="on" placeholder="username" />
      </el-form-item>
      <el-form-item prop="password">
        <span class="svg-container">
          <svg-icon icon-class="password" />
        </span>
        <el-input
          :type="pwdType"
          v-model="loginForm.password"
          name="password"
          placeholder="password"
          @keyup.enter.native="handleLogin" />
        <span class="show-pwd" @click="showPwd">
          <svg-icon icon-class="eye" />
        </span>
      </el-form-item>
      <el-form-item>
        <el-button :loading="loading" type="primary" style="width:100%;" @click.native.prevent="handleLogin">
          登录
        </el-button>
      </el-form-item>
    </el-form>
  </div>
</template>

<script>
import { login, sendCode, sign, updateInfo, getInfo } from '@/api/login'
import { isvalidUsername } from "@/utils/validate";
export default {
  data() {
    const validateUsername = (rule, value, callback) => {
      if (!isvalidUsername(value)) {
        callback(new Error("请输入正确的用户名"));
      } else {
        callback();
      }
    };
    const validatePass = (rule, value, callback) => {
      if (value.length < 5) {
        callback(new Error("密码不能小于5位"));
      } else {
        callback();
      }
    };
    return {
      loginForm: {
        username: "admin",
        password: "admin"
      },
      loginRules: {
        username: [{ required: true, trigger: "blur", validator: validateUsername }],
        password: [{ required: true, trigger: "blur", validator: validatePass }]
      },
      loading: false,
      pwdType: "password"
    };
  },

  components: {},

  computed: {},

  mounted: function() {
    // sign({
    //   username: 'tian1',
    //   password: 'tian',
    //   mobile: '13277039497',
    //   code: '11111'
    // })
  },

  methods: {
    showPwd() {
      if (this.pwdType === 'password') {
        this.pwdType = ''
      } else {
        this.pwdType = 'password'
      }
    },
    handleLogin() {
      this.$refs.form.validate(valid => {
        if (valid) {
          this.loading = true
          this.$store.dispatch('Login', this.loginForm).then(() => {
            this.loading = false
            // this.$router.push({ path: '/' })
          }).catch(() => {
            this.loading = false
          })
        } else {
          console.log('error submit!!')
          return false
        }
      })
    }
  }
};
</script>

<style lang='scss' scoped>
// .container {
//   position: fixed;
//   width: 100%;
//   height: 100%;
//   background: var(--bg);
//   user-select: none;
//   .form {
//     position: absolute;
//     left: 0;
//     right: 0;
//     width: 520px;
//     max-width: 90%;
//     margin: auto;
//     top: 20%;
//     .title {
//       font-size: 30px;
//       font-weight: bold;
//       color: white;
//       margin: 40px auto;
//       text-align: center;
//       letter-spacing: 4px;
//     }
//     .el-form-item {
//       border: 1px solid rgba(255, 255, 255, 0.1);
//       background: rgba(0, 0, 0, 0.1);
//       border-radius: 5px;
//       color: #454545;
//       .svg-container {
//         padding: 6px 0px 6px 15px;
//         color: var(--dark_gray);
//         vertical-align: middle;
//         width: 30px;
//         display: inline-block;
//         &_login {
//           font-size: 20px;
//         }
//       }
//       .show-pwd {
//         position: absolute;
//         right: 10px;
//         top: 7px;
//         font-size: 16px;
//         color: var(--dark_gray);
//         cursor: pointer;
//       }
//     }
//   }
// }
</style>
<style lang='scss'>
// .el-input {
//   width: 85%;
//   width: calc(100% - 56px);
//   input {
//     background: transparent;
//     border: 0px;
//     border-radius: 0px;
//     padding: 12px 35px 12px 10px;
//     color: var(--light_gray);
//     height: 47px;
//   }
// }
</style>
