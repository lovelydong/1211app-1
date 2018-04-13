<template>
  <f7-page class="personalData">
        <f7-navbar>
          <f7-nav-left sliding><f7-link class="iconfont icon-zuo" @click="$f7router.back()"></f7-link></f7-nav-left>
          <f7-nav-title>个人资料</f7-nav-title>
        </f7-navbar>
        <div class="mid">
          <ul>
            <li>
              <input type="file" name="header_img" accept="image/gif,image/jpeg,image/png,image/jpg" @change="getFile($event)">
              <f7-link href="">   头像 <i class="iconfont icon-you"></i><img :src="formsrc" alt=""> </f7-link>
              <f7-link href="/modificationName">  昵称 <i class="iconfont icon-you"></i><i>{{userinfo.nick_name}}</i></f7-link>
              <f7-link href="" @click="changesex()">  性别 <i class="iconfont icon-you"></i><i v-html='userinfo.sex=="1"?"男":"女"'></i></f7-link>
            </li>
          </ul>
          <!-- <ul>
            <li>
              <f7-link href="">  出生日期 <i class="iconfont icon-you"></i><i>{{userinfo.birthday}}</i></f7-link>
              <f7-link href="">  所在地区 <i class="iconfont icon-you"></i><i>{{userinfo.province}}</i></f7-link>
            </li>
          </ul> -->
        </div>

  </f7-page>
</template>
<script>
import global_ from "../../Global.vue"; //引用模块进来
export default {
  // components: {
  //   vueImgPreview
  // },
  data: function() {
    return {
      userinfo: {
        nick_name: "",
        sex: ""
      },
      url: "http://39.106.134.125:8080/netschool/",
      // url: "http://192.168.0.43:8080/shiro_test/",
      formsrc: ""
    };
  },
  methods: {
    getFile() {
      const file = event.target.files[0];
      let formData = new FormData();
      formData.append("image", file);
      this.$http.post(this.url + "/UploadApp", formData).then(function(res) {
        console.log(res);
        this.formsrc = this.url + res.body;
        this.$http
          .get(this.url + "/user/upAppImg", {
            params: {
              img: res.body
            }
          })
          .then(function(res) {
            console.log(res);
            if (res.body.code == 0) {
              let toastCenter = this.$f7.toast.create({
                text: "更改成功，重启应用后生效",
                position: "center",
                closeTimeout: 2000
              });
              toastCenter.open();
            } else {
              let toastCenter = this.$f7.toast.create({
                text: "请重试",
                position: "center",
                closeTimeout: 2000
              });
            }
          });
      });
    },
    changesex: function() {
      if (this.userinfo.sex == 1) {
        this.$http
          .get(this.url + "/user/appupdate", {
            params: {
              sex: 0
            }
          })
          .then(
            function(res) {
              console.log(res);
              this.userinfo.sex = 0;
              global_.userinfo.sex = 0;
            },
            function(res) {
              console.log(res);
            }
          );
      } else {
        this.$http
          .get(this.url + "/user/appupdate", {
            params: {
              sex: 1
            }
          })
          .then(
            function(res) {
              console.log(res);
              this.userinfo.sex = 1;
              global_.userinfo.sex = 1;
            },
            function(res) {
              console.log(res);
            }
          );
      }
    }
  },
  created: function() {
    this.userinfo = global_.userinfo;
    this.formsrc = this.url + this.userinfo.img;
  }
};
</script>
<style lang="less">
.personalData {
  .mid {
    > ul {
      background-color: #fff;
      margin-bottom: 20px;
      > li {
        > input {
          z-index: 9999;
          display: block;
          width: 100%;
          height: 50px;
          position: absolute;
          opacity: 0;
          left: 0;
        }
        padding: 0 20px;
        > .link {
          display: block;
          font-family: "PingFang-SC-Regular";
          font-size: 16px;
          color: #333333;
          position: relative;
          line-height: 50px;
          > span {
            position: absolute;
            top: 50%;
            left: 0;
            transform: translateY(-50%);
            display: inline-block;
            width: 16px;
            height: 16px;
            background-color: #000;
          }
          > i {
            float: right;
            color: #999;
          }
          > img {
            width: 30px;
            height: 30px;
            position: absolute;
            top: 50%;
            transform: translateY(-50%);
            right: 20px;
            border-radius: 50%;
          }
        }
      }
    }
  }
}
</style>


