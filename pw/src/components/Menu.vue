<template>
  <div class="menu">
    <div class="menu-open" @click="isopen=true">
      <img src="@/assets/2.png" alt="菜单">
    </div>
    <div class="menu-dialog" v-show="isopen">
      <div class="menu-dialog-nav">
        <ul class="menu-dialog-nav-ul">
          <li v-for="(item, index) in navList" :key="index">
            <router-link :to="item.path" >
              <span @click="isopen=false">{{ item.title }}</span>
            </router-link>
          </li>
        </ul>
      </div>
      <div class="menu-dialog-close" @click="isopen=false">
        <img src="@/assets/close.png" alt="关闭">
      </div>
    </div>
  </div>
</template>


<script>
export default {
  props: ["navList"],
  data() {
    return {
      isopen: false
    };
  }
};
</script>

<style lang="scss" scoped>
.menu {
  &-open {
    position: fixed;
    z-index: 99;
    padding: 10px 10px;
    width: 40px;
    top: 30px;
    right: 30px;
    border-radius: 50%;
    background-color: #000;
  }
  &-dialog {
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
      border-bottom: 726px #e4e2e3 solid;
      border-left: 180px transparent solid;
      width: 40%;
      box-sizing: border-box;
      height: 0;
      right: 0;
      &-ul {
        position: fixed;
        top: 50%;
        right: 80px;
        height: 300px;
        margin-top: -150px;
        display: flex;
        flex-direction: column;
        & li {
          flex-grow: 1;

          & a {
            outline: none;
            color: #000;
            &.router-link-active {
              color: blueviolet;
            }
          }
        }
      }
    }
    &-close {
      position: fixed;
      z-index: 99;
      padding: 10px 10px;
      width: 40px;
      top: 30px;
      right: 30px;
      border-radius: 50%;
      background-color: #000;
    }
  }
}
</style>