<template>
  <f7-page class="indent">
        <f7-navbar>
          <f7-nav-left sliding><f7-link class="iconfont icon-zuo" @click="$f7router.back()"></f7-link></f7-nav-left>
          <f7-nav-title>支付中</f7-nav-title>
        </f7-navbar>
        <!--<iframe v-if="pay = 1"  content="default-src *"  :src="url + '/app/toPayApp?order=' + order + '&couponid='+couponid+'&flag='+flag" frameborder="0" width="100%" height="100%"></iframe>-->
  </f7-page>
</template>
<script>
import Global from "../../Global.vue";

export default {
  data: function() {
    return {
      url: "http://39.106.134.125:8080/netschool/",
      // url: "http://192.168.0.221:8080/shiro_test/",
      order: this.$f7route.query.order,
      couponid: this.$f7route.query.couponid,
      flag: this.$f7route.query.flag,
      pay: this.$f7route.query.pay
    };
  },
  methods: {},
  created() {
    console.log(this.$f7route.query)
    //window.open("39.106.134.125/netschool/app/toPayApp?order=49427799&couponid=null&flag=0");
    window.location.href= this.url+"/app/toPayApp?order="+this.order+"&couponid="+this.couponid+"&flag="+this.flag;
  }
};
</script>
<style lang="less">

</style>


