<template>
  <f7-page class="changeNumber">
        <f7-navbar>
          <f7-nav-left sliding><f7-link class="iconfont icon-zuo" @click="$f7router.back()"></f7-link></f7-nav-left>
          <f7-nav-title>修改手机号</f7-nav-title>
          <f7-nav-right>
              <f7-link class="navbrleft">完成</f7-link>
          </f7-nav-right>
        </f7-navbar>
        <f7-list inline-labels no-hairlines-md>

        <f7-list-item>
          <f7-icon icon="demo-list-icon" slot="media"></f7-icon>
          <f7-input type="tel" resizable placeholder="请输入手机号"  clear-button></f7-input>
        </f7-list-item>
        <f7-list-item>
          <f7-icon icon="demo-list-icon" slot="media"></f7-icon>
          <f7-input type="tel" resizable placeholder="请输入验证码"  clear-button></f7-input>
          <f7-link>获取验证码</f7-link>
        </f7-list-item>
      </f7-list>

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
.navbrleft {
  font-family: "PingFang-SC-Regular";
  font-size: 14px;
  color: #333333 !important;
}
.changeNumber {
  .list{
    .link{
      width: 94px;
      background-color: #cccccc;
      font-family: "PingFang-SC-Regular";
      font-size: 12px;
      color: #ffffff;
      height: 100%;
    }
    .iconfont{
      background-color: transparent;
      color: #ccc;
      font-size: 16px;
      width: 50px;
    }
  }
}
</style>


