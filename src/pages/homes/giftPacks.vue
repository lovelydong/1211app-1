<template>
  <f7-page class="giftPacks">
        <f7-navbar>
          <f7-nav-left sliding><f7-link class="iconfont icon-zuo" @click="$f7router.back()"></f7-link></f7-nav-left>
          <f7-nav-title>特惠大礼包</f7-nav-title>
          <f7-nav-right>
            <f7-link class="iconfont icon-gengduo" @click="showTop = !showTop"></f7-link>
          </f7-nav-right>
        </f7-navbar>
         <transition
                  name="custom-classes-transition"
                  enter-active-class="animated pulse"
                >
          <div class="TopsZ" v-if="showTop" >
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
          <div class="t"><img src="../../assets/giftPackst.png" alt=""></div>
          <div class="m">
            <div class="row">
              <h4><span>教师资格</span></h4>
              <div class="col-50" v-for="item in listJson">
                <f7-link :href="'/giftPacksParticulars?id='+item.id">
                  <img :src="url + item.img" alt="">
                  <p>{{item.name}}</p>
                  <span>价格:￥{{item.price}}</span>
                  <em>立即购买</em>
                </f7-link>
              <i></i>
              </div>
            </div>
          </div>
          <div class="b"><img src="../../assets/giftPacksb.png" alt=""></div>
        </div>
        <Share ref="c1"></Share>

  </f7-page>
</template>
<script>
export default {
  data: function() {
    return {
      url: "http://localhost:8080/shiro_test",
      tabAll: "",
      showTop: false,
      listJson:{},
    };
  },
  methods: {
    shareboy: function(data) {
      this.$refs.c1.sharefn();
    }
  },
  created: function() {
    //列表
    this.$http
      .get(this.url + "/curriculumcombAdmin/listJson", {
        params: {
          page: 1,
          limit: 99
        }
      })
      .then(function(res) {
        this.listJson = res.body.data;
        console.log(this.listJson);
      });
  }
};
</script>
<style lang="less">
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
.giftPacks {
  .mid {
    .t{
      >img{
        width: 100%;
      }
    }
    .m {
      padding:  30px;
      background: url(../../assets/giftPacksm.png);
      .row {
        background-image: linear-gradient(#b05f00, #b05f00),
          linear-gradient(#b05f00, #b05f00);
        background-blend-mode: normal, normal;
        padding: 20px;
        > h4 {
          width: 100%;
          text-align: center;
          height: 50px;
          > span {
            font-family: "FZSEJW--GB1-0";
            font-size: 12px;
            color: #ff5a00;
            padding: 5px;
            background-color: #ecf319;
            border-radius: 12px;
            -ms-filter: "progid:DXImageTransform.Microsoft.Shadow(Strength=0, Direction=45, Color=#E6E2BE)";/*IE 8*/
            -moz-box-shadow: -1px 1px 0 4px rgba(230,226,190,0.5);/*FF 3.5+*/
            -webkit-box-shadow: -1px 1px 0 4px rgba(230,226,190,0.5);/*Saf3-4, Chrome, iOS 4.0.2-4.2, Android 2.3+*/
            box-shadow: -1px 1px 0 4px rgba(230,226,190,0.5);/* FF3.5+, Opera 9+, Saf1+, Chrome, IE10 */
            filter: progid:DXImageTransform.Microsoft.Shadow(Strength=0, Direction=135, Color=#E6E2BE); /*IE 5.5-7*/
          }
        }
        > div {
          position: relative;
          padding-bottom: 10px;
          margin-bottom: 20px;
          > .link {
            display: block;
            text-align: center;
            background-color: #7cc80e;
            padding: 8px;
            > img {
              width: 114px;
              height: 78px;
            }
            > p {
              font-family: "PingFang-SC-Medium";
              font-size: 12px;
              color: #ffffff;
              margin: 5px 0;
            }
            > span {
              font-family: "PingFang-SC-Medium";
              font-size: 12px;
              color: #fffc00;
              line-height: 30px;
            }
            > em {
              display: block;
              width: 100%;
              font-family: "MicrosoftYaHei";
              font-size: 12px;
              color: #ff4800;
              height: 20px;
              background-color: #ecf319;
              border-radius: 5px;
            }
          }
          > i {
            position: absolute;
            height: 10px;
            bottom: 0;
            width: 100%;
            background-color: #000;
            background: url(../../assets/giftPacksbb.png);
          }
        }
      }
    }
    .b{
       >img{
         width: 100%;
       }
    }
  }
}
</style>


