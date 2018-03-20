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
              <f7-link href="/news"><i class="iconfont icon-xiaoxi1"></i> 系统消息</f7-link>
              <f7-link href="/"><i class="iconfont icon-shouye"></i> 返回首页</f7-link>
              <f7-link><i class="iconfont icon-saoyisao"></i> 扫一扫</f7-link>
              <f7-link href="/shoppingTrolley"><i class="iconfont icon-gouwuche"></i> 购物车</f7-link>
              <f7-link  @click="shareboy"><i class="iconfont icon-fenxiang"></i> 分享</f7-link>
            </ul>
          </div>
          </transition>
          <f7-segmented>
            <f7-button tab-link="#tab1" tab-link-active>全部</f7-button>
            <f7-button tab-link="#tab2">待付款</f7-button>
            <f7-button tab-link="#tab3">待收货</f7-button>
            <f7-button tab-link="#tab4">已完成</f7-button>
          </f7-segmented>
        </f7-subnavbar>
        <div class="tabs">
           <div id="tab1" class="tab tab-active">
             <div v-for="(item,index) in tabAll" >
              <ul v-if="item.state == 2 || item.state == 4">
                <li>
                  <p>订单编号：{{item.order_number}}</p>
                  <div class="con">
                      <img :src="item.img" alt="" >
                      <div>
                        <p>{{item.goodsName}}</p>
                        <p>￥{{item.price}} &nbsp;&nbsp;<span>优惠：{{item.price - item.pay_amount}}</span></p>
                      </div>
                  </div>
                  <div class="bot">实付：<span>￥{{item.pay_amount}}</span>  <div><f7-link :href="'/checkTheLogistics?orderno='+item.id">查看物流</f7-link><f7-link>确认收货</f7-link></div></div>
                </li>
              </ul>
              <ul class="Nopay" v-else-if="item.state == 1 || item.state == 3">
                <li>
                  <p>订单编号：{{item.order_number}}</p>
                  <div class="con">
                      <img :src="item.img" alt="" >
                      <div>
                        <p>{{item.goodsName}}</p>
                          <p>￥{{item.price}} &nbsp;&nbsp;<span>优惠：{{item.price - item.pay_amount}}</span></p>
                      </div>
                  </div>
                  <div class="bot">实付：<span>￥{{item.pay_amount}}</span>  <div><f7-link @click="deleteOrderw(1,item.id,index)">取消订单</f7-link><f7-link>立即付款</f7-link></div></div>
                </li>
              </ul>
              <ul class="Nopay" v-else-if="item.state == 5">
                <li>
                  <p>订单编号：{{item.order_number}}</p>
                  <div class="con">
                      <img :src="item.img" alt="" >
                      <div>
                        <p>{{item.goodsName}}</p>
                          <p>￥{{item.price}} &nbsp;&nbsp;<span>优惠：{{item.price - item.pay_amount}}</span></p>
                      </div>
                  </div>
                  <div class="bot">实付：<span>￥{{item.pay_amount}}</span>  <div><f7-link @click="deleteOrder(1,item.id,index)">删除订单</f7-link><f7-link>立即评价</f7-link></div></div>
                </li>
              </ul>
            </div>

           </div>
           <div id="tab2" class="tab">
             <div v-for="(item,index) in tabAll1">
               <ul class="Nopay">
                <li>
                  <p>订单编号：{{item.order_number}}</p>
                  <div class="con">
                      <img :src="item.img" alt="" >
                      <div>
                        <p>{{item.goodsName}}</p>
                          <p>￥{{item.price}} &nbsp;&nbsp;<span>优惠：{{item.price - item.pay_amount}}</span></p>
                      </div>
                  </div>
                  <div class="bot">实付：<span>￥{{item.pay_amount}}</span>  <div><f7-link  @click="deleteOrderw(0,item.id,index)">取消订单</f7-link><f7-link>立即付款</f7-link></div></div>
                </li>
              </ul>
             </div>
           </div>
           <div id="tab3" class="tab">
             <div v-for="item in tabAll2">
               <ul>
                <li>
                  <p>订单编号：{{item.order_number}}</p>
                  <div class="con">
                      <img :src="item.img" alt="" >
                      <div>
                        <p>{{item.goodsName}}</p>
                          <p>￥{{item.price}} &nbsp;&nbsp;<span>优惠：{{item.price - item.pay_amount}}</span></p>
                      </div>
                  </div>
                  <div class="bot">实付：<span>￥{{item.pay_amount}}</span>  <div><f7-link :href="'/checkTheLogistics?orderno='+item.id">查看物流</f7-link><f7-link>确认收货</f7-link></div></div>
                </li>
              </ul>
             </div>
           </div>
           <div id="tab4" class="tab">
             <div  v-for="(item,index) in tabAll3">
               <ul class="Nopay" >
                <li>
                  <p>订单编号：{{item.order_number}}</p>
                  <div class="con">
                      <img :src="item.img" alt="" >
                      <div>
                        <p>{{item.goodsName}}</p>
                          <p>￥{{item.price}} &nbsp;&nbsp;<span>优惠：{{item.price - item.pay_amount}}</span></p>
                      </div>
                  </div>
                  <div class="bot">实付：<span>￥{{item.pay_amount}}</span>  <div><f7-link @click="deleteOrder(0,item.id,index)">删除订单</f7-link><f7-link :href="'/evaluate?id='+item.id">立即评价</f7-link></div></div>
                </li>
              </ul>
             </div>
           </div>
        </div>


        <Share ref="c1"></Share>
  </f7-page>
</template>
<script>
export default {
  data: function() {
    return {
      url: "http://localhost:8080/shiro_test",
      shows: {
        showTop: false
      },
      tabAll: {},
      tabAll1: {},
      tabAll2: {},
      tabAll3: {}
    };
  },
  methods: {
    shareboy: function(data) {
      this.$refs.c1.sharefn();
    },
    deleteOrder:function(a,num,index)
    {
    	if(a==1)
    	{
    		this.tabAll.splice(index,1);
    	this.$http
      .get(this.url + "/sxorder/del", {
        params: {
         order_number:num
        }
      })
      .then(function(res) {
       console.log(res)
       let toastCenter = this.$f7.toast.create({
								text: "删除成功！",
								position: "center",
								closeTimeout: 2000
							});
							toastCenter.open();
      });
    	}
    	else{
    		this.tabAll3.splice(index,1);
    	this.$http
      .get(this.url + "/sxorder/del", {
        params: {
         order_number:num
        }
      })
      .then(function(res) {
       console.log(res)
       let toastCenter = this.$f7.toast.create({
								text: "删除成功！",
								position: "center",
								closeTimeout: 2000
							});
							toastCenter.open();
      });
    	}

    },
    deleteOrderw:function(a,num,index)
    {
    	if(a==1)
    	{
    		this.tabAll.splice(index,1);
    	this.$http
      .get(this.url + "/sxorder/godel", {
        params: {
         order_number:num
        }
      })
      .then(function(res) {
       console.log(res)
       let toastCenter = this.$f7.toast.create({
								text: "删除成功！",
								position: "center",
								closeTimeout: 2000
							});
							toastCenter.open();
      });
    	}
    	else{
    		this.tabAll1.splice(index,1);
    	this.$http
      .get(this.url + "/sxorder/godel", {
        params: {
         order_number:num
        }
      })
      .then(function(res) {
       console.log(res)
       let toastCenter = this.$f7.toast.create({
								text: "删除成功！",
								position: "center",
								closeTimeout: 2000
							});
							toastCenter.open();
      });
    	}

    }
  },
  created() {
    //订单详情全部
    this.$http
      .get(this.url + "/sxorder/listPage", {
        params: {
          state: 0,
          page: 1,
          limit: 99
        }
      })
      .then(function(res) {
        this.tabAll = res.body.data;
      });
    //订单代付款
    this.$http
      .get(this.url + "/sxorder/listPage", {
        params: {
          state: 1,
          page: 1,
          limit: 99
        }
      })
      .then(function(res) {
        this.tabAll1 = res.body.data;
      });
    //订单待收货
    this.$http
      .get(this.url + "/sxorder/listPage", {
        params: {
          state: 2,
          page: 1,
          limit: 99
        }
      })
      .then(function(res) {
        this.tabAll2 = res.body.data;
      });
    //订单已取消
    this.$http
      .get(this.url + "/sxorder/listPage", {
        params: {
          state: 3,
          page: 1,
          limit: 99
        }
      })
      .then(function(res) {
        this.tabAll3 = res.body.data;
      });
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

      > div {
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
}
</style>


