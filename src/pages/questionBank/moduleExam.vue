<template>
  <f7-page class="moduleExam"  infinite @infinite="onInfiniteScroll">

        <f7-navbar>
          <f7-nav-left sliding><f7-link class="iconfont icon-zuo" @click="$f7router.back()"></f7-link></f7-nav-left>
          <f7-nav-title>章节练习</f7-nav-title>
          <f7-nav-right>
            <f7-link class="iconfont icon-gengduo" @click="shows.showTop = !shows.showTop"></f7-link>
          </f7-nav-right>

        </f7-navbar>
        <f7-subnavbar>
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
            <div class="row">
                <div class="col-20">类型<i class="iconfont icon-icon--"></i></div>
                <div class="col-20">学段<i class="iconfont icon-icon--"></i></div>
                <div class="col-20" :class="{active: shows.showKM}" @click="OnshowKM( $event.target)">科目<i class="iconfont icon-icon--"></i></div>
                <div class="col-20" style="color:#fd2d44;" @click="shows.showSX = !shows.showSX">筛选<i class="iconfont icon-shaixuan"></i></div>
            </div>
            <div class="screen"  v-if="shows.showSX" @click="shows.showSX = false">
            </div>
            <div class="screen1" v-if="shows.showKM" @click="shows.showKM = false">
            </div>
            <transition
                  name="custom-classes-transition"
                  enter-active-class="animated bounceInDown"
                  leave-active-class="animated bounceOutUp"
                >
              <div class="lx" v-if="shows.showKM">
                  <ul>
                    <li class="active">教师理论基础 <i class="iconfont icon-selected-copy"></i></li>
                    <li>学科专业知识 </li>
                    <li>其他</li>
                  </ul>
              </div>
            </transition>
            <transition
                  name="custom-classes-transition"
                  enter-active-class="animated bounceInRight"
                  leave-active-class="animated bounceOutRight"
                >
                  <div class="screen-but" v-if="shows.showSX">
                    <div>
                      <h3>筛选</h3>
                    <h4>课程类型</h4>
                    <div class="row">
                        <div class="col-33">直播课程</div>
                        <div class="col-33">录播课程</div>
                        <div class="col-33">回放课程</div>
                    </div>
                    <h4>笔面试</h4>
                    <div class="row">
                        <div class="col-33">面试</div>
                        <div class="col-33">笔试</div>
                    </div>
                    <h4>学段</h4>
                    <div class="row">
                        <div class="col-33">幼儿</div>
                        <div class="col-33">小学</div>
                        <div class="col-33">中学</div>
                    </div>
                    <h4>科目</h4>
                    <div class="row">
                        <div class="col-33">教育理论基础</div>
                        <div class="col-33">学科专业知识</div>
                        <div   class="col-33">其他</div>
                    </div>
                    <h4>年份</h4>
                    <div class="row">
                        <div class="col-33">2016</div>
                        <div class="col-33">2017</div>
                        <div   class="col-33">2018</div>
                    </div>
                    <h4>地区</h4>
                    <div class="row">
                        <div class="col-33">河南省</div>
                        <div class="col-33">河南省</div>
                        <div class="col-33">河南省</div>
                        <div class="col-33">河南省</div>
                        <div class="col-33">河南省</div>
                        <div class="col-33">河南省</div>
                        <div class="col-33">河南省</div>
                        <div class="col-33">河南省</div>
                        <div class="col-33">河南省</div>
                        <div class="col-33">河南省</div>
                        <div class="col-33">河南省</div>
                        <div class="col-33">河南省</div>
                        <div class="col-33">河南省</div>
                        <div class="col-33">河南省</div>
                        <div class="col-33">河南省</div>
                    </div>
                    </div>
                    <div class="off">
                      <div class="row">
                          <div class="col-50">重置</div>
                          <div class="col-50">确定</div>
                      </div>
                    </div>
                  </div>
              </transition>
        </f7-subnavbar>
        <div class="mid">

          <ul class="tab4">
                      <li class="clearfix link">
                        <f7-link href="/questionBankParticulars">
                          <div>
                            <p>2017年上半年中学综合素质真题及答案解析</p>
                            <p><span>热</span> 试试手气，马上开始做题</p>
                          </div>
                        </f7-link>
                      </li>
                      <li class="clearfix link">
                        <f7-link>
                          <div>
                            <p>2017年上半年中学综合素质真题及答案解析</p>
                            <p>试试手气，马上开始做题</p>
                          </div>
                        </f7-link>
                      </li>
                      <li class="clearfix link">
                        <f7-link>
                          <div>
                            <p>2017年上半年中学综合素质真题及答案解析</p>
                            <p>试试手气，马上开始做题</p>
                          </div>
                        </f7-link>
                      </li>
                      <li class="clearfix link">
                        <f7-link>
                          <div>
                            <p>2017年上半年中学综合素质真题及答案解析</p>
                            <p>试试手气，马上开始做题</p>
                          </div>
                        </f7-link>
                      </li>
                      <li class="clearfix link">
                        <f7-link>
                          <div>
                            <p>2017年上半年中学综合素质真题及答案解析</p>
                            <p>试试手气，马上开始做题</p>
                          </div>
                        </f7-link>
                      </li>
                      <li class="clearfix link">
                        <f7-link>
                          <div>
                            <p>2017年上半年中学综合素质真题及答案解析</p>
                            <p>试试手气，马上开始做题</p>
                          </div>
                        </f7-link>
                      </li>
                      <li class="clearfix link">
                        <f7-link>
                          <div>
                            <p>2017年上半年中学综合素质真题及答案解析</p>
                            <p>试试手气，马上开始做题</p>
                          </div>
                        </f7-link>
                      </li>
                      <li class="clearfix link">
                        <f7-link>
                          <div>
                            <p>2017年上半年中学综合素质真题及答案解析</p>
                            <p>试试手气，马上开始做题</p>
                          </div>
                        </f7-link>
                      </li>
                      <li class="clearfix link">
                        <f7-link>
                          <div>
                            <p>2017年上半年中学综合素质真题及答案解析</p>
                            <p>试试手气，马上开始做题</p>
                          </div>
                        </f7-link>
                      </li>
                      <li class="clearfix link">
                        <f7-link>
                          <div>
                            <p>2017年上半年中学综合素质真题及答案解析</p>
                            <p>试试手气，马上开始做题</p>
                          </div>
                        </f7-link>
                      </li>
                      <li class="clearfix link">
                        <f7-link>
                          <div>
                            <p>2017年上半年中学综合素质真题及答案解析</p>
                            <p>试试手气，马上开始做题</p>
                          </div>
                        </f7-link>
                      </li>
                      <li class="clearfix link">
                        <f7-link>
                          <div>
                            <p>2017年上半年中学综合素质真题及答案解析</p>
                            <p>试试手气，马上开始做题</p>
                          </div>
                        </f7-link>
                      </li>

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
        showSX: false,
        showKM: false,
        showTop: false
      },
      classtype:"",
      qtype:""
    };
  },
  methods: {
    OnshowKM: function(e) {
      this.shows.showKM = true;
    },
    onInfiniteScroll: function() {
      console.log(1);
    },
    shareboy: function(data) {
      this.$refs.c1.sharefn();
    }
  },
  
  created:function()
  {
  	let url = "http://192.168.0.115:8080/shiro_test";
  	this.classtype=this.$f7route.query.classtype;
  	this.qtype=this.$f7route.query.qtype;
  /*	console.log(this.classtype)
  	console.log(this.qtype)*/
  	this.$http
				.get(url + "/exambank/typelist", {
					params: {
						
						type:this.classtype,
						exam_type:this. qtype
					}
				})
				.then(
					function(res) {
						
						//this.exams = res.data.data;
						 console.log(res.data.data)
					},
					function(res) {
						console.log(res.status);
					});
  }
 }

</script>
<style lang="less">
 .subnavbar {
    .subnavbar-inner {
      > .row {
        height: 100%;
        line-height: 44px;
      }
      .active {
        color: #fd2d44;
        > .iconfont {
          display: inline-block;
          transition: transform 0.5s ease-in-out;
          transform: rotate(-180deg);
          -ms-transform: rotate(-180deg); /* IE 9 */
          -webkit-transform: rotate(-180deg); /* Safari and Chrome */
          -o-transform: rotate(-180deg); /* Opera */
          -moz-transform: rotate(-180deg); /* Firefox */
        }
      }
    }
    .row {
      width: 100%;
      .col-20 {
        text-align: center;
        height: 100%;
      }
    }
    .screen1 {
      position: fixed;
      width: 100%;
      height: 100%;
      left: 0;
      top: 88px;
      z-index: 99;
      background-color: rgba(0, 0, 0, 0.3);
    }
    .screen {
      position: fixed;
      width: 100%;
      height: 100%;
      left: 0;
      top: 0;
      z-index: 99;
      background-color: rgba(0, 0, 0, 0.3);
    }
    .screen-but {
      background-color: #fff;
      z-index: 99;
      width: 80%;
      height: 80%;
      position: fixed;
      top: 44px;
      right: 0;
      border-bottom-left-radius: 20px;
      border-top-left-radius: 20px;
      padding-bottom: 50px;
      overflow: hidden;
      > div {
        overflow: scroll;
        height: 100%;
        > h3 {
          font-weight: 400;
          padding: 15px;
          background-color: #f2f2f2;
          border-top-left-radius: 20px;
        }
        > h4 {
          font-size: 14px;
          padding: 15px;
          font-weight: 400;
        }
        > .row {
          text-align: center;
          padding: 0 15px;
          padding-bottom: 10px;
          border-bottom: 1px solid #f2f2f2;
          > .col-33 {
            padding: 5px 0;
            background-color: #f2f2f2;
            border-radius: 5px;
            margin: 5px 0;
          }
        }
      }
      > .off {
        height: 50px;
        position: absolute;
        bottom: 0;
        width: 100%;
        > .row {
          text-align: center;
          line-height: 50px;
          width: 100%;
          font-size: 16px;
          padding: 0;
          background-color: #fff;
          -ms-filter: "progid:DXImageTransform.Microsoft.Shadow(Strength=34, Direction=256, Color=#454545)"; /*IE 8*/
          -moz-box-shadow: 1px -4px 34px rgba(69, 69, 69, 0.5); /*FF 3.5+*/
          -webkit-box-shadow: 1px -4px 34px rgba(69, 69, 69, 0.5); /*Saf3-4, Chrome, iOS 4.0.2-4.2, Android 2.3+*/
          box-shadow: 1px -4px 34px rgba(69, 69, 69, 0.5); /* FF3.5+, Opera 9+, Saf1+, Chrome, IE10 */
          filter: progid:DXImageTransform.Microsoft.Shadow(
              Strength=34,
              Direction=135,
              Color=#454545
            ); /*IE 5.5-7*/
          > .col-50:nth-of-type(2) {
            background-color: #fd2d44;
            color: #fff;
          }
        }
      }
    }
    .lx {
      position: fixed;
      width: 100%;
      left: 0;
      top: 88px;
      background-color: #fff;
      z-index: 99;
      padding: 10px;

      > ul {
        > li {
          font-size: 14px;
          line-height: 30px;
          > i {
            float: right;
          }
        }
        > .active {
          color: #fd2d44;
        }
      }
    }
  }
.moduleExam {
  .mid {
    padding: 10px;

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
            }
          }
        }
      }
    }
    > ul {
      > li {
        min-height: 70px;
        > .link {
          > div {
            padding: 0;
            > p:nth-of-type(2) {
              font-size: 12px;
              line-height: 28px;
              > span {
                font-family: "PingFang-SC-Regular";
                font-size: 10px;
                color: #fd5d32;
                border: 1px solid #fd5d32;
                padding: 0 2px;
                border-radius: 5px;
                margin-right: 5px;
              }
            }
          }
        }
      }
    }
  }
}
</style>


