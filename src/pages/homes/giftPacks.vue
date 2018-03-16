<template>
  <f7-page class="news">
        <f7-navbar>
          <f7-nav-left sliding><f7-link class="iconfont icon-zuo" @click="$f7router.back()"></f7-link></f7-nav-left>
          <f7-nav-title>特惠大礼包</f7-nav-title>
        </f7-navbar>
        <div class="mid">

        </div>
  </f7-page>
</template>
<script>
export default {
  data: function() {
    return {
      url: "http://192.168.0.130:8080/shiro_test",
      tabAll:""
    };
  },
  methods: {},
  created:function() {
    //消息
    this.$http
      .get(this.url + "/sxsystempersonadmin/listJson", {
        params: {
          page: 1,
          limit: 99
        }
      })
      .then(function(res) {
      	console.log(res.data.data)
        this.tabAll = res.data.data;
      });
  }
};
</script>
<style lang="less">

</style>


