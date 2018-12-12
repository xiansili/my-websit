<template>
  <div class="wrapper">
    <div class="wrapper-cover"></div>
    <div class="wrapper-cube">
      <ul class="wrapper-cube-ul">
        <li class="wrapper-cube-ul-li1">最</li>
        <li class="wrapper-cube-ul-li2">懂</li>
        <li class="wrapper-cube-ul-li3">你</li>
        <li class="wrapper-cube-ul-li4">的</li>
        <li class="wrapper-cube-ul-li5">魔</li>
        <li class="wrapper-cube-ul-li6">方</li>
      </ul>
      <ul class="wrapper-cube-ul">
        <li class="wrapper-cube-ul-li1">最</li>
        <li class="wrapper-cube-ul-li2">懂</li>
        <li class="wrapper-cube-ul-li3">你</li>
        <li class="wrapper-cube-ul-li4">的</li>
        <li class="wrapper-cube-ul-li5">魔</li>
        <li class="wrapper-cube-ul-li6">方</li>
      </ul>
      <ul class="wrapper-cube-ul">
        <li class="wrapper-cube-ul-li1">最</li>
        <li class="wrapper-cube-ul-li2">懂</li>
        <li class="wrapper-cube-ul-li3">你</li>
        <li class="wrapper-cube-ul-li4">的</li>
        <li class="wrapper-cube-ul-li5">魔</li>
        <li class="wrapper-cube-ul-li6">方</li>
      </ul>
      <ul class="wrapper-cube-ul">
        <li class="wrapper-cube-ul-li1">最</li>
        <li class="wrapper-cube-ul-li2">懂</li>
        <li class="wrapper-cube-ul-li3">你</li>
        <li class="wrapper-cube-ul-li4">的</li>
        <li class="wrapper-cube-ul-li5">魔</li>
        <li class="wrapper-cube-ul-li6">方</li>
      </ul>
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
  background-image: url("../assets/imgs/show.jpg");
  &-cube {
    position: relative;
    width: 100px;
    height: 100px;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    perspective: 500px;
   
    &-ul {
      position: relative;
      width: 100px;
      height: 100px;
      transform-style: preserve-3d;
      perspective-origin: 50% 50% -50px;
       transform: rotateX(45deg) rotateY(45deg);
      // animation: move 10s infinite linear;
      @keyframes move {
        0% {
          transform: rotateY(0deg) rotateX(0) translateZ(50px);
          left: -200px;
          top: -200px;
        }
        25% {
          transform: rotateY(360deg) rotateX(0) translateZ(50px);
          left: 200px;
          top: -200px;
        }
        50% {
          transform: rotateY(360deg) rotateX(-360deg) translateZ(50px);
          left: 200px;
          top: 200px;
        }
        75% {
          transform: rotateY(0) rotateX(-360deg) translateZ(50px);
          left: -200px;
          top: 200px;
        }
        100% {
          transform: rotateY(0deg) rotateX(0) translateZ(50px);
          left: -200px;
          top: -200px;
        }
      }
     
      & li {
        position: absolute;
        width: 100%;
        height: 100%;
        line-height: 100px;
        text-align: center;
        font-size: 50px;
      }
      &-li1 {
        left: 0;
        top: -100px;
        transform-origin: bottom;
        transform: rotateX(90deg);
        background: radial-gradient(circle, rgba(255, 255, 255, 0.88), #00adff);
      }
      &-li2 {
        background: radial-gradient(circle, rgba(255, 255, 255, 0.88), #100067);
      }
      &-li3 {
        left: 0;
        top: 100px;
        transform-origin: top;
        transform: rotateX(-90deg);
        background: radial-gradient(circle, rgba(255, 255, 255, 0.88), #100067);
      }
      &-li4 {
        transform: rotateX(180deg) translateZ(100px) rotateZ(-180deg);
        left: 0;
        top: 0;
        background: radial-gradient(circle, rgba(255, 255, 255, 0.88), #f0c);
      }
      &-li5 {
        transform: rotateY(-90deg);
        left: -100px;
        transform-origin: right;
        top: 0;
        background: radial-gradient(
          circle,
          rgba(255, 255, 255, 0.88),
          rgba(33, 33, 33, 1)
        );
      }
      &-li6 {
        transform: rotateY(90deg);
        right: -100px;
        transform-origin: left;
        top: 0;
        background: radial-gradient(
          circle,
          rgba(255, 255, 255, 0.88),
          rgba(33, 33, 33, 1)
        );
      }
    }
  }
}
</style>
