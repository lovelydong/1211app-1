<template>
  <f7-page class="home">
      <f7-navbar sliding>
          <div class="lf">
            <span :class="Topactive==1?'active':''" @click="Topactive=1">教师招聘</span>
            <span :class="Topactive==2?'active':''" @click="Topactive=2">教师资格证</span>
            <span :class="Topactive==3?'active':''" @click="Topactive=3">特岗教师</span>
          </div>
          <div class="rt">
              <f7-link>
                      <i class="iconfont icon-saoyisao"></i>
              </f7-link>
              <f7-link>
                      <i class="iconfont icon-xiaoxi"></i>
              </f7-link>
          </div>

      </f7-navbar>
      <f7-toolbar>
        <f7-link  href="/" :reload-all="true" :animate="true"><span></span><p>首页</p></f7-link>
        <f7-link  href="/nLiveStreaming" :reload-all="true" :animate="true"><span></span><p>直播</p></f7-link>
        <f7-link ><span></span><p>录播</p></f7-link>
        <f7-link href="/questionBankhome" :reload-all="true" :animate="true"><span></span><p>题库</p></f7-link>
        <f7-link href="/my"><span></span><p>我的</p></f7-link>
      </f7-toolbar>
      <div class="top">
        <f7-swiper pagination >
          <f7-swiper-slide>
            <img src="../../assets/homebar.png" alt="">
          </f7-swiper-slide>
           <f7-swiper-slide>
            <img src="../../assets/homebar.png" alt="">
          </f7-swiper-slide>
          <f7-swiper-slide>
            <img src="../../assets/homebar.png" alt="">
          </f7-swiper-slide>
        </f7-swiper>
        <div class="seek">
          <f7-link  href="/search/"><i class="iconfont icon-sousuo"></i>请输入想要搜索内容</f7-link>
        </div>
      </div>
      <div class="mid">
        <div class="midtop">
          <div class="row">

            <div class="col-20"><f7-link href="/recommended/"><span></span><p>推荐课程</p></f7-link></div>
            <div class="col-20"><f7-link><span></span><p>最新课程</p></f7-link></div>
            <div class="col-20"><f7-link><span></span><p>大礼包</p></f7-link></div>
            <div class="col-20"><f7-link href="/examinationAnalysis/"><span></span><p>考情分析</p></f7-link></div>
            <div class="col-20"><f7-link href="/questionBank/"><span></span><p>推荐题库</p></f7-link></div>
          </div>
        </div>
        <f7-link> <img src="../../assets/homeQiang.png" alt=""> </f7-link>
        <div class="midlist midRecommend">
           <h3><i></i> 推荐课程 <f7-link href="/recommended/">更多 <i class="iconfont icon-you"></i></f7-link></h3>

            <f7-swiper pagination >
              <f7-swiper-slide>
                  <div>
                    <f7-link >
                    <p>{{recommend11.name}}</p>
                    <p>{{recommend11.area}}·{{recommend11.buyno}}人正在学习</p>
                    <p><i class="iconfont icon-xingxing"></i><i class="iconfont icon-xingxing"></i><i class="iconfont icon-xingxing"></i><i class="iconfont icon-xingxing"></i><i class="iconfont icon-xingxing"></i></p>
                    <p>￥{{recommend11.discount_price}}.00</p>
                    </f7-link>
                  </div>
                  <ul>
                      <li class="clearfix link" v-for="cl in recommend1">
                        <f7-link>
                          <span></span>
                          <div>
                            <p>{{cl.name}}</p>
                            <p>{{cl.area}}·{{cl.buyno}}人正在学习 <i class="iconfont icon-xingxing"></i><i class="iconfont icon-xingxing"></i><i class="iconfont icon-xingxing"></i><i class="iconfont icon-xingxing"></i><i class="iconfont icon-xingxing"></i></p>
                            <p>￥{{cl.discount_price}}.00</p>
                          </div>
                        </f7-link>
                        </li>
                      <!--<li class="clearfix link">
                        <f7-link>
                          <span></span>
                          <div>
                            <p>浙江2018年教师招聘教育心理学二期回放</p>
                            <p>国版·354人正在学习 <i class="iconfont icon-xingxing"></i><i class="iconfont icon-xingxing"></i><i class="iconfont icon-xingxing"></i><i class="iconfont icon-xingxing"></i><i class="iconfont icon-xingxing"></i></p>
                            <p>￥356.00</p>
                          </div>
                        </f7-link>
                      </li>
                      <li class="clearfix link">
                        <f7-link>
                          <span></span>
                          <div>
                            <p>浙江2018年教师招聘教育心理学二期回放</p>
                            <p>国版·354人正在学习 <i class="iconfont icon-xingxing"></i><i class="iconfont icon-xingxing"></i><i class="iconfont icon-xingxing"></i><i class="iconfont icon-xingxing"></i><i class="iconfont icon-xingxing"></i></p>
                            <p>￥356.00</p>
                          </div>
                        </f7-link>
                      </li>-->
                  </ul>
              </f7-swiper-slide>
              <f7-swiper-slide>
              	 <div>
                    <f7-link>
                    <p>{{recommend22.name}}</p>
                    <p>{{recommend22.area}}·{{recommend22.buyno}}人正在学习</p>
                    <p><i class="iconfont icon-xingxing"></i><i class="iconfont icon-xingxing"></i><i class="iconfont icon-xingxing"></i><i class="iconfont icon-xingxing"></i><i class="iconfont icon-xingxing"></i></p>
                    <p>￥{{recommend22.discount_price}}.00</p>
                    </f7-link>
                  </div>
              	<ul>
                      <li class="clearfix link" v-for="cl in recommend2">
                        <f7-link>
                          <span></span>
                          <div>
                            <p>{{cl.name}}</p>
                            <p>{{cl.area}}·{{cl.buyno}}人正在学习 <i class="iconfont icon-xingxing"></i><i class="iconfont icon-xingxing"></i><i class="iconfont icon-xingxing"></i><i class="iconfont icon-xingxing"></i><i class="iconfont icon-xingxing"></i></p>
                            <p>￥{{cl.discount_price}}.00</p>
                          </div>
                        </f7-link>
                        </li>
                    </ul>
                 <!--<img src="../../assets/homebar.png" alt="">-->
              </f7-swiper-slide>

            </f7-swiper>


        </div>
        <div class="midlist midNew ">
           <h3><i></i> 最新课程 <f7-link>更多 <i class="iconfont icon-you"></i></f7-link></h3>

            <f7-swiper pagination >
              <f7-swiper-slide>
                  <div>
                    <f7-link>
                    <p>{{newclass11.name}}</p>
                    <p>{{newclass11.area}}·{{newclass11.buyno}}人正在学习</p>
                    <p><i class="iconfont icon-xingxing"></i><i class="iconfont icon-xingxing"></i><i class="iconfont icon-xingxing"></i><i class="iconfont icon-xingxing"></i><i class="iconfont icon-xingxing"></i></p>
                    <p>￥{{newclass11.discount_price}}.00</p>
                    </f7-link>
                  </div>
                  <ul>
                      <li class="clearfix link" v-for="newclass in newclass1">
                        <f7-link>
                          <span></span>
                          <div>
                            <p>{{newclass.name}}</p>
                            <p>{{newclass.area}}·{{newclass.buyno}}人正在学习 <i class="iconfont icon-xingxing"></i><i class="iconfont icon-xingxing"></i><i class="iconfont icon-xingxing"></i><i class="iconfont icon-xingxing"></i><i class="iconfont icon-xingxing"></i></p>
                            <p>￥{{newclass.discount_price}}.00</p>
                          </div>
                        </f7-link>
                      </li>
                      <!--<li class="clearfix link">
                        <f7-link>
                          <span></span>
                          <div>
                            <p>浙江2018年教师招聘教育心理学二期回放</p>
                            <p>国版·354人正在学习 <i class="iconfont icon-xingxing"></i><i class="iconfont icon-xingxing"></i><i class="iconfont icon-xingxing"></i><i class="iconfont icon-xingxing"></i><i class="iconfont icon-xingxing"></i></p>
                            <p>￥356.00</p>
                          </div>
                        </f7-link>
                      </li>
                      <li class="clearfix link">
                        <f7-link>
                          <span></span>
                          <div>
                            <p>浙江2018年教师招聘教育心理学二期回放</p>
                            <p>国版·354人正在学习 <i class="iconfont icon-xingxing"></i><i class="iconfont icon-xingxing"></i><i class="iconfont icon-xingxing"></i><i class="iconfont icon-xingxing"></i><i class="iconfont icon-xingxing"></i></p>
                            <p>￥356.00</p>
                          </div>
                        </f7-link>
                      </li>-->
                  </ul>
              </f7-swiper-slide>
              <f7-swiper-slide>
                 <!--<img src="../../assets/homebar.png" alt="">-->
                 	<div>
                    <f7-link>
                    <p>{{newclass22.name}}</p>
                    <p>{{newclass22.area}}·{{newclass22.buyno}}人正在学习</p>
                    <p><i class="iconfont icon-xingxing"></i><i class="iconfont icon-xingxing"></i><i class="iconfont icon-xingxing"></i><i class="iconfont icon-xingxing"></i><i class="iconfont icon-xingxing"></i></p>
                    <p>￥{{newclass22.discount_price}}.00</p>
                    </f7-link>
                  </div>
                  <ul>
                      <li class="clearfix link" v-for="newclass in newclass2">
                        <f7-link>
                          <span></span>
                          <div>
                            <p>{{newclass.name}}</p>
                            <p>{{newclass.area}}·{{newclass.buyno}}人正在学习 <i class="iconfont icon-xingxing"></i><i class="iconfont icon-xingxing"></i><i class="iconfont icon-xingxing"></i><i class="iconfont icon-xingxing"></i><i class="iconfont icon-xingxing"></i></p>
                            <p>￥{{newclass.discount_price}}.00</p>
                          </div>
                        </f7-link>
                      </li>
                      </ul>
              </f7-swiper-slide>

            </f7-swiper>
        </div>
        <div class="midlist midTime ">
           <h3><i></i> 限时抢购 <f7-link>更多 <i class="iconfont icon-you"></i></f7-link></h3>
            <f7-swiper pagination >
              <f7-swiper-slide>
                  <div>
                    <f7-link>
                    <p>{{limitclass11.name}}</p>
                    <p>{{limitclass11.area}}·{{limitclass11.buyno}}人正在学习</p>
                    <p><i class="iconfont icon-xingxing"></i><i class="iconfont icon-xingxing"></i><i class="iconfont icon-xingxing"></i><i class="iconfont icon-xingxing"></i><i class="iconfont icon-xingxing"></i></p>
                    <p>￥{{limitclass11.discount_price}}.00 <span><i>24</i> 时 <i>30</i> 分 <i>30</i> 秒</span></p>
                    </f7-link>
                  </div>
                  <ul>
                      <li class="clearfix link" v-for="limit in limitclass1">
                        <f7-link>
                          <span></span>
                          <div>
                            <p>{{limit.name}}</p>
                            <p>{{limit.area}}·{{limit.buyno}}人正在学习 <i class="iconfont icon-xingxing"></i><i class="iconfont icon-xingxing"></i><i class="iconfont icon-xingxing"></i><i class="iconfont icon-xingxing"></i><i class="iconfont icon-xingxing"></i></p>
                            <p>￥{{limit.discount_price}}.00 <span><i>24</i> 时 <i>30</i> 分 <i>30</i> 秒</span></p>
                          </div>
                        </f7-link>
                      </li>
                      <!--<li class="clearfix link">
                        <f7-link>
                          <span></span>
                          <div>
                            <p>浙江2018年教师招聘教育心理学二期回放</p>
                            <p>国版·354人正在学习 <i class="iconfont icon-xingxing"></i><i class="iconfont icon-xingxing"></i><i class="iconfont icon-xingxing"></i><i class="iconfont icon-xingxing"></i><i class="iconfont icon-xingxing"></i></p>
                            <p>￥356.00 <span><i>24</i> 时 <i>30</i> 分 <i>30</i> 秒</span></p>
                          </div>
                        </f7-link>
                      </li>
                      <li class="clearfix link">
                        <f7-link>
                          <span></span>
                          <div>
                            <p>浙江2018年教师招聘教育心理学二期回放</p>
                            <p>国版·354人正在学习 <i class="iconfont icon-xingxing"></i><i class="iconfont icon-xingxing"></i><i class="iconfont icon-xingxing"></i><i class="iconfont icon-xingxing"></i><i class="iconfont icon-xingxing"></i></p>
                            <p>￥356.00 <span><i>24</i> 时 <i>30</i> 分 <i>30</i> 秒</span></p>
                          </div>
                        </f7-link>
                      </li>-->
                  </ul>
              </f7-swiper-slide>
              <f7-swiper-slide>
                 <div>
                    <f7-link>
                    <p>{{limitclass22.name}}</p>
                    <p>{{limitclass22.area}}·{{limitclass22.buyno}}人正在学习</p>
                    <p><i class="iconfont icon-xingxing"></i><i class="iconfont icon-xingxing"></i><i class="iconfont icon-xingxing"></i><i class="iconfont icon-xingxing"></i><i class="iconfont icon-xingxing"></i></p>
                    <p>￥{{limitclass22.discount_price}}.00 <span><i>24</i> 时 <i>30</i> 分 <i>30</i> 秒</span></p>
                    </f7-link>
                  </div>
                  <ul>
                      <li class="clearfix link" v-for="limit in limitclass2">
                        <f7-link>
                          <span></span>
                          <div>
                            <p>{{limit.name}}</p>
                            <p>{{limit.area}}·{{limit.buyno}}人正在学习 <i class="iconfont icon-xingxing"></i><i class="iconfont icon-xingxing"></i><i class="iconfont icon-xingxing"></i><i class="iconfont icon-xingxing"></i><i class="iconfont icon-xingxing"></i></p>
                            <p>￥{{limit.discount_price}}.00 <span><i>24</i> 时 <i>30</i> 分 <i>30</i> 秒</span></p>
                          </div>
                        </f7-link>
                      </li>
                      </ul>
              </f7-swiper-slide>

            </f7-swiper>
        </div>
        <div class="midlist midAnalyze ">
           <h3><i></i> 考情分析<f7-link href="/examinationAnalysis/">更多 <i class="iconfont icon-you"></i></f7-link></h3>
            <f7-swiper pagination >
              <f7-swiper-slide>
                  <ul>
                      <li class="clearfix link" v-for="condition in condition1">
                        <f7-link>
                          <span></span>
                          <div>
                            <p>{{condition.file_name}}</p>
                            <p><i>新</i>  {{condition.create_person}} &nbsp;&nbsp;{{timestampToTime(condition.create_time)}}</p>
                          </div>
                        </f7-link>
                      </li>
                      <!--<li class="clearfix link">
                        <f7-link>
                          <span></span>
                          <div>
                            <p>浙江2018年教师招聘教育心理学二期回放</p>
                            <p><i>新</i>  中国招教网 &nbsp;&nbsp;2018/13/30</p>
                          </div>
                        </f7-link>
                      </li>
                      <li class="clearfix link">
                        <f7-link>
                          <span></span>
                          <div>
                            <p>浙江2018年教师招聘教育心理学二期回放</p>
                            <p><i>新</i>  中国招教网 &nbsp;&nbsp;2018/13/30</p>
                          </div>
                        </f7-link>
                      </li>-->
                  </ul>
              </f7-swiper-slide>
              <f7-swiper-slide>
                 <!--<img src="../../assets/homebar.png" alt="">-->
                 	<ul>
                      <li class="clearfix link" v-for="condition in condition2">
                        <f7-link>
                          <span></span>
                          <div>
                            <p>{{condition.file_name}}</p>
                            <p><i>新</i>  {{condition.create_person}} &nbsp;&nbsp;{{timestampToTime(condition.create_time)}}</p>
                          </div>
                        </f7-link>
                      </li>
                      </ul>
              </f7-swiper-slide>

            </f7-swiper>
        </div>
         <div class="midlist midTopic ">
           <h3><i></i> 推荐题库<f7-link href="/questionBank/">更多 <i class="iconfont icon-you"></i></f7-link></h3>
            <f7-swiper pagination >
              <f7-swiper-slide>
                  <ul>
                      <li class="clearfix link">
                        <f7-link>
                          <div>
                            <p>2017年上半年中学综合素质真题及答案解析</p>
                            <p>试试手气，马上开始做题</p>
                          </div>
                        </f7-link>
                      </li>
                      <li class="clearfix link">
                        <f7-link>
                          <div>
                            <p>2017年上半年中学综合素质真题及答案解析</p>
                            <p>试试手气，马上开始做题</p>
                          </div>
                        </f7-link>
                      </li>
                      <li class="clearfix link">
                        <f7-link>
                          <div>
                            <p>2017年上半年中学综合素质真题及答案解析</p>
                            <p>试试手气，马上开始做题</p>
                          </div>
                        </f7-link>
                      </li>
                      <li class="clearfix link">
                        <f7-link>
                          <div>
                            <p>2017年上半年中学综合素质真题及答案解析</p>
                            <p>试试手气，马上开始做题</p>
                          </div>
                        </f7-link>
                      </li>
                      <li class="clearfix link">
                        <f7-link>
                          <div>
                            <p>2017年上半年中学综合素质真题及答案解析</p>
                            <p>试试手气，马上开始做题</p>
                          </div>
                        </f7-link>
                      </li>
                  </ul>
              </f7-swiper-slide>
              <f7-swiper-slide>
                 <img src="../../assets/homebar.png" alt="">
              </f7-swiper-slide>

            </f7-swiper>
        </div>
        <div class="midlist midLink">
               <h3><i></i> 猜你喜欢</h3>
                  <div>
                    <f7-link>
                    <p>2018年综合素质现场直播</p>
                    <p>国版·354人正在学习</p>
                    <p><i class="iconfont icon-xingxing"></i><i class="iconfont icon-xingxing"></i><i class="iconfont icon-xingxing"></i><i class="iconfont icon-xingxing"></i><i class="iconfont icon-xingxing"></i></p>
                    <p>￥4886.00</p>
                    </f7-link>
                  </div>
                  <ul>
                      <li class="clearfix link">
                        <f7-link>
                          <span></span>
                          <div>
                            <p>浙江2018年教师招聘教育心理学二期回放</p>
                            <p>国版·354人正在学习 <i class="iconfont icon-xingxing"></i><i class="iconfont icon-xingxing"></i><i class="iconfont icon-xingxing"></i><i class="iconfont icon-xingxing"></i><i class="iconfont icon-xingxing"></i></p>
                            <p>￥356.00</p>
                          </div>
                        </f7-link>
                      </li>
                      <li class="clearfix link">
                        <f7-link>
                          <span></span>
                          <div>
                            <p>浙江2018年教师招聘教育心理学二期回放</p>
                            <p>国版·354人正在学习 <i class="iconfont icon-xingxing"></i><i class="iconfont icon-xingxing"></i><i class="iconfont icon-xingxing"></i><i class="iconfont icon-xingxing"></i><i class="iconfont icon-xingxing"></i></p>
                            <p>￥356.00</p>
                          </div>
                        </f7-link>
                      </li>
                      <li class="clearfix link">
                        <f7-link>
                          <span></span>
                          <div>
                            <p>浙江2018年教师招聘教育心理学二期回放</p>
                            <p>国版·354人正在学习 <i class="iconfont icon-xingxing"></i><i class="iconfont icon-xingxing"></i><i class="iconfont icon-xingxing"></i><i class="iconfont icon-xingxing"></i><i class="iconfont icon-xingxing"></i></p>
                            <p>￥356.00</p>
                          </div>
                        </f7-link>
                      </li>
                  </ul>
                  <div>
                    <f7-link>
                    <p>2018年综合素质现场直播</p>
                    <p>国版·354人正在学习</p>
                    <p><i class="iconfont icon-xingxing"></i><i class="iconfont icon-xingxing"></i><i class="iconfont icon-xingxing"></i><i class="iconfont icon-xingxing"></i><i class="iconfont icon-xingxing"></i></p>
                    <p>￥4886.00</p>
                    </f7-link>
                  </div>
                  <ul>
                      <li class="clearfix link">
                        <f7-link>
                          <span></span>
                          <div>
                            <p>浙江2018年教师招聘教育心理学二期回放</p>
                            <p>国版·354人正在学习 <i class="iconfont icon-xingxing"></i><i class="iconfont icon-xingxing"></i><i class="iconfont icon-xingxing"></i><i class="iconfont icon-xingxing"></i><i class="iconfont icon-xingxing"></i></p>
                            <p>￥356.00</p>
                          </div>
                        </f7-link>
                      </li>
                      <li class="clearfix link">
                        <f7-link>
                          <span></span>
                          <div>
                            <p>浙江2018年教师招聘教育心理学二期回放</p>
                            <p>国版·354人正在学习 <i class="iconfont icon-xingxing"></i><i class="iconfont icon-xingxing"></i><i class="iconfont icon-xingxing"></i><i class="iconfont icon-xingxing"></i><i class="iconfont icon-xingxing"></i></p>
                            <p>￥356.00</p>
                          </div>
                        </f7-link>
                      </li>
                      <li class="clearfix link">
                        <f7-link>
                          <span></span>
                          <div>
                            <p>浙江2018年教师招聘教育心理学二期回放</p>
                            <p>国版·354人正在学习 <i class="iconfont icon-xingxing"></i><i class="iconfont icon-xingxing"></i><i class="iconfont icon-xingxing"></i><i class="iconfont icon-xingxing"></i><i class="iconfont icon-xingxing"></i></p>
                            <p>￥356.00</p>
                          </div>
                        </f7-link>
                      </li>
                  </ul>

        </div>
      </div>

  </f7-page>
</template>
<script>
export default {

  data: function() {
    return {
    	recommend1:"",
    	recommend2:"",
    	recommend11:"",
    	recommend22:"",
    	limitclass1:"",
    	limitclass11:"",
    	limitclass2:"",
    	limitclass22:"",
    	newclass1:"",
    	newclass11:"",
    	newclass2:"",
    	newclass22:"",
    	condition1:"",
    	condition2:"",
    	Topactive:1,
    	recommendtype:"",
    	limittype:""
    };
  },
  methods: {

  	timestampToTime:function (timestamp){
        var date = new Date(timestamp);
        var Y = date.getFullYear() + '/';
        var M = (date.getMonth()+1 < 10 ? '0'+(date.getMonth()+1) : date.getMonth()+1) + '/';
        var D = date.getDate() < 10 ? '0'+date.getDate() : date.getDate();
        return Y+M+D;
   },



  	randerClass:function()
  	{
  		let url="http://192.168.0.120:8080/shiro_test";





  //最新课程渲染1

        this.$http.get(url+"/sx1211courseAdmin/listJson",{
  		params:{
  			exam_type:this.recommendtype,
  			page:1,
  			limit:4
  		}
            }).then(function(res){
                //console.log(res.data.data)
                this.newclass11=res.data.data[0];


                res.data.data.splice(0,1);
                 this.newclass1=res.data.data;
                 //console.log(res.data.data)

            },function(res){
                console.log(res.status);
            })
  	//最新课程渲染2

            this.$http.get(url+"/sx1211courseAdmin/listJson",{
  		params:{
  			exam_type:this.recommendtype,
  			page:1,
  			limit:4
  		}
            }).then(function(res){
                //console.log(res.data.data)
                this.newclass22=res.data.data[0];


                res.data.data.splice(0,1);
                 this.newclass2=res.data.data;
                // console.log(res.data.data)

            },function(res){
                console.log(res.status);
            })








  		//推荐课程渲染1
  	this.$http.get(url+"/sx1211courseAdmin/recommend",{
  		params:{
  			type:this.recommendtype,
  			page:1,
  			limit:4
  		}
            }).then(function(res){
                //console.log(res.data.data)
                this.recommend11=res.data.data[0];

                //console.log(this.recommend11)
                res.data.data.splice(0,1);
                 this.recommend1=res.data.data;
                 //console.log(res.data.data)

            },function(res){
                console.log(res.status);
            })
            //推荐课程渲染2
            this.$http.get(url+"/sx1211courseAdmin/recommend",{
  		params:{
  			type:this.recommendtype,
  			page:1,
  			limit:4
  		}
            }).then(function(res){
                //console.log(res.data.data)
                this.recommend22=res.data.data[0];
                res.data.data.splice(0,1);
                 this.recommend2=res.data.data;
                 //console.log(res.data.data)
            },function(res){
                console.log(res.status);
            })
           //限时课程渲染1
        this.$http.get(url+"/flashsale/sale",{
  		params:{
  			type:this.limittype,
  			page:1,
  			limit:4
  		}
            }).then(function(res){
                //console.log(res.data.data)
                this.limitclass11=res.data.data[0];

                //console.log(this.limitclass11)
                res.data.data.splice(0,1);
                 this.limitclass1=res.data.data;
                 //console.log(res.data.data)

            },function(res){
                console.log(res.status);
            })
          //限时课程渲染2
            this.$http.get(url+"/flashsale/sale",{
  		params:{
  			type:this.limittype,
  			page:1,
  			limit:4
  		}
            }).then(function(res){
                //console.log(res.data.data)
                this.limitclass22=res.data.data[0];

                //console.log(this.limitclass22)
                res.data.data.splice(0,1);
                 this.limitclass2=res.data.data;
                // console.log(res.data.data)

            },function(res){
                console.log(res.status);
            })



  	}
  },

  //监听课程切换
  watch: {
       Topactive(newTopactive, oldTopactive) {
             //console.log(newTopactive, oldTopactive);
             if(newTopactive==1){
             	this.recommendtype=121100302;
             	this.limittype=35202001;
             	this.randerClass();
             }
             else if(newTopactive==2){
             	this.recommendtype=121100301;
             	this.limittype=35202002;

             	this.randerClass();
             }
             else if(newTopactive==3){
             	this.recommendtype=121100303;
             	this.limittype=35202003;

             	this.randerClass();
             }
       }
   },



  created:function(){
  	let url="http://192.168.0.120:8080/shiro_test"


  	//最新课程渲染1

        this.$http.get(url+"/sx1211courseAdmin/listJson",{
  		params:{
  			exam_type:121100302,
  			page:1,
  			limit:4
  		}
            }).then(function(res){
                //console.log(res.data.data)
                this.newclass11=res.data.data[0];


                res.data.data.splice(0,1);
                 this.newclass1=res.data.data;
                 //console.log(res.data.data)

            },function(res){
                console.log(res.status);
            })
  	//最新课程渲染2

            this.$http.get(url+"/sx1211courseAdmin/listJson",{
  		params:{
  			exam_type:121100302,
  			page:1,
  			limit:4
  		}
            }).then(function(res){
                //console.log(res.data.data)
                this.newclass22=res.data.data[0];


                res.data.data.splice(0,1);
                 this.newclass2=res.data.data;
                // console.log(res.data.data)

            },function(res){
                console.log(res.status);
            })




  	//推荐课程渲染1
  	this.$http.get(url+"/sx1211courseAdmin/recommend",{
  		params:{
  			type:121100302,
  			page:1,
  			limit:4
  		}
            }).then(function(res){
                //console.log(res.data.data)
                this.recommend11=res.data.data[0];

                //console.log(this.recommend11)
                res.data.data.splice(0,1);
                 this.recommend1=res.data.data;
                 //console.log(res.data.data)

            },function(res){
                console.log(res.status);
            })
            //推荐课程渲染2
            this.$http.get(url+"/sx1211courseAdmin/recommend",{
  		params:{
  			type:121100302,
  			page:1,
  			limit:4
  		}
            }).then(function(res){
                //console.log(res.data.data)
                this.recommend22=res.data.data[0];
                res.data.data.splice(0,1);
                 this.recommend2=res.data.data;
                 //console.log(res.data.data)
            },function(res){
                console.log(res.status);
            })


        //限时课程渲染1
        this.$http.get(url+"/flashsale/sale",{
  		params:{
  			type:35202001,
  			page:1,
  			limit:4
  		}
            }).then(function(res){
                //console.log(res.data.data)
                this.limitclass11=res.data.data[0];

                //console.log(this.limitclass11)
                res.data.data.splice(0,1);
                 this.limitclass1=res.data.data;
                 //console.log(res.data.data)

            },function(res){
                console.log(res.status);
            })
          //限时课程渲染2
            this.$http.get(url+"/flashsale/sale",{
  		params:{
  			type:35202001,
  			page:1,
  			limit:4
  		}
            }).then(function(res){
                //console.log(res.data.data)
                this.limitclass22=res.data.data[0];

                //console.log(this.limitclass22)
                res.data.data.splice(0,1);
                 this.limitclass2=res.data.data;
                // console.log(res.data.data)

            },function(res){
                console.log(res.status);
            })

    //考情分析列表

    //考情分析列表渲染1
        this.$http.get(url+"/examcondition/list",{
  		params:{
  			page:1,
  			limit:4
  		}
            }).then(function(res){
                //console.log(res.data.data)
                this.condition1=res.data.data;



            },function(res){
                console.log(res.status);
            })
             //考情分析列表渲染2
        this.$http.get(url+"/examcondition/list",{
  		params:{
  			page:2,
  			limit:4
  		}
            }).then(function(res){
                //console.log(res.data.data)
                this.condition2=res.data.data;



            },function(res){
                console.log(res.status);
            })

  }
};
</script>
<style lang="less">
.navbar {
  background-color: #fff !important;
  .navbar-inner {
    background-color: #fff  ;
    z-index: 10;
    .iconfont{
      color: #000;
      font-size: 20px;
    }
    .icon-zuo {
      color: #000;
      font-size: 24px;
    }
    .title{
      font-weight: 400;
    }
    .lf {
      span {
        font-family: "PingFang-SC-Regular";
        font-size: 16px;
        color: #999999;
        padding-right: 10px;
        position: relative;
      }
      .active {
        color: #000;
      }
      .active::before {
        content: " ";
        position: absolute;
        width: 30%;
        height: 3px;
        background-image: linear-gradient(#fd2d44, #fd2d44),
          linear-gradient(#fd2d44, #fd2d44);
        background-blend-mode: normal, normal;
        border-radius: 3px;
        bottom: -5px;
        left: 50%;
        transform: translateX(-50%);
      }
    }
    .rt {
      min-width: 75px;
      display: block;
      > a {
        display: inline-block;
        width: 50%;
        float: left;
        padding-left: 10px;
        .iconfont {
          color: #333;
        }
      }
    }
  }
}
.toolbar {
  height: 50px !important;
  .link{
    position: relative;
    width: 20%;
    >span{
      width: 22px;
      height: 22px;
      background-color: #000;
      position: absolute;
      top: 2px;
    }
    >p{
      font-family: "PingFang-SC-Regular";
      font-size: 12px;
      color: #666666;
      position: absolute;
      bottom: 0;
      line-height: 1;
    }
  }
}
.page-content {
  // padding-bottom: 50px !important;
}
.home {
  .page-content {
    .top {
      background-color: #fff;
      .swiper-container {
        .swiper-wrapper {
          .swiper-slide {
            padding: 8px 0;
            img {
              width: 100%;
            }
          }
        }
        .swiper-pagination-bullets {
          bottom: -4px;
          .swiper-pagination-bullet {
            width: 6px;
            height: 6px;
          }
          .swiper-pagination-bullet-active {
            width: 12px;
            background-image: linear-gradient(#fd2d44, #fd2d44),
              linear-gradient(#fd2d44, #fd2d44);
            background-blend-mode: normal, normal;
            box-shadow: 0px 0px 5px 0px rgba(253, 45, 68, 0.5);
            border-radius: 4px;
          }
        }
      }
      .seek {
        text-align: center;
        padding: 6px 0;
        .link {
          width: 80%;
          height: 30px;
          background-color: #f5f5f5;
          border-radius: 15px;
          font-family: "PingFang-SC-Regular";
          font-size: 14px;
          color: #cccccc;
          > .iconfont {
            margin-right: 10px;
          }
        }
      }
    }
    .mid {
      padding: 24px 0;
      .midtop {
        .row {
          .col-20 {
            text-align: center;
            .link {
              display: block;
              color: #000;
              > span {
                display: inline-block;
                width: 50px;
                height: 50px;
                background-color: #000;
              }
              > p {
                margin: 0;
              }
            }
          }
        }
      }
      > .link {
        width: 100%;
        margin-top: 20px;
        > img {
          width: 100%;
        }
      }
      .midlist {
        padding: 0 12px;
        padding-top: 20px;
        padding-bottom: 15px;
        h3 {
          margin: 0;
          position: relative;
          padding-left: 25px;
          font-family: "PingFang-SC-Medium";
          font-size: 18px;
          color: #333333;
          font-weight: 400;
          > i {
            position: absolute;
            left: 0;
            top: 50%;
            transform: translateY(-50%);
            width: 18px;
            height: 18px;
            background-color: #000;
          }
          > .link {
            float: right;
            font-family: "HiraginoSansGB-W3";
            font-size: 12px;
            color: #999999;
            line-height: 25px;
            > .iconfont {
              font-size: 12px;
            }
          }
        }
        .swiper-container {
          .swiper-wrapper {
            .swiper-slide {
              padding: 10px 0;
              > div {
                height: 126px;
                width: 100%;
                text-align: center;
                background: url(../../assets/hometui.png) no-repeat center
                  center;
                border-radius: 10px;
                > .link {
                  width: 100%;
                  height: 100%;
                  display: block;
                  padding-top: 15px;
                  > p {
                    font-family: "PingFang-SC-Regular";
                    letter-spacing: 1px;
                    color: #ffffff;
                    margin: 0;
                    font-size: 12px;
                    line-height: 20px;
                  }
                  > p:nth-of-type(1) {
                    font-size: 18px;
                    line-height: 36px;
                    display: inline-block;
                    border-top: 1px solid #fff;
                    border-bottom: 1px solid #fff;
                  }
                  > p:nth-of-type(2) {
                    margin-top: 5px;
                  }
                  > p:nth-of-type(4) {
                    color: #fcff00;
                  }
                }
              }
              > ul {
                > li {
                  display: block;
                  padding: 10px 0;
                  min-height: 106px;
                  > .link {
                    display: block;

                    > span {
                      width: 120px;
                      height: 86px;
                      background: url(https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1519301525135&di=dd2fed90de9f2622da9e2c6f51d3888b&imgtype=0&src=http%3A%2F%2F5b0988e595225.cdn.sohucs.com%2Fimages%2F20170922%2Fca414a2cf9b34ec49aff78f350b0ec87.gif) no-repeat center center;
                      border-radius: 12px;
                      position: absolute;
                      left: 0;
                      top: 0;
                    }
                    > div {
                      vertical-align: top;
                      width: 100%;
                      float: left;
                      padding-left: 130px;
                      > p {
                        font-family: "PingFang-SC-Regular";
                        font-size: 16px;
                        color: #333333;
                      }
                      > p:nth-of-type(2) {
                        font-family: "MicrosoftYaHei";
                        font-size: 12px;
                        line-height: 24px;
                        color: #999999;
                        > i {
                          color: #fb7b59;
                          float: right;
                          margin-left: 3px;
                        }
                      }
                      > p:nth-of-type(3) {
                        font-family: "MicrosoftYaHei";
                        font-size: 12px;
                        line-height: 24px;
                        color: #fd2d44;
                        >span{
                          float: right;
                          color: #333333;
                          >i{
                            color: #fd2d44;
                            margin: 0;
                          }
                        }
                      }
                    }
                  }
                }
              }
            }
          }
          .swiper-pagination-bullets {
            bottom: -2px;
            .swiper-pagination-bullet {
              width: 6px;
              height: 6px;
            }
            .swiper-pagination-bullet-active {
              width: 12px;
              background-image: linear-gradient(#fd2d44, #fd2d44),
                linear-gradient(#fd2d44, #fd2d44);
              background-blend-mode: normal, normal;
              box-shadow: 0px 0px 5px 0px rgba(253, 45, 68, 0.5);
              border-radius: 4px;
            }
          }
        }
      }
      .midNew {
        background-color: #fff;
      }
      .midTime {
        h3 {
          > span {
            font-family: "PingFang-SC-Regular";
            font-size: 12px;
            letter-spacing: -1px;
            color: #333333;
            > i {
              font-family: "PingFang-SC-Medium";
              font-size: 12px;
              letter-spacing: -1px;
              color: #fd2d44;
            }
          }
        }
      }
      .midAnalyze {
        background-color: #fff;
        .swiper-container {
          .swiper-wrapper {
            .swiper-slide {
              > ul {
                > li {
                  > .link {
                    > span {
                      left: auto;
                      right: 0;
                    }
                    > div {
                      padding: 0;
                      padding-right: 130px;
                      > p:nth-of-type(2) {
                        line-height: 50px;
                        font-size: 14px;
                        > i {
                          float: none;
                          font-size: 12px;
                          border: 1px solid #fd5d32;
                          border-radius: 5px;
                          padding: 0 2px;
                        }
                      }
                    }
                  }
                }
              }
            }
          }
        }
      }
      .midTopic {
        .swiper-container {
          .swiper-wrapper {
            .swiper-slide {
              > ul {
                > li {
                  min-height: 70px;
                  > .link {
                    > div {
                      padding: 0;
                      > p:nth-of-type(2) {
                        font-size: 12px;
                        line-height: 28px;
                      }
                    }
                  }
                }
              }
            }
          }
        }
      }
      .midLink {
        background-color: #fff;
        h3 {
          text-align: center;
          display: inline-block;
          left: 50%;
          transform: translateX(-50%);
          > i {
            position: absolute;
          }
        }
        > div {
          height: 126px;
          width: 100%;
          text-align: center;
          background: url(../../assets/hometui.png) no-repeat center center;
          border-radius: 10px;
          margin-top: 10px;
          > .link {
            width: 100%;
            height: 100%;
            display: block;
            padding-top: 15px;
            > p {
              font-family: "PingFang-SC-Regular";
              letter-spacing: 1px;
              color: #ffffff;
              margin: 0;
              font-size: 12px;
              line-height: 20px;
            }
            > p:nth-of-type(1) {
              font-size: 18px;
              line-height: 36px;
              display: inline-block;
              border-top: 1px solid #fff;
              border-bottom: 1px solid #fff;
            }
            > p:nth-of-type(2) {
              margin-top: 5px;
            }
            > p:nth-of-type(4) {
              color: #fcff00;
            }
          }
        }
        > ul {
          > li {
            display: block;
            padding: 10px 0;
            min-height: 106px;
            > .link {
              display: block;

              > span {
                width: 120px;
                height: 86px;
                background: url(https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1519301525135&di=dd2fed90de9f2622da9e2c6f51d3888b&imgtype=0&src=http%3A%2F%2F5b0988e595225.cdn.sohucs.com%2Fimages%2F20170922%2Fca414a2cf9b34ec49aff78f350b0ec87.gif) no-repeat center center;
                border-radius: 12px;
                position: absolute;
                left: 0;
                top: 0;
              }
              > div {
                vertical-align: top;
                width: 100%;
                float: left;
                padding-left: 130px;
                > p {
                  font-family: "PingFang-SC-Regular";
                  font-size: 16px;
                  color: #333333;
                }
                > p:nth-of-type(2) {
                  font-family: "MicrosoftYaHei";
                  font-size: 12px;
                  line-height: 24px;
                  color: #999999;
                  > i {
                    color: #fb7b59;
                    float: right;
                    margin-left: 3px;
                  }
                }
                > p:nth-of-type(3) {
                  font-family: "MicrosoftYaHei";
                  font-size: 12px;
                  line-height: 24px;
                  color: #fd2d44;

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


