<template>
  <div id="app">
    <Nav :navList="navList"></Nav>
    <Menu :navList="navList"></Menu>
    <Music></Music>
    <Dialog></Dialog>
    <Comment></Comment>
    <Login></Login>
    <router-view/>
  </div>
</template>

<script>
import Nav from "@/components/Nav.vue";
import Menu from "@/components/Menu.vue";
import Music from "@/components/Music.vue";
import Comment from "@/components/Comment.vue";
import Login from "@/components/Login.vue";

// import Dialog from "@/components/Dialog.vue";

export default {
  components: {
    Nav,
    Menu,
    Music,
    Comment,
    Login
    // Dialog
  },
  data() {
    return {
      navList: [
        {
          title: "首页",
          bgColor: "#e54847",
          logo: "@/assets/imgs/home-logo2.png",
          name: "home",
          path: "/home"
        },
        {
          title: "关于",
          bgColor: "#e54847",
          logo: "@/assets/imgs/home-logo2.png",
          name: "about",
          path: "/about"
        },
        {
          title: "技能",
          bgColor: "#009688",
          logo: "@/assets/imgs/home-logo2.png",
          name: "skill",
          path: "/skill"
        },
        {
          title: "经历",
          bgColor: "#e54847",
          logo: "@/assets/imgs/home-logo2.png",
          name: "experience",
          path: "/experience"
        },
        {
          title: "作品",
          bgColor: "#009688",
          logo: "@/assets/imgs/home-logo2.png",
          name: "show",
          path: "/show"
        },
        {
          title: "联系",
          bgColor: "#e54847",
          logo: "@/assets/imgs/home-logo2.png",
          name: "contact",
          path: "/contact"
        }
      ]
    };
  }
};
</script>

<style lang="scss">
</style>
