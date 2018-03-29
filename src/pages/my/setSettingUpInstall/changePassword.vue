<template>
  <f7-page class="changePassword">
        <f7-navbar>
          <f7-nav-left sliding><f7-link class="iconfont icon-zuo" @click="$f7router.back()"></f7-link></f7-nav-left>
          <f7-nav-title>修改密码</f7-nav-title>
          <f7-nav-right>
              <f7-link class="navbrleft" @click="done()">完成</f7-link>
          </f7-nav-right>
        </f7-navbar>
        <f7-list inline-labels no-hairlines-md>

        <f7-list-item>
          <f7-icon icon="demo-list-icon" slot="media"></f7-icon>
          <f7-input type="tel" :value="mobile" @input="mobile = $event.target.value" resizable placeholder="请输入手机号"  clear-button></f7-input>
        </f7-list-item>
        <f7-list-item>
          <f7-icon icon="demo-list-icon" slot="media"></f7-icon>
          <f7-input type="tel" :value="incode" @input="incode = $event.target.value" resizable placeholder="请输入验证码"  clear-button></f7-input>
          <f7-link @click="getcode()" v-html="code" :id="statu==1?'code':'code1'">获取验证码</f7-link>
        </f7-list-item>
        <f7-list-item>
          <f7-icon icon="demo-list-icon" slot="media"></f7-icon>
          <f7-input :type="status==1?'password':'text'" :value="pwd" @input="pwd = $event.target.value" resizable placeholder="请输入新密码"  clear-button></f7-input>
          <f7-link class="iconfont icon-chakan" @click="show()"></f7-link>
        </f7-list-item>
      </f7-list>

  </f7-page>
</template>
<script>
export default {
  data: function() {
    return {
    	url:"http://39.106.134.125/netschool/",
    	mobile:"",
    	statu:1,
    	code:"获取验证码",
    	status:1,
    	pwd:"",
    	oldpwd:"",
    	yanzheng:"",
    	incode:""
    };
  },
  methods: {
  	isPoneAvailable: function (pone) {
   var myreg = /^[1][3,4,5,7,8][0-9]{9}$/;
   if (!myreg.test(pone)) {
     return false;
   } else {
     return true;
   }
 },getcode:function()
  	{
  		if(this.isPoneAvailable(this.mobile))
  		{
  		if(this.statu==0)
  		{
  			return;
  		}
  		else{

  		console.log(this.mobile)
  	this.$http.get(this.url+"/doCode",{
  	 		params:{
  			mobile:this.mobile
  		}

            }).then(function(res){
            	console.log(res.body.msg)
               this.yanzheng=res.body.msg;

					 },function(res){
                console.log(res.status);
            })
  		this.code=60;
  		this.statu=0;
  		var that=this;
  		var num=59;
  		var timer=setInterval(function()
  		{
  			that.code=num;
  			if(num>0)
  			{
  				num--;
  			}
  			else{
  				clearInterval(timer);
  				that.code="获取验证码";
  				that.statu=1;
  			}

  		},1000)
  	}
  		}
  	else{

  		let toastCenter = this.$f7.toast.create({
              text: "请输入有效的手机号！",
              position: "center",
              closeTimeout: 2000
            });
            toastCenter.open();
  	}
  	},
  	show:function()
  	{
  		this.oldpwd=this.pwd;
  		if(this.status==1)
  		{
  			this.pwd=this.oldpwd;
  			this.status=0;
  		}
  		else{
  			this.status=1;
  			this.pwd=this.oldpwd;
  		}
  	},
  	done:function()
  	{
  		if(this.incode==this.yanzheng)
  		{
  			this.$http.get(this.url+"/personal/updatepassword",{
  	 		params:{
  			mobile:this.mobile,
  			password:this.pwd
  		}

            }).then(function(res){
               console.log(res);
               	let toastCenter = this.$f7.toast.create({
								text: "密码修改成功！",
								position: "center",
								closeTimeout: 2000
							});
							toastCenter.open();
               //this.global_.mobile=this.mobile;
               this.$f7router.navigate('/privacy');

					 },function(res){
                console.log(res.status);
            })
  		}
  		else{

  			let toastCenter = this.$f7.toast.create({
              text: "验证码错误！",
              position: "center",
              closeTimeout: 2000
            });
            toastCenter.open();
  		}
  	}
  }
};
</script>
<style lang="less">
	#code1{
	background-color: #666;
}
#code{
	background-color: #00AAEE;

}
.navbrleft {
  font-family: "PingFang-SC-Regular";
  font-size: 14px;
  color: #333333 !important;
}
.changePassword {
  .list{
    .link{
      width: 94px;
      background-color: #cccccc;
      font-family: "PingFang-SC-Regular";
      font-size: 12px;
      color: #ffffff;
      height: 100%;
    }
    .iconfont{
      background-color: transparent;
      color: #ccc;
      font-size: 16px;
      width: 50px;
    }
  }
}
</style>


