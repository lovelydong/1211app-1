<template>
  <f7-page class="indent">
        <f7-navbar>
          <f7-nav-left sliding><f7-link class="iconfont icon-zuo" @click="$f7router.back()"></f7-link></f7-nav-left>
          <f7-nav-title>提交订单</f7-nav-title>
        </f7-navbar>
        <div class="mid">
          <f7-link class="top" href="/myAddress">
            <h4><i class="iconfont icon-dizhi"></i>收货人：{{receiveraddress.userName}}      {{receiveraddress.phone}}</h4>
            <p>收货地址：{{receiveraddress.address}}</p>
            <i class="iconfont icon-you"></i>
          </f7-link>
          <div class="com" v-for="item in listJson.data" :key="item.id">
                <f7-link>
                    <span :style="{backgroundImage: 'url('+ url + item.img + ')' }"></span>
                    <div>
                      <p>{{item.goodsName}}</p>
                      <p>￥{{item.pay_amount}}</p>
                    </div>
                </f7-link>
          </div>

          <div class="pay">
            <h5>选择支付方式</h5>
            <f7-link :class="{active:Alipay}" @click="Alipay = !Alipay;WeChatPay = false"> <i class="iconfont icon-zhifubao"></i> 支付宝 <span><i class="iconfont icon-iconfontcheck"></i></span></f7-link>
            <f7-link :class="{active:WeChatPay}" @click="WeChatPay = !WeChatPay;Alipay = false"> <i class="iconfont icon-weixin-copy"></i> 微信 <span><i class="iconfont icon-iconfontcheck"></i></span></f7-link>
          </div>
          <f7-link class="zjb" :class="{active:ForteachingB}" @click="ForteachingB = !ForteachingB; dik()"><i class="iconfont icon-qian"></i> 招教币抵扣 <em>（最高抵扣15%）</em><span><i class="iconfont icon-iconfontcheck"></i></span></f7-link>
          <f7-link :href="'/shoppingdiscountCoupon?order_number='+ $f7route.query.order_number" class="discount">优惠券 <span> {{yhq}} <i class="iconfont icon-you"></i></span></f7-link>
        </div>
        <div class="bot">
          <p>招教币已抵扣{{msg}}<span>合计:</span><em>￥{{pay}}</em></p>
          <f7-link @click="PayApp" >结算（{{listJsonLength}}）</f7-link>
        </div>
  </f7-page>
</template>
<script>
import Global from "../../Global.vue";

export default {
  data: function() {
    return {
      url: "http://39.106.134.125:8080/netschool/",
      Alipay: false,
      WeChatPay: false,
      ForteachingB: false,
      listJson: {},
      receiveraddress: {
        userName: "***",
        phone: "*****",
        address: "******"
      },
      listJsonLength: 0,
      shoppingsid: [],
      balance: 0,
      msg: 0,
      pay: 0,
      you: 0,
      yhq: ""
    };
  },
  methods: {
    idsFn() {
      let stringids = "?ids=";
      this.shoppingsid.forEach((element, index) => {
        if (index + 1 == this.shoppingsid.length) {
          stringids += element;
        } else {
          stringids += element + "&ids=";
        }
      });
      console.log(stringids);
      return stringids;
    },
    dik() {
      if (this.ForteachingB) {
        this.msg = this.balance;
        this.pay = this.listJson.msg - this.balance;
      } else {
        this.msg = 0;
        this.pay = this.listJson.msg;
      }
    },
    PayApp() {
      if (this.Alipay || this.WeChatPay) {
        let flag = 0;
        if (this.ForteachingB) {
          flag = 1;
        }
        let pay = 0;
        if (this.Alipay) {
          pay = 1; //支付宝支付
        } else if (this.WeChatPay) {
          pay = 2; //微信支付
        }
        this.$f7router.navigate(
          "/pay?order=" +
            this.$f7route.query.order_number +
            "&couponid=" +
            Global.usershoppingID +
            "&flag=" +
            flag +
            "&pay=" +
            pay
        );
      } else {
        let toastCenter = this.$f7.toast.create({
          text: "请选择支付方式",
          position: "center",
          closeTimeout: 2000
        });
        toastCenter.open();
      }
    }
  },
  created() {
    //订单详情
    this.$http
      .get(this.url + "/sxorder/listJson", {
        params: {
          state: 1,
          order_number: this.$f7route.query.order_number
        }
      })
      .then(function(res) {
        this.listJson = res.body;
        this.pay = this.listJson.msg;
        this.listJsonLength = res.body.data.length;
        res.body.data.forEach(element => {
          this.shoppingsid.push(element.id);
        });

        //获取可用优惠券
        let ids = this.idsFn();
        Global.usershoppingIDS = ids + "&amount=" + this.listJson.msg;
        this.$http
          .get(
            this.url +
              "/sxcouponsend/getCoupon" +
              ids +
              "&amount=" +
              this.listJson.msg,
            {}
          )
          .then(function(res) {
            console.log(res);
            console.log(
              "分界线————————————————————————————————————————————————————————"
            );
            this.you = res.body.data.length;
            if (Global.usershoppingID) {
              res.body.data.forEach(element => {
                if (element.id == Global.usershoppingID) {
                  this.yhq = "- " + element.amount;
                  this.listJson.msg = this.listJson.msg - element.amount;
                  this.pay = this.listJson.msg;
                }
              });
            } else {
              this.yhq = this.you + "张可用";
            }
          });
        //获取招教币
        this.$http
          .get(this.url + "/personal/loginState", {})
          .then(function(res) {
            console.log(res);
            let balance = res.body.data.balance;
            let msg = this.listJson.msg * 0.15;
            if (msg < balance) {
              this.balance = msg;
            } else {
              this.balance = balance;
            }
            console.log(balance);
          });
      });
    //获取收件人信息接口
    this.$http
      .get(this.url + "/receiveraddress/listJson", {})
      .then(function(res) {
        if (res.body.data) {
          this.receiveraddress = res.body.data;
        }
        console.log("---------------------------------------");
        console.log(res);
      });
  }
};
</script>
<style lang="less">
.indent {
  .page-content {
    padding-bottom: 60px;
  }
  .mid {
    padding: 20px 14px;
    > .top {
      display: block;
      min-height: 84px;
      background-color: #fff;
      border-radius: 10px;
      width: 100%;
      padding: 16px 36px;
      position: relative;
      > .iconfont {
        position: absolute;
        top: 50%;
        right: 10px;
        transform: translateY(-50%);
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
    > .com {
      display: block;
      padding: 10px 15px;
      min-height: 106px;
      position: relative;
      background-color: #fff;
      border-radius: 10px;
      margin: 20px 0;
      > .link {
        display: block;
        > span {
          width: 120px;
          height: 86px;
          background: url(https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1519301525135&di=dd2fed90de9f2622da9e2c6f51d3888b&imgtype=0&src=http%3A%2F%2F5b0988e595225.cdn.sohucs.com%2Fimages%2F20170922%2Fca414a2cf9b34ec49aff78f350b0ec87.gif)
            no-repeat center center;
          border-radius: 12px;
          position: absolute;
          left: 0;
          top: 0;
          > em {
            width: 50px;
            height: 20px;
            background-color: rgba(253, 93, 50, 0.7);
            position: absolute;
            right: 0;
            bottom: 10px;
            font-family: "PingFang-SC-Regular";
            font-size: 10px;
            color: #ffffff;
            text-align: center;
            line-height: 20px;
            border-top-left-radius: 15px;
            border-bottom-left-radius: 15px;
          }
        }
        > div {
          vertical-align: top;
          width: 100%;
          float: left;
          padding-left: 130px;
          > p {
            font-family: "PingFang-SC-Regular";
            font-size: 16px;
            color: #333333;
          }
          > p:nth-of-type(2) {
            font-family: "PingFang-SC-Medium";
            font-size: 16px;
            color: #fd2d44;
          }
        }
      }
      > .yuan {
        width: 62px;
        height: 100%;
        position: absolute;
        left: 0;
        top: 0;
        > div {
          width: 20px;
          height: 20px;
          border: solid 2px #d2d2d2;
          position: absolute;
          padding: 0;
          top: 50%;
          left: 50%;
          transform: translate(-50%, -50%);
          border-radius: 50%;
          background-color: #efeff4;
          > div {
            position: absolute;
            width: 8px;
            height: 8px;
            background-color: #efeff4;
            top: 50%;
            left: 50%;
            transform: translate(-50%, -50%);
            border-radius: 50%;
          }
        }
        > .active {
          border-color: #fd2d44;
          > div {
            background-color: #fd2d44;
          }
        }
      }
    }
    > .pay {
      background-color: #fff;
      border-radius: 10px;
      padding: 15px;
      > h5 {
        font-family: "PingFang-SC-Medium";
        font-size: 16px;
        color: #333333;
        text-align: center;
        font-weight: 400;
      }
      > .link {
        display: block;
        height: 50px;
        width: 100%;
        line-height: 50px;
        font-family: "PingFang-SC-Medium";
        font-size: 16px;
        color: #333333;
        position: relative;
        padding-left: 40px;
        > i {
          color: #00aaee;
          font-size: 30px;
          position: absolute;
          left: 0;
          top: 50%;
          transform: translateY(-50%);
        }
        > .icon-weixin-copy {
          color: #00be12;
        }
        > span {
          position: absolute;
          top: 50%;
          transform: translateY(-50%);
          right: 15px;
          width: 25px;
          height: 25px;
          border-radius: 50%;
          border: solid 2px #cccccc;
          > i {
            position: absolute;
            top: 50%;
            left: 50%;
            transform: translate(-50%, -50%);
            color: #fff;
          }
        }
      }
      > .active {
        > span {
          background-color: #00d214;
          border-color: #00d214;
        }
      }
    }
    > .zjb {
      display: block;
      height: 65px;
      background-color: #fff;
      border-radius: 10px;
      padding: 0 15px;
      margin: 20px 0;
      line-height: 65px;
      width: 100%;
      font-family: "PingFang-SC-Medium";
      font-size: 16px;
      color: #333333;
      position: relative;
      padding-left: 55px;
      > em {
        font-family: "PingFang-SC-Medium";
        color: #999999;
      }
      > i {
        color: #fd5d32;
        font-size: 30px;
        position: absolute;
        left: 15px;
        top: 50%;
        transform: translateY(-50%);
      }
      > .icon-weixin-copy {
        color: #00be12;
      }
      > span {
        position: absolute;
        top: 50%;
        transform: translateY(-50%);
        right: 30px;
        width: 25px;
        height: 25px;
        border-radius: 50%;
        border: solid 2px #cccccc;
        > i {
          position: absolute;
          top: 50%;
          left: 50%;
          transform: translate(-50%, -50%);
          color: #fff;
        }
      }
    }
    > .active {
      > span {
        background-color: #00d214;
        border-color: #00d214;
      }
    }
    > .discount {
      display: block;
      height: 44px;
      background-color: #fff;
      border-radius: 10px;
      padding: 0 15px;
      margin: 20px 0;
      line-height: 44px;
      width: 100%;
      font-family: "PingFang-SC-Medium";
      font-size: 16px;
      color: #333333;
      position: relative;
      padding-left: 15px;
      > span {
        font-family: "PingFang-SC-Medium";
        font-size: 13px;
        color: #999999;
        float: right;
      }
    }
  }
  .bot {
    height: 50px;
    background-color: #fff;
    position: fixed;
    width: 100%;
    bottom: 0;
    left: 0;
    padding-left: 12px;
    padding-right: 110px;
    z-index: 99;
    > .link {
      font-family: "PingFang-SC-Regular";
      font-size: 16px;
      color: #ffffff;
      background-color: #fd2d44;
      height: 100%;
      width: 110px;
      position: absolute;
      right: 0;
      top: 0;
    }

    > p {
      height: 100%;
      line-height: 50px;
      font-family: "PingFang-SC-Regular";
      font-size: 12px;
      color: #999999;
      min-width: 162px;
      > span {
        font-family: "PingFang-SC-Medium";
        font-size: 16px;
        color: #333333;
        margin-left: 5px;
      }
      > em {
        font-family: "PingFang-SC-Medium";
        font-size: 16px;
        color: #fd5d32;
      }
    }
  }
}
</style>


