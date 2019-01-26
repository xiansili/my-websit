<template>
  <div class="comment">
    <div class="comment-open" @click="isComment = true">
      <div class="comment-open-me">给我留言</div>
    </div>
    <div class="comment-dialog" v-show="isComment">
      <div class="comment-dialog-content">
        <h2>欢迎给我留言</h2>
        <div class="comment-dialog-content-text">
          <textarea placeholder="留下点什么吧..." v-model="content"></textarea>
        </div>
        <button @click="publish">发表</button>
        <ul class="comment-dialog-content-ul">
          <li v-for="(item, index) in commentList" :key="index">
            <span class="name">呢称：{{item.name}}</span>
            <br>
            <p class="container">{{item.userContent}}</p>
          </li>
        </ul>
      </div>
      <div class="comment-dialog-close" @click="isComment=false">
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
      commentList: []
    };
  },
  methods: {
    publish() {
      axios({
        url: "http://localhost:4000/user/registUser",
        method: "post",
        data: {
          userContent: this.content
        }
      }).then(res => {
        console.log(res);
      });
      this.commentList.push({ userContent: this.content });
      console.log(this.commentList);
    }
  },

  created() {
    axios({
      method: "get",
      url: "http://localhost:4000/user/registUser"
    })
      .then(res => {
        console.log(res);
        this.commentList = res.data;
      })
      .catch(err => {});
  }
};


</script>



<style lang="scss" scoped>
.comment {

  &-open {
    position: fixed;
    z-index: 99;
    padding: 10px 10px;
    width: 100px;
    height: 20px;
    bottom: 30px;
    left: 30px;
    background-color: #000;
    color: #fff;
    display: flex;
    justify-content: center;
    justify-items: center;
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
      width: 1000px;
      height: 80%;
      top: 50%;
      left: 50%;
      transform: translate(-50%, -50%);
      background: #d3d7d4;
      text-align: center;
      &-text {
        height: 150px;
        width: 800px;
        margin: 0 auto;
        background: #555;
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
        font-size: 24px;
      }
      & button {
        margin-top: 10px;
        margin-left: -700px;
        width: 100px;
        height: 30px;
        margin-bottom: 10px;
      }
      &-ul {
        background: #fff;
        color: #fff;
        margin: 0 auto;
        width: 80%;
        overflow-y: scroll;
        word-break: break-all;
        height: 300px;
        & li {
          margin-top: 10px;
          height: 80px;
          color: #333;
          & .name {
            
          }
          & .container{
            text-indent: 2em;
            float: left;
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