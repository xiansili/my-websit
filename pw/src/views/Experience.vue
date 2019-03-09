<template>
  <div class="wrapper">
    <div class="wrapper-cover">
      <div class="wrapper-box">
        <ul class="number">
          <li></li>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
        </ul>
        <ul class="site">
          <li>
            <h3 class="p1">黑龙江大学(3)</h3>
            <p class="p2"></p>
            <h3 class="p3">2019年 3月</h3>
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>


<script>
export default {};
</script>

<style lang="scss" scoped>
.wrapper {
  position: absolute;
  width: 100%;
  height: 100%;
  background-size: cover;
  background-image: url("../assets/imgs/experience.jpg");

  &-box {
    width: 900px;
    height: 500px;
    position: absolute;
    left: 50%;
    top: 50%;
    margin-left: -450px;
    margin-top: -250px;
    & .number {
      float: left;
      margin-left: 100px;
      & li {
        width: 20px;
        height: 20px;
        margin-top: 65px;
        background: #50b7c1;
        border-radius: 100%;
        text-align: center;
        line-height: 20px;
      }
    }
    & .site {
      float: left;
      margin-left: 200px;
    }
    & li {
      height: 20px;
      margin-top: 40px;
      text-align: center;
      line-height: 20px;
      color: #feeeed;
      & .p2 {
        width: 400px;
        height: 0;
        border: 2px solid #ffc20e;
        margin-top: 10px;
        margin-bottom: 10px;
      }
      & h3 {
        font-family: "微软雅黑";
        font-style: oblique;
      }
    }
  }
}
</style>
