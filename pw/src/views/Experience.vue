<template>
  <div class="wrapper">
    <div class="wrapper-cover">
      <div class="wrapper-box">
        <ul>
          <li>1</li>
          <li>2</li>
          <li>3</li>
          <li>4</li>
          <li>5</li>
          <li>6</li>
          <li>7</li>
          <li>8</li>
          <li>9</li>
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
    height: 600px;
    background-color: #fff;
    position: absolute;
    left: 50%;
    top: 50%;
    margin-left: -450px;
    margin-top: -300px;
    & ul {
   width: 500px;
   height: 500px;
   background-color: #000;
   display: flex;
    & li{
      flex-grow: 1;
      width: 100px;
      height: 100px;
      background: blanchedalmond;
      border-radius: 100%;
      
    }
    }
  }
}
</style>
