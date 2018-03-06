<template>
  <f7-page class="noteParticulars">

        <f7-navbar>
          <f7-nav-left sliding><f7-link class="iconfont icon-zuo" @click="$f7router.back()"></f7-link></f7-nav-left>
          <f7-nav-title>笔记详情</f7-nav-title>
        </f7-navbar>
         <div class="mid">
           <h5>18中学教育知识与能力（二期回放）<p>创建时间：2017-02-25</p></h5>
           <div class="con">根据国家有关规定，中小学教师资格考试合格者人员还需要向相应的教师资格认定机构(即教育局)申请认定教师资格，才能获得相应的教师资格证书。现就中小学教师资格考试合格人员申请认定相应教师资格的有关事项通知如下:
1.请申请人登录所在省份教师资格认定网站，或根据拟申请认定的教育局通知要求，了解认定政策、认定流程、网上报名时间、报名网址、现场确认时间、确认地点、普通话测试、体检和需要提交的材料等规定</div>
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
.noteParticulars {
  .mid {
    padding: 24px 12px ;
    > h5 {
      font-family: "PingFang-SC-Medium";
      font-size: 18px;
      color: #333333;
      font-weight: 400;
      line-height: 30px;
      >p{
        font-family: "PingFang-SC-Medium";
        font-size: 12px;
        color: #999999;
      }
    }
    >.con{
      font-family: "PingFang-SC-Regular";
      font-size: 16px;
      line-height: 30px;
      color: #333333;
      padding-top: 40px;
    }
  }
}
</style>


