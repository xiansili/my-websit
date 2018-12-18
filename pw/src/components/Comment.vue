<template>
  <div class="comment">
    <div class="comment-open" @click="isopen=true">
      <div class="comment-open-me">给我留言</div>
    </div>
    <div class="comment-dialog" v-show="isopen">
      <div class="comment-dialog-content">
        <h3>欢迎给我留言</h3>
        <!-- <label for="name">名字</label>
        <input id="name" type="text"> -->
        <textarea  placeholder="留下点什么吧..." cols="100" rows="10" :value="value"></textarea>
        <button @click="publish">发表</button>
        <ul class="comment-dialog-content-ul">
          <li v-for="(item, index) in commentList" :key="index">
            <span>{{item.name}}:</span>
            <br>
            <span>{{item.content}}</span>
          </li>
        </ul>
      </div>
      <div class="comment-dialog-close" @click="isopen=false">
        <img src="@/assets/close.png" alt="关闭">
      </div>
    </div>
  </div>
</template>


<script>
export default {
  data(){
    return {
      isopen: false,
      commentList:[
          {
              name:"小王",
              content:"第一次来"
          }
      ]
    };
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
      height: 500px;
      top: 50%;
      left: 50%;
      transform: translate(-50%, -50%);
      background: #fff;
      text-align: center;
      & textarea{
          width: 500px;
          height: 200px;
          resize: none;
          outline: none;
          border: none;
      }
      &-ul {
        height: 100px;
        background: #000;
        color: #fff;
        & li {
          flex-grow: 1;
          & a {
            outline: none;
            color: #000;
            &.router-link-active {
              color: blueviolet;
            }
          }
        }
      }
    }
    &-close {
      position: fixed;
      z-index: 99;
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