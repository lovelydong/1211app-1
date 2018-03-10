<template>
  <f7-page class="questionBankhome">
        <f7-navbar>
          <f7-nav-title>题库</f7-nav-title>
        </f7-navbar>
        <f7-toolbar>
        <f7-link  href="/" :reload-all="true" :animate="true"><span></span><p>首页</p></f7-link>
        <f7-link  href="/nLiveStreaming" :reload-all="true" :animate="true"><span></span><p>直播</p></f7-link>
        <f7-link href="/recordedBroadcast" :reload-all="true" :animate="true"><span></span><p>录播</p></f7-link>
        <f7-link href="/questionBankhome" :reload-all="true" :animate="true"><span></span><p>题库</p></f7-link>
        <f7-link href="/my" :reload-all="true" :animate="true"><span></span><p>我的</p></f7-link>
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
    	classtype:"",
    	
    };
  },
  methods: {},
  created:function()
  {
  	this.classtype=this.$f7route.query.classtype;
  	
  }
 }

</script>
<style lang="less">
.questionBankhome {
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
            background-color: pink;
            position: relative;
            >p{
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
    }
  }
}
</style>


