<!-- 注释，单行或多行 -->

<template>
  <div class="login-container">
    <div class="login-box">
      <div class="avatar-box">
        <img src="../assets/logo.png" alt />
      </div>
      <!--  el登陆表单 -->
      <el-form ref="loginFormRef" :model="loginForm" :rules="loginFormRules" label-width="0px" class="login-form">
        <!--  用户 -->
        <el-form-item prop="username">
          <el-input v-model="loginForm.username" prefix-icon="el-icon-user-solid"></el-input>
        </el-form-item>

        <!--  密码 -->
        <el-form-item prop="pwd"> 
          <el-input v-model="loginForm.pwd" prefix-icon="el-icon-unlock" show-password></el-input>
        </el-form-item>

        <!--按钮 -->
        <el-form-item>
          <el-button type="primary" @click="login()">登陆</el-button>
          <el-button type="info" @click="reset()">重置</el-button>
        </el-form-item>
      </el-form>
    </div>
  </div>
</template>


<script>
export default {
    data() {
        return {
            loginForm: {
                username: 'admin',
                pwd:'admin01'
            },
            loginFormRules:{
              username: [
                  { required: true, message: '请输入登陆名称', trigger: 'blur' },
                  { min: 3, max: 10, message: '长度在 3 到 10 个字符', trigger: 'blur' }
              ],
              pwd: [
                {required:true, message:'请输入密码', trigger:'blur'},
                {min:6, max:16, message:'密码长度在6到16个字符', trigger:'blur'}
              ]

            }
        }
    },
    methods:{
      reset: function(){
        this.$refs.loginFormRef.resetFields();
      }, 
      login(){
        this.$refs.loginFormRef.validate(async data => {
          if(!data) return;
          const {data: res} = await this.$http.post('login', this.loginForm);
          if(res.meta.status !== 200) return this.$message.error("登录失败！");
          this.$message.success("登录成功！ ")
          //保存token
          window.sessionStorage.setItem('token', res.data.token)
          this.$router.push('/home')
          
        })
      }
    }
}
</script>


<style lang="less" scoped>
.login-container {
  background-color: #2b4b6b;
  height: 100%;
}

.login-box {
  width: 450px;
  height: 300px;
  background-color: #fff;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  border-radius: 5px;
}

.avatar-box {
  width: 130px;
  height: 130px;
  border: 1px solid #eee;
  border-radius: 50%;
  box-shadow: 0 0 10px #eee;
  padding: 10px;
  position: absolute;
  left: 50%;
  transform: translate(-50%, -50%);
  background-color: #fff;
  img {
    width: 100%;
    height: 100%;
    border-radius: 50%;
    background-color: #fff;
  }
}

.login-form {
    position: absolute;
    bottom: 30px;
    width: 100%;
    box-sizing: border-box;
    padding:  0  20px;
}

</style>