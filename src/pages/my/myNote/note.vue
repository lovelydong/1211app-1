<template>
  <f7-page class="note">

        <f7-navbar>
          <f7-nav-left sliding><f7-link class="iconfont icon-zuo" @click="$f7router.back()"></f7-link></f7-nav-left>
          <f7-nav-title>我的笔记</f7-nav-title>
        </f7-navbar>
         <div class="mid">
            <div class="list">
            <ul>
              <li class="swipeout">
                <div class="swipeout-content">
                  <a href="/noteParticulars" class="item-link">
                    <div class="item-content">
                      <div class="item-inner">
                        <div class="item-title">2017年上半年中学综合素质真题及答案解析 <p>学习时间：2017-01-02</p></div>
                      </div>
                    </div>
                  </a>
                </div>
                <div class="swipeout-actions-right">
                  <a href="#" class="swipeout-close color-blue" @click="shareboy">分享</a>
                  <a href="#" class="swipeout-delete">删除</a>
                </div>
              </li>
            </ul>
          </div>
         </div>

        <Share ref="c1"></Share>
  </f7-page>
</template>
<script>
export default {
  data: function() {
    return {};
  },
  methods: {
    shareboy: function(data) {
      this.$refs.c1.sharefn();
    }
  }
};
</script>
<style lang="less">
.note {
  .mid {
    .list {
      margin: 25px 0;
      background-color: #c8c7cc;
      > ul {
        background-color: none;
        > li {
          > .swipeout-content {
            > .item-link {
              .item-title {
                font-family: "PingFang-SC-Regular";
                font-size: 16px;
                color: #333333;
                padding: 5px 0;
                > p {
                  font-family: "PingFang-SC-Regular";
                  font-size: 12px;
                  color: #bfbfbf;
                  padding-top: 5px;
                }
              }
            }
          }
        }
      }
    }
  }
}
</style>


