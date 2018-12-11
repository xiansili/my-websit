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
    width: 200px;
    height: 200px;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    background-color: #000;
    perspective: 500px;
    &-ul {
      position: relative;
      width: 200px;
      height: 200px;
      transform-style: preserve-3d;
      perspective-origin: 50% 50% -100px;
      transform: rotateY(45deg);
      transition: 0.3;
      transform: translateZ(200px);
      animation: cube 5s infinite linear;
      @keyframes cube {
        from {transform: rotateY(0deg);}
        to {transform:   rotateY(360deg);}
      }
      & li {
        position: absolute;
        width: 100%;
        height: 100%;
        line-height: 200px;
        text-align: center;
        font-size: 50px;
      }
      &-li1 {
        left: 0;
        top: -200px;
        transform-origin: bottom;
        transform: rotateX(90deg);
        background: radial-gradient(circle, rgba(255, 255, 255, 0.88), #00adff);
      }
      &-li2 {
        background: radial-gradient(circle, rgba(255, 255, 255, 0.88), #100067);
      }
      &-li3 {
        left: 0;
        top: 200px;
        transform-origin: top;
        transform: rotateX(-90deg);
        background: radial-gradient(circle, rgba(255, 255, 255, 0.88), #100067);
      }
      &-li4 {
        transform: rotateX(180deg) translateZ(200px) rotateZ(-180deg);
        left: 0;
        top: 0;
        background: radial-gradient(circle, rgba(255, 255, 255, 0.88), #f0c);
      }
      &-li5 {
        transform: rotateY(-90deg);
        left: -200px;
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
        right: -200px;
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
