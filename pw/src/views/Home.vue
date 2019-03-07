<template>
  <div class="wrapper">
    <!-- <div class="wrapper-cover"></div> -->
    <!-- <div class="wrapper-me">
      <div class="wrapper-me-front cube">
        <h2 class="cube-name">I am xian si li</h2>
        <strong class="cube-welecome">欢迎来到我的网站</strong>
        <p class="cube-name">我叫先思力</p>
        <p class="cube-job">我是一名前端开发工程师</p>
      </div>
      <div class="wrapper-me-left cube"></div>
      <div class="wrapper-me-right cube"></div>
      <div class="wrapper-me-back cube"></div>
    </div> -->
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
  background-clip: content-box;
  background-image: url("../assets/imgs/home/home3.jpg");
  perspective: 2000px;
  
  &-me {
    position: relative;
    width: 700px;
    height: 280px;
    top: 50%;
    left: 50%;
    margin-top: -140px;
    margin-left: -350px;
    transform-origin: 50% 50%;
    transform-style: preserve-3d;
    color: #000;

    &:hover {
      animation: mycube 10s linear;
      @keyframes mycube {
        0% {
          transform: rotateY(0deg);
        }
        100% {
          transform: rotateY(-360deg);
        }
      }
    }

    & .cube {
      width: 700px;
      height: 280px;
      position: absolute;
      background-position: center;
      background-size: cover;
      // background: #d3d7d4;
      // border: 2px solid #000;
      background: #fff;
      &-name,
      &-job {
        text-align: center;
      }
      &-welecome {
        float: left;
        width: 100%;
        text-align: center;
        margin-top: 20px;
      }
    }
    &-front {
      transform: translateZ(350px);
      background-image: url("../assets/imgs/home/home2.jpg");
    }
    &-left {
      transform: rotateY(90deg) translateZ(350px);
      background-image: url("../assets/imgs/home/home1.jpg");
    }
    &-right {
      transform: rotateY(-90deg) translateZ(350px);
      background-image: url("../assets/imgs/home/home3.jpg");
    }
    &-back {
      transform: rotateY(180deg) translateZ(350px);
      background-image: url("../assets/imgs/home/home5.jpg");
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

