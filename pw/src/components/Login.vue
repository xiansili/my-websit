<template>
  <div class="Login">
    <div class="Login-open" @click="isComment = true">
      <div class="Login-open-me">未登录</div>
    </div>
    <div class="Login-dialog" v-show="isComment">
      <div class="Login-dialog-content">
      </div>
      <div class="Login-dialog-close" @click="isComment=false">
        <img src="@/assets/close.png" alt="关闭">
      </div>
    </div>
  </div>
</template>


<script>
import axios from 'axios';
export default {
  data() {
    return {
      isComment: true,
      content:'',
    };
  },
  methods: {
    publish(){
      axios({
        url:'http://localhost:4000/user/registUser',
        method:'post',
        data:{
          userContent:this.content,
        }
      }).then((res)=>{
        console.log(res)
      })
      }
    },

    created() {
      axios({
        method:'get',
        url:'http://localhost:4000/user/registUser',
      }).then(res=>{
        console.log(res)
      })
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
    background: rgba($color: #333, $alpha: .8);
    z-index: 100;
    &-content {
      position: relative;
      width: 1000px;
      height: 80%;
      top:50%;
      left: 50%;
      transform: translate( -50%,-50%);
      background: #fff;
      text-align: center;
      overflow-y: scroll;
      word-break: break-all;
      &-text {
        height: 150px;
        width: 800px;
        margin:0 auto;
        background: #333;
      }
      & textarea {
        width: 100%;
        text-indent: 2em;
        height: 100%;
        resize: none;
        outline: none;
        border: none;
        background: transparent;
        color: #fff;
      }
      & button{
        margin-top: 10px;
        margin-left: -700px;
        width: 100px;
        height: 30px;
        margin-bottom: 10px;;
      } 
      &-ul {
        background: #fff;
        color: #fff;
        & li {
        background: #000;
        margin-top: 10px;
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