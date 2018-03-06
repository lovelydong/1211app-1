<template>
  <f7-page class="questionBankParticulars">

        <f7-navbar>
          <f7-nav-left sliding><f7-link class="iconfont icon-zuo" @click="$f7router.back()"></f7-link></f7-nav-left>
          <f7-nav-title>推荐题库</f7-nav-title>
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
              <f7-link  ><i class="iconfont icon-shoucang"></i> 收藏本题</f7-link>
              <f7-link  @click="shareboy"><i class="iconfont icon-fenxiang"></i> 分享本题</f7-link>
              <f7-link  href="/myGrade"><i class="iconfont icon-tijiaodingdan"></i> 提交试卷</f7-link>
            </ul>
          </div>
          </transition>
        <div class="mid">
          <f7-swiper pagination>
              <f7-swiper-slide>
                <h3>一、单选题 <span><em>1</em>/15</span></h3>
                <div class="content">
                  <p>1、小华家的电灯丝断了，他把灯泡晃了晃使灯丝
                  又搭上了，再用的时候会发现：</p>
                  <ul>
                    <f7-link> <span>A</span>灯比原来亮了</f7-link>
                    <f7-link class="active"> <span>B</span>灯比原来亮了</f7-link>
                    <f7-link> <span>C</span>灯比原来亮了</f7-link>
                  </ul>
                </div>
              </f7-swiper-slide>
              <f7-swiper-slide>
                 <h3>一、单选题 <span><em>1</em>/15</span></h3>
                  <div class="content">
                    <p>1、小华家的电灯丝断了，他把灯泡晃了晃使灯丝
                    又搭上了，再用的时候会发现：</p>
                    <textarea placeholder="你的答案....."></textarea>
                  </div>
              </f7-swiper-slide>
          </f7-swiper>
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
.questionBankParticulars {
  .mid {
    padding: 20px 12px;
    background-color: #fff;
    .swiper-wrapper {
      .swiper-slide {
        > h3 {
          font-family: "PingFang-SC-Medium";
          font-size: 16px;
          line-height: 30px;
          color: #333333;
          font-weight: 400;
          > span {
            float: right;
            > em {
              color: #fd2d44;
            }
          }
        }
        > .content {
          padding: 40px 20px;
          > p {
            font-family: "PingFang-SC-Medium";
            font-size: 16px;
            line-height: 30px;
            color: #333333;
          }
          > ul {
            padding-top: 30px;

            > .link {
              display: block;
              font-family: "PingFang-SC-Medium";
              font-size: 16px;
              color: #333333;
              padding: 10px 0;
              > span {
                border: solid 1px #fd5d32;
                border-radius: 50%;
                padding: 0 5px;
                margin-right: 10px;
                color: #fd5d32;
              }
            }
            > .active {
              color: #fd5d32;
              >span{
                color: #fff;
                background-color: #fd5d32;
              }
            }
          }
          > textarea {
            background-color: #f3f3f3;
            width: 100%;
            height: 176px;
            margin-top: 40px;
            padding: 10px;
            font-family: "PingFang-SC-Medium";
            font-size: 14px;
            color: #333;
          }
        }
      }
    }
    .swiper-pagination-bullet-active {
      background: #fd2d44;
    }
  }
}
</style>


