<template>
  <f7-page class="newAddress">
        <f7-navbar>
          <f7-nav-left sliding><f7-link class="iconfont icon-zuo" @click="$f7router.back()"></f7-link></f7-nav-left>
          <f7-nav-title>修改收货地址</f7-nav-title>
        </f7-navbar>
        <f7-list inline-labels no-hairlines-md>
        <f7-list-item>
          <f7-icon icon="demo-list-icon" slot="media"></f7-icon>
          <f7-label>收货人：</f7-label>
          <f7-input type="text" placeholder="请输入姓名" :value="forms.userName" @input="forms.userName = $event.target.value" clear-button></f7-input>
        </f7-list-item>
        <f7-list-item>
          <f7-icon icon="demo-list-icon" slot="media"></f7-icon>
          <f7-label>联系电话：</f7-label>
          <f7-input type="tel" resizable placeholder="请输入手机号" :value="forms.phone" @input="forms.phone = $event.target.value"  clear-button></f7-input>
        </f7-list-item>
        <f7-list-item>
          <f7-icon icon="demo-list-icon" slot="media"></f7-icon>
          <f7-label>详细地址：</f7-label>
          <f7-input type="textarea" resizable placeholder="请输入街道  门牌号等详细信息" :value="forms.address" @input="forms.address = $event.target.value" clear-button></f7-input>
        </f7-list-item>
        <f7-list-item>
          <f7-icon icon="demo-list-icon" slot="media"></f7-icon>
          <f7-label>设置为默认地址</f7-label>
          <toggle-button v-model="forms.default" @change="Onchange" color="#fd2d44" :sync="true" :height="30"/>
        </f7-list-item>
      </f7-list>
        <f7-link class="bot" @click="update">
          保存并使用
        </f7-link>
  </f7-page>
</template>
<script>
export default {
  data: function() {
    return {
      url: "http://localhost:8080/shiro_test",
      forms: {
        userName: "",
        address: "",
        phone: "",
        default: false,
      },
      id: null,

    };
  },
  methods: {
    Onchange() {
      console.log(this.forms.default);
    },
    update() {
      let state = 2;
      if (this.forms.default) {
        state = 1;
      }
      //修改收货地址列表
      this.$http
        .get(this.url + "/receiveraddress/update", {
          params: {
            state: state,
            userName: this.forms.userName,
            phone: this.forms.phone,
            address: this.forms.address,
            id: this.id
          }
        })
        .then(function(res) {
          console.log(res);
          if(res.body.code == 1){
            let toastCenter = this.$f7.toast.create({
              text: '修改成功',
              position: 'center',
              closeTimeout: 2000,
            });
            toastCenter.open();
            this.$f7router.back("/myAddress",{force :true});
          }else{
            let toastCenter = this.$f7.toast.create({
              text: '服务器抽风了，请稍后再试 ┭┮﹏┭┮',
              position: 'center',
              closeTimeout: 2000,
            });
            toastCenter.open();
          }
        });
    }
  },
  created() {
    this.id = this.$f7route.query.id;
    //查询
    this.$http
      .get(this.url + "/receiveraddress/findId", {
        params: {
          id: this.id
        }
      })
      .then(function(res) {
        console.log(res);
        this.forms.userName = res.body.data.userName;
        this.forms.phone = res.body.data.phone;
        this.forms.address = res.body.data.address;
        if(res.body.data.state == 1){
          this.forms.default = true;
        }
      });
  }
};
</script>
<style lang="less">
.newAddress {
  .item-inner:after {
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


