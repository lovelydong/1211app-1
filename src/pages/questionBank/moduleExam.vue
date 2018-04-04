<template>
  <f7-page class="moduleExam"  infinite @infinite="onInfiniteScroll">

        <f7-navbar>
          <f7-nav-left sliding><f7-link class="iconfont icon-zuo" @click="$f7router.back()"></f7-link></f7-nav-left>
          <f7-nav-title>{{navbar}}</f7-nav-title>
          <f7-nav-right>
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
                <div class="col-20" :class="{active: shows == 1?true:false}" @click="shows = 1">类型<i class="iconfont icon-icon--"></i></div>
                <div class="col-20" :class="{active: shows == 2?true:false}" @click="shows = 2">学段<i class="iconfont icon-icon--"></i></div>
                <div class="col-20" :class="{active: shows == 3?true:false}" @click="shows = 3">科目<i class="iconfont icon-icon--"></i></div>
                <div class="col-20" style="color:#fd2d44;" @click="shows = 4">筛选<i class="iconfont icon-shaixuan"></i></div>
            </div>
            <div class="screen"  v-if="shows == 4?true:false" @click="shows = false">
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
                    <li class="col-33" :class="{active: type.type == 2 ?true:false}" @click="type.type = 2 ;typeFn(2)"> 教师招聘 <i v-if="type.type == 2 ?true:false" class="iconfont icon-selected-copy"></i></li>
                    <li class="col-33" :class="{active: type.type == 3 ?true:false}" @click="type.type = 3 ;typeFn(3)"> 教师资格证 <i v-if="type.type == 3 ?true:false" class="iconfont icon-selected-copy"></i></li>
                    <li class="col-33" :class="{active: type.type == 4 ?true:false}" @click="type.type = 4 ;typeFn(4)"> 特岗教师 <i v-if="type.type == 4 ?true:false" class="iconfont icon-selected-copy"></i></li>
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
                    <li v-for="item in gitCon.gradeList" class="col-33" :class="{active: type.gradeList == item.name_value ?true:false}" @click="type.gradeList = item.name_value"> {{item.name}} <i v-if="type.gradeList == item.name_value ?true:false" class="iconfont icon-selected-copy"></i></li>
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
                    <li v-for="item in gitCon.subjectList" class="col-33" :class="{active: type.subjectList == item.name_value ?true:false}" @click="type.subjectList = item.name_value"> {{item.name}} <i v-if="type.subjectList == item.name_value ?true:false" class="iconfont icon-selected-copy"></i></li>
                  </ul>
              </div>
            </transition>
            <transition
                  name="custom-classes-transition"
                  enter-active-class="animated bounceInRight"
                  leave-active-class="animated bounceOutRight"
                >
                  <div class="screen-but" v-if="shows == 4?true:false">
                    <div>
                      <h3>筛选</h3>
                    <h4>考试类型</h4>
                    <div class="row">
                        <div  class="col-33" :class="{active: type.type == 2 ?true:false}" @click="type.type = 2;typeFn(2)">教师招聘</div>
                        <div  class="col-33" :class="{active: type.type == 3 ?true:false}" @click="type.type = 3;typeFn(3)">教师资格证</div>
                        <div  class="col-33" :class="{active: type.type == 4 ?true:false}" @click="type.type = 4;typeFn(4)">特岗教师</div>
                    </div>
                    <h4>笔面试</h4>
                    <div class="row">
                        <div v-for="item in gitCon.writeorfaceList" class="col-33" :class="{active: type.writeorfaceList == item.name_value ?true:false}" @click="type.writeorfaceList = item.name_value">{{item.name}}</div>
                    </div>
                    <h4>学段</h4>
                    <div class="row">
                        <div v-for="item in gitCon.gradeList" class="col-33" :class="{active: type.gradeList == item.name_value ?true:false}" @click="type.gradeList = item.name_value">{{item.name}}</div>
                    </div>
                    <h4>科目</h4>
                    <div class="row">
                        <div v-for="item in gitCon.subjectList" class="col-33" :class="{active: type.subjectList == item.name_value ?true:false}" @click="type.subjectList = item.name_value">{{item.name}}</div>

                    </div>

                    <h4>地区</h4>
                    <div class="row">
                        <div v-for="item in gitCon.areaList" class="col-33" :class="{active: type.areaList == item.name_value ?true:false}" @click="type.areaList = item.name_value">{{item.name}}</div>
                    </div>
                    </div>
                    <div class="off">
                      <div class="row">
                          <div class="col-50" @click="type.type =null;type.gradeList =null;type.subjectList =null;type.writeorfaceList =null;type.areaList =null;type.exam_type =null;">重置</div>
                          <div class="col-50" @click="shows = false">确定</div>
                      </div>
                    </div>
                  </div>
              </transition>
        </f7-subnavbar>
        <div class="mid">

          <ul class="tab4">
                      <li class="clearfix link" v-for="item in recommend" :key="item.id" >
                        <f7-link :href="'/questionBankParticulars?id='+item.id+'&qtype='+qtype">
                          <div>
                            <p>{{item.name}}</p>
                            <p><span v-if="item.ext2">热</span> 试试手气，马上开始做题</p>
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
      url: "http://39.106.134.125:8080/netschool/",
      shows: false,
      showTop: false,
      type: {
        type: 2,
        gradeList: null,
        subjectList: null,
        writeorfaceList: null,
        areaList: null
      },
      gitCon: {},
      recommend: {},
      classtype: "",
      qtype: "",
      navbar:"题库",
      ext:2,
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
    },
    typeFn(e) {
      this.$http
        .get(this.url + "/exambank/changearea", {
          params: {
            type: e,
            exam_type: this.qtype
          }
        })
        .then(
          function(res) {
            this.gitCon.areaList = res.data.data;
          },
          function(res) {}
        );
    }
  },
  watch: {
    type: {
      handler: function(val, oldVal) {
        this.$http
          .get(this.url + "/exambank/jsonlist", {
            params: {
              page: 1,
              limit: 50,
              ext1: this.ext,
              exam_type: this.qtype,
              type: this.type.type,
              writeorface: this.type.writeorfaceList,
              grade: this.type.gradeList,
              app_subject: this.type.subjectList,
              area: this.type.areaList,
            }
          })
          .then(function(res) {
            this.recommend = res.body.data;
            console.log(res)
          });
      },
      deep: true
    }
  },
  created: function() {
    let url = this.url;
    this.classtype = this.$f7route.query.classtype;
    this.qtype = this.$f7route.query.qtype;
    /*	console.log(this.classtype)
    console.log(this.qtype)*/
    if(this.qtype == 173701){
          this.navbar =  "随机练习";
    }else if(this.qtype == 173702){
          this.navbar =  "模拟估分";
    }else if(this.qtype == 173703){
          this.navbar =  "章节练习";
    }else if(this.qtype == 173704){
          this.navbar =  "真题演练";
    }else if(this.qtype == 666){
          this.navbar =  "推荐题库";
          this.ext = 1;
          this.qtype=null;
    }


    this.$http
      .get(url + "/exambank/typelist", {
        params: {
          type: 3,
          exam_type: this.qtype,
        }
      })
      .then(
        function(res) {
          this.gitCon = res.data.data;
        },
      );
        this.$http
          .get(this.url + "/exambank/jsonlist", {
            params: {
              page: 1,
              limit: 50,
              ext1:this.ext,
              exam_type: this.qtype,
              type: this.type.type,
              writeorface: this.type.writeorfaceList,
              grade: this.type.gradeList,
              app_subject: this.type.subjectList,
              area: this.type.areaList,
            }
          })
          .then(function(res) {
            this.recommend = res.body.data;
            console.log(res)
          });
  }
};
</script>
<style lang="less">
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
}
</style>


