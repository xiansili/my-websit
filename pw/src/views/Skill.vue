<template>
  <div class="wrapper">
    <div class="wrapper-cover"></div>
    <!-- <div class="wrapper-cube">
      <ul class="wrapper-cube-ul">
        <li class="wrapper-cube-ul-li1">最</li>
        <li class="wrapper-cube-ul-li2">懂</li>
        <li class="wrapper-cube-ul-li3">你</li>
        <li class="wrapper-cube-ul-li4">的</li>
        <li class="wrapper-cube-ul-li5">魔</li>
        <li class="wrapper-cube-ul-li6">方</li>
      </ul>
    </div>-->
    <div class="skill-box">
      <div class="skill-box-left">
        <ul>
          <li
            v-for="(item, index) in namelist"
            :key="index"
            @click="changeright(index)"
            :class="{'bgcolor': item.isshow}"
          >
            <img :src="item.imgsrc" alt>
            {{item.name}}
            <span class="right" v-show="item.isleft"></span>
            <span class="bottom" v-show="item.isbottom"></span>
            <span class="bottom-border"></span>
          </li>
          <span class="right"></span>
          <span class="top"></span>
          <span class="bottom"></span>
        </ul>
      </div>
      <div class="skill-box-right">
        <div
          class="skill-box-right-box"
          v-for="(skill, index) in contentlist"
          :key="index"
          v-show="skill.isshow"
        >
          <p class="skill-box-right-box-p1">
            <img :src="skill.imgsrc" alt>
          </p>
          <p>{{skill.name}}</p>
          <span>学习进度</span>
          <span>此处放置进度条</span>
          <p>{{skill.content}}</p>
        </div>
      </div>
    </div>
  </div>
</template>


<script>
export default {
  data() {
    return {
      namelist: [
        {
          name: "html",
          imgsrc: require("../assets/imgs/h5.png"),
          isleft: true
        },
        {
          name: "css",
          imgsrc: require("../assets/imgs/css.png"),
          isleft: false
        },
        {
          name: "javascript",
          imgsrc: require("../assets/imgs/js.png"),
          isleft: false
        },
        {
          name: "es6",
          imgsrc: require("../assets/imgs/vue.png"),
          isleft: false
        },
        {
          name: "vue",
          imgsrc: require("../assets/imgs/vue.png"),
          isleft: false
        },
        {
          name: "webpack",
          imgsrc: require("../assets/imgs/wp.png"),
          isleft: false
        }
      ],
      contentlist: [
        {
          name: "html",
          progress: 20,
          isshow: true,
          imgsrc: require("../assets/imgs/h5.png"),
          content: `能够熟练运用语义化标签对pc端以及移动端
            进行合理排版，对块级元素和行级元素深刻理解。
            标签之间合理嵌套，层级关系分明。能够结合CSS
            对页面进行布局。`
        },
        {
          name: "css",
          progress: 20,
          isshow: false,
          imgsrc: require("../assets/imgs/css.png"),
          content: `能够熟练运用语义化标签对pc端以及移动端
            进行合理排版，对块级元素和行级元素深刻理解。
            标签之间合理嵌套，层级关系分明。能够结合CSS
            对页面进行布局。`
        },
        {
          name: "javascript",
          progress: 20,
          isshow: false,
          imgsrc: require("../assets/imgs/js.png"),
          content: `能够熟练运用语义化标签对pc端以及移动端
            进行合理排版，对块级元素和行级元素深刻理解。
            标签之间合理嵌套，层级关系分明。能够结合CSS
            对页面进行布局。`
        },
        {
          name: "es6",
          progress: 20,
          isshow: false,
          imgsrc: require("../assets/imgs/vue.png"),
          content: `能够熟练运用语义化标签对pc端以及移动端
            进行合理排版，对块级元素和行级元素深刻理解。
            标签之间合理嵌套，层级关系分明。能够结合CSS
            对页面进行布局。`
        },
        {
          name: "vue",
          progress: 20,
          isshow: false,
          imgsrc: require("../assets/imgs/vue.png"),
          content: `能够熟练运用语义化标签对pc端以及移动端
            进行合理排版，对块级元素和行级元素深刻理解。
            标签之间合理嵌套，层级关系分明。能够结合CSS
            对页面进行布局。`
        },
        {
          name: "webpack",
          progress: 20,
          isshow: false,
          imgsrc: require("../assets/imgs/wp.png"),
          content: `能够熟练运用语义化标签对pc端以及移动端
            进行合理排版，对块级元素和行级元素深刻理解。
            标签之间合理嵌套，层级关系分明。能够结合CSS
            对页面进行布局。`
        }
      ]
    };
  },
  methods: {
    changeright(index) {
      for (let i = 0; i < this.contentlist.length; i++) {
        const element = this.contentlist[i];
        element.isshow = false;
      }
      for (let i = 0; i < this.namelist.length; i++) {
        const element = this.namelist[i];
        element.isleft = false;
        element.isbottom = false;
        element.isshow = false;
      }
      this.contentlist[index].isshow = true;
      this.namelist[index].isleft = true;
      this.namelist[index].isshow = true;
      this.namelist[index].isbottom = true;
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
  background-image: url("../assets/imgs/skill.jpg");
  & .skill-box {
    width: 900px;
    height: 600px;
    position: relative;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    display: flex;
    &-left {
      flex-grow: 1;
      & ul {
        width: 100%;
        height: 100%;
        display: flex;
        flex-direction: column;
        border-right: 1px solid #000;
        & .bgcolor {
          color: #f45d5d;
        }
        & .top {
          position: absolute;
          height: 4px;
          width: 265px;
          background: #f45d5d;
          z-index: 999;
        }
         & .bottom {
          position: absolute;
          bottom: -5px;
          height: 4px;
          width: 265px;
          background: #f45d5d;
          z-index: 999;
        }
        & li {
          position: relative;
          flex-grow: 1;
          text-align: center;
          line-height: 100px;
          border-bottom: 1px solid #f45d5d;
          background: #fff;
          z-index: 100;
          font-family: "微软雅黑";
          font-size: 30px;
          cursor: pointer;
          & img {
            position: absolute;
            width: 50px;
            height: 50px;
            top: 50%;
            margin-top: -25px;
            left: 15px;
          }
          & .bottom {
            position: absolute;
            top: 96px;
            left: 50%;
            margin-left: -50px;
            height: 4px;
            width: 100px;
            background: #f45d5d;
          }
          & .bottom-border {
            position: absolute;
            top: 0px;
            left: 0px;
            height: 100px;
            width: 4px;
            background: #f45d5d;
          }

          & .right {
            position: absolute;
            border-width: 25px;
            border-style: solid;
            border-left-color: #fff;
            border-top-color: transparent;
            border-right-color: transparent;
            border-bottom-color: transparent;
            top: 50%;
            transform: translateY(-50%);
            right: -49px;
          }
        }
      }
    }
    &-right {
      flex-grow: 5;
      background-color: #363636;
      opacity: 0.8;
      height: 606px;
      color: #fff;
      &-box {
        position: absolute;
        left: 50%;
        margin-left: -120px;
        width: 500px;
        & p {
          text-align: center;
          font-size: 20px;
        }
        &-p1 {
          position: relative;
          width: 150px;
          height: 150px;
          margin: 10px auto;
          background: #fff;
          text-align: center;
          border-radius: 50%;
          border: 4px solid #f45d5d;
          & img {
            width: 100px;
            position: absolute;
            top: 50%;
            left: 50%;
            transform: translate(-50%, -50%);
          }
        }
      }
    }
  }

  &-cube {
    position: relative;
    width: 100px;
    height: 100px;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    perspective: 500px;

    &-ul {
      position: relative;
      width: 100px;
      height: 100px;
      transform-style: preserve-3d;
      perspective-origin: 50% 50% -50px;
      transform: rotateX(45deg) rotateY(45deg);
      // animation: move 10s infinite linear;
      @keyframes move {
        0% {
          transform: rotateY(0deg) rotateX(0) translateZ(50px);
          left: -200px;
          top: -200px;
        }
        25% {
          transform: rotateY(360deg) rotateX(0) translateZ(50px);
          left: 200px;
          top: -200px;
        }
        50% {
          transform: rotateY(360deg) rotateX(-360deg) translateZ(50px);
          left: 200px;
          top: 200px;
        }
        75% {
          transform: rotateY(0) rotateX(-360deg) translateZ(50px);
          left: -200px;
          top: 200px;
        }
        100% {
          transform: rotateY(0deg) rotateX(0) translateZ(50px);
          left: -200px;
          top: -200px;
        }
      }

      & li {
        position: absolute;
        width: 100%;
        height: 100%;
        line-height: 100px;
        text-align: center;
        font-size: 50px;
      }
      &-li1 {
        left: 0;
        top: -100px;
        transform-origin: bottom;
        transform: rotateX(90deg);
        background: radial-gradient(circle, rgba(255, 255, 255, 0.88), #00adff);
      }
      &-li2 {
        background: radial-gradient(circle, rgba(255, 255, 255, 0.88), #100067);
      }
      &-li3 {
        left: 0;
        top: 100px;
        transform-origin: top;
        transform: rotateX(-90deg);
        background: radial-gradient(circle, rgba(255, 255, 255, 0.88), #100067);
      }
      &-li4 {
        transform: rotateX(180deg) translateZ(100px) rotateZ(-180deg);
        left: 0;
        top: 0;
        background: radial-gradient(circle, rgba(255, 255, 255, 0.88), #f0c);
      }
      &-li5 {
        transform: rotateY(-90deg);
        left: -100px;
        transform-origin: right;
        top: 0;
        background: radial-gradient(
          circle,
          rgba(255, 255, 255, 0.88),
          rgba(33, 33, 33, 1)
        );
      }
      &-li6 {
        transform: rotateY(90deg);
        right: -100px;
        transform-origin: left;
        top: 0;
        background: radial-gradient(
          circle,
          rgba(255, 255, 255, 0.88),
          rgba(33, 33, 33, 1)
        );
      }
    }
  }
}
</style>
