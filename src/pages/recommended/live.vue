<template>
  <f7-page class="live">
        <f7-navbar>
          <f7-nav-left sliding><f7-link class="iconfont icon-zuo" @click="$f7router.back()"></f7-link></f7-nav-left>
          <f7-nav-title>在线播放</f7-nav-title>
        </f7-navbar>
        <iframe :src="url1" frameborder="0" width="100%" height="100%"  id="studyManageIframe"></iframe>
  </f7-page>
</template>
<script>
//&ownerid=zFiZQhs0Sh&uname=李冬冬&authcode=534577
//http://localhost:8080/shiro_test/sx1211courseAdmin/mobile_live?&uid=5583122&ownerid='zFiZQhs0Sh'&uname='李冬冬'&authcode=534577
export default {
  data: function() {
    return {
    	url: "http://39.106.134.125:8080/netschool/",
    	url1:"",
    	type:""
    }
  },
  created:function()
  {
  	let id = this.$f7route.query.id;
  	this.type= this.$f7route.query.type;

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

        }
      })
      .then(function(res) {

        this.url1="http://39.106.134.125/netschool/sx1211courseAdmin/mobile_live?uid="+res.body.data.uid+"&ownerid="+res.body.data.ownerid+"&uname="+res.body.data.uname+"&authcode="+res.body.data.authcode;
        //this.url1="http://localhost:8080/shiro_test/sx1211courseAdmin/mobile_live?&uid=5583122&ownerid='zFiZQhs0Sh'&uname='李冬冬'&authcode=534577"



      });

      });






  	}
  	else{
  		//alert("课程")
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


      	this.url1="http://39.106.134.125/netschool/sx1211courseAdmin/mobile_live?uid="+res.body.data.uid+"&ownerid="+res.body.data.ownerid+"&uname="+res.body.data.uname+"&authcode="+res.body.data.authcode;
      	 //this.url1="http://localhost:8080/shiro_test/sx1211courseAdmin/mobile_live?&uid=5583122&ownerid='zFiZQhs0Sh'&uname='李冬冬'&authcode=534577"




      });

      });



  	}


  }
 }
</script>

