<template>
  <div class="dialog" v-show="isopen">
    <div class="dialog-nav"></div>
        <div class="dialog-close" @click="isopen=true"> 
            <img src="@/assets/close.png" alt="关闭" >
        </div>
  </div>
</template>

<script>
export default {
    data:{
       return(){
         isopen:false
       }
    }
};
</script>


<style lang="scss" scoped>
.dialog {
  position: absolute;
  top: 0;
  left: 0;
  bottom: 0;
  right: 0;
  background: rgba($color: #333, $alpha: 0.8);
  z-index: 100;
  &-nav {
    position: fixed;
    top: 0;
    border-top: none;
    border-right: none;
    border-bottom: 900px #e4e2e3 solid;
    border-left:  180px transparent solid;
    width: 40%;
    box-sizing: border-box;
    height: 0;
    right: 0;
  }
  &-close{
  position: fixed;
  z-index: 99;
  padding: 10px 10px;
  width: 40px;
  top: 30px;
  right: 30px;
  border-radius: 50%;
  background-color:#000;
}
}
</style>
