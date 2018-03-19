<template>
  <f7-page class="AnswerKeys">

        <f7-navbar>
          <f7-nav-left sliding><f7-link class="iconfont icon-zuo" @click="$f7router.back()"></f7-link></f7-nav-left>
          <f7-nav-title>答案解析</f7-nav-title>
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
              <f7-link  ><i class="iconfont icon-shoucang"></i> 收藏试卷</f7-link>
              <f7-link  @click="shareboy"><i class="iconfont icon-fenxiang"></i> 分享试卷</f7-link>
            </ul>
          </div>
          </transition>
         <div class="mid">
      <div v-if="getExamJx.dx" v-for="item in getExamJx.dx" :key="item.id">
          <h3>单选题</h3>

          <div class="content">
              <p>1、小华家的电灯丝断了，他把灯泡晃了晃使灯丝 又搭上了，再用的时候会发现：</p>
              <ul>
                  <f7-link v-for="k in getExamJx.dxa" v-if="k.itemid == item.id" :key="k.id"> <span>{{k.indx}}</span>{{k.optionname}}</f7-link>
              </ul>
              <div class="bot">
                  <h4>答案解析：</h4>
                  <div v-for="k in getExamJx.dxanswer" v-if="k.itemid == item.id" :key="k.id">{{k.analysis}}</div>
              </div>
          </div>
      </div>
      <div v-if="getExamJx.dxs" v-for="item in getExamJx.dxs" :key="item.id">
          <h3>多选题</h3>

          <div class="content">
              <p>1、小华家的电灯丝断了，他把灯泡晃了晃使灯丝 又搭上了，再用的时候会发现：</p>
              <ul>
                  <f7-link v-for="k in getExamJx.dxsa" v-if="k.itemid == item.id" :key="k.id"> <span>{{k.indx}}</span>{{k.optionname}}</f7-link>
              </ul>
              <div class="bot">
                  <h4>答案解析：</h4>
                  <div v-for="k in getExamJx.dxsanswer" v-if="k.itemid == item.id" :key="k.id">{{k.analysis}}</div>
              </div>
          </div>
      </div>
    <div v-if="getExamJx.jd" v-for="item in getExamJx.jd" :key="item.id">
         <h3>简答题 </h3>

        <div class="content">
            <p>{{item.itemname}}</p>
            <div class="bot">
                <h4>答案解析：</h4>

                <div  v-for="k in getExamJx.jdanswer" v-if="k.itemid == item.id" :key="k.id">{{k.analysis}}</div>
            </div>
        </div>

    </div>
</div>
      <Share ref="c1"></Share>
  </f7-page>
</template>
<script>


export default {

  data: function() {
    return {
      url: "http://localhost:8080/shiro_test",
      id: this.$f7route.query.id,
      shows: {
        showTop: false
      },
      getExamJx:{},
      indx: ["A", "B", "C", "D", "E", "F", "G", "H"],

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
  created:function(){
    console.log("解析开始-----------------------------")
    this.$http
      .get(this.url + "/exambank/getExamJx", {
        params: {
          id: this.id
        }
      })
      .then(function(res) {
        console.log(res)
        let arr = res.body.data;
        let ind = 0;
        if (arr.dx) {
          arr.dx.forEach(element => {
            let indx = 0;
            arr.dxa.forEach(k => {
              if (k.itemid == element.id) {
                k["indx"] = this.indx[indx];
                indx++;
              }
            });
          });
        }
        if (arr.dxs) {
          arr.dxs.forEach(element => {
            let indx = 0;
            arr.dxsa.forEach(k => {
              if (k.itemid == element.id) {
                k["indx"] = this.indx[indx];
                indx++;
              }
            });
          });
        }
        this.getExamJx = arr;
        console.log(arr)
      })
  }
};
</script>
<style lang="less">
.AnswerKeys {
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
          color: #666;
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
            > span {
              color: #fff;
              background-color: #fd5d32;
            }
          }
          > .active1 {
            color: #22ac38;
            > span {
              color: #fff;
              background-color: #22ac38;
              border: 1px solid #22ac38;
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
            color: #fd5d32;
          }
          > div {
            padding: 14px 20px;
            color: #666666;
          }
        }
      }
    }
  }
}
</style>


