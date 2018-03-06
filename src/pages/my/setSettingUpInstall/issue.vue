<template>
  <f7-page class="issue">
        <f7-navbar>
          <f7-nav-left sliding><f7-link class="iconfont icon-zuo" @click="$f7router.back()"></f7-link></f7-nav-left>
          <f7-nav-title>常见问题</f7-nav-title>
        </f7-navbar>
        <div class="mid">
            <h3>账号相关</h3>
            <h4>账号被冻结</h4>
            <p>被封停原因如下:</p>
            <ul>
              <li>发布、传播、储存违反国家法律危害国家安全统一社会稳定、公序良俗、社会公德以及侮导、讲谅、淫秽暴力的内容;</li>
              <li>支布，传播、情存便害他人名营权、肖像权、知识产权。商业秘密等合法权利的内容;</li>
              <li>对其他学生/讲师进行尊马。疆扰甚至恐吓等行为;</li>
              <li>发表，传送。传播广告信息及垃圾信息;</li>
              <li>以其不正当目的对ID昵称头像进行修改。已达到对他人集体志意导写强扰甚至恐吓等行为;</li>
              <li>同一IP地址进行多次匯号注册行为，或通过非正当手段已达到账号累计操作;</li>
              <li>通过非正当手段、积分滨消等进行积分积業操作;</li>
              <li>其他山香教育网命令禁止的行为;</li>
            </ul>
            <h4>登录失效</h4>
            <ul>
              <li>在其他设备上登录同一个账号，当前设备上登录的账号将会被解除登录状态;</li>
              <li>因第三方授权时效等原因，起过一定时间范理后，设备上的登录状态将会过期;</li>
              <li>敬感信息修改包括登录巴码等敏感信息在修改之后，为保障账号安全，需要重新进行一次中学操作;</li>
            </ul>
        </div>
  </f7-page>
</template>
<script>
export default {
  data: function() {
    return {

    };
  },
  methods: {

  }
};
</script>
<style lang="less">
.issue {
  .mid {
    margin: 0 10px;
    >h3{
      text-align: center;
      margin: 20px;
    }
    >h4{
      margin: 20px 0;
    }
    >p{
      font-size: 12px;
      color: #999;
      line-height: 30px;
    }
    li{
      font-size: 12px;
      color: #999;
      line-height: 20px;
    }
  }
}
</style>


