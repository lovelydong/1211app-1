<template>
  <f7-page class="home">
      <f7-navbar sliding>
          <div class="lf">
            <span class="active">教师招聘</span>
            <span>教师资格证</span>
            <span>特岗教师</span>
          </div>
          <div class="rt">
              <f7-link>
                      <i class="iconfont icon-saoyisao"></i>
              </f7-link>
              <f7-link>
                      <i class="iconfont icon-xiaoxi"></i>
              </f7-link>
          </div>

      </f7-navbar>
      <f7-toolbar>
        <f7-link><span></span><p>首页</p></f7-link>
        <f7-link><span></span><p>直播</p></f7-link>
        <f7-link><span></span><p>录播</p></f7-link>
        <f7-link href="/questionBankhome" :reload-all="true" :animate="true"><span></span><p>题库</p></f7-link>
        <f7-link href="/my"><span></span><p>我的</p></f7-link>
      </f7-toolbar>
      <div class="top">
        <f7-swiper pagination >
          <f7-swiper-slide>
            <img src="../../assets/homebar.png" alt="">
          </f7-swiper-slide>
          <f7-swiper-slide>
            <img src="../../assets/homebar.png" alt="">
          </f7-swiper-slide>
          <f7-swiper-slide>
            <img src="../../assets/homebar.png" alt="">
          </f7-swiper-slide>
        </f7-swiper>
        <div class="seek">
          <f7-link  href="/search/"><i class="iconfont icon-sousuo"></i>请输入想要搜索内容</f7-link>
        </div>
      </div>
      <div class="mid">
        <div class="midtop">
          <div class="row">

            <div class="col-20"><f7-link href="/recommended/"><span></span><p>推荐课程</p></f7-link></div>
            <div class="col-20"><f7-link><span></span><p>最新课程</p></f7-link></div>
            <div class="col-20"><f7-link><span></span><p>大礼包</p></f7-link></div>
            <div class="col-20"><f7-link href="/examinationAnalysis/"><span></span><p>考情分析</p></f7-link></div>
            <div class="col-20"><f7-link href="/questionBank/"><span></span><p>推荐题库</p></f7-link></div>
          </div>
        </div>
        <f7-link> <img src="../../assets/homeQiang.png" alt=""> </f7-link>
        <div class="midlist midRecommend">
           <h3><i></i> 推荐课程 <f7-link>更多 <i class="iconfont icon-you"></i></f7-link></h3>

            <f7-swiper pagination >
              <f7-swiper-slide>
                  <div>
                    <f7-link>
                    <p>2018年综合素质现场直播</p>
                    <p>国版·354人正在学习</p>
                    <p><i class="iconfont icon-xingxing"></i><i class="iconfont icon-xingxing"></i><i class="iconfont icon-xingxing"></i><i class="iconfont icon-xingxing"></i><i class="iconfont icon-xingxing"></i></p>
                    <p>￥4886.00</p>
                    </f7-link>
                  </div>
                  <ul>
                      <li class="clearfix link">
                        <f7-link>
                          <span></span>
                          <div>
                            <p>浙江2018年教师招聘教育心理学二期回放</p>
                            <p>国版·354人正在学习 <i class="iconfont icon-xingxing"></i><i class="iconfont icon-xingxing"></i><i class="iconfont icon-xingxing"></i><i class="iconfont icon-xingxing"></i><i class="iconfont icon-xingxing"></i></p>
                            <p>￥356.00</p>
                          </div>
                        </f7-link>
                        </li>
                      <li class="clearfix link">
                        <f7-link>
                          <span></span>
                          <div>
                            <p>浙江2018年教师招聘教育心理学二期回放</p>
                            <p>国版·354人正在学习 <i class="iconfont icon-xingxing"></i><i class="iconfont icon-xingxing"></i><i class="iconfont icon-xingxing"></i><i class="iconfont icon-xingxing"></i><i class="iconfont icon-xingxing"></i></p>
                            <p>￥356.00</p>
                          </div>
                        </f7-link>
                      </li>
                      <li class="clearfix link">
                        <f7-link>
                          <span></span>
                          <div>
                            <p>浙江2018年教师招聘教育心理学二期回放</p>
                            <p>国版·354人正在学习 <i class="iconfont icon-xingxing"></i><i class="iconfont icon-xingxing"></i><i class="iconfont icon-xingxing"></i><i class="iconfont icon-xingxing"></i><i class="iconfont icon-xingxing"></i></p>
                            <p>￥356.00</p>
                          </div>
                        </f7-link>
                      </li>
                  </ul>
              </f7-swiper-slide>
              <f7-swiper-slide>
                 <img src="../../assets/homebar.png" alt="">
              </f7-swiper-slide>

            </f7-swiper>


        </div>
        <div class="midlist midNew ">
           <h3><i></i> 最新课程 <f7-link>更多 <i class="iconfont icon-you"></i></f7-link></h3>

            <f7-swiper pagination >
              <f7-swiper-slide>
                  <div>
                    <f7-link>
                    <p>2018年综合素质现场直播</p>
                    <p>国版·354人正在学习</p>
                    <p><i class="iconfont icon-xingxing"></i><i class="iconfont icon-xingxing"></i><i class="iconfont icon-xingxing"></i><i class="iconfont icon-xingxing"></i><i class="iconfont icon-xingxing"></i></p>
                    <p>￥4886.00</p>
                    </f7-link>
                  </div>
                  <ul>
                      <li class="clearfix link">
                        <f7-link>
                          <span></span>
                          <div>
                            <p>浙江2018年教师招聘教育心理学二期回放</p>
                            <p>国版·354人正在学习 <i class="iconfont icon-xingxing"></i><i class="iconfont icon-xingxing"></i><i class="iconfont icon-xingxing"></i><i class="iconfont icon-xingxing"></i><i class="iconfont icon-xingxing"></i></p>
                            <p>￥356.00</p>
                          </div>
                        </f7-link>
                      </li>
                      <li class="clearfix link">
                        <f7-link>
                          <span></span>
                          <div>
                            <p>浙江2018年教师招聘教育心理学二期回放</p>
                            <p>国版·354人正在学习 <i class="iconfont icon-xingxing"></i><i class="iconfont icon-xingxing"></i><i class="iconfont icon-xingxing"></i><i class="iconfont icon-xingxing"></i><i class="iconfont icon-xingxing"></i></p>
                            <p>￥356.00</p>
                          </div>
                        </f7-link>
                      </li>
                      <li class="clearfix link">
                        <f7-link>
                          <span></span>
                          <div>
                            <p>浙江2018年教师招聘教育心理学二期回放</p>
                            <p>国版·354人正在学习 <i class="iconfont icon-xingxing"></i><i class="iconfont icon-xingxing"></i><i class="iconfont icon-xingxing"></i><i class="iconfont icon-xingxing"></i><i class="iconfont icon-xingxing"></i></p>
                            <p>￥356.00</p>
                          </div>
                        </f7-link>
                      </li>
                  </ul>
              </f7-swiper-slide>
              <f7-swiper-slide>
                 <img src="../../assets/homebar.png" alt="">
              </f7-swiper-slide>

            </f7-swiper>
        </div>
        <div class="midlist midTime ">
           <h3><i></i> 限时抢购 <f7-link>更多 <i class="iconfont icon-you"></i></f7-link></h3>
            <f7-swiper pagination >
              <f7-swiper-slide>
                  <div>
                    <f7-link>
                    <p>2018年综合素质现场直播</p>
                    <p>国版·354人正在学习</p>
                    <p><i class="iconfont icon-xingxing"></i><i class="iconfont icon-xingxing"></i><i class="iconfont icon-xingxing"></i><i class="iconfont icon-xingxing"></i><i class="iconfont icon-xingxing"></i></p>
                    <p>￥4886.00 <span><i>24</i> 时 <i>30</i> 分 <i>30</i> 秒</span></p>
                    </f7-link>
                  </div>
                  <ul>
                      <li class="clearfix link">
                        <f7-link>
                          <span></span>
                          <div>
                            <p>浙江2018年教师招聘教育心理学二期回放</p>
                            <p>国版·354人正在学习 <i class="iconfont icon-xingxing"></i><i class="iconfont icon-xingxing"></i><i class="iconfont icon-xingxing"></i><i class="iconfont icon-xingxing"></i><i class="iconfont icon-xingxing"></i></p>
                            <p>￥356.00 <span><i>24</i> 时 <i>30</i> 分 <i>30</i> 秒</span></p>
                          </div>
                        </f7-link>
                      </li>
                      <li class="clearfix link">
                        <f7-link>
                          <span></span>
                          <div>
                            <p>浙江2018年教师招聘教育心理学二期回放</p>
                            <p>国版·354人正在学习 <i class="iconfont icon-xingxing"></i><i class="iconfont icon-xingxing"></i><i class="iconfont icon-xingxing"></i><i class="iconfont icon-xingxing"></i><i class="iconfont icon-xingxing"></i></p>
                            <p>￥356.00 <span><i>24</i> 时 <i>30</i> 分 <i>30</i> 秒</span></p>
                          </div>
                        </f7-link>
                      </li>
                      <li class="clearfix link">
                        <f7-link>
                          <span></span>
                          <div>
                            <p>浙江2018年教师招聘教育心理学二期回放</p>
                            <p>国版·354人正在学习 <i class="iconfont icon-xingxing"></i><i class="iconfont icon-xingxing"></i><i class="iconfont icon-xingxing"></i><i class="iconfont icon-xingxing"></i><i class="iconfont icon-xingxing"></i></p>
                            <p>￥356.00 <span><i>24</i> 时 <i>30</i> 分 <i>30</i> 秒</span></p>
                          </div>
                        </f7-link>
                      </li>
                  </ul>
              </f7-swiper-slide>
              <f7-swiper-slide>
                 <img src="../../assets/homebar.png" alt="">
              </f7-swiper-slide>

            </f7-swiper>
        </div>
        <div class="midlist midAnalyze ">
           <h3><i></i> 考情分析<f7-link>更多 <i class="iconfont icon-you"></i></f7-link></h3>
            <f7-swiper pagination >
              <f7-swiper-slide>
                  <ul>
                      <li class="clearfix link">
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
                      </li>
                      <li class="clearfix link">
                        <f7-link>
                          <span></span>
                          <div>
                            <p>浙江2018年教师招聘教育心理学二期回放</p>
                            <p><i>新</i>  中国招教网 &nbsp;&nbsp;2018/13/30</p>
                          </div>
                        </f7-link>
                      </li>
                  </ul>
              </f7-swiper-slide>
              <f7-swiper-slide>
                 <img src="../../assets/homebar.png" alt="">
              </f7-swiper-slide>

            </f7-swiper>
        </div>
         <div class="midlist midTopic ">
           <h3><i></i> 推荐题库<f7-link>更多 <i class="iconfont icon-you"></i></f7-link></h3>
            <f7-swiper pagination >
              <f7-swiper-slide>
                  <ul>
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
              </f7-swiper-slide>
              <f7-swiper-slide>
                 <img src="../../assets/homebar.png" alt="">
              </f7-swiper-slide>

            </f7-swiper>
        </div>
        <div class="midlist midLink">
               <h3><i></i> 猜你喜欢</h3>
                  <div>
                    <f7-link>
                    <p>2018年综合素质现场直播</p>
                    <p>国版·354人正在学习</p>
                    <p><i class="iconfont icon-xingxing"></i><i class="iconfont icon-xingxing"></i><i class="iconfont icon-xingxing"></i><i class="iconfont icon-xingxing"></i><i class="iconfont icon-xingxing"></i></p>
                    <p>￥4886.00</p>
                    </f7-link>
                  </div>
                  <ul>
                      <li class="clearfix link">
                        <f7-link>
                          <span></span>
                          <div>
                            <p>浙江2018年教师招聘教育心理学二期回放</p>
                            <p>国版·354人正在学习 <i class="iconfont icon-xingxing"></i><i class="iconfont icon-xingxing"></i><i class="iconfont icon-xingxing"></i><i class="iconfont icon-xingxing"></i><i class="iconfont icon-xingxing"></i></p>
                            <p>￥356.00</p>
                          </div>
                        </f7-link>
                      </li>
                      <li class="clearfix link">
                        <f7-link>
                          <span></span>
                          <div>
                            <p>浙江2018年教师招聘教育心理学二期回放</p>
                            <p>国版·354人正在学习 <i class="iconfont icon-xingxing"></i><i class="iconfont icon-xingxing"></i><i class="iconfont icon-xingxing"></i><i class="iconfont icon-xingxing"></i><i class="iconfont icon-xingxing"></i></p>
                            <p>￥356.00</p>
                          </div>
                        </f7-link>
                      </li>
                      <li class="clearfix link">
                        <f7-link>
                          <span></span>
                          <div>
                            <p>浙江2018年教师招聘教育心理学二期回放</p>
                            <p>国版·354人正在学习 <i class="iconfont icon-xingxing"></i><i class="iconfont icon-xingxing"></i><i class="iconfont icon-xingxing"></i><i class="iconfont icon-xingxing"></i><i class="iconfont icon-xingxing"></i></p>
                            <p>￥356.00</p>
                          </div>
                        </f7-link>
                      </li>
                  </ul>
                  <div>
                    <f7-link>
                    <p>2018年综合素质现场直播</p>
                    <p>国版·354人正在学习</p>
                    <p><i class="iconfont icon-xingxing"></i><i class="iconfont icon-xingxing"></i><i class="iconfont icon-xingxing"></i><i class="iconfont icon-xingxing"></i><i class="iconfont icon-xingxing"></i></p>
                    <p>￥4886.00</p>
                    </f7-link>
                  </div>
                  <ul>
                      <li class="clearfix link">
                        <f7-link>
                          <span></span>
                          <div>
                            <p>浙江2018年教师招聘教育心理学二期回放</p>
                            <p>国版·354人正在学习 <i class="iconfont icon-xingxing"></i><i class="iconfont icon-xingxing"></i><i class="iconfont icon-xingxing"></i><i class="iconfont icon-xingxing"></i><i class="iconfont icon-xingxing"></i></p>
                            <p>￥356.00</p>
                          </div>
                        </f7-link>
                      </li>
                      <li class="clearfix link">
                        <f7-link>
                          <span></span>
                          <div>
                            <p>浙江2018年教师招聘教育心理学二期回放</p>
                            <p>国版·354人正在学习 <i class="iconfont icon-xingxing"></i><i class="iconfont icon-xingxing"></i><i class="iconfont icon-xingxing"></i><i class="iconfont icon-xingxing"></i><i class="iconfont icon-xingxing"></i></p>
                            <p>￥356.00</p>
                          </div>
                        </f7-link>
                      </li>
                      <li class="clearfix link">
                        <f7-link>
                          <span></span>
                          <div>
                            <p>浙江2018年教师招聘教育心理学二期回放</p>
                            <p>国版·354人正在学习 <i class="iconfont icon-xingxing"></i><i class="iconfont icon-xingxing"></i><i class="iconfont icon-xingxing"></i><i class="iconfont icon-xingxing"></i><i class="iconfont icon-xingxing"></i></p>
                            <p>￥356.00</p>
                          </div>
                        </f7-link>
                      </li>
                  </ul>

        </div>
      </div>

  </f7-page>
</template>
<script>
export default {
  data: function() {
    return {};
  },
  methods: {}
};
</script>
<style lang="less">
.navbar {
  background-color: #fff !important;
  .navbar-inner {
    background-color: #fff  ;
    z-index: 10;
    .iconfont{
      color: #000;
      font-size: 20px;
    }
    .icon-zuo {
      color: #000;
      font-size: 24px;
    }
    .title{
      font-weight: 400;
    }
    .lf {
      span {
        font-family: "PingFang-SC-Regular";
        font-size: 16px;
        color: #999999;
        padding-right: 10px;
        position: relative;
      }
      .active {
        color: #000;
      }
      .active::before {
        content: " ";
        position: absolute;
        width: 30%;
        height: 3px;
        background-image: linear-gradient(#fd2d44, #fd2d44),
          linear-gradient(#fd2d44, #fd2d44);
        background-blend-mode: normal, normal;
        border-radius: 3px;
        bottom: -5px;
        left: 50%;
        transform: translateX(-50%);
      }
    }
    .rt {
      min-width: 75px;
      display: block;
      > a {
        display: inline-block;
        width: 50%;
        float: left;
        padding-left: 10px;
        .iconfont {
          color: #333;
        }
      }
    }
  }
}
.toolbar {
  height: 50px !important;
  .link{
    position: relative;
    width: 20%;
    >span{
      width: 22px;
      height: 22px;
      background-color: #000;
      position: absolute;
      top: 2px;
    }
    >p{
      font-family: "PingFang-SC-Regular";
      font-size: 12px;
      color: #666666;
      position: absolute;
      bottom: 0;
      line-height: 1;
    }
  }
}
.page-content {
  // padding-bottom: 50px !important;
}
.home {
  .page-content {
    .top {
      background-color: #fff;
      .swiper-container {
        .swiper-wrapper {
          .swiper-slide {
            padding: 8px 0;
            img {
              width: 100%;
            }
          }
        }
        .swiper-pagination-bullets {
          bottom: -4px;
          .swiper-pagination-bullet {
            width: 6px;
            height: 6px;
          }
          .swiper-pagination-bullet-active {
            width: 12px;
            background-image: linear-gradient(#fd2d44, #fd2d44),
              linear-gradient(#fd2d44, #fd2d44);
            background-blend-mode: normal, normal;
            box-shadow: 0px 0px 5px 0px rgba(253, 45, 68, 0.5);
            border-radius: 4px;
          }
        }
      }
      .seek {
        text-align: center;
        padding: 6px 0;
        .link {
          width: 80%;
          height: 30px;
          background-color: #f5f5f5;
          border-radius: 15px;
          font-family: "PingFang-SC-Regular";
          font-size: 14px;
          color: #cccccc;
          > .iconfont {
            margin-right: 10px;
          }
        }
      }
    }
    .mid {
      padding: 24px 0;
      .midtop {
        .row {
          .col-20 {
            text-align: center;
            .link {
              display: block;
              color: #000;
              > span {
                display: inline-block;
                width: 50px;
                height: 50px;
                background-color: #000;
              }
              > p {
                margin: 0;
              }
            }
          }
        }
      }
      > .link {
        width: 100%;
        margin-top: 20px;
        > img {
          width: 100%;
        }
      }
      .midlist {
        padding: 0 12px;
        padding-top: 20px;
        padding-bottom: 15px;
        h3 {
          margin: 0;
          position: relative;
          padding-left: 25px;
          font-family: "PingFang-SC-Medium";
          font-size: 18px;
          color: #333333;
          font-weight: 400;
          > i {
            position: absolute;
            left: 0;
            top: 50%;
            transform: translateY(-50%);
            width: 18px;
            height: 18px;
            background-color: #000;
          }
          > .link {
            float: right;
            font-family: "HiraginoSansGB-W3";
            font-size: 12px;
            color: #999999;
            line-height: 25px;
            > .iconfont {
              font-size: 12px;
            }
          }
        }
        .swiper-container {
          .swiper-wrapper {
            .swiper-slide {
              padding: 10px 0;
              > div {
                height: 126px;
                width: 100%;
                text-align: center;
                background: url(../../assets/hometui.png) no-repeat center
                  center;
                border-radius: 10px;
                > .link {
                  width: 100%;
                  height: 100%;
                  display: block;
                  padding-top: 15px;
                  > p {
                    font-family: "PingFang-SC-Regular";
                    letter-spacing: 1px;
                    color: #ffffff;
                    margin: 0;
                    font-size: 12px;
                    line-height: 20px;
                  }
                  > p:nth-of-type(1) {
                    font-size: 18px;
                    line-height: 36px;
                    display: inline-block;
                    border-top: 1px solid #fff;
                    border-bottom: 1px solid #fff;
                  }
                  > p:nth-of-type(2) {
                    margin-top: 5px;
                  }
                  > p:nth-of-type(4) {
                    color: #fcff00;
                  }
                }
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
                      background: url(https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1519301525135&di=dd2fed90de9f2622da9e2c6f51d3888b&imgtype=0&src=http%3A%2F%2F5b0988e595225.cdn.sohucs.com%2Fimages%2F20170922%2Fca414a2cf9b34ec49aff78f350b0ec87.gif) no-repeat center center;
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
                        >span{
                          float: right;
                          color: #333333;
                          >i{
                            color: #fd2d44;
                            margin: 0;
                          }
                        }
                      }
                    }
                  }
                }
              }
            }
          }
          .swiper-pagination-bullets {
            bottom: -2px;
            .swiper-pagination-bullet {
              width: 6px;
              height: 6px;
            }
            .swiper-pagination-bullet-active {
              width: 12px;
              background-image: linear-gradient(#fd2d44, #fd2d44),
                linear-gradient(#fd2d44, #fd2d44);
              background-blend-mode: normal, normal;
              box-shadow: 0px 0px 5px 0px rgba(253, 45, 68, 0.5);
              border-radius: 4px;
            }
          }
        }
      }
      .midNew {
        background-color: #fff;
      }
      .midTime {
        h3 {
          > span {
            font-family: "PingFang-SC-Regular";
            font-size: 12px;
            letter-spacing: -1px;
            color: #333333;
            > i {
              font-family: "PingFang-SC-Medium";
              font-size: 12px;
              letter-spacing: -1px;
              color: #fd2d44;
            }
          }
        }
      }
      .midAnalyze {
        background-color: #fff;
        .swiper-container {
          .swiper-wrapper {
            .swiper-slide {
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
          }
        }
      }
      .midTopic {
        .swiper-container {
          .swiper-wrapper {
            .swiper-slide {
              > ul {
                > li {
                  min-height: 70px;
                  > .link {
                    > div {
                      padding: 0;
                      > p:nth-of-type(2) {
                        font-size: 12px;
                        line-height: 28px;
                      }
                    }
                  }
                }
              }
            }
          }
        }
      }
      .midLink {
        background-color: #fff;
        h3 {
          text-align: center;
          display: inline-block;
          left: 50%;
          transform: translateX(-50%);
          > i {
            position: absolute;
          }
        }
        > div {
          height: 126px;
          width: 100%;
          text-align: center;
          background: url(../../assets/hometui.png) no-repeat center center;
          border-radius: 10px;
          margin-top: 10px;
          > .link {
            width: 100%;
            height: 100%;
            display: block;
            padding-top: 15px;
            > p {
              font-family: "PingFang-SC-Regular";
              letter-spacing: 1px;
              color: #ffffff;
              margin: 0;
              font-size: 12px;
              line-height: 20px;
            }
            > p:nth-of-type(1) {
              font-size: 18px;
              line-height: 36px;
              display: inline-block;
              border-top: 1px solid #fff;
              border-bottom: 1px solid #fff;
            }
            > p:nth-of-type(2) {
              margin-top: 5px;
            }
            > p:nth-of-type(4) {
              color: #fcff00;
            }
          }
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
                background: url(https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1519301525135&di=dd2fed90de9f2622da9e2c6f51d3888b&imgtype=0&src=http%3A%2F%2F5b0988e595225.cdn.sohucs.com%2Fimages%2F20170922%2Fca414a2cf9b34ec49aff78f350b0ec87.gif) no-repeat center center;
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
      }
    }
  }
}
</style>


