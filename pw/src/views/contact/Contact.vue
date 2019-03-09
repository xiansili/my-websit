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
            <ul class="wrapper-contact-right-box-ul1">
              <li>姓名:</li>
              <li>生日:</li>
              <li>爱好:</li>
              <li>邮箱:</li>
            </ul>
            <ul class="wrapper-contact-right-box-ul2">
              <li>先思力</li>
              <li>19970812</li>
              <li>前端,吉他,音乐</li>
              <li>86915497@qq.com</li>
            </ul>
            <span>不管多么险峻的高山，总是为不畏艰难的人留下一条攀登的路。</span>
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
    &-box {
      margin-bottom: 15px;
      &-img1 {
        position: relative;
        width: 60px;
        height: 60px;
        border-radius: 50%;
        margin: 25px;
        margin-left: 200px;
        cursor: pointer;
        & img {
          position: absolute;
          top: 50%;
          left: 50%;
          transform: translate(-50%, -50%);
          width: 60px;
        }
        &:hover {
          background:#a1a3a6;
        }
      }
      &-img2 {
        position: absolute;
        top: 50%;
        margin-top: -100px;
        left: 200px;
        width: 200px;
        height: 200px;
         margin-left: -250px;
         z-index: 1000;
        & img {
          width: 100%;
          height: 100%;
        }
        &::after {
          content: "";
          position: absolute;
          top: 50%;
          margin-top: -25px;
          left: 200px;
          border: 25px solid #fff;
          border-top-color: transparent;
          border-right-color: transparent;
          border-bottom-color: transparent;
        }
      }
    }
    &-right {
      position: absolute;
      top: 50%;
      margin-top: -200px;
      right: 200px;
      width: 400px;
      height: 400px;
      border-radius: 20px;
      background: rgba(86, 83, 100, .1);
      box-shadow: -10px -10px 5px  #a1a3a6;
      &-box {
        width: 460px;
        height: 315px;
        margin-top: 55px;
        border-radius: 20px;
        padding-top: 30px;
        box-shadow: 10px 10px 10px#a1a3a6;
        & span{
          position: absolute;
          left: 50px;
          bottom: 10px;
           font-style: oblique;
            font-size: 20px;
            color: #feeeed;
        }
        &-ul1 {
          float: left;
          font-size: 30px;
          margin-left: 50px;
          font-family: "微软雅黑";
          color:#fcaf17;
        }
        &-ul2 {
          float: left;
          margin-left: 50px;
          font-size: 30px;
          font-family: "微软雅黑";
          color:#cde6c7;
        }
      }
      &::before {
        content: "";
        position: absolute;
        display: block;
        right: -65px;
        top: -5px;
        width: 60px;
        height: 60px;
        background: linear-gradient(42deg, #a1a3a6 30%, rgba(0, 0, 0, 0) 40%);
      }
      &-p1,
      &-p2 {
        float: left;
        margin-left: 60px;
        color: #33a3dc;
        font-size: 40px;
        font-family: "微软雅黑";
        font-style: oblique;
      }
    }
  }
}
</style>
