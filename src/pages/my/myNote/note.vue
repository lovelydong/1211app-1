<template>
  <f7-page class="note">

        <f7-navbar>
          <f7-nav-left sliding><f7-link class="iconfont icon-zuo" @click="$f7router.back()"></f7-link></f7-nav-left>
          <f7-nav-title>我的笔记</f7-nav-title>
        </f7-navbar>
         <div class="mid">
            <div class="list">
            <ul>
              <li class="swipeout" v-for="not in notes">
                <div class="swipeout-content">
                  <a :href="'/noteParticulars?title='+not.note+'&timer='+not.creat_time+'&ext1='+not.ext1" class="item-link">
                    <div class="item-content">
                      <div class="item-inner">
                        <div class="item-title">{{not.note}} <p>学习时间：{{not.creat_time/1000 | moment("YYYY-MM-DD")}}</p></div>
                      </div>
                    </div>
                  </a>
                </div>
                <div class="swipeout-actions-right">
                  <a href="#" class="swipeout-close color-blue" @click="shareboy">分享</a>
                  <a href="#" class="swipeout-delete"  @click="noteDelete(not.id)">删除</a>
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
    	notes:""
    }
  },
  methods: {
    shareboy: function(data) {
      this.$refs.c1.sharefn();
    },
    noteDelete:function(idd)
    {
    	
    	
    	console.log(idd)
    	let url="http://192.168.0.130:8080/shiro_test";
  	//笔记列表删除

       /* this.$http.get(url+"/booknote/del",{
  		params:{
  			id:id
  		},headers: {
                'Content-Type': 'x-www-from-urlencoded'
            }
            }).then(function(res){
                console.log(res)
                	
					 },function(res){
                console.log(res.status);
            })*/
           this.$http({
            url: url+"/booknote/del",
            method: 'POST',
            // 请求体重发送的数据
            params: {
               id:idd
            },
            // 设置请求头
            headers: {
                'Content-Type':'application/x-www-form-urlencoded'
            }
        }).then(function (res) {
            // 请求成功回调
             console.log(res)
                	
        }, function () {
            // 请求失败回调
        });
           
    	
    }
    
  },
  created:function(){
  	let url="http://192.168.0.130:8080/shiro_test";
  	//笔记列表渲染

        this.$http.get(url+"/booknote/bookList",{
  		params:{
  			page:1,
  			limit:1000
  		}
            }).then(function(res){
                console.log(res.data.data)
                	this.notes=res.data.data;
					 },function(res){
                console.log(res.status);
            })
  }
};
</script>
<style lang="less">
.note {
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


