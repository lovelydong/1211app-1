<template>
  <f7-page class="modificationName">
        <f7-navbar>
          <f7-nav-left sliding><f7-link class="iconfont icon-zuo" @click="$f7router.back()"></f7-link></f7-nav-left>
          <f7-nav-title>修改昵称</f7-nav-title>
          <f7-nav-right>
              <f7-link class="navbrleft" @click="done()">完成</f7-link>
          </f7-nav-right>
        </f7-navbar>
        <div class="mid">
          <textarea :placeholder="nickname" v-model="nickname"></textarea>
        </div> 

  </f7-page>
</template>
<script>
	import Global from "../../Global.vue";//引用模块进来
export default {
  data: function() {
    return {
    	url: "http://39.106.134.125:8080/netschool/",
    	userinfo:"",
    	nickname:""
    	
    };
  },
  methods: {
  	done:function()
  	{
  		
  		
   this.$http.get(this.url + "/user/checkUname", {
    	params:{
    		nick_name:this.nickname
    	}
    	
    }).then(
      function(res) {
        console.log(res);
        if(res.body.data.code==1)
        {
        		
   this.$http.get(this.url + "/user/appupdate", {
    	params:{
    		 nick_name:this.nickname
    	}
    	
    }).then(
      function(res) {
      	console.log(res)
      	Global.userinfo.nick_name=this.nickname;
      	this.$f7router.navigate("/personalData");
      	
      	
      },function(res) {
      	console.log(res)
      	
      })
        }
        else{
        	let toastCenter = this.$f7.toast.create({
              text: "昵称不可用",
              position: "center",
              closeTimeout: 2000
            });
            toastCenter.open();
        }
      },
      function(res) {
        console.log(res);
      }
    );
  	}
  },
  created:function()
  {
  	this.nickname=Global.userinfo.nick_name;
  }
 }
</script>
<style lang="less">
.navbrleft {
  font-family: "PingFang-SC-Regular";
  font-size: 14px;
  color: #333333 !important;
}
.modificationName{
  .mid{
    padding: 30px 20px;
    textarea{
      width: 100%;
      min-height: 50px;
    }
  }
}
</style>


