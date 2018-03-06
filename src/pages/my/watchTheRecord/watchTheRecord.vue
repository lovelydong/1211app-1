<template>
  <f7-page class="watchTheRecord">
        <f7-navbar>
          <f7-nav-left sliding><f7-link class="iconfont icon-zuo" @click="$f7router.back()"></f7-link></f7-nav-left>
          <f7-nav-title>观看记录</f7-nav-title>

        </f7-navbar>
        <div class="tabs">
           <div id="tab1" class="tab tab-active" >
             <div class="list">
                <ul>
                  <li class="swipeout">
                    <div class="swipeout-content">
                      <a href="" class="item-link">
                        <div class="item-content">
                          <div class="item-inner">
                            <div class="item-title">
                              <span><em>直播中</em></span>
                              <div>
                                <p>浙江2018年教师招聘教育心理学二期回放</p>
                                <p>开课时间：2018-05-15</p>
                                <p>已学习21%</p>
                              </div>
                            </div>
                          </div>
                        </div>
                      </a>
                    </div>
                    <div class="swipeout-actions-right">
                      <a href="#" class="swipeout-delete">删除</a>
                    </div>
                  </li>
                  <li class="swipeout">
                    <div class="swipeout-content">
                      <a href="" class="item-link">
                        <div class="item-content">
                          <div class="item-inner">
                            <div class="item-title">
                              <span></span>
                              <div>
                                <p>浙江2018年教师招聘教育心理学二期回放</p>
                                <p>开课时间：2018-05-15</p>
                                <p>已学习21%</p>
                              </div>
                            </div>
                          </div>
                        </div>
                      </a>
                    </div>
                    <div class="swipeout-actions-right">
                      <a href="#" class="swipeout-delete">删除</a>
                    </div>
                  </li>
                </ul>
              </div>
            </div>
        </div>

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
.watchTheRecord {
  .subnavbar {
    background-color: #fff;
    .segmented {
      .tab-link {
        background-color: #fff;
        color: #333;
        border: 0;
        font-family: "PingFang-SC-Regular";
        font-size: 16px;
        position: relative;
      }
      .tab-link-active {
        color: #fd2d44;
      }
      .tab-link-active:before {
        content: " ";
        position: absolute;
        bottom: -2px;
        left: 50%;
        transform: translateX(-50%);
        width: 20%;
        background-color: #fd2d44;
        height: 4px;
      }
    }
  }
  .tabs {
    #tab1 {
      .list {
        .item-inner {
          padding: 10px 0;
          background: none;
          padding-right: 15px;
          .item-title {
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
              min-height: 86px;
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
                color: #fb7b59;
              }
            }
          }
        }
      }
    }
  }
}
</style>


