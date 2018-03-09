<template>
  <f7-page class="myCollectParticulars">

        <f7-navbar>
          <f7-nav-left sliding><f7-link class="iconfont icon-zuo" @click="$f7router.back()"></f7-link></f7-nav-left>
          <f7-nav-title>试卷收藏</f7-nav-title>
        </f7-navbar>
        <div class="mid">
          <f7-swiper pagination >
              <f7-swiper-slide  v-for="(e,key,index) in exam" v-bind:key="index">
                <h3>{{index+1}}、<i v-html="e.examItemRecList.length>0?'单选题':'简答题'"></i><span><em>{{index+1}}</em>/{{count}}</span></h3>
                <div class="content">
                    <p>{{e.examItem.itemname}}</p>
                    <ul v-if="(e.examItemRecList.length>0)" v-for="eee in e.examItemRecList"> 
                        <f7-link class="active2"> <span>A</span>{{eee.optionname}}</f7-link>
                       <!-- <f7-link class="active"> <span>B</span>灯比原来亮了</f7-link>
                        <f7-link class="active1"> <span>C</span>灯比原来亮了</f7-link>-->
                    </ul>
                    <div v-if="(e.examItemRecList.length>0)">{{e.examAnswer.answer}}</div>
                    <div class="bot">
                        <h4>答案解析：</h4>

                        <div>{{e.examAnswer.analysis}}</div>
                    </div>
                </div>
              </f7-swiper-slide>
              <!--<f7-swiper-slide v-for="(e, index) in exam" >
                  <h3>{{index+1}}、简答题 <span><em>{{index+1}}</em>/15</span></h3>
                  <div class="content">
                      <p>{{e.examItem.itemname}}</p>
                      <div>{{e.examAnswer.answer}}</div>
                      <div class="bot">
                          <h4>答案解析：</h4>

                          <div>{{e.examAnswer.analysis}}</div>
                      </div>
                  </div>
              </f7-swiper-slide>-->
          </f7-swiper>
        </div>
  </f7-page>
</template>
<script>
export default {
  data: function() {
    return {
    	exam:"",
    	count:''
    };
  },
  methods: {},
  created:function(){
  	let url="http://192.168.0.115:8080/shiro_test";
  	var id=this.$f7route.query.id;
		//console.log(id)
		 this.$http.get(url+"/sx1211examcollect/detail",{
  		params:{
  			id:id
  		}
            }).then(function(res){
            	this.exam=res.data.data;
            	//this.count=res.data.data.length;
            	console.log(res.data.data);
            	var key, counter = 0;
							for(key in res.data.data)
							{
								counter++;
							}
							this.count=counter;
              // console.log(res.data.data.examItemRecList)
             
            },function(res){
                console.log(res.status);
            })
  }
 }
</script>
<style lang="less">
.myCollectParticulars {
  .mid {
    padding: 20px 12px;
    background-color: #fff;
    .swiper-wrapper {
      .swiper-slide {
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
                border: solid 1px #fff;
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
            > .active2 {
              color: #000;
              > span {
                color: #000;
                background-color: #fff;
              }
            }
            > .active1 {
              color: #22ac38;
              > span {
                color: #fff;
                background-color: #22ac38;
                
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
    .swiper-pagination-bullet-active {
      background: #fd2d44;
    }
  }
}
</style>


