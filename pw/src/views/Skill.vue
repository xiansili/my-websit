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
          <li v-for="(item, index) in namelist" :key="index" @click="changeright(index)">{{item}}</li>
        </ul>
      </div>
      <div class="skill-box-right">
        <div
          class="skill-box-right-box"
          v-for="(skill, index) in contentlist"
          :key="index"
          v-show="skill.isshow"
        >
          <span>{{skill.name}}</span>
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
      namelist: ["html", "css", "javascript", "es6", "vue", "webpack"],
      contentlist: [
        {
          name: "html",
          progress: 20,
          isshow: false,
          content: `能够熟练运用语义化标签对pc端以及移动端
            进行合理排版，对块级元素和行级元素深刻理解。
            标签之间合理嵌套，层级关系分明。能够结合CSS
            对页面进行布局。`
        },
        {
          name: "css",
          progress: 20,
          isshow: false,
          content: `能够熟练运用语义化标签对pc端以及移动端
            进行合理排版，对块级元素和行级元素深刻理解。
            标签之间合理嵌套，层级关系分明。能够结合CSS
            对页面进行布局。`
        },
        {
          name: "javascript",
          progress: 20,
          isshow: false,
          content: `能够熟练运用语义化标签对pc端以及移动端
            进行合理排版，对块级元素和行级元素深刻理解。
            标签之间合理嵌套，层级关系分明。能够结合CSS
            对页面进行布局。`
        },
        {
          name: "es6",
          progress: 20,
          isshow: false,
          content: `能够熟练运用语义化标签对pc端以及移动端
            进行合理排版，对块级元素和行级元素深刻理解。
            标签之间合理嵌套，层级关系分明。能够结合CSS
            对页面进行布局。`
        },
        {
          name: "vue",
          progress: 20,
          isshow: false,
          content: `能够熟练运用语义化标签对pc端以及移动端
            进行合理排版，对块级元素和行级元素深刻理解。
            标签之间合理嵌套，层级关系分明。能够结合CSS
            对页面进行布局。`
        },
        {
          name: "webpack",
          progress: 20,
          isshow: false,
          content: `能够熟练运用语义化标签对pc端以及移动端
            进行合理排版，对块级元素和行级元素深刻理解。
            标签之间合理嵌套，层级关系分明。能够结合CSS
            对页面进行布局。`
        }
      ],
    }; 
  },
  methods: {
    changeright(index) {
      for (let i = 0; i < this.contentlist.length; i++) {
        const element = this.contentlist[i];
        element.isshow = false;
      }
      this.contentlist[index].isshow = true;
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
    width: 600px;
    height: 600px;
    position: relative;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    background-color: #fff;
    display: flex;
    &-left {
      flex-grow: 1;
      & ul {
        width: 100%;
        height: 100%;
        display: flex;
        flex-direction: column;
        & li {
          flex-grow: 1;
          text-align: center;
          line-height: 100px;
          border-bottom: 1px solid #000;
        }
      }
    }
    &-right {
      flex-grow: 3;
      background: #000;
      color: #fff;
      &-box {
        position: absolute;
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
