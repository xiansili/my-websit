<template>
<div class="wrapper">
 <div class="wrapper-cover"></div>
 <div class="wrapper-skill">
   <div class="wrapper-skill-box">123456</div>
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
    &-box {
      width: 200px;
      height: 200px;
      background-color:blueviolet;
      border: 2px solid black;
      position: absolute;
      left: 50%;
      top: 50%;
      margin-left: -100px;
      margin-top: -100px;
      transform:skew(-60deg,0deg);
      transform:rotateX(-20deg);
      transform:rotateY(40deg);
      transform:rotateZ(40deg);
      transition: transform 2s;
      box-shadow: 10px 10px 5px #888888;
      &:hover{
      //  transform:skew(0deg,0deg);
        transform:rotateX(0deg);
        transform:rotateY(0deg);
        transform:rotateZ(0deg);
      }
    }
  }
}
</style>
