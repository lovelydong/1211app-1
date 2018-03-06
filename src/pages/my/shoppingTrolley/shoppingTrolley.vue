<template>
  <f7-page class="shoppingTrolley">
        <f7-navbar>
          <f7-nav-left sliding><f7-link class="iconfont icon-zuo" @click="$f7router.back()"></f7-link></f7-nav-left>
          <f7-nav-title>购物车</f7-nav-title>
          <f7-nav-right>
            <f7-link class="navbrleft" @click="shows.bot = !shows.bot">管理</f7-link>
          </f7-nav-right>
        </f7-navbar>
        <div class="mid">
          <ul>
            <li class="clearfix">
                <f7-link class="yuan">
                  <div>
                    <div></div>
                  </div>
                </f7-link>
                <f7-link>
                    <span></span>
                    <div>
                      <p>浙江2018年教师招聘教育心理学二期回放</p>
                      <p>￥138.00</p>
                    </div>
                </f7-link>
            </li>
            <li class="clearfix">
                <f7-link class="yuan">
                  <div class="active">
                    <div></div>
                  </div>
                </f7-link>
                <f7-link>
                    <span></span>
                    <div>
                      <p>浙江2018年教师招聘教育心理学二期回放</p>
                      <p>￥138.00</p>
                    </div>
                </f7-link>
            </li>
          </ul>
        </div>
        <div class="bot">
          <f7-link class="yuan">
                  <div>
                    <div></div>
                  </div>
                  <p>全选</p>
          </f7-link>
          <p>不含运费<span>合计:</span><em>￥138.00</em></p>
          <f7-link href="/indent">结算（1）</f7-link>
        </div>
        <div class="bot"  v-if="shows.bot" >
          <f7-link class="yuan">
                  <div>
                    <div></div>
                  </div>
                  <p>全选</p>
          </f7-link>
          <f7-link class="collect">移至收藏</f7-link>
          <f7-link class="remove">删除</f7-link>
        </div>
  </f7-page>
</template>
<script>
export default {
  data: function() {
    return {
      shows: {
        bot: false
      }
    };
  },
  methods: {}
};
</script>
<style lang="less">
.navbrleft {
  font-family: "PingFang-SC-Regular";
  font-size: 14px;
  color: #333333 !important;
}
.shoppingTrolley {
  .mid {
    padding: 20px 10px;
    > ul {
      > li {
        display: block;
        padding: 10px 0;
        min-height: 106px;
        padding-left: 62px;
        position: relative;
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
            > em {
              width: 50px;
              height: 20px;
              background-color: rgba(253, 93, 50, 0.7);
              position: absolute;
              right: 0;
              bottom: 10px;
              font-family: "PingFang-SC-Regular";
              font-size: 10px;
              color: #ffffff;
              text-align: center;
              line-height: 20px;
              border-top-left-radius: 15px;
              border-bottom-left-radius: 15px;
            }
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
              font-family: "PingFang-SC-Medium";
              font-size: 16px;
              color: #fd2d44;
            }
          }
        }
        > .yuan {
          width: 62px;
          height: 100%;
          position: absolute;
          left: 0;
          top: 0;
          > div {
            width: 20px;
            height: 20px;
            border: solid 2px #d2d2d2;
            position: absolute;
            padding: 0;
            top: 50%;
            left: 50%;
            transform: translate(-50%, -50%);
            border-radius: 50%;
            background-color: #efeff4;
            > div {
              position: absolute;
              width: 8px;
              height: 8px;
              background-color: #efeff4;
              top: 50%;
              left: 50%;
              transform: translate(-50%, -50%);
              border-radius: 50%;
            }
          }
          > .active {
            border-color: #fd2d44;
            > div {
              background-color: #fd2d44;
            }
          }
        }
      }
    }
  }
  .bot {
    height: 50px;
    background-color: #fff;
    position: fixed;
    width: 100%;
    bottom: 0;
    left: 0;
    padding-left: 80px;
    padding-right: 110px;
    > .link {
      font-family: "PingFang-SC-Regular";
      font-size: 16px;
      color: #ffffff;
      background-color: #fd2d44;
      height: 100%;
      width: 110px;
      position: absolute;
      right: 0;
      top: 0;
    }
    > .yuan {
      width: 55px;
      height: 100%;
      position: absolute;
      left: 0;
      top: 0;
      background-color: #fff;
      > div {
        width: 20px;
        height: 20px;
        border: solid 2px #d2d2d2;
        position: absolute;
        padding: 0;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);
        border-radius: 50%;
        background-color: #fff;
        > div {
          position: absolute;
          width: 8px;
          height: 8px;
          background-color: #fff;
          top: 50%;
          left: 50%;
          transform: translate(-50%, -50%);
          border-radius: 50%;
        }
      }
      > p {
        position: absolute;
        right: -18px;
        font-family: "PingFang-SC-Medium";
        font-size: 16px;
        color: #333333;
      }
      > .active {
        border-color: #fd2d44;
        > div {
          background-color: #fd2d44;
        }
      }
    }
    > p {
      height: 100%;
      line-height: 50px;
      font-family: "PingFang-SC-Regular";
      font-size: 12px;
      color: #999999;
      min-width: 162px;
      > span {
        font-family: "PingFang-SC-Medium";
        font-size: 16px;
        color: #333333;
        margin-left: 5px;
      }
      > em {
        font-family: "PingFang-SC-Medium";
        font-size: 16px;
        color: #fd5d32;
      }
    }
    > .collect {
      padding: 0 12px;
      width: auto;
      position: absolute;
      height: auto;
      font-family: "PingFang-SC-Regular";
      font-size: 14px;
      color: #666666;
      height: 30px;
      background-color: #fff;
      border: solid 1px #cccccc;
      border-radius: 15px;
      top: 50%;
      right: 90px;
      transform: translateY(-50%);
    }
    > .remove {
      padding: 0 12px;
      width: auto;
      position: absolute;
      height: auto;
      font-family: "PingFang-SC-Regular";
      font-size: 14px;
      background-color: #fff;
      color: #fd2d44;
      border: solid 1px #fd2d44;
      border-radius: 15px;
      height: 30px;
      top: 50%;
      right: 20px;
      transform: translateY(-50%);
    }
  }
}
</style>


