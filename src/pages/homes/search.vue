<template>
  <f7-page class="search">
        <f7-navbar>
          <f7-nav-left sliding><f7-link class="iconfont icon-zuo" @click="$f7router.back()"></f7-link></f7-nav-left>
          <f7-nav-title class="inpt"> <i class="iconfont icon-sousuo"></i> <input type="text" name="" id="" v-model="val"> </f7-nav-title>
          <f7-nav-right>
            <f7-link class="inptfont" @click="gitpush">搜索</f7-link>
          </f7-nav-right>
        </f7-navbar>
        <div class="mid">
          <h3>最近搜索 <f7-link><i class="iconfont icon-shanchu"></i></f7-link> </h3>
          <ul>
            <f7-link v-for="item in getSearchFg" @click="add(item.sname)" :key="item.id">{{item.sname}}</f7-link>
          </ul>
          <h3>热门搜索</h3>
          <ul>
            <f7-link>课程</f7-link>
            <f7-link>课程</f7-link>
            <f7-link>课2131程</f7-link>
            <f7-link>课程</f7-link>
            <f7-link>课123程</f7-link>
            <f7-link>课123程</f7-link>
            <f7-link>课程</f7-link>
            <f7-link>课312程</f7-link>
            <f7-link>课12程</f7-link>
            <f7-link>课333程</f7-link>
          </ul>
        </div>

  </f7-page>
</template>
<script>
export default {
  data: function() {
    return {
      url: "http://39.106.134.125:8080/netschool/",
      val: "",
      getSearchFg:"",
    };
  },
  methods: {
    gitpush() {
      this.$f7router.navigate("/searchResult?val=" + this.val);
    },
    add(e) {
      this.val = e;
      this.$f7router.navigate("/searchResult?val=" + this.val);
    },
  },
  created() {
    this.$http
      .get(this.url + "/sx1211courseAdmin/getSearchFg", {
        params: {
          page:1,
          limit:10
        }
      })
      .then(function(res) {
        console.log(res);
        this.getSearchFg = res.body.data;
      });
  }
};
</script>
<style lang="less">
.navbar {
  .inpt {
    width: 100%;
    background-color: #f4f4f4;
    height: 30px;
    border-radius: 15px;
    padding-left: 35px;
    position: relative;
    > .iconfont {
      position: absolute;
      left: 10px;
      top: 50%;
      transform: translateY(-50%);
      font-size: 16px !important;
    }
    > input {
      width: 100%;
      height: 100%;
    }
  }
  .inptfont {
    font-size: 12px;
    font-family: "PingFang-SC-Regular";
    font-size: 14px;
    color: #333333;
  }
}
.search {
  .mid {
    background-color: #fff;
    padding: 30px 12px;
    > h3 {
      font-weight: 400;
      > .link {
        float: right;
        color: #999999;
        padding: 0 10px;
        > .iconfont {
          font-size: 17px;
        }
      }
    }
    > ul {
      padding: 5px 0;
      > .link {
        background-color: #f4f4f4;
        padding: 8px 20px;
        border-radius: 10px;
        font-family: "PingFang-SC-Regular";
        font-size: 12px;
        color: #333333;
        margin: 8px 0;
        margin-right: 10px;
      }
    }
  }
}
</style>


