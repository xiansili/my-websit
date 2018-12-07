<template>
        <div class="music">
            <img src="@/assets/imgs/music.png" alt="菜单" >
            <!-- <audio src="@/assets/music/music.mp3" controls="controls" autoplay="autoplay" ></audio> -->
        </div>
</template>


<script>
export default {};
</script>

<style lang="scss" scoped>
.music {
  position: fixed;
  z-index: 99;
  padding: 20px 20px;
  width: 40px;
  top: 50px;
  left: 50px;
  border-radius: 50%;
  background-color: #000;
  animation:mymove 10s infinite linear;
}
@keyframes mymove
{
from {transform:rotate(0deg);}
to {transform:rotate(360deg);}
}
</style>

