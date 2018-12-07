<template>
<div class="wrapper">
 <div class="wrapper-cover"></div>
 <div class="wrapper-about">
   <div class="wrapper-about-introduce-me">
     <img src="@/assets/imgs/me.png" alt="">
   </div>
   <p class="wrapper-about-p1">
     你好，我叫先思力，来自黑龙江大学。自己所学的就是计算机相关专业
   </p>
   <p class="wrapper-about-p2">
     
   </p>
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
    background-color: #fff;
    position: absolute;
    left: 50%;
    top: 50%;
    margin-left: -500px;
    margin-top: -230px;

    &-introduce-me {
      width: 200px;
      height: 200px;
      border-radius: 50%;
      margin: 20px auto 0;
     
      & img{
        width: 100%;
        height: 100%;
      }
    }
    &-p1, &-p2{
      max-width: 850px;
      margin: 20px auto 0;
      font-size: 2rem;
      text-indent: 2.4rem;
      line-height: 30px;
      text-align: justify;
      color: #000;
      font-weight: lighter;
    }
  }
}
</style>
