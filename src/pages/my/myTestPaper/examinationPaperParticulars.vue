<template>
  <f7-page class="examinationPaperParticulars">

      <f7-navbar>
          <f7-nav-left sliding><f7-link class="iconfont icon-zuo" @click="$f7router.back()"></f7-link></f7-nav-left>
          <f7-nav-title>{{title}}</f7-nav-title>
          <f7-nav-right>
            <f7-link style="font-family: PingFang-SC-Regular;
            font-size: 14px;
            color: #fd2d44;"></f7-link>
          </f7-nav-right>
        </f7-navbar>
        <div class="mid">
          <f7-swiper pagination>
              <f7-swiper-slide v-for="(e,index) in exams.dx" v-if="exams.dx.length" :key="e.id">
                <h3>单选题</h3>

                <div class="content">
                    <p>{{e.itemname}}</p>
                    <ul>
                        <f7-link v-for="(ee,index) in exams.dxa" v-if="e.id==ee.itemid" :key="ee.id"> <!--<span>A</span>-->{{ee.optionname}}</f7-link>
                       <!-- <f7-link class="active"> <span>B</span>灯比原来亮了</f7-link>
                        <f7-link class="active1"> <span>C</span>灯比原来亮了</f7-link>-->
                    </ul>
                    <div class="bot">
                        <h4>答案解析：</h4>

                        <div v-for="(eee,index) in exams.dxanswer" v-if="e.id==eee.itemid" :key="e.id">{{eee.analysis}}</div>
                    </div>
                </div>
              </f7-swiper-slide>

              <f7-swiper-slide v-for="(e,index) in exams.dxs" v-if="exams.dxs.length" :key="e.id">
                <h3>多选题</h3>

                <div class="content">
                    <p>{{e.itemname}}</p>
                    <ul>
                        <f7-link v-for="(ee,index) in exams.dxsa" v-if="e.id==ee.itemid" :key="ee.id"> <!--<span>A</span>-->{{ee.optionname}}</f7-link>
                       <!-- <f7-link class="active"> <span>B</span>灯比原来亮了</f7-link>
                        <f7-link class="active1"> <span>C</span>灯比原来亮了</f7-link>-->
                    </ul>
                    <div class="bot">
                        <h4>答案解析：</h4>

                        <div v-for="(eee,index) in exams.dxsanswer" v-if="e.id==eee.itemid" :key="eee.id">{{eee.analysis}}</div>
                    </div>
                </div>
              </f7-swiper-slide>

              <f7-swiper-slide v-for="(e,index) in exams.jd" v-if="exams.jd.length" :key="e.id">
                  <h3>简答题</h3>
                  <div class="content">
                      <p>{{e.itemname}}</p>
                     <!-- <div>可是东方红萨科技的发送快递发看时间说了大富科技奥斯卡了是的发送到发斯蒂芬</div>-->
                      <div class="bot">
                          <h4>答案解析：</h4>

                          <div v-for="(eee,index) in exams.jdanswer" v-if="e.id==eee.itemid" :key="eee.id">{{eee.analysis}}</div>
                      </div>
                  </div>
              </f7-swiper-slide>
          </f7-swiper>
        </div>
  </f7-page>
</template>
<script>
		import Global from "../../Global.vue";
export default {
  data: function() {
    return {
    	url:"http://39.106.134.125:8080/netschool/",
    	exams:"",
    	title:""
    };
  },
  methods: {},
  created:function()
  {
  	var id=this.$f7route.query.id;
  	//console.log(examid)


  		this.$http.get(this.url+"/myexam/detail",{
  	 		params:{
  			id:id
  		}

            }).then(function(res){
            	console.log(res.body.data)
            	this.exams=res.body.data;
            	this.title=res.body.data.exam.name;


					 },function(res){
                console.log(res.status);
            })
  }
 }
</script>
<style lang="less">
.examinationPaperParticulars{
  .mid {
    padding: 20px 12px;
    background-color: #fff;
    .swiper-wrapper {
      .swiper-slide {
        padding: 20px 12px;
        background-color: #fff;
        > h3 {
          font-family: "PingFang-SC-Medium";
          font-size: 16px;
          line-height: 30px;
          color: #333333;
          font-weight: 400;
          > span {
            float: right;
            > em {
              color: #fd2d44;
            }
          }
        }
        > .content {
          padding: 40px 20px;
          > p {
            font-family: "PingFang-SC-Medium";
            font-size: 16px;
            line-height: 30px;
            color: #333333;
          }
          > div {
            background-color: #f3f3f3;
            width: 100%;
            margin-top: 40px;
            padding: 10px;
            font-family: "PingFang-SC-Medium";
            font-size: 14px;
            color: #666;
          }
          > ul {
            padding-top: 30px;

            > .link {
              display: block;
              font-family: "PingFang-SC-Medium";
              font-size: 16px;
              color: #333333;
              padding: 10px 0;
              > span {
                border: solid 1px #fd5d32;
                border-radius: 50%;
                padding: 0 5px;
                margin-right: 10px;
                color: #fd5d32;
              }
            }
            > .active {
              color: #fd5d32;
              > span {
                color: #fff;
                background-color: #fd5d32;
              }
            }
            > .active1 {
              color: #22ac38;
              > span {
                color: #fff;
                background-color: #22ac38;
                border: 1px solid #22ac38;
              }
            }
          }
          > .bot {
            background-color: #efeff4;
            padding-bottom: 0;
            > h4 {
              font-family: "PingFang-SC-Regular";
              font-size: 16px;
              font-weight: 400;
              color: #fd5d32;
            }
            > div {
              padding: 14px 20px;
              color: #666666;
            }
          }
        }
      }
    }
    .swiper-pagination-bullet-active {
      background: #fd2d44;
    }
  }
}
</style>



