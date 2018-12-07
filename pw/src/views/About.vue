<template>
  <div class="wrapper">
    <div class="wrapper-cover"></div>
    <div class="wrapper-about">
      <div class="wrapper-about-introduce-me">
        <img src="@/assets/imgs/me.jpg" alt>
      </div>
      <p class="wrapper-about-p1">
        你好，我叫先思力，一个来自贵州的阳光小伙，
        目前坐标哈尔滨。 很久以来一直对网页的世界
        十分感兴趣，所以就自学前端，想做一名前端开
        发工程师，经过不断深入的了解，我才知道web世
        界之大，还要学习的东西太多，在这个技术不断更
        新的时代，只有不断的学习才能在立足
        经过这一直以来不断的学习，对前端开发有了自己的想法。
        目前能做一些粗糙的开发，了解响应式布局。以及以及移动端开发。
      </p>
      <p class="wrapper-about-p2">热爱前端，自学能力强，我喜欢认认真真学习，踏踏实实做事。</p>
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
  background-image: url("../assets/imgs/about.jpg");

  &-about {
    width: 1000px;
    height: 460px;
    position: absolute;
    left: 50%;
    top: 50%;
    margin-left: -500px;
    margin-top: -230px;

    &-introduce-me {
      width: 150px;
      height: 150px;
      border-radius: 50%;
      margin: 20px auto 0;
      &:hover {


      }

      & img {
        width: 100%;
        height: 100%;
        border-radius: 50%;
      }
    }
    &-p1,
    &-p2 {
      max-width: 850px;
      margin: 20px auto 0;
      font-size: 2rem;
      text-indent: 2.4rem;
      line-height: 30px;
      text-align: justify;
      color: #000;
      font-weight: lighter;
      color: #fff;
    }
  }
}
</style>
