<template>
  <f7-page class="coupleBack">
        <f7-navbar>
          <f7-nav-left sliding><f7-link class="iconfont icon-zuo" @click="$f7router.back()"></f7-link></f7-nav-left>
          <f7-nav-title>意见反馈</f7-nav-title>
          <f7-nav-right>
              <f7-link class="navbrleft" @click="advice()">提交</f7-link>
          </f7-nav-right>
        </f7-navbar>
        <div class="mid">
          <textarea placeholder="请输入您的反馈意见或者建议"></textarea>
        </div>
        <!--<div class="mid">
          <f7-link> <i class="iconfont icon-plus-add"></i>  <p>相册/相机</p></f7-link>
        </div>-->
  </f7-page>
</template>
<script>
export default {
  data: function() {
    return {

    };
  },
  methods: {
advice:function()
{
	alert("谢谢您宝贵的意见！");
	 this.$f7router.navigate('/setSettingUpInstall');

}
  }
};
</script>
<style lang="less">
.navbrleft {
  font-family: "PingFang-SC-Regular";
  font-size: 14px;
  color: #333333 !important;
}
.coupleBack {
  .mid{
    padding: 20px 10px;
    background-color: #fff;
    margin-bottom: 20px;
    >textarea{
      width: 100%;
      min-height: 180px;
    }
    >.link{
      width: 80px;
      height: 80px;
      border-radius: 10px;
      display: block;
      border: solid 1px #e6e6e6;
      font-family: "PingFang-SC-Regular";
      font-size: 12px;
      text-align: center;
      color: #999999;
      position: relative;
      >i{
        font-size: 50px;
        position: absolute;
        top: -5px;
        left: 50%;
        transform: translateX(-50%);
      }
      >p{
        line-height: 130px;
      }
    }
  }
}
</style>


