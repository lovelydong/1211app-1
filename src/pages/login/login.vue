<template>
	<f7-page class="login">

		<div class="mid">
			<h1>登录</h1>
			<input type="text" placeholder="请输入您的用户名/手机号" v-model="username">
			<input type="password" placeholder="请输入您的密码" v-model="pwd">
			<f7-link :id="logina==1?'login':''">
				<div @click="login">登陆</div>
			</f7-link>
			<f7-link href="/register"><span>注册</span></f7-link>
			<f7-link href="/retrievePassword"><em>忘记密码</em></f7-link>
		</div>
	</f7-page>
</template>
<script>
import Global from "../Global.vue";

export default {

  data: function() {
    return {
      url: "http://39.106.134.125:8080/netschool/",
      // url: "http://localhost:8080/shiro_test/",

      username: "",
      pwd: "",
      logina: 0
    };
  },
  methods: {
    login: function() {
      /* this.$f7router.navigate('/?id=1');*/
      if (this.username == "" || this.pwd == "") {
        //alert("用户名或者密码不能为空");
        return;
      } else {
        this.$http
          .get(this.url + "/appLogin", {
            params: {
              userName: this.username,
              passWord: this.pwd
            }
          })
          .then(
            function(res) {
              //console.log(res.body.code);
              if (res.body.code == 1) {
                let toastCenter = this.$f7.toast.create({
                  text: "登录成功！",
                  position: "center",
                  closeTimeout: 2000
                });
                toastCenter.open();
                console.log(res)
                this.$localStorage.set('token', res.body.data)

                this.$f7router.navigate("/home");
              } else {
                let toastCenter = this.$f7.toast.create({
                  text: "用户名或者密码错误！",
                  position: "center",
                  closeTimeout: 2000
                });
                toastCenter.open();
              }

              //this.$f7router.navigate('/login');
            },
            function(res) {
              console.log(res.status);
            }
          );
      }
    }
  },
  watch: {
    pwd(newpwd, oldpwd) {
      if (this.username != "" && this.pwd != "") {
        this.logina = 1;
      } else {
        this.logina = 0;
      }
    },
    username(newusername, oldusername) {
      if (this.username != "" && this.pwd != "") {
        this.logina = 1;
      } else {
        this.logina = 0;
      }
    }
  },
  created: function() {

    //验证登录
    this.$http
      .get(this.url + "/personal/loginState", {
        params: {}
      })
      .then(function(res) {
        console.log(res);
        if (res.body.code == 1) {
          this.$f7router.navigate("/home");
        }
      });
  }
};
</script>
<style lang="less">
#login div {
  background-color: #00aaee;
}

	.login {
		.page-content {
			background-color: #fff;
			.mid {
				padding: 38px;
				>h1 {
					text-align: center;
					font-family: "PingFang-SC-Medium";
					font-size: 24px;
					color: #333333;
					font-weight: 400;
					margin: 70px 0;
				}
				>input {
					width: 100%;
					line-height: 50px;
					font-family: "PingFang-SC-Regular";
					font-size: 16px;
				}
				>.link {
					display: block;
					>div {
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
					>span {
						text-align: center;
						display: block;
						margin-top: 28px;
						font-family: "PingFang-SC-Medium";
						font-size: 16px;
						color: #333333;
					}
					>em {
						text-align: center;
						display: block;
						margin-top: 30%;
						color: #00AAEE;
						font-family: "PingFang-SC-Medium";
						font-size: 16px;

					}
				}
			}
		}
	}

</style>
