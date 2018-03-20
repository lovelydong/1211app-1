<template>
  <f7-page class="examinationPaper">

        <f7-navbar>
          <f7-nav-left sliding><f7-link class="iconfont icon-zuo" @click="$f7router.back()"></f7-link></f7-nav-left>
          <f7-nav-title>我的试卷</f7-nav-title>
        </f7-navbar>
         <div class="mid">
            <div class="list">
            <ul>
              <li class="swipeout" v-for="e in exam"> 
                <div class="swipeout-content">
                  <f7-link :href="'/examinationPaperParticulars?id='+e.examid" class="item-link">
                    <div class="item-content">
                      <div class="item-inner">
                        <div class="item-title">{{e.examname}} <p>学习时间：{{nowtime | moment("YYYY-MM-DD")}}</p></div>
                      </div>
                    </div>
                  </f7-link>
                </div>
                <div class="swipeout-actions-right">
                  <a href="#" class="swipeout-close color-blue" @click="shareboy">分享</a>
                  <a href="#" class="swipeout-delete" @click="Edelete(e.id)">删除</a>
                </div>
              </li>
            </ul>
          </div>
         </div>

        <Share ref="c1"></Share>
  </f7-page>
</template>
<script>
export default {
  data: function() {
    return {
    	url:"http://localhost:8080/shiro_test",
    	exam:"",
    	nowtime:""
    	
    };
  },
  methods: {
    shareboy: function(data) {
      this.$refs.c1.sharefn();
    },
    Edelete:function(id)
    {
    	this.$http
          .get(this.url +"/myexam/delete", {
          params: {
        id:id
        }   
          })
          .then(function(res) {
           
            console.log(res)
            let toastCenter = this.$f7.toast.create({
								text: "删除成功！",
								position: "center",
								closeTimeout: 2000
							});
							toastCenter.open();
          });
    }
    
  },
  created:function()
    {
    	this.nowtime=new Date().getTime()/1000;
    	this.$http
          .get(this.url + "/myexam/list", {
            
          })
          .then(function(res) {
            this.exam = res.body.data;
            //console.log(this.exam)
          });
    }
};
</script>
<style lang="less">
.examinationPaper  {
  .mid {
    .list {
      margin: 25px 0;
      background-color: #c8c7cc;
      > ul {
        background-color: none;
        > li {
          > .swipeout-content {
            > .item-link {
              .item-title {
                font-family: "PingFang-SC-Regular";
                font-size: 16px;
                color: #333333;
                padding: 5px 0;
                > p {
                  font-family: "PingFang-SC-Regular";
                  font-size: 12px;
                  color: #bfbfbf;
                  padding-top: 5px;
                }
              }
            }
          }
        }
      }
    }
  }
}
</style>


