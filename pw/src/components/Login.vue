<template>
  <div class="Login">
    <div class="Login-open" @click="isComment = true">
      <div class="Login-open-me">未登录</div>
    </div>
    <div class="Login-dialog" v-show="isComment">
      <div class="Login-dialog-content">
        <ul>
          <li @click="login" >登陆</li>
          <li @click="regist">注册</li>
        </ul>
        <div v-show="islogin">
          <label for="username">用户名</label>
          <input id="username" type="text">
          <br>
          <label for="password">密码</label>
          <input id="password" type="password">
          </div>
        <div v-show="isregist">
          <label for="username">用户名</label>
          <input id="username" type="text">
          <br>
          <label for="password">密码</label>
          <input id="password" type="password">
        </div>
      </div>
      <div class="Login-dialog-close" @click="isComment=false">
        <img src="@/assets/close.png" alt="关闭">
      </div>
    </div>
  </div>
</template>


<script>
import axios from "axios";
export default {
  data() {
    return {
      isComment: true,
      content: "",
      islogin:false,
      isregist:false
    };
  },
  methods: {
    login(){
      this.islogin = true;
      this.isregist = false;
    },
    regist(){
      this.isregist = true;
      this.islogin = false;
    }
  },
  
};
</script>

<style lang="scss" scoped>
.Login {
  &-open {
    position: fixed;
    z-index: 99;
    padding: 10px 10px;
    width: 20px;
    height: 100px;
    top: 50%;
    margin-top: -50px;
    left: 10px;
    background-color: #000;
    color: #fff;
    line-height: 35px;
    text-align: center;
    cursor: pointer;
    border-radius: 10px;
  }
  &-dialog {
    position: absolute;
    top: 0;
    left: 0;
    bottom: 0;
    right: 0;
    background: rgba($color: #333, $alpha: 0.8);
    z-index: 100;
    &-content {
      position: relative;
      width: 400px;
      height: 300px;
      top: 50%;
      left: 50%;
      transform: translate(-50%, -50%);
      background: #fff;
      text-align: center;
      & ul {
        background: #fff;
        display: flex;
        height: 50px;
        & li {
         flex-grow: 1;
         height: 100%;
         line-height: 50px;
         background:blanchedalmond;
         border: 1px solid #000;
         &:hover{
           background:blueviolet;
         }
      
        }
      }
    
  }
  &-close {
    position: fixed;
    z-index: 999;
    padding: 10px 10px;
    width: 40px;
    top: 30px;
    right: 30px;
    border-radius: 50%;
    background-color: #000;
  }
}
}
</style>