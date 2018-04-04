<template>
  <f7-page class="conversion">
        <f7-navbar>
          <f7-nav-left sliding><f7-link class="iconfont icon-zuo" @click="$f7router.back()"></f7-link></f7-nav-left>
          <f7-nav-title>招教币兑换</f7-nav-title>
          <f7-nav-right>
              <f7-link class="navbrleft" @click="done()">兑换</f7-link>
          </f7-nav-right>
        </f7-navbar>
        <f7-list inline-labels no-hairlines-md>

        <f7-list-item>
          <f7-icon icon="demo-list-icon" slot="media"></f7-icon>
          <f7-input type="tel" :value="mobile" @input="mobile = $event.target.value" resizable placeholder="请输入卡号"  ></f7-input>
        </f7-list-item>
        <f7-list-item>
          <f7-icon icon="demo-list-icon" slot="media"></f7-icon>
          <f7-input type="tel" :value="incode" @input="incode = $event.target.value" resizable placeholder="请输入卡密"  clear-button></f7-input>
        </f7-list-item>
      </f7-list>

  </f7-page>
</template>
<script>
import global_ from "../../../pages/Global"; //引用模块进来
export default {
  data: function() {
    return {
      url: "http://39.106.134.125:8080/netschool/",
      mobile: "",
      incode: ""
    };
  },
  methods: {
    done() {
      console.log(1)
      this.$http
        .get(this.url + "/personal/exchange", {
          params: {
            number: this.mobile,
            password:this.incode
          }
        })
        .then(function(res) {
          if(res.body.code == 0){
             let toastCenter = this.$f7.toast.create({
              text: "兑换失败",
              position: "center",
              closeTimeout: 2000
            });
            toastCenter.open();
          }else if(res.body.code == 1){
            let toastCenter = this.$f7.toast.create({
              text: "兑换成功",
              position: "center",
              closeTimeout: 2000
            });
            toastCenter.open();
          }else if(res.body.code == 2){
            let toastCenter = this.$f7.toast.create({
              text: "不存在待兑换卡券！",
              position: "center",
              closeTimeout: 2000
            });
            toastCenter.open();
          }

        });
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
#code1 {
  background-color: #666;
}
#code {
  background-color: #00aaee;
}
.conversion {
  .list {
    .link {
      width: 94px;
      background-color: #cccccc;
      font-family: "PingFang-SC-Regular";
      font-size: 12px;
      color: #ffffff;
      height: 100%;
    }
    .iconfont {
      background-color: transparent;
      color: #ccc;
      font-size: 16px;
      width: 50px;
    }
  }
}
</style>


