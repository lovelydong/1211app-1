<template>
  <f7-page class="my">
  <f7-toolbar>
			<f7-link href="/home" :reload-all="true" :animate="true"><span class="toolbarlog1"></span>
				<p>首页</p>
			</f7-link>
			<f7-link href="/nLiveStreaming" :reload-all="true" :animate="true"><span class="toolbarlog2"></span>
				<p >直播</p>
			</f7-link>
			<f7-link href="/recordedBroadcast" :reload-all="true" :animate="true"><span class="toolbarlog3"></span>
				<p>录播</p>
			</f7-link>

			<f7-link :href="'/questionBankhome?classtype='+limittype" :reload-all="true" :animate="true"><span class="toolbarlog4"></span>
				<p>题库</p>
			</f7-link>
			<f7-link href="/my" :reload-all="true" :animate="true"><span class="toolbarlog5"></span>
				<p  style="color: #fd2d44;">我的</p>
			</f7-link>
		</f7-toolbar>
    <div class="top">
      <div>
        <h5>
          <img :src=url+userinfo.img alt="">
          <p>{{userinfo.user_name}}</p>
          <span>招教币：{{userinfo.balance}}</span>
        </h5>
        <div class="row">
          <div class="col-25"> <f7-link href="/myCollect"><span class="bgtop1"></span><p>我的收藏</p></f7-link> </div>
          <div class="col-25"> <f7-link href="/examinationPaper"><span  class="bgtop2"></span><p>我的试卷</p></f7-link> </div>
          <div class="col-25"> <f7-link href="/note"><span  class="bgtop3"></span><p>我的笔记</p></f7-link> </div>
          <div class="col-25"> <f7-link href="/wrongTopicHighlights"><span  class="bgtop4"></span><p>我的错题</p></f7-link> </div>
        </div>
      </div>
    </div>
    <div class="mid">
      <ul>
        <li>
          <f7-link href="/myOrder"><span class="bgmid1"></span>  我的订单 <i class="iconfont icon-you"></i></f7-link>
          <f7-link href="/shoppingTrolley"><span class="bgmid2"></span>  购物车 <i class="iconfont icon-you"></i></f7-link>
          <!--<f7-link href="/checkTheLogistics"><span></span>  物流详情 <i class="iconfont icon-you"></i></f7-link>-->
          <f7-link href="/discountCoupon"><span class="bgmid3"></span>  优惠券 <i n  class="iconfont icon-you"></i></f7-link>
        </li>
      </ul>
      <ul>
        <li>
          <f7-link href="/myCourses"><span class="bgmid4"></span>  我的课程 <i class="iconfont icon-you"></i></f7-link>
          <f7-link href="/watchTheRecord"><span class="bgmid5"></span>  观看记录 <i class="iconfont icon-you"></i></f7-link>
          <f7-link href="/conversion"><span class="bgmid6"></span>  招教币兑换 <i class="iconfont icon-you"></i></f7-link>
          <!-- <f7-link><span></span>  离线缓存 <i class="iconfont icon-you"></i></f7-link> -->
        </li>
      </ul>
      <ul>
        <li>
          <f7-link @click=qidai()><span class="bgmid7"></span >  邀请好友 <i class="iconfont icon-you"></i></f7-link>
          <f7-link @click=qidai()><span  class="bgmid8"></span>  在线客服 <i class="iconfont icon-you"></i></f7-link>
          <f7-link href="/setSettingUpInstall"><span class="bgmid9"></span>  设置 <i class="iconfont icon-you"></i></f7-link>
        </li>
      </ul>
    </div>
  </f7-page>
</template>
<script>
import global_ from "../Global.vue";//引用模块进来

export default {
  data: function() {
    return {
      userinfo: "",
      url: "http://39.106.134.125:8080/netschool/",
      // url: "http://localhost:8080/shiro_test/",

      limittype: global_.limittype
    };
  },
  methods: {
  	qidai:function()
  	{
  		 let toastCenter = this.$f7.toast.create({
              text: "敬请期待！",
              position: "center",
              closeTimeout: 2000
            });
            toastCenter.open();
  	}
  },
  created: function() {


    this.$http.get(this.url + "/personal/loginState", {
    	params: {
              token:global_.token
            }
    	
    }).then(
      function(res) {
        console.log(res);
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
  .bgmid1 {
    background: url(../../assets/jingling.png) no-repeat -136px -297px;
    background-color: transparent !important;
  }
  .bgmid2 {
    background: url(../../assets/jingling.png) no-repeat -36px -297px;
    background-color: transparent !important;
  }
  .bgmid3 {
    background: url(../../assets/jingling.png) no-repeat -1px -297px;
    background-color: transparent !important;
  }
  .bgmid4 {
    background: url(../../assets/jingling.png) no-repeat -102px -297px;
    background-color: transparent !important;
  }
  .bgmid5 {
    background: url(../../assets/jingling.png) no-repeat -237px -297px;
    background-color: transparent !important;
  }
  .bgmid6 {
    background: url(../../assets/jingling.png) no-repeat -302px -297px;
    background-color: transparent !important;
  }
  .bgmid7 {
    background: url(../../assets/jingling.png) no-repeat -68px -297px;
    background-color: transparent !important;
  }
  .bgmid8 {
    background: url(../../assets/jingling.png) no-repeat -204px -297px;
    background-color: transparent !important;
  }
  .bgmid9 {
    background: url(../../assets/jingling.png) no-repeat -272px -297px;
    background-color: transparent !important;
  }
  .bgtop1 {
    background: url(../../assets/jingling.png) no-repeat -116px -238px;
    background-color: transparent !important;
    width: 24px !important;
    height: 24px !important;
  }
  .bgtop2 {
    background: url(../../assets/jingling.png) no-repeat -78px -238px;
    background-color: transparent !important;
    width: 24px !important;
    height: 24px !important;
  }
  .bgtop3 {
    background: url(../../assets/jingling.png) no-repeat -38px -238px;
    background-color: transparent !important;
    width: 24px !important;
    height: 24px !important;
  }
  .bgtop4 {
    background: url(../../assets/jingling.png) no-repeat 0px -238px;
    background-color: transparent !important;
    width: 24px !important;
    height: 24px !important;
  }
  .toolbarlog1 {
    background: url(../../assets/jingling.png) no-repeat 0px -137px;
    background-color: transparent !important;
  }
  .toolbarlog2 {
    background: url(../../assets/jingling.png) no-repeat -116px -137px;
    background-color: transparent !important;
  }
  .toolbarlog3 {
    background: url(../../assets/jingling.png) no-repeat -39px -137px;
    background-color: transparent !important;
  }
  .toolbarlog4 {
    background: url(../../assets/jingling.png) no-repeat -77px -137px;
    background-color: transparent !important;
  }
  .toolbarlog5 {
    background: url(../../assets/jingling.png) no-repeat -182px -87px;
    background-color: transparent !important;
  }
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


