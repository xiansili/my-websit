<template>
  <div class="wrapper">
    <div class="wrapper-cover"></div>
    <div class="wrapper-me">
      <div class="wrapper-me-front cube">
        <h2 class="wrapper-me-name">I am xian si li</h2>
        <strong class="wrapper-me-welecome">欢迎来到我的网站</strong>
        <p class="wrapper-me-name">我叫先思力</p>
        <p class="wrapper-me-job">我是一名前端开发工程师</p>
      </div>
      <div class="wrapper-me-left cube">
        <h2 class="wrapper-me-name">I am xian si li</h2>
        <strong class="wrapper-me-welecome">欢迎来到我的网站</strong>
        <p class="wrapper-me-name">我叫先思力</p>
        <p class="wrapper-me-job">我是一名前端开发工程师</p>
      </div>
      <div class="wrapper-me-right cube">
        <h2 class="wrapper-me-name">I am xian si li</h2>
        <strong class="wrapper-me-welecome">欢迎来到我的网站</strong>
        <p class="wrapper-me-name">我叫先思力</p>
        <p class="wrapper-me-job">我是一名前端开发工程师</p>
      </div>
      <div class="wrapper-me-back cube">
        <h2 class="wrapper-me-name">I am xian si li</h2>
        <strong class="wrapper-me-welecome">欢迎来到我的网站</strong>
        <p class="wrapper-me-name">我叫先思力</p>
        <p class="wrapper-me-job">我是一名前端开发工程师</p>
      </div>
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
  background-image: url("../assets/1.jpg");
  &-me {
    position: relative;
    width: 700px;
    height: 280px;
    background: #fff;
    // border-radius: 10px;
    top: 50%;
    left: 50%;
    margin-top: -140px;
    margin-left: -350px;
    transform-origin: 50% 50%;
    perspective: 1500px;
    transform-style: preserve-3d;
    animation: mycube 5s infinite linear;
    @keyframes mycube {
      0% {
        transform: rotateY(0deg);
      }
      100% {
        transform: rotateY(360deg);
      }
    }
    & .cube {
      width: 700px;
      height: 280px;
      position: absolute;
      opacity: 0.6;
      // box-shadow: 10px 10px 5px #888888;
      &-name,
      &-job {
        text-align: center;
      }
      &-welecome {
        float: left;
        width: 100%;
        text-align: center;
      }
    }
    &-front {
      transform: translateZ(350px);
      background: #77ac98;
      opacity: 0.1;
    }
    &-left {
      transform: rotateY(90deg) translateZ(350px);
      background: #77ac98;
      opacity: 0.1;
    }
    &-right {
      transform: rotateY(-90deg) translateZ(350px);
      background: #77ac98;
      opacity: 0.1;
    }
    &-back {
      transform: rotateY(180deg) translateZ(350px);
      background: red;
      opacity: 0.1;
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

