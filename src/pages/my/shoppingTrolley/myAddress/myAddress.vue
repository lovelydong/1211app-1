<template>
  <f7-page class="myAddress">
        <f7-navbar>
          <f7-nav-left sliding><f7-link class="iconfont icon-zuo" @click="$f7router.back()"></f7-link></f7-nav-left>
          <f7-nav-title>地址管理</f7-nav-title>
        </f7-navbar>
        <div class="mid">
          <f7-link class="top " :class="{active:item.state == 1}" href="/newAddress" v-for="item in list" :key="item.id">
            <h4><i class="iconfont icon-dizhi"></i>收货人：{{item.userName}}      {{item.phone}}</h4>
            <p>收货地址：{{item.address}}</p>
            <i class="iconfont icon-icon6"></i>
          </f7-link>
        </div>
        <f7-link class="bot">
          新增收货地址
        </f7-link>
  </f7-page>
</template>
<script>
export default {
  data: function() {
    return {
      url: "http://localhost:8080/shiro_test",
      list:{},
    };
  },
  methods: {
  },
  created(){
    //获取收货地址列表
    this.$http
        .get(this.url + "/receiveraddress/listJsons", {
          params: {

          }
        })
        .then(function(res) {
          this.list = res.body.data;
          console.log(res);
          console.log(res);
        });
  }
};
</script>
<style lang="less">
.myAddress {
  .mid {
    > .top {
      display: block;
      min-height: 84px;
      width: 100%;
      padding: 16px 36px;
      position: relative;
      border-bottom: 1px solid #ccc;
      > .iconfont {
        position: absolute;
        top: 16px;
        right: 10px;
        color: #999;
      }
      > h4 {
        font-family: "PingFang-SC-Medium";
        font-size: 16px;
        color: #333333;
        font-weight: 400;
        position: relative;
        > i {
          color: #999999;
          position: absolute;
          left: -24px;
          top: -4px;
          font-size: 22px;
        }
      }
      > P {
        font-family: "PingFang-SC-Regular";
        font-size: 12px;
        color: #666666;
        margin-top: 10px;
      }
    }
    > .active {
      h4 {
        color: #fd5d32;
        > .iconfont {
          color: #fd5d32;
        }
      }
    }
  }
  .bot {
    width: 100%;
    height: 50px;
    background-color: #fd2d44;
    font-family: "PingFang-SC-Medium";
    font-size: 16px;
    color: #ffffff;
    position: fixed;
    bottom: 0;
    left: 0;
  }
}
</style>


