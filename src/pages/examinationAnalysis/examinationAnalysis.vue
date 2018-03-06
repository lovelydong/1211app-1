<template>
  <f7-page class="examinationAnalysis"  infinite @infinite="onInfiniteScroll">

        <f7-navbar>
          <f7-nav-left sliding><f7-link class="iconfont icon-zuo" @click="$f7router.back()"></f7-link></f7-nav-left>
          <f7-nav-title>考情分析</f7-nav-title>
          <f7-nav-right>
            <f7-link class="iconfont icon-sousuo" href="/search/"></f7-link>
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
              <f7-link><i class="iconfont icon-xiaoxi1"></i> 系统消息</f7-link>
              <f7-link><i class="iconfont icon-shouye"></i> 返回首页</f7-link>
              <f7-link><i class="iconfont icon-saoyisao"></i> 扫一扫</f7-link>
              <f7-link><i class="iconfont icon-gouwuche"></i> 购物车</f7-link>
              <f7-link  @click="shareboy"><i class="iconfont icon-fenxiang"></i> 分享</f7-link>
            </ul>
          </div>
          </transition>
        <div class="mid">
          <ul>
                      <li class="clearfix link">
                        <f7-link href="/examinationParticulars">
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
      }
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
  }
};
</script>
<style lang="less">
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


