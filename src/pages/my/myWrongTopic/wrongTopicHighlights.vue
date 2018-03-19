<template>
  <f7-page class="wrongTopicHighlights">

        <f7-navbar>
          <f7-nav-left sliding><f7-link class="iconfont icon-zuo" @click="$f7router.back()"></f7-link></f7-nav-left>
          <f7-nav-title>我的错题</f7-nav-title>
        </f7-navbar>
         <div class="mid">
            <div class="list">
            <ul>
              <li class="swipeout" v-for="e in errorList">
                <div class="swipeout-content">
                  <a :href="'/wrongTopicHighlightsParticulars?examid='+e.examid" class="item-link">
                    <div class="item-content">
                      <div class="item-inner">
                        <div class="item-title">{{e.ext1}}<p>学习时间：{{nowtime | moment("YYYY-MM-DD")}}</p></div>
                      </div>
                    </div>
                  </a>
                </div>
                <div class="swipeout-actions-right">
                  <a href="#" class="swipeout-close color-blue" @click="shareboy">分享</a>
                  <a href="#" class="swipeout-delete" @click="deleteerror(e.examid)">删除</a>
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
    return {
    	url:"http://localhost:8080/shiro_test",
    	errorList:"",
    	nowtime:""
    	
    };
  },
  methods: {
    shareboy: function(data) {
      this.$refs.c1.sharefn();
    },
    deleteerror:function(id)
    {
    	
    	this.$http.get(this.url+"/exambank/deleteerror",{
  	 		params:{
  			examid:id
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
  	this.nowtime=new Date().getTime()/1000;
  	//alert(666）
  		this.$http.get(this.url+"/exambank/errorList",{
  	 		params:{
  			page:1,
  			limit:100
  		}
  	
            }).then(function(res){
            	//console.log(res.body.data)
            	this.errorList=res.body.data;
               
                
					 },function(res){
                console.log(res.status);
            })	
  		
  }
  }

</script>
<style lang="less">
.wrongTopicHighlights {
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


