<template>
  <f7-page class="register">
        <f7-navbar >
          <f7-nav-left sliding ><f7-link class="iconfont icon-zuo" @click="$f7router.back()"></f7-link></f7-nav-left>
        </f7-navbar>
        <div class="mid">
          <h1>注册</h1>
          <input type="tel" placeholder="请输入您的手机号" v-model="mobile">
          <div><input type="text" placeholder="请输入验证码" v-model="incode"> <f7-link class="yzm" :id="statu==1?'code':'code1'"  @click="getcode()" v-html="code">获取验证码</f7-link></div>
          <div><input :type="status==1?'password':'text'"  v-model="pwd" placeholder="请输入您的密码"><f7-link> <i class="iconfont icon-chakan" @click="show()"></i> </f7-link></div>
          <f7-link :id="registera==1?'register':''" @click="register"><div>注册</div></f7-link>
          <f7-link href="/login"><span>已有账号？去登录</span></f7-link>
          <f7-link href="/retrievePassword"><em>忘记密码</em></f7-link>
        </div>
  </f7-page>
</template>
<script>
export default {
  data: function() {
    return {
url:"http://192.168.0.130:8080/shiro_test",   	
statu:1,
status:1,
code:"获取验证码",
incode:"",
pwd:"",
mobile:"",
yanzheng:"",
registera:""
    };
  },
  methods: {
  	checkPassword:function(pp)
  	{
  	var pwdReg = /^(?![0-9]+$)(?![a-zA-Z]+$)[0-9A-Za-z]{8,16}$/;//8到16位数字与字母组合
  	if(!pwdReg.test(pp)){
             return 0;
            }else{
              return 1;
            }
  	},
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
  	register: function() {
				
				if(this.mobile == "" || this.pwd == ""||this.incode == "") {
					//alert("用户名或者密码不能为空");
					return;
				} else {
					
					console.log(this.checkPassword(this.pwd))
					if(this.checkPassword(this.pwd)==1)
					{
						
					
					if(this.incode==this.yanzheng)
					{
							this.$http.get(this.url + "/user/appRegister", {
						params: {
							mobile: this.mobile,
							password: this.pwd
						}
						

					}).then(function(res) {
						console.log(res);
						if(res.body.code==1)
						{
								let toastCenter = this.$f7.toast.create({
								text: "注册成功，快去登录吧！",
								position: "center",
								closeTimeout: 2000
							});
							toastCenter.open();
						this.$f7router.navigate('/login');
	
						}
						else if(res.body.code==3){
							
								let toastCenter = this.$f7.toast.create({
								text: "该手机号已经注册！",
								position: "center",
								closeTimeout: 2000
							});
							toastCenter.open();
						}
						
						//this.$f7router.navigate('/login');

					}, function(res) {
						console.log(res);
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
					else{
						
						let toastCenter = this.$f7.toast.create({
								text: "密码请设为8到16位数字与字母组合",
								position: "center",
								closeTimeout: 2000
							});
							toastCenter.open();
					}
				}

			}
  },
  watch: {
			pwd(newpwd, oldpwd) {
				if(this.mobile != "" && this.pwd != ""&& this.incode != "") {

					this.registera = 1;
				} else {
					this.registera = 0;
				}
			},
			mobile(newmobile, oldumobile) {
				if(this.mobile != "" && this.pwd != ""&& this.incode != "") {

					this.registera = 1;
				} else {
					this.registera = 0;
				}
			},
			incode(newincode, oldincode) {
				if(this.mobile != "" && this.pwd != ""&& this.incode != "") {

					this.registera = 1;
				} else {
					this.registera = 0;
				}
			}
		}
};
</script>
<style lang="less">
	#code1{
	width: 80px;
	height: 32px;
	font-size: 12px;
	color: #fff;
	background-color: #666;
}
#code{
	width: 80px;
	height: 32px;
	font-size: 12px;
	color: #fff;
	background-color: #00AAEE;
	
}
#register div {
		background-color: #00AAEE;
	}
.register{
  .page-content{
    background-color: #fff;
    .mid{
      padding: 38px ;
      >h1{
        text-align: center;
        font-family: "PingFang-SC-Medium";
        font-size: 24px;
        color: #333333;
        font-weight: 400;
        margin-bottom: 70px;
      }
      >div{
        position: relative;
        >input{
        width: 100%;
        line-height: 50px;
        font-family: "PingFang-SC-Regular";
        font-size: 16px;
        }
        >.link{
          position: absolute;
          right: 0;
          top: 50%;
          transform: translateY(-50%);
          font-family: "PingFang-SC-Regular";
          font-size: 12px;
          color: #fd5d32;
          >i{
            color: #999;
            display: inline-block;
            width: 50px;
            text-align: center;
          }
        }
      }
      >input{
        width: 100%;
        line-height: 50px;
        font-family: "PingFang-SC-Regular";
        font-size: 16px;
      }
      >.link{
        display: block;
        >div{
          height: 45px;
          line-height: 45px;
          text-align: center;
          background-color: #cccccc;
          color: #fff;
          border-radius: 10px;
          font-family: "PingFang-SC-Regular";
          font-size: 16px;
          margin-top: 50px;
        }
        >span{
          text-align: center;
          display: block;
          margin-top: 28px;
          font-family: "PingFang-SC-Medium";
          font-size: 16px;
          color: #333333;
        }
        >em{
            text-align: center;
            display: block;
            margin-top: 40%;
            font-family: "PingFang-SC-Medium";
            font-size: 16px;
            color: #333333;
        }
      }
    }
  }
}
</style>


