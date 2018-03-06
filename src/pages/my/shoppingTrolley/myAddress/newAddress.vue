<template>
  <f7-page class="newAddress">
        <f7-navbar>
          <f7-nav-left sliding><f7-link class="iconfont icon-zuo" @click="$f7router.back()"></f7-link></f7-nav-left>
          <f7-nav-title>新增收货地址</f7-nav-title>
        </f7-navbar>
        <f7-list inline-labels no-hairlines-md>
        <f7-list-item>
          <f7-icon icon="demo-list-icon" slot="media"></f7-icon>
          <f7-label>收货人：</f7-label>
          <f7-input type="text" placeholder="请输入姓名" :value="forms.value" @input="forms.value = $event.target.value" clear-button></f7-input>
        </f7-list-item>
        <f7-list-item>
          <f7-icon icon="demo-list-icon" slot="media"></f7-icon>
          <f7-label>联系电话：</f7-label>
          <f7-input type="tel" resizable placeholder="请输入手机号"  clear-button></f7-input>
        </f7-list-item>
        <f7-list-item>
          <f7-icon icon="demo-list-icon" slot="media"></f7-icon>
          <f7-label>详细地址：</f7-label>
          <f7-input type="textarea" resizable placeholder="请输入街道  门牌号等详细信息"  clear-button></f7-input>
        </f7-list-item>
        <f7-list-item>
          <f7-icon icon="demo-list-icon" slot="media"></f7-icon>
          <f7-label>设置为默认地址</f7-label>
          <toggle-button v-model="forms.default" @change="Onchange" color="#fd2d44" :sync="true" :height="30"/>
        </f7-list-item>
      </f7-list>
        <f7-link class="bot">
          保存并使用
        </f7-link>
  </f7-page>
</template>
<script>
export default {
  data: function() {
    return {
      forms: {
        value: "",
        default:false
      }
    };
  },
  methods: {
    Onchange(){
      console.log(this.forms.default)
    }
  }
};
</script>
<style lang="less">
.newAddress {
  .item-inner:after{
    transform: scaleY(0.6) !important;
  }
  .mid {

  }
  .bot {
    width: 80%;
    height: 50px;
    background-color: #fd2d44;
    font-family: "PingFang-SC-Medium";
    font-size: 16px;
    display: block;
    color: #ffffff;
    text-align: center;
    line-height: 50px;
    margin: 0 auto;
    border-radius: 5px;
  }
}
</style>


