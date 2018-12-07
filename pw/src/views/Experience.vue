<template>
<div class="wrapper">
 <div class="wrapper-cover"></div>
  <div class="wrapper-box">
    <div class="wrapper-box-p"></div>
    <div class="wrapper-box-p"></div>
    <div class="wrapper-box-p"></div>
    <div class="wrapper-box-p"></div>
    <div class="wrapper-box-p"></div>
    <div class="wrapper-box-p"></div>


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
    height: 600px;
    background-color: #fff;
    position: absolute;
    left: 50%;
    top: 50%;
    margin-left: -450px;
    margin-top: -300px;
    &-p{
      width: 200px;
      height: 200px;
      background: #000;
      position: absolute;
      left: 50%;
      top: 50%;
      margin-left: -100px;
      margin-top: -100px;
      border-radius: 50%;


    }
  }
}
</style>
