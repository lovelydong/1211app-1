<template>
	<f7-page class="live">
		<f7-navbar>
			<f7-nav-left sliding>
				<f7-link class="iconfont icon-zuo" @click="$f7router.back()"></f7-link>
			</f7-nav-left>
			<f7-nav-title>在线播放</f7-nav-title>
		</f7-navbar>
		<!--<iframe src="http://localhost:8080/shiro_test/sx1211courseAdmin/mobile_live?&uid=5583122&ownerid='zFiZQhs0Sh'&uname='李冬冬'&authcode=534577" frameborder="0" width="100%" height="100%" id="studyManageIframe"></iframe>-->
		<iframe src="http://shanxiangjiaoyu.gensee.com/training/site/v/88165914?token=436703&nickname=666" frameborder="0" width="100%" height="100%" ></iframe>
	</f7-page>
</template>
<script>
	//&ownerid=zFiZQhs0Sh&uname=李冬冬&authcode=534577
	export default {
		data: function() {
			return {}
		},
		created:function()
		{
		
		}
	}
</script>