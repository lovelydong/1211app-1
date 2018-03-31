<template>
	<f7-page class="live">
		<f7-navbar>
			<f7-nav-left sliding>
				<f7-link class="iconfont icon-zuo" @click="$f7router.back()"></f7-link>
			</f7-nav-left>
			<f7-nav-title>在线播放</f7-nav-title>
		</f7-navbar>
		<!--<iframe src="http://localhost:8080/shiro_test/sx1211courseAdmin/mobile_live?&uid=5583122&ownerid='zFiZQhs0Sh'&uname='李冬冬'&authcode=534577" frameborder="0" width="100%" height="100%" id="studyManageIframe"></iframe>-->
	<iframe :src="url1" frameborder="0" width="100%" height="100%" ></iframe>

	</f7-page>
</template>
<script>

	export default {
		data: function() {
			return {
				url: "http://39.106.134.125/netschool/",
				url1:"",
				type:"",
				firstid:''
			}
		},
		created:function()
		{


  	let id = this.$f7route.query.id;
  	let iszj = this.$f7route.query.iszj;

  	this.type= this.$f7route.query.type;
  	/*if(iszj==1)
  	{
  		  this.$http
      .get(this.url + "/sx1211courseAdmin/onechap", {
        params: {
          id: 58
        }
      })
      .then(function(res) {
      	console.log(res)
        this.url1=res.body.data.vod_url+"?token="+res.body.data.vod_pass+"&nickname=66"



      });

  	}
  	else{*/
  			if(this.type==1)
  	{
  	//alert("限时")
  	 this.$http
      .get(this.url + "/flashsale/detail", {
        params: {
          id: id
        }
      })
      .then(function(res) {
        this.firstid = res.body.data.ext4;
        alert(this.firstid)

       //alert(this.firstid)
        this.$http
      .get(this.url + "/sx1211courseAdmin/onechap", {
        params: {
          id: this.firstid
          //暂时写死
        }
      })
      .then(function(res) {
       this.url1=res.body.data.vod_url+"?token="+res.body.data.vod_pass+"&nickname="+res.body.data.uname



      });

      });






  	}
  	else{
  	//alert("fei限时")
  		 this.$http
      .get(this.url + "/sx1211courseAdmin/oneJson", {
        params: {
          id: id
        }
      })
      .then(function(res) {
        this.firstid = res.body.data.ext4;
        //alert(this.firstid)

    this.$http
      .get(this.url + "/sx1211courseAdmin/onechap", {
        params: {
          id: this.firstid
        }
      })
      .then(function(res) {
      	console.log(res)
      	
        this.url1=res.body.data.vod_url+"?token="+res.body.data.vod_pass+"&nickname="+res.body.data.uname
        



      });

      });



  	}
  	


		}
	}
</script>
