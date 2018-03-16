<template>
  <f7-page class="evaluate">
        <f7-navbar>
          <f7-nav-left sliding><f7-link class="iconfont icon-zuo" @click="$f7router.back()"></f7-link></f7-nav-left>
          <f7-nav-title>立即评价</f7-nav-title>
        </f7-navbar>
        <div class="top">
          <img :src="url+ appEdit.img" alt="">
          <p>{{appEdit.goodsName}}</p>
        </div>
        <div class="mid">
            <textarea placeholder="请输入您的评价！" v-model="val"></textarea>
        </div>
        <f7-link class="link1" @click="gitpush">发表</f7-link>
  </f7-page>
</template>
<script>
export default {
  data: function() {
    return {
      url: "http://192.168.0.130:8080/shiro_test",
      info: "",
      val: "",
      id:this.$f7route.query.id,
      appEdit: {}
    };
  },
  methods: {
    gitpush: function() {
      //保存评论
      this.$http
        .get(this.url + "/coursedetail/save", {
          params: {
            id: this.id,
            comment:this.val
          }
        })
        .then(function(res) {
          console.log(res.data.data);
        });
    }
  },
  created: function() {
    //评价
    this.$http
      .get(this.url + "/coursedetail/appEdit", {
        params: {
          id: this.id
        }
      })
      .then(function(res) {
        this.appEdit = res.data.data;
        console.log(res.data.data);
      });
  }
};
</script>
<style lang="less">
.evaluate {
  .top {
    background-color: #fff;
    padding: 30px 22px;
    padding-left: 140px;
    position: relative;
    min-height: 144px;
    > img {
      width: 100px;
      height: 75px;
      position: absolute;
      left: 20px;
      top: 50%;
      transform: translateY(-50%);
    }
    > p {
      font-family: "PingFang-SC-Regular";
      font-size: 12px;
      color: #999999;
    }
    > p:nth-of-type(1) {
      font-family: "PingFang-SC-Regular";
      font-size: 14px;
      color: #000000;
      line-height: 40px;
      > span {
        color: #fd5d32;
      }
    }
  }
  .mid {
    padding: 25px;
    background-color: #fff;
    margin-top: 15px;
    textarea {
      width: 100%;
      min-height: 100px;
      background-color: #f3f3f3;
      padding: 10px;
    }
  }
  .link1 {
    display: block;
    width: 80%;
    height: 44px;
    margin: 50px auto;
    text-align: center;
    line-height: 44px;
    font-family: "PingFang-SC-Medium";
    font-size: 16px;
    color: #ffffff;
    background-image: linear-gradient(#fd2d44, #fd2d44),
      linear-gradient(#fd2d44, #fd2d44);
    background-blend-mode: normal, normal;
    border-radius: 15px;
  }
}
</style>


