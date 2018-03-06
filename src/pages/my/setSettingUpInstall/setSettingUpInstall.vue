<template>
  <f7-page class="setSettingUpInstall">
        <f7-navbar>
          <f7-nav-left sliding><f7-link class="iconfont icon-zuo" @click="$f7router.back()"></f7-link></f7-nav-left>
          <f7-nav-title>设置</f7-nav-title>
        </f7-navbar>
        <div class="mid">
          <ul>
            <li>
              <f7-link href="/personalData">  个人资料 <i class="iconfont icon-you"></i></f7-link>
              <f7-link href="/privacy">  账号和隐私设置 <i class="iconfont icon-you"></i></f7-link>
            </li>
          </ul>
          <ul>
            <li>
              <f7-link href="/coupleBack">  意见反馈 <i class="iconfont icon-you"></i></f7-link>
              <f7-link href="/issue">  常见问题 <i class="iconfont icon-you"></i></f7-link>
              <f7-link href="">  软件检查更新 <i>V 1.01</i></f7-link>
              <f7-link href="/AboutUs">  关于山香 <i class="iconfont icon-you"></i></f7-link>
            </li>
          </ul>
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
.setSettingUpInstall {
  .mid {
    > ul {
      background-color: #fff;
      margin-bottom: 20px;
      > li {
        padding: 0 20px;
        > .link {
          display: block;
          font-family: "PingFang-SC-Regular";
          font-size: 16px;
          color: #333333;
          position: relative;
          line-height: 50px;
          > span {
            position: absolute;
            top: 50%;
            left: 0;
            transform: translateY(-50%);
            display: inline-block;
            width: 16px;
            height: 16px;
            background-color: #000;
          }
          > i {
            float: right;
            color: #999;
          }
        }
      }
    }
  }
}
</style>


