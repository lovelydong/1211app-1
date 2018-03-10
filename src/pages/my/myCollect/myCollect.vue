<template>
  <f7-page class="myCollect">
        <f7-navbar>
          <f7-nav-left sliding><f7-link class="iconfont icon-zuo" @click="$f7router.back()"></f7-link></f7-nav-left>
          <f7-nav-title>我的收藏</f7-nav-title>

        </f7-navbar>
        <f7-subnavbar sliding>
          <f7-segmented>
            <f7-button tab-link="#tab1" tab-link-active @click="tab=1">课程收藏</f7-button>
            <f7-button tab-link="#tab2"  @click="tab=2">试卷收藏</f7-button>
           <!-- <f7-button tab-link="#tab3"  @click="tab=3">试题收藏</f7-button>-->
          </f7-segmented>
        </f7-subnavbar>




        <div class="tabs">
           <div id="tab1" class="tab tab-active" >
             <div class="list">
                <ul>
                  <li class="swipeout" v-for="c in course">
                    <div class="swipeout-content">
                      <a :href="'/recommendedParticulars?id='+c.id+'&type='+c.type" class="item-link">
                        <div class="item-content">
                          <div class="item-inner">
                            <div class="item-title">
                              <span></span>
                              <div>
                                <p>{{c.course_details}}</p>
                                <!--<p>国版·354人正在学习 <i class="iconfont icon-xingxing"></i><i class="iconfont icon-xingxing"></i><i class="iconfont icon-xingxing"></i><i class="iconfont icon-xingxing"></i><i class="iconfont icon-xingxing"></i></p>-->
                                <p>￥{{c.price}}.00</p>
                              </div>
                            </div>
                          </div>
                        </div>
                      </a>
                    </div>
                    <div class="swipeout-actions-right">
                      <a href="#" class="swipeout-close color-blue" @click="shareboy">分享</a>
                      <a href="#" class="swipeout-delete" @click="courseDelete(c.id)">删除</a>
                    </div>
                  </li>
                 <!-- <li class="swipeout">
                    <div class="swipeout-content">
                      <a href="" class="item-link">
                        <div class="item-content">
                          <div class="item-inner">
                            <div class="item-title">
                              <span></span>
                              <div>
                                <p>浙江2018年教师招聘教育心理学二期回放</p>
                                <p>国版·354人正在学习 <i class="iconfont icon-xingxing"></i><i class="iconfont icon-xingxing"></i><i class="iconfont icon-xingxing"></i><i class="iconfont icon-xingxing"></i><i class="iconfont icon-xingxing"></i></p>
                                <p>￥356.00</p>
                              </div>
                            </div>
                          </div>
                        </div>
                      </a>
                    </div>
                    <div class="swipeout-actions-right">
                      <a href="#" class="swipeout-close color-blue" @click="shareboy">分享</a>
                      <a href="#" class="swipeout-delete">删除</a>
                    </div>
                  </li>-->
                </ul>
              </div>
            </div>
            <div id="tab2" class="tab" >
              <div class="list">
              <ul>
                <li class="swipeout" v-for="exam in exams">
                  <div class="swipeout-content">
                    <a :href="'/myCollectParticulars?id='+exam.id" class="item-link">
                      <div class="item-content">
                        <div class="item-inner">
                          <div class="item-title">{{exam.examname}}<p>学习时间：{{exam.create_time/1000 | moment("YYYY-MM-DD")}}</p></div>
                        </div>
                      </div>
                    </a>
                  </div>
                  <div class="swipeout-actions-right">
                    <a href="#" class="swipeout-close color-blue" @click="shareboy">分享</a>
                    <a href="#" class="swipeout-delete"  @click="examDelete(exam.id)">删除</a>
                  </div>
                </li>
              </ul>
              </div>
            </div>
           <!-- <div id="tab3" class="tab">
              <div class="list">
              <ul>
                <li class="swipeout">
                  <div class="swipeout-content">
                    <a href="/myCollectTopicParticulars" class="item-link">
                      <div class="item-content">
                        <div class="item-inner">
                          <div class="item-title">我为什么这么帅，是什么心理 <p>来源：2017年上半年中学综合素质真题及答案解析</p></div>
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
            </div>-->
        </div>
        <Share ref="c1"></Share>

  </f7-page>
</template>
<script>
export default {
  data: function() {
    return {
    	
    	exams:"",
    	course:""    	
    };
  },
  methods: {
    shareboy: function(data) {
      this.$refs.c1.sharefn();
    },
    
   examDelete:function(id)
   {
   	//alert(id);
   	 this.$http.get("http://192.168.0.115:8080/shiro_test/sx1211examcollect/delexam",{
  		params:{
  			id:id
  		}
            }).then(function(res){
               console.log(res)
             
            },function(res){
                console.log(res.status);
            })
   },
    courseDelete:function(id)
   {
   	//alert(id);
   	 this.$http.get("http://192.168.0.130:8080/shiro_test/sxcollect/del",{
  		params:{
  			id:id
  		}
            }).then(function(res){
               console.log(res)
             
            },function(res){
                console.log(res.status);
            })
   }
    },
    created:function()
 {
 	let url="http://192.168.0.115:8080/shiro_test";
 	//课程收藏渲染
 	 this.$http.get("http://192.168.0.130:8080/shiro_test/sxcollect/information",{
  		params:{
  		page:1,
  		limit:100
  		}
            }).then(function(res){
               // console.log(res.data.data)
                this.course=res.data.data;
                 //console.log(res.data.data)

            },function(res){
                console.log(res.status);
            })
            
   	//试卷收藏渲染
 	 this.$http.get(url+"/sx1211examcollect/listJson",{
  		params:{
  			
  			page:1,
  			limit:4
  		}
            }).then(function(res){
                console.log(res.data.data)
               	this.exams=res.data.data;
                 
                 //console.log(res.data.data)

            },function(res){
                console.log(res.status);
            })         
            
            
            
     
            
 
 
 
 }
  }
 
</script>
<style lang="less">
.myCollect {
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
                color: #fd2d44;
              }
            }
          }
        }
      }
    }
    #tab2 {
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
    #tab3 {
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
}
</style>


