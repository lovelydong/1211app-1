<template>
  <f7-page class="questionBankhome">
        <f7-navbar>
          <f7-nav-title>题库</f7-nav-title>
        </f7-navbar>
        <f7-toolbar>
          <f7-link href="/home" :reload-all="true" :animate="true"><span class="toolbarlog1"></span>
            <p>首页</p>
          </f7-link>
          <f7-link href="/nLiveStreaming" :reload-all="true" :animate="true"><span class="toolbarlog2"></span>
            <p>直播</p>
          </f7-link>
          <f7-link href="/recordedBroadcast" :reload-all="true" :animate="true"><span class="toolbarlog3"></span>
            <p>录播</p>
          </f7-link>

          <f7-link  :reload-all="true" :animate="true"><span class="toolbarlog4"></span>
            <p   style="color: #fd2d44;">题库</p>
          </f7-link>
          <f7-link href="/my" :reload-all="true" :animate="true"><span class="toolbarlog5"></span>
            <p>我的</p>
          </f7-link>
        </f7-toolbar>
        <div class="mid">
          <div class="row">
            <div class="col-50"><f7-link :href="'/moduleExam?classtype='+classtype+'&qtype=173703'"> <div><p>章节练习</p> </div> <p><span>开始学习</span></p></f7-link></div>
            <div class="col-50"><f7-link :href="'/moduleExam?classtype='+classtype+'&qtype=173701'"> <div><p>随机练习</p> </div> <p><span>开始学习</span></p></f7-link></div>
            <div class="col-50"><f7-link :href="'/moduleExam?classtype='+classtype+'&qtype=173702'"> <div><p>模拟估分</p> </div> <p><span>开始学习</span></p></f7-link></div>
            <div class="col-50"><f7-link :href="'/moduleExam?classtype='+classtype+'&qtype=173704'"> <div><p>真题演练</p> </div> <p><span>开始学习</span></p></f7-link></div>
          </div>
        </div>
  </f7-page>
</template>
<script>
export default {
  data: function() {
    return {
      classtype: ""
    };
  },
  methods: {},
  created: function() {
    this.classtype = this.$f7route.query.classtype;
  }
};
</script>
<style lang="less">
.questionBankhome {
  .toolbarlog1 {
    background: url(../../assets/jingling.png) no-repeat 0px -137px;
    background-color: transparent !important;
  }
  .toolbarlog2 {
    background: url(../../assets/jingling.png) no-repeat -116px -137px;
    background-color: transparent !important;
  }
  .toolbarlog3 {
    background: url(../../assets/jingling.png) no-repeat -39px -137px;
    background-color: transparent !important;
  }
  .toolbarlog4 {
    background: url(../../assets/jingling.png) no-repeat -94px -87px;
    background-color: transparent !important;
  }
  .toolbarlog5 {
    background: url(../../assets/jingling.png) no-repeat -155px -137px;
    background-color: transparent !important;
  }
  .mid {
    padding: 20px 12px;
    .row {
      .col-50 {
        text-align: center;
        background-color: #fff;
        margin-bottom: 20px;
        .link {
          display: block;
          min-height: 180px;
          > div {
            height: 118px;
            background: url(../../assets/tiku1.png) no-repeat 0 0;
            background-size: 100% 100%;
            position: relative;
            > p {
              position: absolute;
              top: 50%;
              width: 100%;
              transform: translateY(-50%);
              height: 40px;
              line-height: 40px;
              background-color: rgba(0, 0, 0, 0.4);
              font-family: "PingFang-SC-Regular";
              font-size: 18px;
              color: #ffffff;
            }
          }
          > p {
            height: 62px;
            line-height: 62px;
            > span {
              border-radius: 30px;
              border: solid 1px #999999;
              padding: 5px 10px;
              color: #999;
            }
          }
        }
      }
      .col-50:nth-of-type(2) {
        .link {
          > div {
            background: url(../../assets/tiku2.png) no-repeat 0 0;
            background-size: 100% 100%;
          }
        }
      }
      .col-50:nth-of-type(3) {
        .link {
          > div {
            background: url(../../assets/tiku3.png) no-repeat 0 0;
            background-size: 100% 100%;
          }
        }
      }
      .col-50:nth-of-type(4) {
        .link {
          > div {
            background: url(../../assets/tiku4.png) no-repeat 0 0;
            background-size: 100% 100%;
          }
        }
      }
    }
  }
}
</style>


