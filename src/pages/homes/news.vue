<template>
  <f7-page class="news">
        <f7-navbar>
          <f7-nav-left sliding><f7-link class="iconfont icon-zuo" @click="$f7router.back()"></f7-link></f7-nav-left>
          <f7-nav-title>消息</f7-nav-title>
        </f7-navbar>
        <div class="mid">
          <ul>
            <f7-link v-for="tab in tabAll" :key="tab.id">
              <p>{{tab.title}}<span>{{tab.send_time/1000 | moment("YYYY-MM-DD")}}</span></p>
              <div v-html="tab.content"></div>
              <span>消息来自：山香教育</span>
            </f7-link>
          </ul>
        </div>
  </f7-page>
</template>
<script>
	import Global from "../Global.vue";
export default {
  data: function() {
    return {
     // url: "http://39.106.134.125:8080/netschool/",
     url:'http://192.168.0.43:8080/shiro_test',
      
      tabAll:""
    };
  },
  methods: {},
  created:function() {
    //消息
 
    /*this.$http
      .post(this.url + "/sxsystempersonadmin/listJson", {
        params: {
          page: 1,
          limit: 99
       	 }
      
      })*/
      
      this.$http({
            url: this.url+"/sxsystempersonadmin/listJson",
            method: 'POST',
            // 请求体重发送的数据
            params: {
               page: 1,
          		limit: 99
          		
            },
            // 设置请求头
            headers: {
                'Content-Type':'application/x-www-form-urlencoded'
            }
        })
      .then(function(res) {
      	console.log(res)
        this.tabAll = res.data.data;
      },function(res) {
      	console.log(res)
        
      });
  }
};
</script>
<style lang="less">
.news {
  .mid{
    padding: 12px;
    >ul{
      >.link{
        padding: 15px;
        background-color: #fff;
        border-radius: 10px;
        display: block;
        margin-bottom: 15px;
        >p{
          font-family: "PingFang-SC-Medium";
          font-size: 16px;
          color: #121212;
          line-height: 40px;
          >span{
            font-family: "PingFang-SC-Regular";
            font-size: 12px;
            color: #999999;
            float: right;
          }
        }
        >div{
          font-family: "PingFang-SC-Regular";
          font-size: 14px;
          color: #333333;
        }
        >span{
          font-family: "PingFang-SC-Regular";
          font-size: 12px;
          color: #999999;
          line-height: 30px ;
        }
      }
    }
  }
}
</style>


