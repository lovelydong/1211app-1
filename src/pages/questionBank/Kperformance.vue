<template>
  <f7-page class="Kperformance">

        <f7-navbar>
          <f7-nav-left sliding><f7-link class="iconfont icon-zuo" @click="$f7router.back()"></f7-link></f7-nav-left>
          <f7-nav-title>考试成绩</f7-nav-title>

        </f7-navbar>

        <div class="mid">
          <div class="t">
            <p>才高八斗</p>
          </div>
          <div class="m">
            <p>96<span>分</span></p>
          </div>
          <div class="b">
            <div class="link" @click="shareboy">炫耀一下</div>
          </div>
        </div>
        <f7-link href="/AnswerKeys">
          <p>答案解析</p>
          <div><i class="iconfont icon-xiala3"></i></div>
        </f7-link>
        <Share ref="c1"></Share>
  </f7-page>
</template>
<script>

export default {
  data: function() {
    return {
      shows: {
        showTop: false,
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
.Kperformance {
  .page-content {
    background-color: #fff;
    >.link{
      position: fixed;
      bottom: 0;
      display: block;
      text-align: center;
      left: 50%;
      transform: translateX(-50%);
      font-family: "PingFang-SC-Regular";
      font-size: 16px;
      color: #333333;
    }
  }
  .mid {
    > .t {
      background: url(../../assets/Kperformance1.png) no-repeat 0 0;
      width: 227px;
      height: 49px;
      margin: 0 auto;
      margin-top: 20%;
      position: relative;
      > p {
        font-family: "HYk2gj";
        font-size: 42px;
        color: #fd5d32;
        margin-top: -20px;
        position: absolute;
        top: -10px;
        width: 100%;
        font-weight: 800;
        text-align: center;
        text-shadow: -1px -1px #fff, -2px -2px #fff, 1px 1px #fff, 2px 2px #fff;
      }
    }
    > .m {
      background: url(../../assets/Kperformance2.png) no-repeat 0 0;
      width: 227px;
      margin: 0 auto;
      position: relative;
      margin-top: 60px;
      height: 170px;
      > p {
        font-family: "PingFang-SC-Bold";
        font-size: 122px;
        color: #fd5d32;
        text-align: center;
        position: absolute;
        width: 100%;
        top: -20px;
        > span {
          font-family: "PingFang-SC-Bold";
          font-size: 12px;
          color: #fd5d32;
        }
      }
    }
    > .b {
      text-align: center;
      margin-top: 80px;
      > .link {
        text-align: center;
        width: 300px;
        height: 44px;
        background-image: linear-gradient(90deg, #fd5d32 0%, #fd2d44 100%),
          linear-gradient(#f3f3f3, #f3f3f3);
        background-blend-mode: normal, normal;
        box-shadow: 0px 4px 20px 0px rgba(253, 45, 68, 0.3),
          inset 0px 5px 3px 0px #ff9600;
        border-radius: 22px;
        font-family: "PingFang-SC-Regular";
        font-size: 20px;
        color: #ffffff;
      }
    }
  }
}
</style>


