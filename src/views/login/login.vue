<template>
    <div class="main" :style="{backgroundImage:bg}">
        <div class="container">
            <div class="logo">
                <img src="@/assets/logo.png" alt="">
            </div>
            <template v-if="type == 1">
                <div class="flex tab" >
                    <div :class="['type', {active: tab == 1}]" @click="tab = 1">登录</div>
                    <div :class="['type', {active: tab == 2}]"  @click="tab = 2">注册</div>
                </div>
                <el-form ref="loginForm" key="login" :model="loginForm" :rules="loginRules" class="form"  v-if="tab == 1">
                    <el-form-item prop="username">
                        <div class="flex">
                            <div class="txt">账号</div>
                            <el-input v-model="loginForm.username" name="username" placeholder="请输入账号名" />
                        </div>
                    </el-form-item>
                    <el-form-item prop="password">
                        <div class="flex">
                            <div class="txt">密码</div>
                            <el-input type="password" v-model="loginForm.password" name="password" placeholder="请输入密码" @keyup.enter.native="handleLogin" />
                        </div>
                    </el-form-item>
                    <el-form-item>
                        <el-button :loading="loading" @click.native.prevent="handleLogin">
                            立即登录
                        </el-button>
                    </el-form-item>
                </el-form>
                <el-form ref="registerForm" key="register" :model="registerForm" :rules="registerRules" class="form"  v-if="tab == 2">
                    <el-form-item prop="username">
                        <div class="flex">
                            <div class="txt">账号</div>
                            <el-input v-model="registerForm.username" placeholder="请输入账号名" />
                        </div>
                    </el-form-item>
                    <el-form-item prop="password">
                        <div class="flex">
                            <div class="txt">密码</div>
                            <el-input type="password" v-model="registerForm.password" placeholder="请输入密码" />
                        </div>
                    </el-form-item>
                    <el-form-item prop="mobile">
                        <div class="flex">
                            <div class="txt">手机号</div>
                            <el-input v-model="registerForm.mobile" placeholder="请输入手机号" />
                        </div>
                    </el-form-item>
                    <el-form-item prop="code">
                        <div class="flex">
                            <div class="txt">验证码</div>
                            <el-input v-model="registerForm.code" placeholder="请输入验证码" @keyup.enter.native="next" />
                            <div :class="['send',{no: send}]" @click="sendCode">{{tip}}</div>
                        </div>
                    </el-form-item>
                    <el-form-item>
                        <el-button @click.native.prevent="next">
                            下一步
                        </el-button>
                    </el-form-item>
                </el-form>
            </template>
            <template v-else>
                <div class="tab active" >完善个人信息</div>
                <el-form ref="infoForm" :model="infoForm" :rules="infoRules" class="form" key="info" >
                    <el-form-item prop="name">
                        <div class="flex">
                            <div class="txt">姓名</div>
                            <el-input v-model="infoForm.name" placeholder="请输入账号名" />
                        </div>
                    </el-form-item>
                    <el-form-item >
                        <div class="flex">
                            <div class="txt">性别</div>
                            <el-radio-group v-model="infoForm.gender">
                                <el-radio label="男">男</el-radio>
                                <el-radio label="女">女</el-radio>
                            </el-radio-group>  
                        </div>
                    </el-form-item>
                    <el-form-item prop="company">
                        <div class="flex">
                            <div class="txt">公司</div>
                            <el-input v-model="infoForm.company" name="company" placeholder="请输入公司" />
                        </div>
                    </el-form-item>
                    <el-form-item prop="department">
                        <div class="flex">
                            <div class="txt">部门</div>
                            <el-input v-model="infoForm.department" placeholder="请输入部门" />
                        </div>
                    </el-form-item>
                    <el-form-item prop="no">
                        <div class="flex">
                            <div class="txt">员工编号</div>
                            <el-input v-model="infoForm.no" placeholder="请输入员工编号" @keyup.enter.native="register" />
                        </div>
                    </el-form-item>
                    <el-form-item>
                        <el-button :loading="loading" @click.native.prevent="register">
                            提交
                        </el-button>
                    </el-form-item>
                </el-form>
            </template>
        </div>
    </div>
</template>

<script>
import { validateMobile } from "@/utils/validate";
import { sendCode, sign } from '@/api/login'
export default {
  data () {
    const validateUsername = (rule, value, callback) => {
      if (value.length < 2 || value.length > 5) {
        callback(new Error("账号长度在2到5之间"));
      } else {
        callback();
      }
    };
    const validatePass = (rule, value, callback) => {
      if (value.length < 5 || value.length > 16) {
        callback(new Error("密码长度在5到16之间"));
      } else {
        callback();
      }
    };
    const validatetel = (rule, value, callback) => {
        console.log(value)
      if ( !validateMobile(value)) {
        callback(new Error("请输入正确的手机号"));
      } else {
        callback();
      }
    };
    return {
        bg: "url("+require('@/assets/bg.png')+")",
        type: 1,
        tab: 1,
        loginForm: {
            username: "",
            password: ""
        },
        loginRules: {
            username: [{ required: true, trigger: "blur", validator: validateUsername }],
            password: [{ required: true, trigger: "blur", validator: validatePass }]
        },
        registerForm: {
            username: '',
            password: '',
            mobile: '',
            code: ''
        },
        registerRules: {
            username: [{ required: true, trigger: "blur", validator: validateUsername }],
            password: [{ required: true, trigger: "blur", validator: validatePass }],
            mobile:   [{ required: true, trigger: "blur", validator: validatetel }],
            code:     [{ required: true, trigger: "blur", message: '请输入验证码' }]
        },
        infoForm: {
            name: '',
            gender: '男',
            company: '',
            department: '',
            no: ''
        },
        infoRules: {
            name: [{ required: true, trigger: "blur", validator: validateUsername }],
            company: [{ required: true, trigger: "blur", message: '请输入公司' }],
            department: [{ required: true, trigger: "blur", message: '请输入部门' }],
            no: [{ required: true, trigger: "blur", message: '请输入员工编号' }]
        },
        loading: false,
        time: 20,
        send: false
    }
  },

  components: {},

  computed: {
    tip: function() {
        return this.send ?  '正在发送中 ' + this.time + ' s' : '发送验证码';
    }
  },

  mounted: function() {},

  methods: {
    //登录
    handleLogin() {
      this.$refs.loginForm.validate(valid => {
        if (valid) {
          this.loading = true;
          this.$store.dispatch('Login', this.loginForm).then(() => {
            this.loading = false
            this.$router.push({ path: '/' })
          }).catch(() => {
            this.loading = false
          })
        } else {
          console.log('error submit!!')
          return false
        }
      })
    },
    //发送验证码
    sendCode() {
        let mobile = this.registerForm.mobile;
        if (!validateMobile(mobile)) {
            this.$message.error('手机号格式不正确');
            return;
        }
        this.send = true;
        sendCode(mobile)
        let timer = setInterval(() => {
            if(this.time > 1){
                this.time--;
            }else {
                clearInterval(timer);
                this.send = false;
                this.time = 10;
            }
        },1000)

    },
    //下一步
    next() {
        this.$refs.registerForm.validate(valid => {
            if (valid) {
                this.type = 2;
                console.log(this.registerForm)
            } else {
            console.log('error submit!!')
            return false
            }
        })
    },
    //注册
    register() {
        this.$refs.infoForm.validate(valid => {
            if (valid) {
                this.loading = true;
                sign({...this.registerForm, ...this.infoForm}).then(res => {
                    this.loading = false
                    this.$message({
                        message: '提交成功',
                        type: 'success'
                    });
                    this.type = 1;
                    this.registerForm = {
                        username: '',
                        password: '',
                        mobile: '',
                        code: ''
                    }
                    this.infoForm = {
                        name: '',
                        gender: '男',
                        company: '',
                        department: '',
                        no: ''
                    }
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
}
</script>

<style lang='scss' scoped>
.main {
    height: 100%;
    background-repeat: no-repeat;
    background-size: cover;
    background-position: center; 
    .container {
        width: 640px;
        min-height: 460px;
        background-color: #fff;
        position: fixed;
        left: 50%;
        top: 50%;
        transform: translate(-50%, -50%);
        background: rgba(255,255,255,0.7);
        border: 1px solid #30b8e2;
        border-radius: 6px;
        box-sizing: border-box;
        .logo {
            margin: 70px 0 0;
            img {
                display: block;
                margin: auto;
                width: 200px;
                height: 30px;
            }
        }
        .tab {
            width: 360px;
            margin: 20px auto;
            text-align: center;
            color: #fff;
            line-height: 30px;
            background: #ccc;
            cursor: pointer;
            .type {
                flex: 1;
                &.active {
                    background: var(--active);
                }
            }
            &.active {
                background: var(--active);
            }
        }
        .form {
            width: 360px;
            margin: auto;
            .flex {
                border-bottom: 1px solid var(--active);
                padding: 0 4px;
                align-items: center;
                .txt {
                    width: 100px;
                }
                .send {
                    width: 160px;
                    margin-left: 10px;
                    color: #30b8e2;
                    font-size: 12px;
                    text-align: right;
                    cursor: pointer;
                    &.no {
                        cursor: not-allowed;
                        color: #999;
                    }
                }
            }
        }
    }
}
</style>
<style lang="scss">
.el-input input {
    background: transparent;
    border: none;
    text-align: right;
    padding: 0;
    color: #333;
}
.el-button {
    width: 100%;
    background: var(--active) !important;
    color: #fff !important;
    border: none;
}
.el-form-item__error {
    top: 10px;
    left: 100%;
    width: 200px;
}
.el-form-item {
    // margin-bottom: 0;
    // line-height: 36px;
    // padding-top: 10px;
}
</style>
