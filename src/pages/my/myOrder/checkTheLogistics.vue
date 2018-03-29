<template>
  <f7-page class="checkTheLogistics">
        <f7-navbar>
          <f7-nav-left sliding><f7-link class="iconfont icon-zuo" @click="$f7router.back()"></f7-link></f7-nav-left>
          <f7-nav-title>物流信息</f7-nav-title>
          <f7-nav-right>
            <f7-link class="iconfont icon-xiaoxi1" href="/news"></f7-link>
          </f7-nav-right>
        </f7-navbar>
        <div class="top">
          <img src="../../../assets/post.jpg" alt="">
          <p>物流状态：<span>运输中</span></p>
          <p>运单号：{{info.trackingNo}}</p>
          <p>信息来源：{{express(info.express)}}</p>
        </div>
        <div class="mid">
          <ul>
            <li v-for="i in info.data">{{i.state}}<p>&nbsp;&nbsp;{{i.time}}</p><span></span></li>
            <!--<li>【郑州市】中转站已发货 <p>&nbsp;&nbsp;2017-09-06    21:45:31</p><span></span></li>
            <li>【郑州市】中转站已发货 <p>&nbsp;&nbsp;2017-09-06    21:45:31</p><span></span></li>
            <li>【郑州市】中转站已发货 <p>&nbsp;&nbsp;2017-09-06    21:45:31</p><span></span></li>
            <li>【郑州市】中转站已发货 <p>&nbsp;&nbsp;2017-09-06    21:45:31</p><span></span></li>-->
          </ul>
        </div>
  </f7-page>
</template>
<script>
export default {
  data: function() {
    return {
      url: "http://39.106.134.125/netschool/",
      info:""
    };
  },
  methods: {
  	express:function(e)
  	{
  		if(e=="zhongtong"){
  			return "中通快递";
  		}
  		else if(e=="shunfeng"){
  			return "顺丰快递";
  		}
  		else if(e=="yuantong"){
  			return "圆通速递";
  		}
  		else if(e=="shentong"){
  			return "申通快递";
  		}
  		else if(e=="youzhengguonei"){
  			return "邮政快递";
  		}
  		else if(e=="yunda"){
  			return "yunda";
  		}
  		else{
  			return e;
  		}
  	}
  },
  created:function() {
  	var orderNo=this.$f7route.query.orderno;
  	console.log(orderNo)
    //物流详情全部
     this.$http
      .get(this.url + "/deliverinfor/infor", {
       params: {
         orderNo:orderNo
        }
       })
      .then(function(res) {
        // console.log(eval('(' +res.data.data+ ')'));
         this.info=eval('(' +res.data.data+ ')');
         /*this.info=JSON.stringify(res.data.data.data);*/
     });
  }
};
</script>
<style lang="less">
.checkTheLogistics {
  .top {
    background-color: #fff;
    padding: 30px 22px;
    padding-left: 140px;
    position: relative;
    min-height: 144px;
    > img {
      width: 100px;
      height: 75px;
      position: absolute;
      left: 20px;
      top: 50%;
      transform: translateY(-50%);
    }
    > p {
      font-family: "PingFang-SC-Regular";
      font-size: 12px;
      color: #999999;
    }
    > p:nth-of-type(1) {
      font-family: "PingFang-SC-Regular";
      font-size: 14px;
      color: #000000;
      line-height: 40px;
      > span {
        color: #fd5d32;
      }
    }
  }
  .mid{
    padding: 25px;
    padding-top: 2px;
    background-color: #fff;
    margin-top: 15px;
    >ul{
      border-left: 2px solid #f2f2f2;
      >li{
        margin-top: 30px;
        font-family: "PingFang-SC-Regular";
        font-size: 14px;
        color: #999999;
        position: relative;
        padding-left: 15px;
        >p{
          font-size: 12px;
          line-height: 30px;
        }
        >span{
          position: absolute;
          left: -5px;
          width: 10px;
          height: 10px;
          border-radius: 50%;
          background-color: #e6e6e6;
          top: 0;
        }
      }
      >li:nth-of-type(1){
        color: #fd5d32;
        >span{
          background-color: #fd5d32;
        }
      }
    }
  }
}
</style>


