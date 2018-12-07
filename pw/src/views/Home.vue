<template>
    <div class="wrapper">
        <div class="wrapper-cover"></div>
        <div class="wrapper-me">
            <h2 class="wrapper-me-name">I am xian si li</h2>
            <strong class="wrapper-me-welecome">欢迎来到我的网站</strong>
            <p class="wrapper-me-name">我叫先思力</p>
            <p class="wrapper-me-job">我是一名前端开发工程师</p>
        </div>
        <div class="wrapper-next">
          <router-link to="/about" >
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
    width: 700px;
    height: 280px;
    background-color: #fff;
    border-radius: 10px;
    position: absolute;
    top: 50%;
    left: 50%;
    margin-top: -140px;
    margin-left: -350px;
    opacity: 0.6;
    transform:skew(-60deg,0deg);
      transition: transform 2s;
      box-shadow: 10px 10px 5px #888888;
      &:hover{
       transform:skew(0deg,0deg);
      }
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

