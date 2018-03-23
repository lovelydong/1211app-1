<template>
  <f7-page class="recommendedParticulars">
    <div class="top">
      <div class="img" :style="{backgroundImage: 'url(' + oneJson.img + ')' }">
        <h3>
          <f7-link  @click="$f7router.back()"><i class="iconfont icon-zuo"></i></f7-link>
          <f7-link><i class="iconfont icon-gouwuche1"></i><span>{{Quantityincart}}</span></f7-link>
          <f7-link><i class="iconfont icon-gengduo" @click="showTop = !showTop"></i></f7-link>
        </h3>
      </div>
      <transition
                  name="custom-classes-transition"
                  enter-active-class="animated pulse"
                >
          <div class="TopsZ" v-if="showTop" >
            <ul>
              <f7-link href="/news"><i class="iconfont icon-xiaoxi1"></i> 系统消息</f7-link>
              <f7-link href="/"><i class="iconfont icon-shouye"></i> 返回首页</f7-link>
              <f7-link><i class="iconfont icon-saoyisao"></i> 扫一扫</f7-link>
              <f7-link href="/shoppingTrolley"><i class="iconfont icon-gouwuche"></i> 购物车</f7-link>
              <f7-link  @click="shareboy"><i class="iconfont icon-fenxiang"></i> 分享</f7-link>
            </ul>
          </div>
          </transition>
      <div class="text">
      	<div>{{xsdaojishi}}</div>
        <p>{{oneJson.name}}</p>
        <p v-show="oneJson.is_send_book == 1 || oneJson.is_send_file == 1">赠送<span v-if="oneJson.is_send_book == 1">配套图书</span>、<span v-if="oneJson.is_send_file == 1">配套资料</span> </p>
        <p>￥{{oneJson.discount_price}} <span>￥{{oneJson.price}}</span></p>
        <p>{{oneJson.area}} · {{oneJson.buyno}}人已学习 <em>有效期限：{{oneJson.expiry_date}}天</em></p>
      </div>
    </div>
    <h4 class="tabh4">
      <span :class="{active:shows.XQ}" @click="XQ">详情</span>
      <span :class="{active:shows.ZJ}" @click="ZJ">章节</span>
      <span :class="{active:shows.PJ}" @click="PJ">评价</span>
    </h4>
    <div class="mid">
      <div class="XQ" v-if="shows.XQ">
        {{oneJson.descripetion}}
      </div>
      <div class="ZJ" v-if="shows.ZJ">
        <ul v-for="(value, key) in chap" :key="key">
          <h3> <i class="iconfont icon-selected-copy"></i> {{key}}</h3>
          <f7-link v-for="item in value"  :key="item.id" :href="(isornot==1)?'/vod?id='+item.id+'&type='+isxs+'&iszj=1':''"> <i class="iconfont icon-fasong"></i> {{item.name}}</f7-link>
        </ul>
      </div>
      <div class="PJ" v-if="shows.PJ">
          <ul>
            <li v-for="item in detailCourseJson" :key="item.id">
              <p>
                <img :src="url + item.img" alt="">
                <span>{{item.user_name}}</span>
                <span>
                  <i class="iconfont icon-xingxing"></i>
                  <i class="iconfont icon-xingxing"></i>
                  <i class="iconfont icon-xingxing"></i>
                  <i class="iconfont icon-xingxing"></i>
                  <i class="iconfont icon-xingxing"></i>
                </span>
                <em>{{new Date(item.create_time).toLocaleDateString() }}</em>
              </p>
              <p>
                {{item.comment}}
              </p>
            </li>
          </ul>
      </div>
    </div>
    <div class="bottom">
      <div class="row">
        <div class="col-33">
          <f7-link><i class="iconfont icon-zaixiankefu"></i> <p>客服</p></f7-link>
          <f7-link :class="{active: iscollect}" @click="iscollectfn"><i class="iconfont icon-shoucang"></i> <p>收藏</p></f7-link>
        </div>
        <div class="col-33"><f7-link @click="addspc">加入购物车</f7-link></div>
        <div class="col-33"><f7-link @click="whereToGO(oneJson.id)" :html="isornot==1?flag='立即播放':flag='立即购买'">{{flag}}</f7-link></div>
        
      </div>
    </div>
        <Share ref="c1"></Share>

  </f7-page>
</template>
<script>
export default {
  data: function() {
    return {
    	xsdaojishi:"",
      id: this.$f7route.query.id,
      url: "http://localhost:8080/shiro_test",
      showTop: false,
      isornot:"",
      type:'',
      isxs:"",
      flag:"",
      shows: {
        XQ: true,
        ZJ: false,
        PJ: false
      },
      Quantityincart: 0,
      oneJson: {},
      chap: {},
      detailCourseJson: {},
      iscollect: false
    };
  },
  methods: {
  	Countdown: function(timestamp) {
				var that = this;
				console.log(timestamp);
				console.log(new Date().getTime());

				this.timer = setInterval(function() {
					var now = new Date().getTime();
					var leftTime = timestamp - now;
					if(leftTime >= 0) {
						var d = Math.floor(leftTime / 1000 / 60 / 60 / 24);
						var h = Math.floor((leftTime / 1000 / 60 / 60) % 24);
						var m = Math.floor((leftTime / 1000 / 60) % 60);
						var s = Math.floor((leftTime / 1000) % 60);
						//	console.log(666)

						that.xsdaojishi = d + " 天 " + h + " 时 " + m + " 分 " + s + " 秒";
						// return "<i>"+d+"</i> 天 <i>"+h+"</i> 时 <i>"+m+"</i> 分 <i>"+s+"</i> 秒";
					} else {
						//console.log(777)
						that.xsdaojishi = "已经结束";
						window.clearInterval(this.timer);
					}
				}, 800);
			},
    XQ() {
      this.shows.XQ = true;
      this.shows.ZJ = false;
      this.shows.PJ = false;
    },
    ZJ() {
      this.shows.XQ = false;
      this.shows.ZJ = true;
      this.shows.PJ = false;
    },
    PJ() {
      this.shows.XQ = false;
      this.shows.ZJ = false;
      this.shows.PJ = true;
    },
    shareboy: function(data) {
      this.$refs.c1.sharefn();
    },
    iscollectfn: function() {
    	if(this.isxs==1){
    		this.$http
        .get(this.url + "/sxcollect/add", {
          params: {
            courseid: this.id,
            type: 200
          }
        })
        .then(function(res) {
          if (res.body.code == 1) {
            this.iscollect = true;
          } else {
            this.iscollect = false;
          }
        });
    	}
    	else 
    	{
    		this.$http
        .get(this.url + "/sxcollect/add", {
          params: {
            courseid: this.id,
            type: 100
          }
        })
        .then(function(res) {
          if (res.body.code == 1) {
            this.iscollect = true;
          } else {
            this.iscollect = false;
          }
        });
    	}
    	
      
    },
    addspc: function() {
    	if(this.isxs==1)
    	{
    		this.$http
        .get(this.url + "/shoppingcart/save", {
          params: {
            goodsId: this.id,
            goodsNum: 1,
            type: 100
          }
        })
        .then(function(res) {
          console.log(res);
          if (res.body.code == 1) {
            let toastCenter = this.$f7.toast.create({
              text: "成功加入购物车",
              position: "center",
              closeTimeout: 2000
            });
            toastCenter.open();
          }
        });
    	}
    	else{
    			this.$http
        .get(this.url + "/shoppingcart/save", {
          params: {
            goodsId: this.id,
            goodsNum: 1,
            type: 200
          }
        })
        .then(function(res) {
          console.log(res);
          if (res.body.code == 1) {
            let toastCenter = this.$f7.toast.create({
              text: "成功加入购物车",
              position: "center",
              closeTimeout: 2000
            });
            toastCenter.open();
          }
        });
    	}
      
    },
    
    whereToGO:function(id)
    {
    	
    	
    //:href="(isornot==1&&type==1)?'/live?id='+oneJson.id+'&type='+isxs:(isornot==1&&(type==2||type==3))?'/vod?id='+oneJson.id+'&type='+isxs:'/indent?order_number='+creatOrder(oneJson.id)"--> 	
    if(this.isornot==1&&this.type==1)
    {
    	this.$f7router.navigate(
                '/live?id='+id+'&type='+this.isxs
              );
    }
    else if(this.isornot==1&&(this.type==2||this.type==3)){
    	this.$f7router.navigate(
                '/vod?id='+id+'&type='+this.isxs
              );
    }
    else{
    	
    	if(this.isxs==1)
    	{
    		this.$http
        .get(this.url + "/shoppingcart/save", {
          params: {
            goodsId:id,
            goodsNum: 1,
            type: 100
          }
        })
        .then(function(res) {
          console.log(res);
          if (res.body.code == 1) {
          	this.$f7router.navigate('/shoppingTrolley');
           /* let toastCenter = this.$f7.toast.create({
              text: "成功加入购物车",
              position: "center",
              closeTimeout: 2000
            });
            toastCenter.open();*/
           
          }
        });
    	}
    	else{
    			this.$http
        .get(this.url + "/shoppingcart/save", {
          params: {
            goodsId: this.id,
            goodsNum: 1,
            type: 200
          }
        })
        .then(function(res) {
          console.log(res);
          if (res.body.code == 1) {
          	this.$f7router.navigate(
                '/shoppingTrolley'
              );
            
          }
        });
    	}
  }
    	
    	
    
 
          
       
    },
   
    xstype:function(t)
    {
    	if(t==35202044)
    	{
    		return 1;
    	}
    	else if(t==35202045)
    	{
    		return 2;
    		
    	}else if(t==35202046)
    	{
    		return 3;
    		
    	}
    },
    kctype:function(t)
    {
    	if(t==121100401)
    	{
    		return 1;
    	}
    	else if(t==121100402)
    	{
    		return 2;
    		
    	}else if(t==121100403)
    	{
    		return 3;
    		
    	}
    }
  },
  created() {

    let id = this.$f7route.query.id;
    this.isxs=this.$f7route.query.isxs;
    if(this.isxs==1)
    {
    	      //检测是否收藏/*/
    this.$http
      .get(this.url + "/sxcollect/iscollect", {
        params: {
          courseid: id,
          type: 100
        }
      })
      .then(function(res) {
        console.log(res);
        if (res.body.code) {
          this.iscollect = true;
        } else {
          this.iscollect = false;
        }
      });
    	 	
       //是否购买
    this.$http
      .get(this.url + "/sx1211courseAdmin/buyornot", {
        params: {
          id: id,
          ext2:2
        }
      })
      .then(function(res) {
        console.log(res.data)
        this.isornot=res.data.data;
        
      });
    	
    	
       //详情
    this.$http
      .get(this.url + "/flashsale/detail", {
        params: {
          id: id
        }
      })
      .then(function(res) {
        this.oneJson = res.body.data;
        this.Countdown(res.body.data.end_time);
        this.type=this.xstype(res.body.data.course_type);
       
        
      });
    //章节
    this.$http
      .get(this.url + "/sx1211courseAdmin/chap", {
        params: {
          pid: id
        }
      })
      .then(function(res) {
        let obj = {};
        let key = "";
        res.body.data.forEach(element => {
          if (element.ext1) {
            key = element.ext1;
            obj[key] = [];
            obj[key].push(element);
          } else {
            obj[key].push(element);
          }
        });
        this.chap = obj;
      });
    }else if(this.isxs!=1){
    	
    		      //检测是否收藏/*/
    this.$http
      .get(this.url + "/sxcollect/iscollect", {
        params: {
          courseid: id,
          type: 200
        }
      })
      .then(function(res) {
        console.log(res);
        if (res.body.code) {
          this.iscollect = true;
        } else {
          this.iscollect = false;
        }
      }); 	
       //是否购买
    this.$http
      .get(this.url + "/sx1211courseAdmin/buyornot", {
        params: {
          id: id,
          ext2:1
        }
      })
      .then(function(res) {
        console.log(res.data)
        this.isornot=res.data.data;
        
      });
    	
    	   //详情
    this.$http
      .get(this.url + "/sx1211courseAdmin/oneJson", {
        params: {
          id: id
        }
      })
      .then(function(res) {
        this.oneJson = res.body.data;
         this.type=this.kctype(res.body.data.vod_type);
        
      });
    //章节
    this.$http
      .get(this.url + "/sx1211courseAdmin/chap", {
        params: {
          id: id
        }
      })
      .then(function(res) {
        let obj = {};
        let key = "";
        res.body.data.forEach(element => {
          if (element.ext1) {
            key = element.ext1;
            obj[key] = [];
            obj[key].push(element);
          } else {
            obj[key].push(element);
          }
        });
        this.chap = obj;
      });
    }
    //购物车数量
    this.$http
      .get(this.url + "/shoppingcart/selectShoppingCount", {
        params: {}
      })
      .then(function(res) {
        this.Quantityincart = res.body.count;
      });
    
    //详情
    this.$http
      .get(this.url + "/sx1211courseAdmin/oneJson", {
        params: {
          id: id
        }
      })
      .then(function(res) {
        this.oneJson = res.body.data;

      });
    //章节
    this.$http
      .get(this.url + "/sx1211courseAdmin/chap", {
        params: {
          id: id
        }
      })
      .then(function(res) {
        let obj = {};
        let key = "";
        res.body.data.forEach(element => {
          if (element.ext1) {
            key = element.ext1;
            obj[key] = [];
            obj[key].push(element);
          } else {
            obj[key].push(element);
          }
        });
        this.chap = obj;
      });
    //评论
    this.$http
      .get(this.url + "/coursedetail/detailCourseJson", {
        params: {
          courseid: id,
          page: 1,
          limit: 50
        }
      })
      .then(function(res) {
        this.detailCourseJson = res.body.data;
      });
  }
};
</script>
<style lang="less">
.TopsZ {
  position: fixed;
  top: 56px;
  right: 10px;
  padding: 10px 20px;
  background-color: rgba(0, 0, 0, 0.3);
  line-height: 30px;
  vertical-align: middle;
  border-radius: 20px;

  > em {
    position: absolute;
    width: 20px;
    height: 20px;
    background-color: rgba(0, 0, 0, 0.3);
    transform: rotate(45deg);
    -ms-transform: rotate(45deg); /* IE 9 */
    -webkit-transform: rotate(45deg); /* Safari and Chrome */
    -o-transform: rotate(45deg); /* Opera */
    -moz-transform: rotate(45deg);
    top: -5px;
    right: 20px;
  }
  .link {
    color: #fff;
    i {
      margin-right: 10px;
    }
  }
}
.recommendedParticulars {
  .page-content {
    padding-top: 0 !important;
    padding-bottom: 70px;
  }
  .top {
    background-color: #fff;
    > .img {
      height: 250px;
      background: url(https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1519301525135&di=dd2fed90de9f2622da9e2c6f51d3888b&imgtype=0&src=http%3A%2F%2F5b0988e595225.cdn.sohucs.com%2Fimages%2F20170922%2Fca414a2cf9b34ec49aff78f350b0ec87.gif)
        no-repeat center center;
      position: relative;
      > h3 {
        > .link {
          width: 30px;
          height: 30px;
          border-radius: 50%;
          background-color: rgba(0, 0, 0, 0.3);
          color: #fff;
          position: fixed;
          > span {
            position: absolute;
            top: -4px;
            right: -4px;
            font-size: 12px;
            background-color: #f00;
            border-radius: 50%;
            padding: 0 5px;
          }
        }
        > .link:nth-of-type(1) {
          top: 10px;
          left: 12px;
        }
        > .link:nth-of-type(2) {
          top: 10px;
          right: 62px;
        }
        > .link:nth-of-type(3) {
          top: 10px;
          right: 12px;
        }
      }
    }
    > .text {
      padding: 15px 10px;
      > p {
        font-family: "PingFang-SC-Regular";
        font-size: 18px;
        color: #333333;
        line-height: 30px;
      }
      > p:nth-of-type(2) {
        font-size: 14px;
        color: #fd5d32;
      }
      > p:nth-of-type(3) {
        font-family: "MicrosoftYaHei";
        font-size: 18px;
        color: #fd2d44;
        > span {
          font-family: "PingFang-SC-Regular";
          font-size: 14px;
          color: #cccccc;
          text-decoration: line-through;
        }
      }
      > p:nth-of-type(4) {
        font-family: "PingFang-SC-Regular";
        font-size: 12px;
        color: #666666;
        > em {
          margin-left: 20px;
        }
      }
    }
  }
  .tabh4 {
    text-align: center;
    line-height: 60px;
    > span {
      font-weight: 400;
      font-family: "PingFang-SC-Regular";
      font-size: 18px;
      letter-spacing: 1px;
      color: #666666;
      margin: 0 10px;
      position: relative;
    }
    > .active {
      color: #fd2d44;
    }
    > .active:before {
      content: " ";
      position: absolute;
      bottom: -5px;
      left: 50%;
      transform: translateX(-50%);
      width: 50%;
      height: 3px;
      background-color: #fd2d44;
    }
  }
  .mid {
    padding: 0 12px;

    > div {
      background-color: #fff;
      border-radius: 10px;
    }
    > .XQ {
      padding: 10px 0;
      > img {
        width: 100%;
      }
    }
    > .ZJ {
      padding: 20px;
      > ul {
        border-left: 1px solid #ccc;
        > h3 {
          padding-left: 18px;
          font-weight: 400;
          line-height: 30px;
          position: relative;
          > .iconfont {
            position: absolute;
            left: -8px;
          }
          > .iconfont:before {
            background-color: #fff;
          }
        }
        > .link {
          display: block;
          padding-left: 20px;
          line-height: 30px;
          color: #999;
          > .iconfont {
            margin-right: 5px;
          }
        }
      }
      > ul:nth-of-type(1) {
        > h3 {
          > .iconfont {
            position: absolute;
            height: 22px;
            background-color: #fff;
            left: -8px;
          }
        }
      }
    }
    > .PJ {
      padding: 10px;
      > ul {
        > li {
          text-align: left;
          padding-bottom: 15px;
          > p {
            margin-bottom: 5px;
            > img {
              width: 30px;
              height: 30px;
              border-radius: 50%;
              margin-right: 10px;
            }
            font-family: "PingFang-SC-Medium";
            font-size: 12px;
            color: #333333;
            > em {
              float: right;
              line-height: 30px;
            }

            > span {
              margin-right: 10px;
              > .iconfont {
                font-size: 16px;
                color: #fd2d44;
              }
            }
          }
        }
      }
    }
  }
  .bottom {
    position: fixed;
    bottom: 0;
    width: 100%;
    height: 50px;
    background-color: #fff;
    z-index: 999;
    -ms-filter: "progid:DXImageTransform.Microsoft.Shadow(Strength=50, Direction=143, Color=#454545)"; /*IE 8*/
    -moz-box-shadow: 4px 3px 50px -2px rgba(69, 69, 69, 0.5); /*FF 3.5+*/
    -webkit-box-shadow: 4px 3px 50px -2px rgba(69, 69, 69, 0.5); /*Saf3-4, Chrome, iOS 4.0.2-4.2, Android 2.3+*/
    box-shadow: 4px 3px 50px -2px rgba(69, 69, 69, 0.5); /* FF3.5+, Opera 9+, Saf1+, Chrome, IE10 */
    filter: progid:DXImageTransform.Microsoft.Shadow(
        Strength=50,
        Direction=135,
        Color=#454545
      ); /*IE 5.5-7*/
    > .row {
      height: 100%;
      > .col-33 {
        height: 100%;
        width: 33.33%;
        > .link {
          font-family: "PingFang-SC-Regular";
          font-size: 14px;
          color: #999999;
          width: 48%;
          height: 100%;
          position: relative;
          > .iconfont {
            font-size: 18px;
            position: absolute;
            top: 4px;
          }
          > p {
            display: block;
            position: absolute;
            bottom: 6px;
          }
        }
        > .active {
          color: #fd5d32;
        }
      }
      > .col-33:nth-of-type(2) {
        > .link {
          font-family: "PingFang-SC-Regular";
          font-size: 16px;
          line-height: 50px;
          color: #ffffff;
          text-align: center;
          background-color: #fd5d32;
          width: 100%;
          height: 100%;
        }
      }
      > .col-33:nth-of-type(3) {
        > .link {
          font-family: "PingFang-SC-Regular";
          font-size: 16px;
          line-height: 50px;
          color: #ffffff;
          text-align: center;
          background-color: #fd2d44;
          width: 100%;
          height: 100%;
        }
      }
    }
  }
}
</style>


