<template>
  <f7-page class="AboutUs">
        <f7-navbar>
          <f7-nav-left sliding><f7-link class="iconfont icon-zuo" @click="$f7router.back()"></f7-link></f7-nav-left>
          <f7-nav-title>关于山香</f7-nav-title>
        </f7-navbar>
        <div class="mid">
          <p><img src="../../../assets/mylogo.png" alt=""></p>
          <p><img src="../../../assets/myerweima.png" alt=""></p>
          <p>网址：www.1211.cn</p>
          <p>版本：V 1.01</p>
          <p>Copyright 2006-2016 山香教育网校</p>
        </div>

  </f7-page>
</template>
<script>
export default {
  data: function() {
    return {};
  },
  methods: {}
};
</script>
<style lang="less">
.AboutUs {
  .mid {
    > p {
      margin-top: 80px;
      text-align: center;
      > img {
        width: 242px;
      }
    }
    > p:nth-of-type(2) {
      margin-top: 35px;
      > img {
        width: 150px;
      }
    }
    > p:nth-of-type(3) {
      font-family: "MicrosoftYaHei";
      font-size: 12px;
      color: #999999;
      margin-top: 15px;
    }
    > p:nth-of-type(4) {
      font-family: "PingFang-SC-Regular";
      font-size: 16px;
      margin-top: 180px;
      color: #fd2d44;
    }
    > p:nth-of-type(5) {
      font-family: "MicrosoftYaHei";
      font-size: 14px;
      color: #999999;
      margin-top: 14px;
    }
  }
}
</style>


