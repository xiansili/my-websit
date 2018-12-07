<template>
  <div class="wrapper">
    <div class="wrapper-cover">
      <div class="wrapper-contact">
        <div v-for="(item, index) in contactList" :key="index" class="wrapper-contact-box">
          <img
            :src="item.logsrc"
            :alt="item.name"
            @click="change(index)"
            class="wrapper-contact-box-img1"
          >
          <div class="wrapper-contact-box-img2" v-show="item.isshow">
            <img :src="item.imgsrc" :alt="item.name">
          </div>
        </div>
        <div class="wrapper-contact-right">
          <p class="wrapper-contact-right-p1">CONTACT</p>
          <p class="wrapper-contact-right-p2">ME</p>
          <div class="wrapper-contact-right-box">
            <span>不管多么险峻的山，总是为不畏艰难的人留下一条攀登的路</span>
            
          </div>
        </div>
      </div>
    </div>
  </div>
</template>


<script>
// import Show from "@/views/contact/Show.vue";
export default {
  props: ["navList"],
  // components: {
  //   Show
  // },
  data() {
    return {
      contactList: [
        {
          name: "qq",
          logsrc: require("@/assets/imgs/q.png"),
          imgsrc: require("@/assets/imgs/qq.jpg"),
          isshow: false
        },
        {
          name: "wx",
          logsrc: require("@/assets/imgs/w.png"),
          imgsrc: require("@/assets/imgs/wx.jpg"),
          isshow: false
        },
        {
          name: "git",
          logsrc: require("@/assets/imgs/g.png"),
          imgsrc: require("@/assets/imgs/g.png"),
          isshow: false
        },
        {
          name: "e",
          logsrc: require("@/assets/imgs/e.png"),
          imgsrc: require("@/assets/imgs/e.png"),
          isshow: false
        }
      ]
    };
  },
  methods: {
    change(index) {
      this.contactList.forEach((item, i) => {
        if (i != index) {
          item.isshow = false;
        }
      });
      this.contactList[index].isshow = !this.contactList[index].isshow;
    }
  }
};
</script>

<style lang="scss" scoped>
.wrapper {
  position: absolute;
  width: 100%;
  height: 100%;
  background-size: cover;
  background-image: url("../../assets/imgs/contact.jpg");

  &-contact {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    width: 1000px;
    height: 500px;
    background: #000;
    &-box {
      margin-bottom: 15px;
      &-img1 {
        position: relative;
        width: 60px;
        height: 60px;
        border: 1px solid;
        border-radius: 50%;
        background: #000;
        margin: 25px;
        cursor: pointer;
        & img {
          position: absolute;
          top: 50%;
          left: 50%;
          transform: translate(-50%, -50%);
          width: 60px;
        }
        &:hover {
          background: brown;
        }
      }
      &-img2 {
        position: absolute;
        top: 50%;
        margin-top: -100px;
        left: 200px;
        width: 200px;
        height: 200px;
        & img {
          width: 100%;
          height: 100%;
          background-color: #fff;
        }
        &::after {
          content: "";
          position: absolute;
          top: 50%;
          margin-top: -25px;
          left: -50px;
          border: 25px solid #fff;
          border-top-color: transparent;
          border-left-color: transparent;
          border-bottom-color: transparent;
        }
      }
    }
    &-right {
      position: absolute;
      top: 50%;
      margin-top: -200px;
      right: 150px;
      width: 400px;
      height: 400px;
      background: blanchedalmond;

      border-radius: 20px;
      filter: drop-shadow(0px 0px 15px #bbb);
      &-box {
        width: 400px;
        height: 350px;
        margin-top: 50px;
        margin-left: 60px;
        border-radius: 20px;
        background: #ffebcd;
      }
      &::before {
        content: "";
        position: absolute;
        display: block;
        right: -60px;
        top: 0;
        width: 60px;
        height: 50px;
        background: linear-gradient(42deg, #000 30%, rgba(0, 0, 0, 0) 40%);
      }
      &-p1,
      &-p2 {
        float: left;
        margin-left: 30px;
        color: #fff;
        font-size: 40px;
        font-family: "微软雅黑";
      }
    }
  }
}
</style>
