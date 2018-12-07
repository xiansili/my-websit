<template>
  <ul class="side">
      <li class="side-nav" v-for="(nav, index) in navList" :key="index" @click="changecolor(index)">
          <router-link :to="nav.path" class="side-nav-a" >
            <span :class="{'side-nav-a-shade':isshow}"></span>
          </router-link>
      </li>
  </ul>
</template>

<script>
export default {
  props: ["navList"],
  data() {
    return {
      isshow:"true"
    };
  },
  methods: {
    changecolor: function(index) {
     return this.isshow=false
     console.log(index)
    }
  }
};
</script>

<style lang="scss" scoped>
.side {
  position: fixed;
  top: 50%;
  right: 60px;
  height: 300px;
  margin-top: -160px;
  width: 18px;
  z-index: 99;
  &-nav {
    display: block;
    border-radius: 50%;
    width: 18px;
    height: 18px;
    margin-top: 30px;
    &-a {
      position: relative;
      display: block;
      border-radius: 50%;
      background: #fff;
      width: 100%;
      height: 100%;
      outline: none;
      &::after {
        width: 8px;
        height: 8px;
        content: "";
        border-radius: 50%;
        background: #337ab7;
        display: block;
        position: absolute;
        left: 50%;
        margin-left: -4px;
        top: 50%;
        margin-top: -4px;
      }
      &-shade {
        display: block;
        border-radius: 50%;
        background-color: rgba(86, 83, 100, 0.5);
        width: 100%;
        height: 100%;
          
      }
      &.router-link-active{
         background:blueviolet;
      }
    }
  }
}
</style>
