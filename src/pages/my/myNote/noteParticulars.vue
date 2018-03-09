<template>
  <f7-page class="noteParticulars">

        <f7-navbar>
          <f7-nav-left sliding><f7-link class="iconfont icon-zuo" @click="$f7router.back()"></f7-link></f7-nav-left>
          <f7-nav-title>笔记详情</f7-nav-title>
        </f7-navbar>
         <div class="mid">
           <h5>{{title}}<p>创建时间：{{timer/1000 | moment("YYYY-MM-DD")}}</p></h5>
           <div class="con">{{ext1}}</div>
         </div>

  </f7-page>
</template>
<script>
export default {
  data: function() {
    return {
    	timer:"",
    	title:"",
    	ext1:""
    };
  },
  methods: {
  	 
  },
  created:function(){
  	
  	this.timer=this.$f7route.query.timer;
  	
  	this.title=this.$f7route.query.title;
  	this.ext1=this.$f7route.query.ext1;
  	
  }
 }
</script>
<style lang="less">
.noteParticulars {
  .mid {
    padding: 24px 12px ;
    > h5 {
      font-family: "PingFang-SC-Medium";
      font-size: 18px;
      color: #333333;
      font-weight: 400;
      line-height: 30px;
      >p{
        font-family: "PingFang-SC-Medium";
        font-size: 12px;
        color: #999999;
      }
    }
    >.con{
      font-family: "PingFang-SC-Regular";
      font-size: 16px;
      line-height: 30px;
      color: #333333;
      padding-top: 40px;
    }
  }
}
</style>


