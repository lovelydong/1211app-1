<template>
  <f7-page class="myOrder">
        <f7-navbar>
          <f7-nav-left sliding><f7-link class="iconfont icon-zuo" @click="$f7router.back()"></f7-link></f7-nav-left>
          <f7-nav-title>我的订单</f7-nav-title>
          <f7-nav-right>
            <f7-link class="iconfont icon-sousuo" href="/search/"></f7-link>
            <f7-link class="iconfont icon-gengduo" @click="shows.showTop = !shows.showTop"></f7-link>
          </f7-nav-right>
        </f7-navbar>
        <f7-subnavbar sliding>
          <transition
                  name="custom-classes-transition"
                  enter-active-class="animated pulse"
                >
          <div class="TopsZ" v-if="shows.showTop" >
            <em></em>
            <ul>
              <f7-link><i class="iconfont icon-xiaoxi1"></i> 系统消息</f7-link>
              <f7-link><i class="iconfont icon-shouye"></i> 返回首页</f7-link>
              <f7-link><i class="iconfont icon-saoyisao"></i> 扫一扫</f7-link>
              <f7-link><i class="iconfont icon-gouwuche"></i> 购物车</f7-link>
              <f7-link  @click="shareboy"><i class="iconfont icon-fenxiang"></i> 分享</f7-link>
            </ul>
          </div>
          </transition>
          <f7-segmented>
            <f7-button tab-link="#tab1" tab-link-active>全部</f7-button>
            <f7-button tab-link="#tab2">待付款</f7-button>
            <f7-button tab-link="#tab3">待收货</f7-button>
            <f7-button tab-link="#tab4">已取消</f7-button>
          </f7-segmented>
        </f7-subnavbar>
        <div class="tabs">
           <div id="tab1" class="tab tab-active">
             <ul>
               <li>
                 <p>订单编号：FG258486485621</p>
                 <div class="con">
                    <img src="http://upfile2.asqql.com/upfile/2009pasdfasdfic2009s305985-ts/gif_spic/2018-2/201821820474911302.gif" alt="">
                    <div>
                      <p>18教师资格笔试+面试协议班课程</p>
                      <p>￥138.00 &nbsp;&nbsp;<span>优惠：0.00</span></p>
                    </div>
                 </div>
                 <div class="bot">实付：<span>￥138.00</span>  <div><f7-link>查看物流</f7-link><f7-link>确认收货</f7-link></div></div>
               </li>
             </ul>
             <ul>
               <li>
                 <p>订单编号：FG258486485621</p>
                 <div class="con">
                    <img src="http://upfile2.asqql.com/upfile/2009pasdfasdfic2009s305985-ts/gif_spic/2018-2/201821820474911302.gif" alt="">
                    <div>
                      <p>18教师资格笔试+面试协议班课程</p>
                      <p>￥138.00 &nbsp;&nbsp;<span>优惠：0.00</span></p>
                    </div>
                 </div>
                 <div class="bot">实付：<span>￥138.00</span>  <div><f7-link>查看物流</f7-link><f7-link>确认收货</f7-link></div></div>
               </li>
             </ul>
           </div>
           <div id="tab2" class="tab">
             <ul class="Nopay">
               <li>
                 <p>订单编号：FG258486485621</p>
                 <div class="con">
                    <img src="http://upfile2.asqql.com/upfile/2009pasdfasdfic2009s305985-ts/gif_spic/2018-2/201821820474911302.gif" alt="">
                    <div>
                      <p>18教师资格笔试+面试协议班课程</p>
                      <p>￥138.00 &nbsp;&nbsp;<span>优惠：0.00</span></p>
                    </div>
                 </div>
                 <div class="bot">实付：<span>￥138.00</span>  <div><f7-link>取消订单</f7-link><f7-link>立即付款</f7-link></div></div>
               </li>
             </ul>
             <ul class="Nopay">
               <li>
                 <p>订单编号：FG258486485621</p>
                 <div class="con">
                    <img src="http://upfile2.asqql.com/upfile/2009pasdfasdfic2009s305985-ts/gif_spic/2018-2/201821820474911302.gif" alt="">
                    <div>
                      <p>18教师资格笔试+面试协议班课程</p>
                      <p>￥138.00 &nbsp;&nbsp;<span>优惠：0.00</span></p>
                    </div>
                 </div>
                 <div class="bot">实付：<span>￥138.00</span>  <div><f7-link>取消订单</f7-link><f7-link>立即付款</f7-link></div></div>
               </li>
             </ul>
           </div>
           <div id="tab3" class="tab">
             <ul>
               <li>
                 <p>订单编号：FG258486485621</p>
                 <div class="con">
                    <img src="http://upfile2.asqql.com/upfile/2009pasdfasdfic2009s305985-ts/gif_spic/2018-2/201821820474911302.gif" alt="">
                    <div>
                      <p>18教师资格笔试+面试协议班课程</p>
                      <p>￥138.00 &nbsp;&nbsp;<span>优惠：0.00</span></p>
                    </div>
                 </div>
                 <div class="bot">实付：<span>￥138.00</span>  <div><f7-link>查看物流</f7-link><f7-link>确认收货</f7-link></div></div>
               </li>
             </ul>
             <ul>
               <li>
                 <p>订单编号：FG258486485621</p>
                 <div class="con">
                    <img src="http://upfile2.asqql.com/upfile/2009pasdfasdfic2009s305985-ts/gif_spic/2018-2/201821820474911302.gif" alt="">
                    <div>
                      <p>18教师资格笔试+面试协议班课程</p>
                      <p>￥138.00 &nbsp;&nbsp;<span>优惠：0.00</span></p>
                    </div>
                 </div>
                 <div class="bot">实付：<span>￥138.00</span>  <div><f7-link>查看物流</f7-link><f7-link>确认收货</f7-link></div></div>
               </li>
             </ul>
           </div>
           <div id="tab4" class="tab">
             <ul class="Nopay">
               <li>
                 <p>订单编号：FG258486485621</p>
                 <div class="con">
                    <img src="http://upfile2.asqql.com/upfile/2009pasdfasdfic2009s305985-ts/gif_spic/2018-2/201821820474911302.gif" alt="">
                    <div>
                      <p>18教师资格笔试+面试协议班课程</p>
                      <p>￥138.00 &nbsp;&nbsp;<span>优惠：0.00</span></p>
                    </div>
                 </div>
                 <div class="bot">实付：<span>￥138.00</span>  <div><f7-link>删除订单</f7-link><f7-link>重新购买</f7-link></div></div>
               </li>
             </ul>
             <ul class="Nopay">
               <li>
                 <p>订单编号：FG258486485621</p>
                 <div class="con">
                    <img src="http://upfile2.asqql.com/upfile/2009pasdfasdfic2009s305985-ts/gif_spic/2018-2/201821820474911302.gif" alt="">
                    <div>
                      <p>18教师资格笔试+面试协议班课程</p>
                      <p>￥138.00 &nbsp;&nbsp;<span>优惠：0.00</span></p>
                    </div>
                 </div>
                 <div class="bot">实付：<span>￥138.00</span>  <div><f7-link>删除订单</f7-link><f7-link>重新购买</f7-link></div></div>
               </li>
             </ul>
           </div>
        </div>


        <Share ref="c1"></Share>
  </f7-page>
</template>
<script>
export default {
  data: function() {
    return {
      shows: {
        showTop: false
      }
    };
  },
  methods: {
    shareboy: function(data) {
      this.$refs.c1.sharefn();
    }
  }
};
</script>
<style lang="less">
.myOrder {
  .subnavbar {
    background-color: #fff;
    .segmented {
      .tab-link {
        background-color: #fff;
        color: #333;
        border: 0;
        font-family: "PingFang-SC-Regular";
        font-size: 16px;
        position: relative;
      }
      .tab-link-active {
        color: #fd2d44;
      }
      .tab-link-active:before {
        content: " ";
        position: absolute;
        bottom: -2px;
        left: 50%;
        transform: translateX(-50%);
        width: 20%;
        background-color: #fd2d44;
        height: 4px;
      }
    }
  }
  .tabs {
    .tab {
      padding: 20px 12px;

      > ul {
        background-color: #fff;
        border-radius: 10px;
        margin-bottom: 20px;
        > li {
          > p {
            font-family: "PingFang-SC-Regular";
            font-size: 14px;
            line-height: 40px;
            color: #999999;
            padding-left: 16px;
            border-bottom: 1px solid #f5f5f5;
          }
          > .con {
            padding: 15px 0;
            position: relative;
            border-bottom: 1px solid #f5f5f5;
            > img {
              width: 100px;
              height: 75px;
              position: absolute;
              top: 50%;
              left: 15px;
              transform: translateY(-50%);
            }
            > div {
              min-height: 75px;
              padding-left: 128px;
              > p {
                font-family: "PingFang-SC-Regular";
                font-size: 14px;
                color: #000000;
              }
              > p:nth-of-type(2) {
                margin-top: 20px;
                font-family: "PingFang-SC-Medium";
                font-size: 14px;
                color: #fd2d44;
                > span {
                  font-family: "PingFang-SC-Regular";
                  font-size: 14px;
                  color: #999999;
                }
              }
            }
          }
          > .bot {
            height: 56px;
            line-height: 56px;
            font-family: "PingFang-SC-Medium";
            font-size: 14px;
            color: #333333;
            padding: 0 15px;
            > span {
              color: #fd2d44;
            }
            > div {
              float: right;
              > .link {
                display: inline;
                padding: 8px 12px;
                border: 1px solid #cccccc;
                margin-left: 15px;
                border-radius: 37px;
                font-family: "PingFang-SC-Regular";
                font-size: 14px;
                color: #666666;
              }
              > .link:nth-of-type(2) {
                background-color: #fd2d44;
                color: #fff;
                border-color: #fd2d44;
              }
            }
          }
        }
      }
      > .Nopay {
        .bot {
          .link {
            border-color: #fd2d44;
            color: #fd2d44;
          }
          .link:nth-of-type(2) {
            border-color: #fd6600;
            background-color: #fd6600;
            color: #fff;
          }
        }
      }
    }
  }
}
</style>


