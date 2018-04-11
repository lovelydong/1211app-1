<template>
  <f7-page class="discountCoupon">
        <f7-navbar>
          <f7-nav-left sliding><f7-link class="iconfont icon-zuo" @click="$f7router.back()"></f7-link></f7-nav-left>
          <f7-nav-title>优惠券</f7-nav-title>
        </f7-navbar>
        <div class="mid">
          <ul>
            <li v-for="(c,index) in coupon">
              <span>券</span>
              <p>{{c.name}}</p>
              <em>有效期至：{{c.over_time/1000 | moment("YYYY/MM/DD")}}</em>
              <p class="p1">{{c.amount}} <span>{{c.type}}</span></p>
              <f7-link :href="state='立即使用'?'/home':''" id="gg" :class="(c.state==1&&c.over_time>nowtime)?'':'gg' "  :html="(c.state==1&&c.over_time)>nowtime?state='立即使用':(c.state==2?state='已使用':(c.state==3?state='已失效':state='已过期'))">{{state}}</f7-link>
            </li>
           <!-- <li>
              <span>券</span>
              <p>限教师资格品类直播课程使用</p>
              <em>有效期至：2018-08-25</em>
              <p class="p1">100 <span>满10000可用</span></p>
              <f7-link>立即使用</f7-link>
            </li>-->
          </ul>
        </div>
  </f7-page>
</template>
<script>
	import Global from "../../Global.vue";
export default {
  data: function() {
    return {
    	 url: "http://39.106.134.125:8080/netschool/",
    	 coupon:"",
    	 nowtime:"",

    };
  },
  methods: {

  },
  created:function()
  {
  	this.nowtime=new Date().getTime();
  	console.log(this.nowtime)
  	this.$http
        .get(this.url + "/sxcouponsend/getAllCoupon", {
				
        })
        .then(function(res) {
          console.log(res);
         this.coupon=res.body.data;
        });
  }
 }
</script>
<style lang="less">

.discountCoupon {
  .mid {
    min-height: 100%;
    padding: 18px;
    background: url(../../../assets/discountCoupon.png) no-repeat center center !important;
    ul {
      > li {
        min-height: 110px;
        background-color: #fff;
        border-radius: 10px;
        margin-bottom: 20px;
        position: relative;
        padding: 15px 0;
        padding-left: 87px;
        padding-right: 122px;
        > span {
          background-color: #f2f2f2;
          border-radius: 5px;
          position: absolute;
          width: 56px;
          height: 57px;
          text-align: center;
          line-height: 57px;
          font-family: "PingFang-SC-Regular";
          font-size: 30px;
          color: #fd2d44;
          left: 15px;
          top: 50%;
          transform: translateY(-50%);
        }
        > .link {
          position: absolute;
          width: 110px;
          height: 100%;
          right: 0;
          top: 0;
          font-family: "PingFang-SC-Regular";
          font-size: 16px;
          color: #fd2d44;
          border-left: 1px dashed #e6e6e6;
        }
        > .link:before {
          content: " ";
          background-color: #efeff4;
          width: 16px;
          height: 16px;
          position: absolute;
          top: -8px;
          left: -8px;
          border-radius: 50%;
        }
        > .link:after {
          content: " ";
          background-color: #efeff4;
          width: 16px;
          height: 16px;
          position: absolute;
          bottom: -8px;
          left: -8px;
          border-radius: 50%;
        }
        > p {
          font-family: "PingFang-SC-Regular";
          font-size: 13px;
          line-height: 33px;
          color: #333333;
        }
        > em {
          font-family: "PingFang-SC-Regular";
          font-size: 12px;
          color: #666666;
        }
        >.p1{
          font-family: "PingFang-SC-Heavy";
          font-size: 16px;
          color: #fd2d44;
          font-weight: 800;
          >span{
            font-family: "PingFang-SC-Medium";
            font-size: 12px;
            color: #fd2d44;
            font-weight: 400;
            background-color: rgba(253, 102, 0, 0.05);
            padding: 0 5px;
          }
        }
      }
    }
  }
}
#gg.gg{
		color: #666666;
	}
</style>


