<template>
  <f7-page class="news">
        <f7-navbar>
          <f7-nav-left sliding><f7-link class="iconfont icon-zuo" @click="$f7router.back()"></f7-link></f7-nav-left>
          <f7-nav-title>消息</f7-nav-title>
        </f7-navbar>

  </f7-page>
</template>
<script>
export default {
  data: function() {
    return {
      url: "http://localhost:8080/shiro_test"
    };
  },
  methods: {},
  created() {
    //订单详情全部
    // this.$http
    //   .get(this.url + "/sxorder/listPage", {
    //     params: {
    //       state: 0,
    //       page: 1,
    //       limit: 99
    //     }
    //   })
    //   .then(function(res) {
    //     this.tabAll = res.body.data;
    //   });
  }
};
</script>
<style lang="less">
.news {

}
</style>


