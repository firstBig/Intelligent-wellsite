<template>
  <div class='main'>
    <h1>LOGO<span>智慧井场</span></h1>
    <h2>完善个人信息</h2>
    <el-form ref="form" :model="loginForm" :rules="loginRules" >
      <el-form-item class="inputbox" prop="name">
        <p>姓名</p>
        <div class="inputwap">
          <el-input class="textput" type="text" v-model="loginForm.name" placeholder="请输入您的姓名" />
        </div>
      </el-form-item>
      <el-form-item class="inputbox">
        <p>性别</p>
        <div class="inputwap">
          <el-radio-group v-model="loginForm.gender">
            <el-radio label="男">男</el-radio>
            <el-radio label="女">女</el-radio>
          </el-radio-group>  
        </div>
      </el-form-item>   
      <el-form-item class="inputbox" prop="company">
        <p>公司</p>
        <div class="inputwap">
          <el-input class="textput" type="text" v-model="loginForm.company" placeholder="请输入您所在的公司" />
        </div>
      </el-form-item> 
      <el-form-item class="inputbox">
        <p>部门</p>
        <div class="inputwap" prop="department">
          <el-input class="textput" v-model="loginForm.department" type="text" placeholder="请输入您所在的部门" />
        </div>
      </el-form-item> 
      <el-form-item class="inputbox" prop="no">
        <p>员工编号</p>
        <div class="inputwap" >
          <el-input class="textput" v-model="loginForm.no" type="text" placeholder="请输入您的员工编号" />
        </div>
      </el-form-item> 
      <el-form-item class="buttonbox">
        <el-button :loading="loading" type="primary" @click.native.prevent="handleLogin">提交</el-button>
      </el-form-item>     
    </el-form>
  </div>
</template>
<script>
// import { updateInfo } from '@/api/login'
export default {
  data () {
    //  const validatePass = (rule, value, callback) => {
    //   if (value.length < 5) {
    //     callback(new Error("密码不能小于5位"));
    //   } else {
    //     callback();
    //   }
    // };
    return {
      loginForm: {
        gender: '男',
        name: "",
        no: "",
        department: '',
        company: ''
      },
      loginRules: {
        name: [
          { required: true, trigger: "blur", message: '请输入姓名'},
          {min: 2, max: 5, message: '长度在 2 到 5 个字符', trigger: 'blur' }
        ],
        no: [{ required: true, trigger: "blur", message: '请输入员工编号'}],
        department: [{ required: true, trigger: "blur", message: '请输入部门'}],
        company: [{ required: true, trigger: "blur", message: '请输入公司'}]
      },
      loading: false
    };
  },

  components: {},

  computed: {},

  mounted: function() {},

  methods: {
    handleLogin() {
      this.$refs.form.validate(valid => {
        console.log(valid)
        if (valid) {
          this.loading = true
          console.log(this.loginForm)
          updateInfo(this.loginForm).then(res => {
            this.loading = false;
            this.$message({
              message: '提交成功',
              type: 'success'
            });
          }).catch(err => {
            this.loading = false;
            console.log(err)
          })
          // this.$store.dispatch('Login', this.loginForm).then(() => {
          //   this.loading = false
          //   // this.$router.push({ path: '/' })
          // }).catch(() => {
          //   this.loading = false
          // })
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
// .main {
//   width: 360px;
//   height: 468px;
//   padding: 60px 139px;
//   background: #fff;
//   opacity: 0.7;
//   border: 1px solid #30b8e2;
//   border-radius: 3px;
//   margin: auto;
//   position: absolute;
//   top: 0;
//   bottom: 0;
//   left: 0;
//   right: 0;
//   h1 {
//     font-size: 25px;
//     color: #003567;
//     line-height: 43px;
//     text-align: center;
//     margin: 0;
//     span {
//       font-size: 20px;
//       color: #003567;
//       margin-left: 10px;
//       line-height: 43px;
//       font-weight: normal;
//     }
//   }
//   h2 {
//     height: 30px;
//     background: #2b4365;
//     font-size: 16px;
//     color: #fff;
//     line-height: 30px;
//     text-align: center;
//     margin: 18px 0 25px 0;
//   }
//   .inputbox {
//     width: 100%;
//     height: 36px;
//     line-height: 36px;
//     padding-top: 18px;
//     border-bottom: 1px solid #2b4365;
//     margin: 0;
//     &.nonebord {
//       border-bottom: none;
//     }
//     p {
//       width: 36%;
//       height: 36px;
//       line-height: 36px;
//       font-size: 12px;
//       color: #6b757f;
//       font-weight: bold;
//       padding-left: 10px;
//       float: left;
//       margin: 0;
//     }
//     .inputwap {
//       width: 60%;
//       height: 36px;
//       float: right;
//       line-height: 36px;
//       font-size: 12px;
//       color: #6b757f;
//     }
//   }
//   .buttonbox {
//     width: 100%;
//     height: 38px;
//     line-height: 38px;
//     font-size: 12px;
//     margin-top: 39px;
//     background: #2b4365;
//     color: #fff;
//   }
// }
</style>
<style lang='scss'>
// .main .el-input input {
//   width: 90%;
//   float: right;
//   text-align: right;
//   height: 36px;
//   line-height: 36px;
//   border: none !important;
//   font-size: 12px;
//   color: #6b757f;
// }
// .main .el-radio-group {
//   float: right;
//   padding: 0 15px;
//   height: 36px;
//   line-height: 36px;
// }
// .main .el-button {
//   width: 100%;
//   height: 38px;
//   background: #2b4365;
//   color: #fff;
//   border: none;
// }
</style>