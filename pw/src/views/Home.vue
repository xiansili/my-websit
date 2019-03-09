<template>
  <div class="wrapper">
    <div class="wrapper-cover"></div>
    <div class="wrapper-me">
      <div class="wrapper-me-left"></div>
      <div class="wrapper-me-right"></div>
      <h1 class="wrapper-me-welecome">欢迎来到我的网站</h1>
      <h1 class="wrapper-me-name">我叫先思力</h1>
      <h1 class="wrapper-me-job">我是一名前端开发工程师</h1>
    </div>
    <div class="wrapper-next">
      <router-link to="/about">
        <img src="@/assets/imgs/next.png" alt="向下">
      </router-link>
    </div>
  </div>
</template>


<script>
export default {
  props: ["navList"]
};
</script>

<style lang="scss" scoped>
.wrapper {
  position: absolute;
  width: 100%;
  height: 100%;
  background-size: cover;
  background-position: left center;
  background-image: url("../assets/imgs/home/home3.jpg");

  &-me {
    position: relative;
    width: 1000px;
    height: 360px;
    top: 50%;
    left: 50%;
    margin-top: -150px;
    margin-left: -500px;
    color: #000;
    background: #d3d7d4 0.5;
    &-name,
    &-job {
      position: relative;
      top: 50px;
      text-align: center;
      color: #ffc20e;
    }
    &-welecome {
      position: relative;
      text-align: center;
      color: #009ad6;
      font-family: "微软雅黑";
      font-style: oblique;
    }
    &-left {
      float: left;
      border: 2px solid #fcaf17;
      border-top: none;
      border-right: none;
      width: 30%;
      height: 100%;
    }
    &-right {
      float: right;
      border: 2px solid #fcaf17;
      border-bottom: none;
      border-left: none;
      width: 30%;
      height: 100%;
      margin-right: 100px;
    }
  }

  //下一页面箭头
  &-next {
    position: absolute;
    width: 40px;
    height: 40px;
    left: 50%;
    bottom: 70px;
    margin-left: -20px;
    animation: mymove 1.5s infinite linear;
    @keyframes mymove {
      0% {
        bottom: 70px;
        width: 40px;
      }
      25% {
        bottom: 60px;
        width: 45px;
      }
      50% {
        bottom: 50px;
        width: 50px;
      }
      75% {
        bottom: 60px;
        width: 45px;
      }
      100% {
        bottom: 70px;
        width: 40px;
      }
    }
    a {
      outline: none;
    }
  }
}
</style>

