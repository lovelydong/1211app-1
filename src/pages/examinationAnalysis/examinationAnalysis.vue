<template>
  <f7-page class="examinationAnalysis"  infinite @infinite="onInfiniteScroll">

        <f7-navbar>
          <f7-nav-left sliding><f7-link class="iconfont icon-zuo" @click="$f7router.back()"></f7-link></f7-nav-left>
          <f7-nav-title>考情分析</f7-nav-title>
          <f7-nav-right>
            <f7-link class="iconfont icon-sousuo" href="/search/"></f7-link>
            <f7-link class="iconfont icon-gengduo" @click="showTop = !showTop"></f7-link>
          </f7-nav-right>

        </f7-navbar>
         <f7-subnavbar>
            <transition
                  name="custom-classes-transition"
                  enter-active-class="animated pulse"
                >
          <div class="TopsZ" v-if="showTop" >
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
            <div class="row">
                <div class="col-20" :class="{active: shows == 1?true:false}" @click="shows = 1">省份<i class="iconfont icon-icon--"></i></div>
                <div class="col-20" :class="{active: shows == 2?true:false}" @click="shows = 2">市区<i class="iconfont icon-icon--"></i></div>
                <div class="col-20" :class="{active: shows == 3?true:false}" @click="shows = 3">年份<i class="iconfont icon-icon--"></i></div>
            </div>
            <div class="screen1" v-if="shows == 1?true:false || shows == 2?true:false || shows == 3?true:false" @click="shows = false">
            </div>
            <transition
                  name="custom-classes-transition"
                  enter-active-class="animated bounceInDown"
                  leave-active-class="animated bounceOutUp"
                >
              <div class="lx" v-if="shows == 1?true:false">
                  <ul>
                    <li v-for="item in gitCon.province" class="col-33" :class="{active: type.province == item.provinceid ?true:false}" @click="type.province = item.provinceid"> {{item.province}} <i v-if="type.province == item.provinceid ?true:false" class="iconfont icon-selected-copy"></i></li>
                  </ul>
              </div>
            </transition>
             <transition
                  name="custom-classes-transition"
                  enter-active-class="animated bounceInDown"
                  leave-active-class="animated bounceOutUp"
                >
              <div class="lx" v-if="shows == 2?true:false">
                  <ul>
                    <li v-for="item in gitCon.city" class="col-33" :class="{active: type.city == item.cityid ?true:false}" @click="type.city = item.cityid"> {{item.name}} <i v-if="type.city == item.cityid ?true:false" class="iconfont icon-selected-copy"></i></li>
                  </ul>
              </div>
            </transition>
             <transition
                  name="custom-classes-transition"
                  enter-active-class="animated bounceInDown"
                  leave-active-class="animated bounceOutUp"
                >
              <div class="lx" v-if="shows == 3?true:false">
                  <ul>
                    <li v-for="item in gitCon.ext1" class="col-33" :class="{active: type.ext1 == item.name_value ?true:false}" @click="type.ext1 = item.name_value"> {{item.name}} <i v-if="type.ext1 == item.name_value ?true:false" class="iconfont icon-selected-copy"></i></li>
                  </ul>
              </div>
            </transition>
        </f7-subnavbar>
        <div class="mid">
          <ul>
                      <li class="clearfix link" v-for="(con,index) in getCondition">
                        <f7-link :href="'/examinationParticulars?id='+con.id">
                          <span :style="{backgroundImage: 'url(' + url + con.img + ')' }"></span>
                          <div>
                            <p>{{con.file_name}}</p>
                            <p><i v-if="index <= 10">新</i>  {{con.wfrom}} &nbsp;&nbsp;{{con.create_time/1000 | moment("YYYY-MM-DD")}}</p>
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
      url: "http://39.106.134.125/netschool/",
      shows: null,
      showTop: false,
      gitCon: {},
      getCondition: {},
      type: {
        province: null,
        city: null,
        ext1: null
      }
    };
  },
  watch: {
    type: {
      handler: function(val, oldVal) {
        this.$http
          .get(this.url + "/getCityByProvinceId", {
            params: {
              id: this.type.province
            }
          })
          .then(function(res) {
            this.gitCon.city = res.body.data;
          });

        this.$http
          .get(this.url + "/examcondition/applist", {
            params: {
            	page:1,
            	limit:100,
              province: this.type.province,
              city: this.type.city,
              ext1: this.type.ext1
            }
          })
          .then(function(res) {
            this.getCondition = res.body.data;
            console.log(res)
          });
      },
      deep: true
    }
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
  created() {
    //筛选条件
    this.$http
      .get(this.url + "/examcondition/getCondition", {
        params: {}
      })
      .then(function(res) {
        this.gitCon = res.body.data;
        console.log(res);
      });
      this.$http
          .get(this.url + "/examcondition/applist", {
            params: {
            	page:1,
            	limit:100,
              province: this.type.province,
              city: this.type.city,
              ext1: this.type.ext1
            }
          })
          .then(function(res) {
            this.getCondition = res.body.data;
            console.log(res)
          });


  }
};
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
          border: 1px solid #f2f2f2;
          background-color: #f2f2f2;
          border-radius: 5px;
          margin: 5px 0;
        }
        > .active {
          border-color: #fd2d44;
          color: #fd2d44;
          background-color: #fff;
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
    max-height: 200px;
    overflow: auto;

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
.examinationAnalysis {
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
            -webkit-background-size: cover;
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
}
</style>


