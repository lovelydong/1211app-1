<template>
  <f7-page class="retrievePassword">
        <f7-navbar >
          <f7-nav-left sliding ><f7-link class="iconfont icon-zuo" @click="$f7router.back()"></f7-link></f7-nav-left>
          <f7-nav-title>找回密码</f7-nav-title>
        </f7-navbar>
        <div class="mid">
          <input type="text" placeholder="请输入您的用户名/手机号">
          <div><input type="text" placeholder="请输入验证码"> <f7-link>获取验证码</f7-link></div>
          <div><input type="text" placeholder="请输入您的密码"><f7-link> <i class="iconfont icon-chakan"></i> </f7-link></div>
          <f7-link><div>完成</div></f7-link>
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
.retrievePassword {
  .page-content {
    background-color: #fff;
    .mid {
      padding: 38px;
      > h1 {
        text-align: center;
        font-family: "PingFang-SC-Medium";
        font-size: 24px;
        color: #333333;
        font-weight: 400;
        margin-bottom: 70px;
      }
      > div {
        position: relative;
        > input {
          width: 100%;
          line-height: 50px;
          font-family: "PingFang-SC-Regular";
          font-size: 16px;
        }
        > .link {
          position: absolute;
          right: 0;
          top: 50%;
          transform: translateY(-50%);
          font-family: "PingFang-SC-Regular";
          font-size: 12px;
          color: #fd5d32;
          > i {
            color: #999;
            display: inline-block;
            width: 50px;
            text-align: center;
          }
        }
      }
      > input {
        width: 100%;
        line-height: 50px;
        font-family: "PingFang-SC-Regular";
        font-size: 16px;
      }
      > .link {
        display: block;
        > div {
          height: 45px;
          line-height: 45px;
          text-align: center;
          background-image: linear-gradient(#ff0000, #ff0000),
            linear-gradient(#ff0000, #ff0000);
          background-blend-mode: normal, normal;
          color: #fff;
          border-radius: 10px;
          font-family: "PingFang-SC-Regular";
          font-size: 16px;
          margin-top: 50px;
        }
        > span {
          text-align: center;
          display: block;
          margin-top: 28px;
          font-family: "PingFang-SC-Medium";
          font-size: 16px;
          color: #333333;
        }
        > em {
          text-align: center;
          display: block;
          margin-top: 40%;
          font-family: "PingFang-SC-Medium";
          font-size: 16px;
          color: #333333;
        }
      }
    }
  }
}
</style>


