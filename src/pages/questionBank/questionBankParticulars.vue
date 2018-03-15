<template>
  <f7-page class="questionBankParticulars">

        <f7-navbar>
          <f7-nav-left sliding><f7-link class="iconfont icon-zuo" @click="$f7router.back()"></f7-link></f7-nav-left>
          <f7-nav-title>{{navbar}}</f7-nav-title>
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
              <f7-link  @click="gitpush"><i class="iconfont icon-tijiaodingdan"></i> 提交试卷</f7-link>
            </ul>
          </div>
          </transition>
        <div class="mid">
          <f7-swiper pagination v-if="getExam">
              <f7-swiper-slide  v-if="getExam.dx" v-for="(item,index) in getExam.dx" :key="item.id">
                <h3>单选题 <span><em>{{item.ind}}</em>/{{code}}</span></h3>
                <div class="content">
                  <p>{{item.itemname}}</p>
                  <ul>
                    <f7-link v-for="(k,index1) in getExam.dxa" v-if="k.itemid == item.id" :key="k.id" :class="{active : dan[item.id] == k.id ? true:false }"  @click="dan[item.id] = k.id"> <span>{{k.indx}}</span>{{k.optionname}}</f7-link>
                  </ul>
                </div>
              </f7-swiper-slide>
              <f7-swiper-slide v-if="getExam.dx" v-for="(item,index) in getExam.dxs" :key="item.id">
                <h3>多选题 <span><em>{{item.ind}}</em>/{{code}}</span></h3>
                <div class="content">
                  <p>{{item.itemname}}</p>
                  <ul>
                    <f7-link v-for="(k,idnex1) in getExam.dxsa" v-if="k.itemid == item.id" :key="k.id" :class="{active : duo[item.id].indexOf(k.id) !== -1 ? true:false }" @click="duofn(item.id,k.id)"> <span>{{k.indx}}</span>{{k.optionname}}</f7-link>
                  </ul>
                </div>
              </f7-swiper-slide>
              <f7-swiper-slide v-if="getExam.dx" v-for="item in getExam.jd" :key="item.id">
                 <h3> 简答题 <span><em>{{item.ind}}</em>/{{code}}</span></h3>
                  <div class="content">
                    <p>{{item.itemname}}：</p>
                    <textarea v-model="jd[item.id]" placeholder="你的答案....." @click="es"> </textarea>
                  </div>
              </f7-swiper-slide>
          </f7-swiper>
        </div>
        <Share ref="c1"></Share>
  </f7-page>
</template>
<script>
import global_ from "../../pages/Global";
export default {
  data: function() {
    return {
      url: "http://192.168.0.115:8080/shiro_test",
      id: this.$f7route.query.id,
      shows: {
        showTop: false
      },
      getExam: null,
      qtype: this.$f7route.query.qtype,
      navbar: "题库",
      code: 0,
      codeindex: 1,
      indx: ["A", "B", "C", "D", "E", "F", "G", "H"],
      dan: {},
      duo: {},
      jd: {}
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
    es() {
      console.log(this.jd);
    },
    gitpush() {
      console.log(
        JSON.stringify(this.dan),
        JSON.stringify(this.duo),
        JSON.stringify(this.jd)
      );

      this.$http
        .get(this.url + "/exambank/selfGrade", {
          params: {
            id: this.id,
            dan: JSON.stringify(this.dan),
            duo: JSON.stringify(this.duo),
            jd: JSON.stringify(this.jd)
          }
        })
        .then(function(res) {
          global_.jdaninfo = res.body.data;
          console.log( global_.jdaninfo)
          this.$f7router.navigate('/myGrade/')
        });
    },
    duofn(t, a) {
      if (this.duo[t].indexOf(a) == -1) {
        this.duo[t].push(a);
      } else {
        this.duo[t].splice(this.duo[t].indexOf(a), 1);
      }
    }
  },
  created: function() {
    console.log(new  Date().getTime())
    if (this.qtype == 173701) {
      this.navbar = "随机练习";
    } else if (this.qtype == 173702) {
      this.navbar = "模拟估分";
    } else if (this.qtype == 173703) {
      this.navbar = "章节练习";
    } else if (this.qtype == 173704) {
      this.navbar = "真题演练";
    }
    this.$http
      .get(this.url + "/exambank/getExam", {
        params: {
          id: this.id
        }
      })
      .then(function(res) {
        let arr = res.body.data;
        let ind = 0;
        if (arr.dx) {
          arr.dx.forEach(element => {
            this.$set(this.dan, element.id, null);
            ind++;
            element["ind"] = ind;
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
            this.$set(this.duo, element.id, []);
            console.log(this.duo);
            ind++;
            element["ind"] = ind;
            let indx = 0;
            arr.dxsa.forEach(k => {
              if (k.itemid == element.id) {
                k["indx"] = this.indx[indx];
                indx++;
              }
            });
          });
        }
        if (arr.jd) {
          arr.jd.forEach(element => {
            this.$set(this.jd, element.id, "");
            ind++;
            element["ind"] = ind;
          });
        }
        this.getExam = arr;
        this.code =
          this.getExam.dx.length +
          this.getExam.dxs.length +
          this.getExam.jd.length;
      });
  }
};
</script>
<style lang="less">
.questionBankParticulars {
  .TopsZ {
    position: fixed;
    top: 56px;
    right: 10px;
    padding: 10px 20px;
    background-color: #fff;
    line-height: 30px;
    vertical-align: middle;
    border-radius: 20px;
    -ms-filter: "progid:DXImageTransform.Microsoft.Shadow(Strength=50, Direction=27, Color=#454545)"; /*IE 8*/
    -moz-box-shadow: -2px 1px 50px 8px rgba(69, 69, 69, 0.5); /*FF 3.5+*/
    -webkit-box-shadow: -2px 1px 50px 8px rgba(69, 69, 69, 0.5); /*Saf3-4, Chrome, iOS 4.0.2-4.2, Android 2.3+*/
    box-shadow: -2px 1px 50px 8px rgba(69, 69, 69, 0.5); /* FF3.5+, Opera 9+, Saf1+, Chrome, IE10 */
    filter: progid:DXImageTransform.Microsoft.Shadow(
        Strength=50,
        Direction=135,
        Color=#454545
      ); /*IE 5.5-7*/
    > em {
      position: absolute;
      width: 20px;
      height: 20px;
      background-color: #fff;
      transform: rotate(45deg);
      -ms-transform: rotate(45deg); /* IE 9 */
      -webkit-transform: rotate(45deg); /* Safari and Chrome */
      -o-transform: rotate(45deg); /* Opera */
      -moz-transform: rotate(45deg);
      top: -5px;
      right: 20px;
    }
    .link {
      color: #000;
      i {
        margin-right: 10px;
      }
    }
  }
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
              > span {
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


