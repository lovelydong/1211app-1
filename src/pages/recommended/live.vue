<template>
  <f7-page class="live">
        <f7-navbar>
          <f7-nav-left sliding><f7-link class="iconfont icon-zuo" @click="$f7router.back()"></f7-link></f7-nav-left>
          <f7-nav-title>在线播放</f7-nav-title>
        </f7-navbar>
        <iframe src="http://192.168.0.130:8080/shiro_test/sx1211courseAdmin/mobile_live" frameborder="0" width="100%" height="100%"></iframe>
  </f7-page>
</template>
<script>
export default {
  data: function() {
    return {

    };
  },

};
</script>

