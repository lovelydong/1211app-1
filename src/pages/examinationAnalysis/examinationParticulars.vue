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
              <f7-link><i class="iconfont icon-xiaoxi1"></i> 系统消息</f7-link>
              <f7-link><i class="iconfont icon-shouye"></i> 返回首页</f7-link>
              <f7-link><i class="iconfont icon-saoyisao"></i> 扫一扫</f7-link>
              <f7-link><i class="iconfont icon-gouwuche"></i> 购物车</f7-link>
              <f7-link  @click="shareboy"><i class="iconfont icon-fenxiang"></i> 分享</f7-link>
            </ul>
          </div>
          </transition>
        <div class="top">
          <h3>2017下半年教师资格笔试准考证打印入口</h3>
          <p>中国招教网-2017年10月20日</p>
          <div class="com">
            <img src="https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1519471941955&di=4fd8e5a340c3f28d7d2e5d2841aa3833&imgtype=0&src=http%3A%2F%2Fimage.uczzd.cn%2F15591592136517073431.gif%3Fid%3D0%26from%3Dexport" alt="">
            <p>      根据国家有关规定，中小学教师资格考试合格者人员还需要向相应的教师资格认定机构(即教育局)申请认定教师资格，才能获得相应的教师资格证书。现就中小学教师资格考试合格人员申请认定相应教师资格的有关事项通知如下:
                    1.请申请人登录所在省份教师资格认定网站，或根据拟申请认定的教育局通知要求，了解认定政策、认定流程、网上报名时间、报名网址、现场确认时间、确认地点、普通话测试、体检和需要提交的材料等规定2.根据申请人户籍所在地，或者申请人的人事档案关系所在地(应届毕业生向就读学校所在地)教育局公布的教师资格认定申请网上报名时间和报名网址，及时进行教师资格认定网报，以防错过认定。上海市的申请人报名时间及报名网址请关注“上海教育人才网”(www.shehr.cn)，其他省份的申请人报名网址为“中国教师资格网”(www.jszg.edu.cn)。
                    3.具体申报流程和需要提交的材料除问询拟申请认定的教育局外，还可在“中国教师资格网”-“常见问题”栏目中查看“国考合格人员如何获得教师资格证书”等问题解答。</p>
          </div>
        </div>
        <div class="mid">
              <p>一一 &nbsp; 相关考情 &nbsp; 一一</p>

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
    shareboy: function(data) {
      this.$refs.c1.sharefn();
    }
  }
};
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


