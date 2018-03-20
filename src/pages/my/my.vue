<template>
  <f7-page class="my">
  <f7-toolbar>
        <f7-link  href="/home" :reload-all="true" :animate="true"><span></span><p>首页</p></f7-link>
        <f7-link  href="/nLiveStreaming" :reload-all="true" :animate="true"><span></span><p>直播</p></f7-link>
        <f7-link href="/recordedBroadcast" :reload-all="true" :animate="true"><span></span><p>录播</p></f7-link>
        <f7-link href="/questionBankhome" :reload-all="true" :animate="true"><span></span><p>题库</p></f7-link>
        <f7-link href="/my" :reload-all="true" :animate="true"><span></span><p>我的</p></f7-link>
      </f7-toolbar>
    <div class="top">
      <div>
        <h5>
          <img :src=url+userinfo.img alt="">
          <p>{{userinfo.user_name}}</p>
          <span>招教币：{{userinfo.balance}}</span>
        </h5>
        <div class="row">
          <div class="col-25"> <f7-link href="/myCollect"><span></span><p>我的收藏</p></f7-link> </div>
          <div class="col-25"> <f7-link href="/examinationPaper"><span></span><p>我的试卷</p></f7-link> </div>
          <div class="col-25"> <f7-link href="/note"><span></span><p>我的笔记</p></f7-link> </div>
          <div class="col-25"> <f7-link href="/wrongTopicHighlights"><span></span><p>我的错题</p></f7-link> </div>
        </div>
      </div>
    </div>
    <div class="mid">
      <ul>
        <li>
          <f7-link href="/myOrder"><span></span>  我的订单 <i class="iconfont icon-you"></i></f7-link>
          <f7-link href="/shoppingTrolley"><span></span>  购物车 <i class="iconfont icon-you"></i></f7-link>
          <!--<f7-link href="/checkTheLogistics"><span></span>  物流详情 <i class="iconfont icon-you"></i></f7-link>-->
          <f7-link href="/discountCoupon"><span></span>  优惠券 <i n  class="iconfont icon-you"></i></f7-link>
        </li>
      </ul>
      <ul>
        <li>
          <f7-link href="/myCourses"><span></span>  我的课程 <i class="iconfont icon-you"></i></f7-link>
          <f7-link href="/watchTheRecord"><span></span>  观看记录 <i class="iconfont icon-you"></i></f7-link>
          <f7-link href="/conversion"><span></span>  招教币兑换 <i class="iconfont icon-you"></i></f7-link>
          <!-- <f7-link><span></span>  离线缓存 <i class="iconfont icon-you"></i></f7-link> -->
        </li>
      </ul>
      <ul>
        <li>
          <f7-link><span></span>  邀请好友 <i class="iconfont icon-you"></i></f7-link>
          <f7-link><span></span>  在线客服 <i class="iconfont icon-you"></i></f7-link>
          <f7-link href="/setSettingUpInstall"><span></span>  设置 <i class="iconfont icon-you"></i></f7-link>
        </li>
      </ul>
    </div>
  </f7-page>
</template>
<script>
import global_ from "../../pages/Global"; //引用模块进来
export default {
  data: function() {
    return {
      userinfo: "",
      url: "http://localhost:8080/shiro_test"
    };
  },
  methods: {},
  created: function() {
    let url = "http://192.168.0.130:8080/shiro_test";

    this.$http.get(url + "/personal/loginState", {}).then(
      function(res) {
        console.log(res.data.data);
        this.userinfo = res.data.data;
        global_.userinfo = res.data.data;
      },
      function(res) {
        console.log(res.status);
      }
    );
  }
};
</script>
<style lang="less">
.my {
  .page-content {
    padding-bottom: 60px !important;
  }
  .top {
    height: 190px;
    background: url(../../assets/my.png) repeat 0 0;
    margin-top: -44px;
    padding: 0 12px;
    padding-top: 94px;
    margin-bottom: 90px;
    > div {
      background-color: #fff;
      border-radius: 10px;
      padding-bottom: 20px;
      -ms-filter: "progid:DXImageTransform.Microsoft.Shadow(Strength=28, Direction=143, Color=#454545)"; /*IE 8*/
      -moz-box-shadow: 4px 3px 28px -8px rgba(69, 69, 69, 0.5); /*FF 3.5+*/
      -webkit-box-shadow: 4px 3px 28px -8px rgba(69, 69, 69, 0.5); /*Saf3-4, Chrome, iOS 4.0.2-4.2, Android 2.3+*/
      box-shadow: 4px 3px 28px -8px rgba(69, 69, 69, 0.5); /* FF3.5+, Opera 9+, Saf1+, Chrome, IE10 */
      filter: progid:DXImageTransform.Microsoft.Shadow(
          Strength=28,
          Direction=135,
          Color=#454545
        ); /*IE 5.5-7*/
      > h5 {
        font-weight: 400;
        position: relative;
        padding-left: 110px;
        height: 74px;
        padding-top: 14px;
        > img {
          position: absolute;
          width: 74px;
          height: 74px;
          border-radius: 50%;
          left: 20px;
          top: -14px;
        }
        > p {
          font-family: "PingFang-SC-Medium";
          font-size: 16px;
          color: #333333;
        }
        > span {
          font-family: "PingFang-SC-Regular";
          font-size: 12px;
          color: #999999;
        }
      }
      > .row {
        .col-25 {
          text-align: center;
          .link {
            display: block;
            color: #333;
            > span {
              display: inline-block;
              width: 22px;
              height: 22px;
              background-color: #000;
            }
          }
        }
      }
    }
  }
  .mid {
    padding: 0 12px;
    > ul {
      background-color: #fff;
      border-radius: 10px;
      margin-bottom: 20px;
      > li {
        padding: 0 20px;
        > .link {
          padding-left: 26px;
          display: block;
          font-family: "PingFang-SC-Regular";
          font-size: 16px;
          color: #333333;
          position: relative;
          line-height: 40px;
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
          }
        }
      }
    }
  }
}
</style>


