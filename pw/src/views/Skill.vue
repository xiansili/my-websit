<template>
  <div class="wrapper">
    <div class="wrapper-cover"></div>
    <div class="wrapper-skill">
      <div class="wrapper-skill-box">
        <div class="wrapper-skill-box-piece1 piece">本网站</div>
        <div class="wrapper-skill-box-piece2 piece">作品2</div>
        <div class="wrapper-skill-box-piece3 piece">作品3</div>
        <div class="wrapper-skill-box-piece4 piece">作品4</div>
        <div class="wrapper-skill-box-piece5 piece">作品5</div>
        <div class="wrapper-skill-box-piece6 piece">作品6</div>
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
  background-image: url("../assets/imgs/skill.jpg");
  &-skill {
    width: 900px;
    height: 600px;
    background-color: #fff;
    position: absolute;
    left: 50%;
    top: 50%;
    margin-left: -450px;
    margin-top: -300px;
    perspective: 1000px;
    &-box {
      position: relative;
      width: 200px;
      height: 200px;
      background-color: #000;
      margin: 200px auto;
      perspective-origin: 50% 50%;
      transform-style: preserve-3d;
      animation: move 10s infinite linear;
      @keyframes move {
        0% {
          transform: rotateY(0deg);
        }
        100% {
          transform: rotateY(360deg);
        }
      }
      & .piece {
        position: absolute;
        width: 200px;
        height: 200px;
        line-height: 200px;
        text-align: center;
        // opacity: 0.3;
        font-size: 30px;
        color: #000;
      }
      &-piece1 {
        background: #f66;
        transform: rotateY(0deg) translateZ(173.2px);
      }
      &-piece2 {
        background: #ff0;
        transform: rotateY(60deg) translateZ(173.2px);
      }
      &-piece3 {
        background: #069;
        transform: rotateY(120deg) translateZ(173.2px);
      }
      &-piece4 {
        background: #099;
        transform: rotateY(180deg) translateZ(173.2px);
      }
      &-piece5 {
        background: #f03;
        transform: rotateY(240deg) translateZ(173.2px);
      }
      &-piece6 {
        background: #f60;
        transform: rotateY(300deg) translateZ(173.2px);
      }
    }
  }
}
</style>
