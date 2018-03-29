<template>
  <f7-page class="myCourses">
        <f7-navbar>
          <f7-nav-left sliding><f7-link class="iconfont icon-zuo" @click="$f7router.back()"></f7-link></f7-nav-left>
          <f7-nav-title>我的课程</f7-nav-title>
          <f7-nav-right>
            <f7-link class="iconfont icon-xiaoxi1" href="/news"></f7-link>
          </f7-nav-right>
        </f7-navbar>
        <f7-subnavbar sliding>
          <f7-segmented>
            <f7-button tab-link="#tab1" tab-link-active @click="tab=1">我的课程</f7-button>
            <f7-button tab-link="#tab2"  @click="tab=2">过期课程</f7-button>

          </f7-segmented>
        </f7-subnavbar>
        <div class="tabs">
        <div id="tab1" class="tab tab-active" >
        <div class="mid">
          <ul>
            <li class="clearfix link" v-for="(cc,index) in class1">
                <f7-link @click="$f7router.navigate('/recommendedParticulars?id='+cc.id+'&isxs='+whatType(cc.ext2))">
                    <span :style="{backgroundImage: 'url(' + url + cc.img + ')' }"><em>直播中</em></span>
                    <div>
                      <p>{{cc.goodsName}}</p>

                      <p>开课时间：{{cc.creat_time}}</p>
                    </div>
                </f7-link>
            </li>
            <!--<li class="clearfix link">
                <f7-link>
                    <span></span>
                    <div>
                      <p>浙江2018年教师招聘教育心理学二期回放</p>
                      <p>国版·354人正在学习</p>
                      <p>开课时间：2018-10-24</p>
                    </div>
                </f7-link>
            </li>-->
          </ul>
        </div>
        </div>

          <div id="tab2" class="tab" >
        <div class="mid">
          <ul>
            <li class="clearfix link" v-for="(cc,index) in class2">
                <f7-link>
                    <span :style="{backgroundImage: 'url(' + url + cc.img + ')' }"><em style="background-color: #666666;">已结束</em></span>
                    <div>
                      <p>{{cc.goodsName}}</p>

                      <p>开课时间：{{cc.creat_time}}</p>
                    </div>
                </f7-link>
            </li>
            <!--<li class="clearfix link">
                <f7-link>
                    <span></span>
                    <div>
                      <p>浙江2018年教师招聘教育心理学二期回放</p>
                      <p>国版·354人正在学习</p>
                      <p>开课时间：2018-10-24</p>
                    </div>
                </f7-link>
            </li>-->
          </ul>
        </div>
        </div>
     </div>
  </f7-page>
</template>
<script>
export default {
  data: function() {
    return {
    	url:"http://39.106.134.125/netschool/",
    	class1:"",
    	class2:""

    };
  },
  methods: {

  	 whatType:function(num)
    {
    	if(num==2)
    	{
    		return 1;
    	}
    	else{
    		return 0;
    	}
    }
  },
  created:function()
  {
  	//我的课程渲染
 	 this.$http.get(this.url+"/sxcourse/information",{
  		params:{
  			page:1,
  			limit:99,
  			type:1
  		}
            }).then(function(res){
               // console.log(res.data.data)
                this.class1=res.data.data;
                 //console.log(res.data.data)

            },function(res){
                console.log(res.status);
            })
            //过期课程渲染
 	 this.$http.get(this.url+"/sxcourse/information",{
  		params:{
  			page:1,
  			limit:99,
  			type:2
  		}
            }).then(function(res){
               // console.log(res.data.data)
                this.class2=res.data.data;
                 //console.log(res.data.data)

            },function(res){
                console.log(res.status);
            })
  }
};
</script>
<style lang="less">
.myCourses {
  .mid {
    padding: 20px 10px;
    > ul {
      > li {
        display: block;
        padding: 10px 0;
        min-height: 106px;
        > .link {
          display: block;

          > span {
            width: 120px;
            height: 86px;
            background: url(https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1519301525135&di=dd2fed90de9f2622da9e2c6f51d3888b&imgtype=0&src=http%3A%2F%2F5b0988e595225.cdn.sohucs.com%2Fimages%2F20170922%2Fca414a2cf9b34ec49aff78f350b0ec87.gif)
              no-repeat center center;
            border-radius: 12px;
            background-size: cover;
            position: absolute;
            left: 0;
            top: 0;
            >em{
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
              font-family: "MicrosoftYaHei";
              font-size: 12px;
              line-height: 24px;
              color: #999999;
              > i {
                color: #fb7b59;
                float: right;
                margin-left: 3px;
              }
            }
            > p:nth-of-type(3) {
              font-family: "MicrosoftYaHei";
              font-size: 12px;
              line-height: 24px;
              color: #fd5d32;
            }
          }
        }
      }
    }
  }


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
    #tab1 {
      .list {
        .item-inner {
          padding: 10px 0;
          background: none;
          padding-right: 15px;
          .item-title {
            > span {
              width: 120px;
              height: 86px;
              background: url(https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1519301525135&di=dd2fed90de9f2622da9e2c6f51d3888b&imgtype=0&src=http%3A%2F%2F5b0988e595225.cdn.sohucs.com%2Fimages%2F20170922%2Fca414a2cf9b34ec49aff78f350b0ec87.gif)
                no-repeat center center;
              border-radius: 12px;
              background-size: cover;
              position: absolute;
              left: 0;
              top: 0;
            }
            > div {
              vertical-align: top;
              width: 100%;
              float: left;
              padding-left: 130px;
              min-height: 86px;
              > p {
                font-family: "PingFang-SC-Regular";
                font-size: 16px;
                color: #333333;
              }
              > p:nth-of-type(2) {
                font-family: "MicrosoftYaHei";
                font-size: 12px;
                line-height: 24px;
                color: #999999;
                > i {
                  color: #fb7b59;
                  float: right;
                  margin-left: 3px;
                }
              }
              > p:nth-of-type(3) {
                font-family: "MicrosoftYaHei";
                font-size: 12px;
                line-height: 24px;
                color: #fd2d44;
              }
            }
          }
        }
      }
    }
    #tab2 {
      .list {
        margin: 25px 0;
        background-color: #c8c7cc;
        > ul {
          background-color: none;
          > li {
            > .swipeout-content {
              > .item-link {
                .item-title {
                  font-family: "PingFang-SC-Regular";
                  font-size: 16px;
                  color: #333333;
                  padding: 5px 0;
                  > p {
                    font-family: "PingFang-SC-Regular";
                    font-size: 12px;
                    color: #bfbfbf;
                    padding-top: 5px;
                  }
                }
              }
            }
          }
        }
      }
    }

  }
}

</style>


