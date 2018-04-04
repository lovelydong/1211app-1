<template>
  <f7-page class="myGrade">

        <f7-navbar>
          <f7-nav-left sliding><f7-link class="iconfont icon-zuo" @click="$f7router.back()"></f7-link></f7-nav-left>
          <f7-nav-title>自主评分</f7-nav-title>
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
            </ul>
          </div>
          </transition>
        <div class="mid" v-for="item in jdaninfo.jdanswer">
                  <div>
                    <h3>简答题 </h3>
                    <div class="content">
                      <p>{{item.itemname}}</p>
                      <div>{{item.ad}}</div>
                    </div>
                  </div>
                  <div class="bot">
                    <h4>答案解析：</h4>
                    <div>{{item.analysis}}</div>
                  </div>
        </div>

                <f7-range
                  :min="0"
                  :max="max"
                  :step="1"
                  :value="val"
                  :label="true"
                  color="orange"
                ></f7-range>

                  <f7-link class="link1" @click="gitpush">确定</f7-link>
      <Share ref="c1"></Share>
  </f7-page>
</template>
<script>
import global_ from "../../pages/Global";

export default {
  data: function() {
    return {
      url: "http://39.106.134.125:8080/netschool/",
      val:0,
      max:10,
      shows: {
        showTop: false
      },
      jdaninfo : {}

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

    gitpush: function(){
      const range = this.$f7.range.get('.range-slider');
      this.val =  range.getValue();
      this.$http
      .get(this.url + "/exambank/getScore", {
        params: {
          id: this.jdaninfo.id,
          score:this.val,
        }
      })
      .then(function(res) {
        global_.jdaninfo1 = res.body.data;
        this.$f7router.navigate('/Kperformance/');

      })
    }
  },
  created:function(){
    this.jdaninfo = global_.jdaninfo;
    this.max = this.jdaninfo.jdanswer.length * 10;
    let jdme = JSON.parse(this.jdaninfo.jd);
    console.log(jdme)
    for (const key in jdme) {
      this.jdaninfo.jdanswer.forEach(element => {
        if(element.itemid == key){
          element["ad"] = jdme[key]
        }
      });
    }
  }
};
</script>
<style lang="less">

.myGrade {
  .page-content{
    padding-bottom: 50px;
  }
   .link1 {
      display: block;
      width: 80%;
      margin: 0 auto;
      height: 44px;
      background-color: #fd5d32;
      color: #fff;
      text-align: center;
      line-height: 44px;
      font-family: "PingFang-SC-Regular";
      margin-top: 20px;
    }
  .mid {
    > div {
      padding: 20px 12px;
      background-color: #fff;
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
        > div {
          background-color: #f3f3f3;
          width: 100%;
          margin-top: 40px;
          padding: 10px;
          font-family: "PingFang-SC-Medium";
          font-size: 14px;
          color: #fd5d32;
        }
      }
    }
    > .bot {
      background-color: #efeff4;
      padding-bottom: 0;
      > h4 {
        font-family: "PingFang-SC-Regular";
        font-size: 16px;
        font-weight: 400;
        color: #fd2d44;
      }
      > div {
        padding: 30px 20px;
      }
    }
    > .hyB {
      padding: 0;
      background-color: #efeff4;
      .vue-slider-component .vue-slider-process {
        background-color: #fd2d44;
      }
      .vue-slider-component {
        margin: 0 auto;
      }
      .vue-slider-tooltip {
        border: 1px solid #fd2d44;
        background-color: #fd2d44;
      }
    }

    .swiper-pagination-bullet-active {
      background: #fd2d44;
    }
  }
}
</style>


