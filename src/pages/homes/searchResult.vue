<template>
  <f7-page class="searchResult">
        <f7-navbar>
          <f7-nav-left sliding><f7-link class="iconfont icon-zuo" @click="$f7router.back()"></f7-link></f7-nav-left>
          <f7-nav-title class="inpt"> <i class="iconfont icon-sousuo"></i> <input type="text" name="" id="" v-model="val"> </f7-nav-title>
          <f7-nav-right>
            <f7-link class="inptfont" @click="git()">搜索</f7-link>
          </f7-nav-right>
        </f7-navbar>
        <f7-subnavbar sliding>
          <f7-segmented>
            <f7-button tab-link="#tab1" tab-link-active>直播课程</f7-button>
            <f7-button tab-link="#tab2">录播课程</f7-button>
            <f7-button tab-link="#tab3">考情分析</f7-button>
            <f7-button tab-link="#tab4">在线题库</f7-button>
          </f7-segmented>
        </f7-subnavbar>




        <div class="tabs">
           <div id="tab1" class="tab tab-active" >
              <div class="content-block">
                  <ul>
                      <li class="clearfix link" v-for="item in list1" :key="item.id">
                        <f7-link :href="'/recommendedParticulars?id=' + item.id ">
                          <span :style="{backgroundImage: 'url(' +url +  item.img + ')' }"></span>
                          <div>
                            <p>{{item.name}}</p>
                            <p>{{item.area}}·{{item.buyno}}人正在学习 <i class="iconfont icon-xingxing"></i><i class="iconfont icon-xingxing"></i><i class="iconfont icon-xingxing"></i><i class="iconfont icon-xingxing"></i><i class="iconfont icon-xingxing"></i></p>
                            <p>￥{{item.discount_price}}</p>
                          </div>
                        </f7-link>
                      </li>
                  </ul>
              </div>
            </div>
            <div id="tab2" class="tab">
              <div class="content-block">
                <ul>
                     <li class="clearfix link" v-for="item in list2" :key="item.id">
                        <f7-link :href="'/recommendedParticulars?id=' + item.id ">
                          <span :style="{backgroundImage: 'url(' +url + item.img + ')' }"></span>
                          <div>
                            <p>{{item.name}}</p>
                            <p>{{item.area}}·{{item.buyno}}人正在学习 <i class="iconfont icon-xingxing"></i><i class="iconfont icon-xingxing"></i><i class="iconfont icon-xingxing"></i><i class="iconfont icon-xingxing"></i><i class="iconfont icon-xingxing"></i></p>
                            <p>￥{{item.discount_price}}</p>
                          </div>
                        </f7-link>
                      </li>
                  </ul>
              </div>
            </div>
            <div id="tab3" class="tab">
              <div class="content-block">
                 <ul class="tab3">
                      <li class="clearfix link" v-for="(item,index) in list3">
                        <f7-link :href="'/examinationParticulars?id='+item.id">
                          <span :style="{backgroundImage: 'url(' +url+ item.img + ')' }"></span>
                          <div>
                            <p>{{item.file_name}}</p>
                            <p><i v-if="index <= 10">新</i>   {{item.wfrom}} &nbsp;&nbsp;{{item.create_time/1000 | moment("YYYY-MM-DD")}}</p>
                          </div>
                        </f7-link>
                      </li>
                  </ul>
              </div>
            </div>
            <div id="tab4" class="tab">
              <div class="content-block">
                <ul class="tab4">
                      <li class="clearfix link" v-for="item in list4">
                        <f7-link :href="'/questionBankParticulars?qtype=null&id='+ item.id">
                          <div>
                            <p>{{item.name}}</p>
                            <p>试试手气，马上开始做题</p>
                          </div>
                        </f7-link>
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
      url: "http://localhost:8080/shiro_test",
      val: this.$f7route.query.val,
      list1: {},
      list2: {},
      list3: {},
      list4: {}
    };
  },
  methods: {
    git() {
      this.$http
        .get(this.url + "/sx1211courseAdmin/SearchJson", {
          params: {
            sname: this.val,
            type: 1,
            page: 1,
            limit: 99
          }
        })
        .then(function(res) {
          this.list1 = res.body.data;
          console.log(this.list1);
        });
      this.$http
        .get(this.url + "/sx1211courseAdmin/SearchJson", {
          params: {
            sname: this.val,
            type: 2,
            page: 1,
            limit: 99
          }
        })
        .then(function(res) {
          this.list2 = res.body.data;
        });
      this.$http
        .get(this.url + "/sx1211courseAdmin/SearchJson", {
          params: {
            sname: this.val,
            type: 3,
            page: 1,
            limit: 99
          }
        })
        .then(function(res) {
          this.list3 = res.body.data;
        });
      this.$http
        .get(this.url + "/sx1211courseAdmin/SearchJson", {
          params: {
            sname: this.val,
            type: 4,
            page: 1,
            limit: 99
          }
        })
        .then(function(res) {
          this.list4 = res.body.data;
        });
      this.$http
        .get(this.url + "/sx1211courseAdmin/addSearch", {
          params: {
            sname: this.val,
          }
        })
        .then(function(res) {
          console.log(res)
        });
    }
  },
  created() {
    this.git();
  }
};
</script>
<style lang="less">
.searchResult {
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
    .tab {
      .content-block {
        padding: 24px 12px;
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
                background-size: cover;
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
                }
              }
            }
          }
        }
        > .tab3 {
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
        > .tab4 {
          > li {
            min-height: 70px;
            > .link {
              > div {
                padding: 0;
                > p:nth-of-type(2) {
                  font-size: 12px;
                  line-height: 28px;
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


