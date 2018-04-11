<template>
  <f7-page class="privacy">
        <f7-navbar>
          <f7-nav-left sliding><f7-link class="iconfont icon-zuo" @click="$f7router.back()"></f7-link></f7-nav-left>
          <f7-nav-title>账号与隐私</f7-nav-title>
        </f7-navbar>
        <div class="mid">
          <ul>
            <li>
              <f7-link href="/changeNumber">  手机号 <i class="iconfont icon-you"></i><i>{{userinfo.mobile}}</i></f7-link>
              <f7-link href="/changePassword">  修改密码 <i class="iconfont icon-you"></i></f7-link>
            </li>
          </ul>
        </div>
  </f7-page>
</template>
<script>
import global_ from "../../Global.vue";//引用模块进来
export default {
  data: function() {
    return {
      userinfo: ""
    };
  },
  methods: {},
  created: function() {
    this.userinfo = global_.userinfo;
  }
};
</script>
<style lang="less">
.privacy {
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


