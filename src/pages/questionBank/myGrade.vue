<template>
  <f7-page class="myGrade">

        <f7-navbar>
          <f7-nav-left sliding><f7-link class="iconfont icon-zuo" @click="$f7router.back()"></f7-link></f7-nav-left>
          <f7-nav-title>自主评分</f7-nav-title>
          <f7-nav-right>
            <f7-link class="iconfont icon-gengduo" @click="shows.showTop = !shows.showTop"></f7-link>
          </f7-nav-right>
        </f7-navbar>
        <transition
                  name="custom-classes-transition"
                  enter-active-class="animated pulse"
                >
          <div class="TopsZ" v-if="shows.showTop" >
            <em></em>
            <ul>
              <f7-link  ><i class="iconfont icon-shoucang"></i> 收藏本题</f7-link>
              <f7-link  @click="shareboy"><i class="iconfont icon-fenxiang"></i> 分享本题</f7-link>
            </ul>
          </div>
          </transition>
        <div class="mid">
                  <div>
                    <h3>一、单选题 </h3>
                    <div class="content">
                      <p>1、小华家的电灯丝断了，他把灯泡晃了晃使灯丝
                      又搭上了，再用的时候会发现：</p>
                      <div>可是东方红萨科技的发送快递发看时间说了大富科技奥斯卡了是的发送到发斯蒂芬</div>
                    </div>
                  </div>
                  <div class="bot">
                    <h4>答案解析：</h4>
                    <div>时光总是那么的短暫，给了我们那么多的机会体验人生，可我却浪费了我太多太多的时间，独自一人努力的跳出自己人生最深的角落……</div>
                  </div>
                  <div class="hyB">
                    <vue-slider v-model="vSlider.value" :width="vSlider.width" :min="vSlider.min" :max="vSlider.max" :dot-size="vSlider.dotSize"></vue-slider>
                  </div>
                  <f7-link href="/Kperformance">确定</f7-link>
        </div>
      <Share ref="c1"></Share>
  </f7-page>
</template>
<script>
import vueSlider from "vue-slider-component";

export default {
  components: {
    vueSlider
  },
  data: function() {
    return {
      vSlider: {
        value: 0,
        width: "80%",
        min: 0,
        max: 10,
        dotSize: 30,
      },
      shows: {
        showTop: false
      }
    };
  },
  methods: {
    OnshowKM: function(e) {
      this.shows.showKM = true;
    },
    onInfiniteScroll: function() {
      console.log(1);
    },
    shareboy: function(data) {
      this.$refs.c1.sharefn();
    }
  }
};
</script>
<style lang="less">
.myGrade {
  .mid {
    > div {
      padding: 20px 12px;
      background-color: #fff;
      > h3 {
        font-family: "PingFang-SC-Medium";
        font-size: 16px;
        line-height: 30px;
        color: #333333;
        font-weight: 400;
        > span {
          float: right;
          > em {
            color: #fd2d44;
          }
        }
      }
      > .content {
        padding: 40px 20px;
        > p {
          font-family: "PingFang-SC-Medium";
          font-size: 16px;
          line-height: 30px;
          color: #333333;
        }
        > div {
          background-color: #f3f3f3;
          width: 100%;
          margin-top: 40px;
          padding: 10px;
          font-family: "PingFang-SC-Medium";
          font-size: 14px;
          color: #fd5d32;
        }
      }
    }
    > .bot {
      background-color: #efeff4;
      padding-bottom: 0;
      > h4 {
        font-family: "PingFang-SC-Regular";
        font-size: 16px;
        font-weight: 400;
        color: #fd2d44;
      }
      > div {
        padding: 30px 20px;
      }
    }
    > .hyB {
      padding: 0;
      background-color: #efeff4;
      .vue-slider-component .vue-slider-process {
        background-color: #fd2d44;
      }
      .vue-slider-component {
        margin: 0 auto;
      }
      .vue-slider-tooltip {
        border: 1px solid #fd2d44;
        background-color: #fd2d44;
      }
    }
    >.link{
      display: block;
      width: 80%;
      margin: 0 auto;
      height: 44px;
      background-color: #fd5d32;
      color: #fff;
      text-align: center;
      line-height: 44px;
      font-family: "PingFang-SC-Regular";
      margin-top: 20px;
    }
    .swiper-pagination-bullet-active {
      background: #fd2d44;
    }
  }
}
</style>


