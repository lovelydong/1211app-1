<template>
  <f7-page class="examinationParticulars" >
        <f7-navbar>
          <f7-nav-left sliding><f7-link class="iconfont icon-zuo" @click="$f7router.back()"></f7-link></f7-nav-left>
          <f7-nav-title>考情分析</f7-nav-title>
          <f7-nav-right>
            <f7-link class="iconfont icon-gengduo" @click="shows.showTop = !shows.showTop"></f7-link>
          </f7-nav-right>

        </f7-navbar>
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
        <div class="top">
          <h3>{{detail.file_name}}</h3>
          <p>{{detail.wfrom}}-{{detail.create_time/1000 | moment("YYYY-MM-DD")}}</p>
          <div class="com">
          	
            <img :src="url+detail.img" alt="">
            <p>{{detail.file_content}}</p>
          </div>
        </div>
        <div class="mid">
              <p>一一 &nbsp; 相关考情 &nbsp; 一一</p>

          <ul>

                      <li class="clearfix link" v-for="x in xiangguan">
                        <f7-link :href="'/examinationParticulars?id='+x.id">
                          <span  :style="{backgroundImage: 'url(' + url + x.img + ')' }"></span>
                          <div>
                            <p>{{x.file_name}}</p>
                            <p><i>新</i> {{x.wfrom}} &nbsp;&nbsp;{{x.create_time/1000 | moment("YYYY-MM-DD")}}</p>
                          </div>
                        </f7-link>
                      </li>
                      <!--<li class="clearfix link">
                        <f7-link>
                          <span></span>
                          <div>
                            <p>浙江2018年教师招聘教育心理学二期回放</p>
                            <p><i>新</i>  中国招教网 &nbsp;&nbsp;2018/13/30</p>
                          </div>
                        </f7-link>
                      </li>
                      <li class="clearfix link">
                        <f7-link>
                          <span></span>
                          <div>
                            <p>浙江2018年教师招聘教育心理学二期回放</p>
                            <p><i>新</i>  中国招教网 &nbsp;&nbsp;2018/13/30</p>
                          </div>
                        </f7-link>
                      </li>-->
                  </ul>
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
      },
      detail:"",
      xiangguan:"",
      url: "http://localhost:8080/shiro_test"
    };
  },
  methods: {
    OnshowKM: function(e) {
      this.shows.showKM = true;
    },
    shareboy: function(data) {
      this.$refs.c1.sharefn();
    }
  },
  created:function()
  {
  	var id=this.$f7route.query.id;
  	//详情渲染
  	//console.log(id)
  	this.$http
					.get(this.url+"/examcondition/detail", {
						params: {
						
							id:id
						}
					})
					.then(
						function(res) {
							//console.log(res.data.data)
						this.detail=res.data.data;
						

						
						
						},
						function(res) {
							console.log(res.status);
						}
					);	
					
					//相关考情渲染
					this.$http
					.get(this.url+"/examcondition/appXgCon", {
						params: {
						
							id:id
						}
					})
					.then(
						function(res) {
							console.log(res.data.data)
							this.xiangguan=res.data.data;
						

						
						
						},
						function(res) {
							console.log(res.status);
						}
					);
  	
  }
 }
</script>
<style lang="less">
.examinationParticulars {
  .mid {
    padding: 10px;
    >p{
      text-align: center;
      font-family: "PingFang-SC-Regular";
      font-size: 16px;
      line-height: 60px;
      color: #666666;
    }
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
              color: #fd2d44;
              > span {
                float: right;
                color: #333333;
                
                > i {
                  color: #fd2d44;
                  margin: 0;
                }
              }
            }
          }
        }
      }
    }
    > ul {
      > li {
        > .link {
          > span {
            left: auto;
            right: 0;
            
          }
          > div {
            padding: 0;
            padding-right: 130px;
            > p:nth-of-type(2) {
              line-height: 50px;
              font-size: 14px;
              > i {
                float: none;
                font-size: 12px;
                border: 1px solid #fd5d32;
                border-radius: 5px;
                padding: 0 2px;
              }
            }
          }
        }
      }
    }
  }
  .top {
    padding: 20px;
    > h3 {
      font-family: "PingFang-SC-Medium";
      font-size: 18px;
      color: #333333;
      font-weight: 400;
      text-align: center;
    }
    > p {
      font-family: "PingFang-SC-Medium";
      font-size: 12px;
      color: #999999;
      line-height: 30px;
    text-align: center;

    }
    >.com{
      padding:10px  0 ;
      >img{
        width: 100%;
      }
    }
  }
}
</style>


