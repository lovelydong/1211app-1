<template>
  <f7-page class="modificationName">
        <f7-navbar>
          <f7-nav-left sliding><f7-link class="iconfont icon-zuo" @click="$f7router.back()"></f7-link></f7-nav-left>
          <f7-nav-title>修改名称</f7-nav-title>
          <f7-nav-right>
              <f7-link class="navbrleft">完成</f7-link>
          </f7-nav-right>
        </f7-navbar>
        <div class="mid">
          <textarea placeholder="飞翔的蜗牛丶" ></textarea>
        </div>

  </f7-page>
</template>
<script>
export default {
  data: function() {
    return {};
  },
  methods: {}
};
</script>
<style lang="less">
.navbrleft {
  font-family: "PingFang-SC-Regular";
  font-size: 14px;
  color: #333333 !important;
}
.modificationName{
  .mid{
    padding: 30px 20px;
    textarea{
      width: 100%;
      min-height: 50px;
    }
  }
}
</style>


