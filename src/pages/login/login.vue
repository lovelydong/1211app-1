<template>
  <f7-page class="login">
        <f7-navbar >
          <f7-nav-left sliding ><f7-link class="iconfont icon-zuo" @click="$f7router.back()"></f7-link></f7-nav-left>
        </f7-navbar>
        <div class="mid">
          <h1>登录</h1>
          <input type="text" placeholder="请输入您的用户名/手机号">
          <input type="text" placeholder="请输入您的密码">
          <f7-link><div>登陆</div></f7-link>
          <f7-link href="/register"><span>注册</span></f7-link>
          <f7-link href="/retrievePassword"><em>忘记密码</em></f7-link>
        </div>
  </f7-page>
</template>
<script>
export default {
  data: function() {
    return {

    };
  },
  methods: {

  }
};
</script>
<style lang="less">
.login{
  .page-content{
    background-color: #fff;
    .mid{
      padding: 38px ;
      >h1{
        text-align: center;
        font-family: "PingFang-SC-Medium";
        font-size: 24px;
        color: #333333;
        font-weight: 400;
        margin-bottom: 70px;
      }
      >input{
        width: 100%;
        line-height: 50px;
        font-family: "PingFang-SC-Regular";
        font-size: 16px;
      }
      >.link{
        display: block;
        >div{
          height: 45px;
          line-height: 45px;
          text-align: center;
          background-color: #cccccc;
          color: #fff;
          border-radius: 10px;
          font-family: "PingFang-SC-Regular";
          font-size: 16px;
          margin-top: 50px;
        }
        >span{
          text-align: center;
          display: block;
          margin-top: 28px;
          font-family: "PingFang-SC-Medium";
          font-size: 16px;
          color: #333333;
        }
        >em{
            text-align: center;
            display: block;
            margin-top: 50%;
            font-family: "PingFang-SC-Medium";
            font-size: 16px;
            color: #333333;
        }
      }
    }
  }
}
</style>


