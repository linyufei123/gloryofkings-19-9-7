<template>
  <div class="mine">
    <div class="tit">
        <p>
            王者登入
        </p>
    </div>
    <el-form
      status-icon
      label-width="50px"
      class="demo-ruleForm form"
    >
      <el-form-item label="账号" prop="pass">
        <el-input type="text" v-model="username" autocomplete="off" style="padding-bottom:20px;"></el-input>
      </el-form-item>
      <el-form-item label="密码" prop="checkPass">
        <el-input type="password" v-model="password" autocomplete="off"></el-input>
      </el-form-item>
      <el-form-item>
        <el-button  type="primary" @click="login($event)" style="width:80px;height:30px">登入</el-button>
        <el-button @click="register($event)" type="warning" style="width:80px;height:30px">注册</el-button>
      </el-form-item>
    </el-form>
  </div>
</template>

<script>
 import http from "utils/http.js"

export default {
    data(){
        return{
            username:"",
            password:""
        }
    },
    methods: {
      login(e) {
           e.preventDefault();
        let username=this.username;
        let password=this.password;
          this.$axios.post("http://localhost:3000/user/login",{
              username,
              password,
          }).then((data)=>{
              console.log(data.data.data.status)
              if(data.data.data.status==1){
                this.$message({
                    showClose: true,
                    message: data.data.data.info,
                    type: 'success'
                });
                setTimeout(()=>{
                  this.$router.push("/login")
                },1000)
              }else{
                  this.$message({
                    showClose: true,
                    message:  data.data.data.info,
                    type: 'error'
                });
              }
              
          })
      },
      register(e) {
        e.preventDefault();
        let username=this.username;
        let password=this.password;
          this.$axios.post("http://localhost:3000/user/register",{
              username,
              password,
          }).then((data)=>{
              if(data.data.data.status){
                this.$message({
                    showClose: true,
                    message:  data.data.data.info,
                    type: 'success'
                });
                 setTimeout(()=>{
                  this.$router.back()
                },1000)
              }else{
                  this.$message({
                    showClose: true,
                    message:  data.data.data.info,
                    type: 'error'
                });
              }
             
          })
      }
    }  
  }
</script>

<style scoped>
    *{
          margin:0;padding:0;
      }
    .mine{
      background:url("https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1567270989652&di=01dd41feca4163950f02a99583949b3c&imgtype=0&src=http%3A%2F%2Fb-ssl.duitang.com%2Fuploads%2Fitem%2F201707%2F29%2F20170729231259_wnJtr.thumb.700_0.jpeg")
      no-repeat;
      background:rgba(0.3);
      background-size:cover;
      flex:1;
      overflow:scroll;
      width:100%;
      height:100%;
      position: relative;
    }
    .tit{
        width:100%;
        height:.5rem;
        background:#c33;
        display: flex;
        justify-content: center;
        align-items: center;
        position: fixed;
        top:0;
    }
    .tit>p{
        color:#fff;
        font-size: 18px;
        font-weight: 400;
    }
    .form{
      position: absolute;
      left: 0;
      right: 0;
      bottom: 0;
      top:0;
      margin: auto;
      width:90%;
      height: 1.5rem;
    }
</style>