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
                  <li class="swipeout" v-for="item in list" :key="item.id">
                    <div class="swipeout-content">
                      <a href="" class="item-link">
                        <div class="item-content">
                          <div class="item-inner">
                            <div class="item-title" >
                              <span :style="{backgroundImage: 'url(' + url + item.img + ')' }"><em v-if="item.course_type == 121100401 || item.course_type == 35202044 " v-text="item.start_time <= new Date()?'直播中':'未开始'"></em></span>
                              <div>
                                <p>{{item.coursename}}</p>
                                <p v-if="item.course_type == 121100401 || item.course_type == 35202044 ">开课时间：{{item.start_time/1000 | moment("YYYY-MM-DD") }}</p>
                                <p v-else>有效期至：{{item.expiry_date/1000 | moment("YYYY-MM-DD") }}</p>
                                <!-- <p>已学习21%</p> -->
                              </div>
                            </div>
                          </div>
                        </div>
                      </a>
                    </div>
                    <div class="swipeout-actions-right">
                      <a href="#" class="swipeout-delete" @click="remove(item.id)">删除</a>
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
    return {
      url: "http://39.106.134.125/netschool/",
      list: []
    };
  },
  methods: {
    remove(id) {
      this.$http
        .get(this.url + "/playrecord/delete", {
          params: {
            id: id
          }
        })
        .then(function(res) {
          if (res.body.code == 1) {
            let toastCenter = this.$f7.toast.create({
              text: "删除成功",
              position: "center",
              closeTimeout: 2000
            });
            toastCenter.open();
          }else{
            let toastCenter = this.$f7.toast.create({
              text: "服务器抽风了，请稍后再试 ┭┮﹏┭┮",
              position: "center",
              closeTimeout: 2000
            });
            toastCenter.open();
          }
        });
    }
  },
  created() {
    //列表
    this.$http
      .get(this.url + "/playrecord/jsonlist", {
        params: {
          page: 1,
          limit: 50
        }
      })
      .then(function(res) {
        this.list = res.body.data;
        console.log(res);
      });
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
              background-size: cover;
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


