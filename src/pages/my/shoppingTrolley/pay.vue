<template>
  <f7-page class="indent">
        <f7-navbar>
          <f7-nav-left sliding><f7-link class="iconfont icon-zuo" @click="$f7router.back()"></f7-link></f7-nav-left>
          <f7-nav-title>支付中</f7-nav-title>
        </f7-navbar>
        <iframe src="//localhost:8080/shiro_test/app/toPayApp?order=2016120006&couponid=" frameborder="0" width="100%" height="100%"></iframe>
  </f7-page>
</template>
<script>
import Global from "../../Global.vue";

export default {
  data: function() {
    return {
      url: "http://localhost:8080/shiro_test",
    };
  },
  methods: {

  },
  created() {

  }
};
</script>
<style lang="less">

</style>


