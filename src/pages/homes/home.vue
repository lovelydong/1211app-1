<template>
	<f7-page class="home">
		<f7-navbar sliding>
			<div class="lf">
				<span :class="Topactive==1?'active':''" @click="Topactive=1">教师招聘</span>
				<span :class="Topactive==2?'active':''" @click="Topactive=2">教师资格证</span>
				<span :class="Topactive==3?'active':''" @click="Topactive=3">特岗教师</span>
			</div>
			<div class="rt">
				<f7-link @click=qidai()>
					<i class="iconfont icon-saoyisao"></i>
				</f7-link>

				<f7-link href="/news">
					<i class="iconfont icon-xiaoxi"></i>
				</f7-link>
			</div>

		</f7-navbar>
		<f7-toolbar>
			<f7-link href="/home" :reload-all="true" :animate="true"><span class="toolbarlog1"></span>
				<p style="color: #fd2d44;">首页</p>
			</f7-link>
			<f7-link href="/nLiveStreaming" :reload-all="true" :animate="true"><span class="toolbarlog2"></span>
				<p>直播</p>
			</f7-link>
			<f7-link href="/recordedBroadcast" :reload-all="true" :animate="true"><span class="toolbarlog3"></span>
				<p>录播</p>
			</f7-link>

			<f7-link :href="'/questionBankhome?classtype='+limittype" :reload-all="true" :animate="true"><span class="toolbarlog4"></span>
				<p>题库</p>
			</f7-link>
			<f7-link href="/my" :reload-all="true" :animate="true"><span class="toolbarlog5"></span>
				<p>我的</p>
			</f7-link>
		</f7-toolbar>
		<div class="top">
			<f7-swiper pagination>
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
				<f7-link href="/search/"><i class="iconfont icon-sousuo"></i>请输入想要搜索内容</f7-link>
			</div>
		</div>
		<div class="mid">
			<div class="midtop">
				<div class="row">

					<div class="col-20">
						<f7-link href="/recommended/"><span></span>
							<p>推荐课程</p>
						</f7-link>
					</div>
					<div class="col-20">
						<f7-link href="/newmore"><span></span>
							<p>最新课程</p>
						</f7-link>
					</div>
					<div class="col-20">
						<f7-link href="/giftPacks"><span></span>
							<p>大礼包</p>
						</f7-link>
					</div>
					<div class="col-20">
						<f7-link href="/examinationAnalysis/"><span></span>
							<p>考情分析</p>
						</f7-link>
					</div>

					<div class="col-20"><f7-link :href="'/moduleExam?classtype=null&qtype=666'"><span></span><p>推荐题库</p></f7-link></div>


				</div>
			</div>
			<f7-link href="/xsmore"> <img src="../../assets/homeQiang.png" alt=""> </f7-link>
			<div class="midlist midRecommend">
				<h3><i class="lefth31"></i> 推荐课程 <f7-link href="/recommended/">更多 <i class="iconfont icon-you"></i></f7-link></h3>

				<f7-swiper pagination>
					<f7-swiper-slide>
						<div v-if="recommend11">
							<f7-link @click="$f7router.navigate('/recommendedParticulars?id='+recommend11.id )" >
								<p>{{recommend11.name}}</p>
								<p>{{recommend11.area}}·{{recommend11.buyno}}人正在学习</p>
								<p><i class="iconfont icon-xingxing"></i><i class="iconfont icon-xingxing"></i><i class="iconfont icon-xingxing"></i><i class="iconfont icon-xingxing"></i><i class="iconfont icon-xingxing"></i></p>
								<p>￥{{recommend11.discount_price}}</p>
							</f7-link>
						</div>
						<ul>
							<li v-if="recommend1" class="clearfix link" v-for="cl in recommend1">
								<f7-link  @click="$f7router.navigate('/recommendedParticulars?id='+cl.id )" >
									<span :style="{backgroundImage: 'url(' + url + cl.img + ')' }"></span>
									<div>
										<p>{{cl.name}}</p>
										<p>{{cl.area}}·{{cl.buyno}}人正在学习 <i class="iconfont icon-xingxing"></i><i class="iconfont icon-xingxing"></i><i class="iconfont icon-xingxing"></i><i class="iconfont icon-xingxing"></i><i class="iconfont icon-xingxing"></i></p>
										<p>￥{{cl.discount_price}}</p>
									</div>
								</f7-link>
							</li>
							<!--<li class="clearfix link">
                        <f7-link>
                          <span></span>
                          <div>
                            <p>浙江2018年教师招聘教育心理学二期回放</p>
                            <p>国版·354人正在学习 <i class="iconfont icon-xingxing"></i><i class="iconfont icon-xingxing"></i><i class="iconfont icon-xingxing"></i><i class="iconfont icon-xingxing"></i><i class="iconfont icon-xingxing"></i></p>
                            <p>￥356</p>
                          </div>
                        </f7-link>
                      </li>
                      <li class="clearfix link">
                        <f7-link>
                          <span></span>
                          <div>
                            <p>浙江2018年教师招聘教育心理学二期回放</p>
                            <p>国版·354人正在学习 <i class="iconfont icon-xingxing"></i><i class="iconfont icon-xingxing"></i><i class="iconfont icon-xingxing"></i><i class="iconfont icon-xingxing"></i><i class="iconfont icon-xingxing"></i></p>
                            <p>￥356</p>
                          </div>
                        </f7-link>
                      </li>-->
						</ul>
					</f7-swiper-slide>
					<f7-swiper-slide>
						<div v-if="recommend22">
							<f7-link  @click="$f7router.navigate('/recommendedParticulars?id='+recommend22.id )"  >
								<p>{{recommend22.name}}</p>
								<p>{{recommend22.area}}·{{recommend22.buyno}}人正在学习</p>
								<p><i class="iconfont icon-xingxing"></i><i class="iconfont icon-xingxing"></i><i class="iconfont icon-xingxing"></i><i class="iconfont icon-xingxing"></i><i class="iconfont icon-xingxing"></i></p>
								<p>￥{{recommend22.discount_price}}</p>
							</f7-link>
						</div>
						<ul>
							<li v-if="recommend2" class="clearfix link" v-for="cl in recommend2">
								<f7-link @click="$f7router.navigate('/recommendedParticulars?id='+cl.id )"  >
									<span :style="{backgroundImage: 'url(' + url + cl.img + ')' }"></span>
									<div>
										<p>{{cl.name}}</p>
										<p>{{cl.area}}·{{cl.buyno}}人正在学习 <i class="iconfont icon-xingxing"></i><i class="iconfont icon-xingxing"></i><i class="iconfont icon-xingxing"></i><i class="iconfont icon-xingxing"></i><i class="iconfont icon-xingxing"></i></p>
										<p>￥{{cl.discount_price}}</p>
									</div>
								</f7-link>
							</li>
						</ul>
						<!--<img src="../../assets/homebar.png" alt="">-->
					</f7-swiper-slide>

				</f7-swiper>

			</div>
			<div class="midlist midNew" >
				<h3><i class="lefth32"></i> 最新课程 <f7-link href="/newmore/">更多 <i class="iconfont icon-you"></i></f7-link></h3>

				<f7-swiper pagination>
					<f7-swiper-slide >
						<div v-if="newclass11">
							<f7-link @click="$f7router.navigate('/recommendedParticulars?id='+newclass11.id )"  >
								<p>{{newclass11.name}}</p>
								<p>{{newclass11.area}}·{{newclass11.buyno}}人正在学习</p>
								<p><i class="iconfont icon-xingxing"></i><i class="iconfont icon-xingxing"></i><i class="iconfont icon-xingxing"></i><i class="iconfont icon-xingxing"></i><i class="iconfont icon-xingxing"></i></p>
								<p>￥{{newclass11.discount_price}}</p>
							</f7-link>
						</div>
						<ul>
							<li v-if="newclass1" class="clearfix link" v-for="newclass in newclass1">
								<f7-link  @click="$f7router.navigate('/recommendedParticulars?id='+newclass.id )" >
									<span :style="{backgroundImage: 'url(' + url + newclass.img + ')' }"></span>
									<div>
										<p>{{newclass.name}}</p>
										<p>{{newclass.area}}·{{newclass.buyno}}人正在学习 <i class="iconfont icon-xingxing"></i><i class="iconfont icon-xingxing"></i><i class="iconfont icon-xingxing"></i><i class="iconfont icon-xingxing"></i><i class="iconfont icon-xingxing"></i></p>
										<p>￥{{newclass.discount_price}}</p>
									</div>
								</f7-link>
							</li>
							<!--<li class="clearfix link">
                        <f7-link>
                          <span></span>
                          <div>
                            <p>浙江2018年教师招聘教育心理学二期回放</p>
                            <p>国版·354人正在学习 <i class="iconfont icon-xingxing"></i><i class="iconfont icon-xingxing"></i><i class="iconfont icon-xingxing"></i><i class="iconfont icon-xingxing"></i><i class="iconfont icon-xingxing"></i></p>
                            <p>￥356</p>
                          </div>
                        </f7-link>
                      </li>
                      <li class="clearfix link">
                        <f7-link>
                          <span></span>
                          <div>
                            <p>浙江2018年教师招聘教育心理学二期回放</p>
                            <p>国版·354人正在学习 <i class="iconfont icon-xingxing"></i><i class="iconfont icon-xingxing"></i><i class="iconfont icon-xingxing"></i><i class="iconfont icon-xingxing"></i><i class="iconfont icon-xingxing"></i></p>
                            <p>￥356</p>
                          </div>
                        </f7-link>
                      </li>-->
						</ul>
					</f7-swiper-slide>
					<f7-swiper-slide>
						<!--<img src="../../assets/homebar.png" alt="">-->
						<div v-if="newclass22">
							<f7-link  @click="$f7router.navigate('/recommendedParticulars?id='+newclass22.id )" >
								<p>{{newclass22.name}}</p>
								<p>{{newclass22.area}}·{{newclass22.buyno}}人正在学习</p>
								<p><i class="iconfont icon-xingxing"></i><i class="iconfont icon-xingxing"></i><i class="iconfont icon-xingxing"></i><i class="iconfont icon-xingxing"></i><i class="iconfont icon-xingxing"></i></p>
								<p>￥{{newclass22.discount_price}}</p>
							</f7-link>
						</div>
						<ul>
							<li v-if="newclass2" class="clearfix link" v-for="newclass in newclass2">
								<f7-link @click="$f7router.navigate('/recommendedParticulars?id='+newclass.id )" >
									<span :style="{backgroundImage: 'url(' + url + newclass.img + ')' }"></span>
									<div>
										<p>{{newclass.name}}</p>
										<p>{{newclass.area}}·{{newclass.buyno}}人正在学习 <i class="iconfont icon-xingxing"></i><i class="iconfont icon-xingxing"></i><i class="iconfont icon-xingxing"></i><i class="iconfont icon-xingxing"></i><i class="iconfont icon-xingxing"></i></p>
										<p>￥{{newclass.discount_price}}</p>
									</div>
								</f7-link>
							</li>
						</ul>
					</f7-swiper-slide>

				</f7-swiper>
			</div>
			<div class="midlist midTime ">
				<h3><i class="lefth33"></i> 限时抢购 <f7-link href="/xsmore">更多 <i class="iconfont icon-you"></i></f7-link></h3>
				<f7-swiper pagination>
					<f7-swiper-slide>
						<div v-if="limitclass11">
							<f7-link @click="$f7router.navigate('/recommendedParticulars?id='+limitclass11.id+'&isxs=1')">
								<p>{{limitclass11.name}}</p>
								<p>{{limitclass11.area}}·{{limitclass11.buyno}}人正在学习</p>
								<p><i class="iconfont icon-xingxing"></i><i class="iconfont icon-xingxing"></i><i class="iconfont icon-xingxing"></i><i class="iconfont icon-xingxing"></i><i class="iconfont icon-xingxing"></i></p>

								<p>￥{{limitclass11.discount_price}} <span>{{arr[limitclass11.id]}}</span></p>

							</f7-link>
						</div>
						<ul>
							<li v-if="limitclass1" class="clearfix link" v-for="limit in limitclass1" >
								<f7-link @click="$f7router.navigate('/recommendedParticulars?id='+limit.id+'&isxs=1')" >
									<span :style="{backgroundImage: 'url(' + url + limit.img + ')' }"></span>
									<div>
										<p>{{limit.name}}</p>
										<p>{{limit.area}}·{{limit.buyno}}人正在学习 <i class="iconfont icon-xingxing"></i><i class="iconfont icon-xingxing"></i><i class="iconfont icon-xingxing"></i><i class="iconfont icon-xingxing"></i><i class="iconfont icon-xingxing"></i></p>

										<p>￥{{limit.discount_price}} <span>{{arr[limit.id]}}</span></p>

									</div>
								</f7-link>
							</li>
							<!--<li class="clearfix link">
                        <f7-link>
                          <span></span>
                          <div>
                            <p>浙江2018年教师招聘教育心理学二期回放</p>
                            <p>国版·354人正在学习 <i class="iconfont icon-xingxing"></i><i class="iconfont icon-xingxing"></i><i class="iconfont icon-xingxing"></i><i class="iconfont icon-xingxing"></i><i class="iconfont icon-xingxing"></i></p>
                            <p>￥356 <span><i>24</i> 时 <i>30</i> 分 <i>30</i> 秒</span></p>
                          </div>
                        </f7-link>
                      </li>
                      <li class="clearfix link">
                        <f7-link>
                          <span></span>
                          <div>
                            <p>浙江2018年教师招聘教育心理学二期回放</p>
                            <p>国版·354人正在学习 <i class="iconfont icon-xingxing"></i><i class="iconfont icon-xingxing"></i><i class="iconfont icon-xingxing"></i><i class="iconfont icon-xingxing"></i><i class="iconfont icon-xingxing"></i></p>
                            <p>￥356 <span><i>24</i> 时 <i>30</i> 分 <i>30</i> 秒</span></p>
                          </div>
                        </f7-link>
                      </li>-->
						</ul>
					</f7-swiper-slide>
					<f7-swiper-slide>
						<div v-if="limitclass22">
							<f7-link  @click="$f7router.navigate('/recommendedParticulars?id='+limitclass22.id+'&isxs=1')"  >
								<p>{{limitclass22.name}}</p>
								<p>{{limitclass22.area}}·{{limitclass22.buyno}}人正在学习</p>
								<p><i class="iconfont icon-xingxing"></i><i class="iconfont icon-xingxing"></i><i class="iconfont icon-xingxing"></i><i class="iconfont icon-xingxing"></i><i class="iconfont icon-xingxing"></i></p>
								<p>￥{{limitclass22.discount_price}} <span>{{arr[limitclass22.id]}}</span></p>
							</f7-link>
						</div>
						<ul>
							<li v-if="limitclass2" class="clearfix link" v-for="limit in limitclass2">
								<f7-link @click="$f7router.navigate('/recommendedParticulars?id='+limit.id+'&isxs=1')"    >
									<span :style="{backgroundImage: 'url(' + url + limit.img + ')' }"></span>
									<div>
										<p>{{limit.name}}</p>
										<p>{{limit.area}}·{{limit.buyno}}人正在学习 <i class="iconfont icon-xingxing"></i><i class="iconfont icon-xingxing"></i><i class="iconfont icon-xingxing"></i><i class="iconfont icon-xingxing"></i><i class="iconfont icon-xingxing"></i></p>
										<p>￥{{limit.discount_price}} <span>{{arr[limit.id]}}</span></p>
									</div>
								</f7-link>
							</li>
						</ul>
					</f7-swiper-slide>

				</f7-swiper>
			</div>
			<div class="midlist midAnalyze ">
				<h3><i class="lefth34"></i> 考情分析<f7-link href="/examinationAnalysis/">更多 <i class="iconfont icon-you"></i></f7-link></h3>
				<f7-swiper pagination>
					<f7-swiper-slide>
						<ul>
							<li v-if="condition1" class="clearfix link" v-for="condition in condition1">
								<f7-link @click="$f7router.navigate('/examinationParticulars?id='+condition.id )"  >
									<span  :style="{backgroundImage: 'url(' + url + condition.img + ')' }"></span>
									<div>
										<p>{{condition.file_name}}</p>
										<p><i>新</i> {{condition.wfrom}} &nbsp;&nbsp;{{condition.create_time/1000 | moment("YYYY-MM-DD")}}</p>
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
							<li v-if="condition2" class="clearfix link" v-for="condition in condition2">
								<f7-link  @click="$f7router.navigate('/examinationParticulars?id='+condition.id )"  >
									<span :style="{backgroundImage: 'url(' + url + condition.img + ')' }"></span>
									<div>
										<p>{{condition.file_name}}</p>
										<p><i>新</i> {{condition.wfrom}} &nbsp;&nbsp;{{condition.create_time/1000 | moment("YYYY-MM-DD")}}</p>
									</div>
								</f7-link>
							</li>
						</ul>
					</f7-swiper-slide>

				</f7-swiper>
			</div>

			<div class="midlist midTopic ">

           <h3><i class="lefth35"></i> 推荐题库<f7-link href="/moduleExam?classtype=null&qtype=666">更多 <i class="iconfont icon-you"></i></f7-link></h3>
            <f7-swiper pagination >
              <f7-swiper-slide>
                  <ul>
                      <li v-if="tjtkrecommend" class="clearfix link" v-for="item in tjtkrecommend" :key="item.id">
                        <f7-link @click="$f7router.navigate('/questionBankParticulars?id='+item.id+'&qtype=null')">
                          <div>
                            <p>{{item.name}}</p>
                            <p>试试手气，马上开始做题</p>
                          </div>
                        </f7-link>
                      </li>

                  </ul>
              </f7-swiper-slide>
              <f7-swiper-slide>
               <ul>
                      <li v-if="tjtkrecommend1" class="clearfix link" v-for="item in tjtkrecommend1" :key="item.id">
                        <f7-link @click="$f7router.navigate('/questionBankParticulars?id='+item.id+'&qtype=null')">
                          <div>
                            <p>{{item.name}}</p>
                            <p>试试手气，马上开始做题</p>
                          </div>
                        </f7-link>
                      </li>

                      </ul>
              </f7-swiper-slide>

            </f7-swiper>



        </div>

			<div class="midlist midLink">
				<h3><i class="lefth36"></i> 猜你喜欢</h3>
				<div v-if="glike11">
					<f7-link  @click="$f7router.navigate('/recommendedParticulars?id='+glike11.id )"  >
						<p>{{glike11.name}}</p>
						<p>{{glike11.area}}·{{glike11.buyno}}人正在学习</p>
						<p><i class="iconfont icon-xingxing"></i><i class="iconfont icon-xingxing"></i><i class="iconfont icon-xingxing"></i><i class="iconfont icon-xingxing"></i><i class="iconfont icon-xingxing"></i></p>
						<p>￥{{glike11.discount_price}}</p>
					</f7-link>
				</div>
				<ul>
					<li v-if="glike1" class="clearfix link" v-for="like in glike1">
						<f7-link @click="$f7router.navigate('/recommendedParticulars?id='+like.id )" >
							<span :style="{backgroundImage: 'url(' + url + like.img + ')' }"></span>
							<div>
								<p>{{like.name}}</p>
								<p>{{like.area}}·{{like.buyno}}人正在学习 <i class="iconfont icon-xingxing"></i><i class="iconfont icon-xingxing"></i><i class="iconfont icon-xingxing"></i><i class="iconfont icon-xingxing"></i><i class="iconfont icon-xingxing"></i></p>
								<p>￥{{like.discount_price}}</p>
							</div>
						</f7-link>
					</li>
					<!--<li class="clearfix link">
                        <f7-link>
                          <span></span>
                          <div>
                            <p>浙江2018年教师招聘教育心理学二期回放</p>
                            <p>国版·354人正在学习 <i class="iconfont icon-xingxing"></i><i class="iconfont icon-xingxing"></i><i class="iconfont icon-xingxing"></i><i class="iconfont icon-xingxing"></i><i class="iconfont icon-xingxing"></i></p>
                            <p>￥356</p>
                          </div>
                        </f7-link>
                      </li>
                      <li class="clearfix link">
                        <f7-link>
                          <span></span>
                          <div>
                            <p>浙江2018年教师招聘教育心理学二期回放</p>
                            <p>国版·354人正在学习 <i class="iconfont icon-xingxing"></i><i class="iconfont icon-xingxing"></i><i class="iconfont icon-xingxing"></i><i class="iconfont icon-xingxing"></i><i class="iconfont icon-xingxing"></i></p>
                            <p>￥356</p>
                          </div>
                        </f7-link>
                      </li>-->
				</ul>

				<div v-if="glike22">
					<f7-link @click="$f7router.navigate('/recommendedParticulars?id='+glike22.id )"  >
						<p>{{glike22.name}}</p>
						<p>{{glike22.area}}·{{glike22.buyno}}人正在学习</p>
						<p><i class="iconfont icon-xingxing"></i><i class="iconfont icon-xingxing"></i><i class="iconfont icon-xingxing"></i><i class="iconfont icon-xingxing"></i><i class="iconfont icon-xingxing"></i></p>
						<p>￥{{glike22.discount_price}}</p>
					</f7-link>
				</div>
				<ul>
					<li v-if="glike2" class="clearfix link" v-for="like in glike2">
						<f7-link  @click="$f7router.navigate('/recommendedParticulars?id='+like.id )">
							<span  :style="{backgroundImage: 'url(' + url + like.img + ')' }"></span>
							<div>
								<p>{{like.name}}</p>
								<p>{{like.area}}·{{like.buyno}}人正在学习 <i class="iconfont icon-xingxing"></i><i class="iconfont icon-xingxing"></i><i class="iconfont icon-xingxing"></i><i class="iconfont icon-xingxing"></i><i class="iconfont icon-xingxing"></i></p>
								<p>￥{{like.discount_price}}</p>
							</div>
						</f7-link>
					</li>
					<!-- <li class="clearfix link">
                        <f7-link>
                          <span></span>
                          <div>
                            <p>浙江2018年教师招聘教育心理学二期回放</p>
                            <p>国版·354人正在学习 <i class="iconfont icon-xingxing"></i><i class="iconfont icon-xingxing"></i><i class="iconfont icon-xingxing"></i><i class="iconfont icon-xingxing"></i><i class="iconfont icon-xingxing"></i></p>
                            <p>￥356</p>
                          </div>
                        </f7-link>
                      </li>
                      <li class="clearfix link">
                        <f7-link>
                          <span></span>
                          <div>
                            <p>浙江2018年教师招聘教育心理学二期回放</p>
                            <p>国版·354人正在学习 <i class="iconfont icon-xingxing"></i><i class="iconfont icon-xingxing"></i><i class="iconfont icon-xingxing"></i><i class="iconfont icon-xingxing"></i><i class="iconfont icon-xingxing"></i></p>
                            <p>￥356</p>
                          </div>
                        </f7-link>
                      </li>-->
				</ul>

			</div>
		</div>

	</f7-page>
</template>
<script>
import Global from "../Global.vue";

export default {
  data: function() {
    return {
      url: "http://39.106.134.125:8080/netschool/",
      recommend1: "",
      recommend2: "",
      recommend11: "",
      recommend22: "",
      limitclass1: "",
      limitclass11: "",
      limitclass2: "",
      limitclass22: "",
      limittime: "",
      xsdaojishi: "11",
      newclass1: "",
      newclass11: "",
      newclass2: "",
      newclass22: "",
      condition1: "",
      condition2: "",
      tiku1: "",
      tiku2: "",
      glike1: "",
      glike11: "",
      glike2: "",
      glike22: "",
      Topactive: 1,
      recommendtype: 121100302,
      limittype: 35202001,
      timer: "",
      tjtkrecommend: [],
      tjtkrecommend1: [],
      arr: []
    };
  },
  methods: {
    Countdown: function(element, index) {
      var that = this;
      let text = "";
      let timer = setInterval(function() {
        var now = new Date().getTime();
        var leftTime = element.end_time - now;
        if (leftTime >= 0) {
          var d = Math.floor(leftTime / 1000 / 60 / 60 / 24);
          var h = Math.floor((leftTime / 1000 / 60 / 60) % 24);
          var m = Math.floor((leftTime / 1000 / 60) % 60);
          var s = Math.floor((leftTime / 1000) % 60);
          //	console.log(666)

          that.$set(
            that.arr,
            element.id,
            d + " 天 " + h + " 时 " + m + " 分 " + s + " 秒"
          );
          // return "<i>"+d+"</i> 天 <i>"+h+"</i> 时 <i>"+m+"</i> 分 <i>"+s+"</i> 秒";
        } else {
          //console.log(777)
          that.$set(that.arr, element.id, "已经结束");
          window.clearInterval(timer);
        }
      }, 800);
    },

    randerClass: function() {
      //最新课程渲染1
      this.$http
        .get(this.url + "/sx1211courseAdmin/listJson", {
          params: {
            exam_type: this.recommendtype,
            page: 1,
            limit: 4
          }
        })
        .then(
          function(res) {
            this.newclass11 = res.data.data[0];
            res.data.data.splice(0, 1);
            this.newclass1 = res.data.data;
          },
          function(res) {
            console.log(res.status);
          }
        );
      //最新课程渲染2
      this.$http
        .get(this.url + "/sx1211courseAdmin/listJson", {
          params: {
            exam_type: this.recommendtype,
            page: 2,
            limit: 4
          }
        })
        .then(
          function(res) {
            //console.log(res.data.data)
            this.newclass22 = res.data.data[0];

            res.data.data.splice(0, 1);
            this.newclass2 = res.data.data;
            // console.log(res.data.data)
          },
          function(res) {
            console.log(res.status);
          }
        );

      //推荐课程渲染1
      this.$http
        .get(this.url + "/sx1211courseAdmin/recommend", {
          params: {
            type: this.recommendtype,
            page: 1,
            limit: 4
          }
        })
        .then(
          function(res) {
            // console.log(res.data.data)
            this.recommend11 = res.data.data[0];

            //console.log(this.recommend11)
            res.data.data.splice(0, 1);
            this.recommend1 = res.data.data;
            //console.log(res.data.data)
          },
          function(res) {
            console.log(res.status);
          }
        );
      //推荐课程渲染2
      this.$http
        .get(this.url + "/sx1211courseAdmin/recommend", {
          params: {
            type: this.recommendtype,
            page: 2,
            limit: 4
          }
        })
        .then(
          function(res) {
            //console.log(res.data.data)
            this.recommend22 = res.data.data[0];
            res.data.data.splice(0, 1);
            this.recommend2 = res.data.data;
            //console.log(res.data.data)
          },
          function(res) {
            console.log(res.status);
          }
        );

      //限时课程渲染1
      this.$http
        .get(this.url + "/flashsale/sale", {
          params: {
            type: this.limittype,
            page: 1,
            limit: 4
          }
        })
        .then(
          function(res) {
            //console.log(res.data.data)
            this.limitclass11 = res.data.data[0];
            /*console.info(res.data.data[0].end_time)*/
            // this.limittime = res.data.data[0].end_time;
            res.data.data.forEach((element, index) => {
              this.Countdown(element, index);
            });
            //console.log(this.limitclass11)
            res.data.data.splice(0, 1);
            this.limitclass1 = res.data.data;
            //console.log(res.data.data)
          },
          function(res) {
            console.log(res.status);
          }
        );
      //限时课程渲染2
      this.$http
        .get(this.url + "/flashsale/sale", {
          params: {
            type: this.limittype,
            page: 2,
            limit: 4
          }
        })
        .then(
          function(res) {
            //console.log(res.data.data)
            this.limitclass22 = res.data.data[0];
            res.data.data.forEach((element, index) => {
              this.Countdown(element, index);
            });
            //console.log(this.limitclass22)
            res.data.data.splice(0, 1);
            this.limitclass2 = res.data.data;
            // console.log(res.data.data)
          },
          function(res) {
            console.log(res.status);
          }
        );

      //推荐题库1
      this.$http
        .get(this.url + "/exambank/jsonlist", {
          params: {
            page: 1,
            limit: 4,
            type: this.Topactive,
            ext1: 1,
            exam_type: null,
            writeorface: null,
            grade: null,
            app_subject: null,
            area: null
          }
        })
        .then(function(res) {
          this.tjtkrecommend = res.body.data;
        });
      //推荐题库2
      this.$http
        .get(this.url + "/exambank/jsonlist", {
          params: {
            page: 2,
            limit: 4,
            type: this.Topactive,
            ext1: 1,
            exam_type: null,
            writeorface: null,
            grade: null,
            app_subject: null,
            area: null
          }
        })
        .then(function(res) {
          this.tjtkrecommend1 = res.body.data;
        });
      //考情分析列表渲染1
      this.$http
        .get(this.url + "/examcondition/applist", {
          params: {
            page: 1,
            limit: 4
          }
        })
        .then(
          function(res) {
            //console.log(res.data.data)
            this.condition1 = res.data.data;
          },
          function(res) {
            console.log(res.status);
          }
        );
      //考情分析列表渲染2
      this.$http
        .get(this.url + "/examcondition/applist", {
          params: {
            page: 2,
            limit: 4
          }
        })
        .then(
          function(res) {
            //console.log(res.data.data)
            this.condition2 = res.data.data;
          },
          function(res) {
            console.log(res.status);
          }
        );

      //猜你喜欢列表渲染1
      this.$http
        .get(this.url + "/sx1211courseAdmin/listJson", {
          params: {
            page: 2,
            limit: 4
          }
        })
        .then(
          function(res) {
            //console.log(res.data.data)
            this.glike11 = res.data.data[0];

            //console.log(this.limitclass11)
            res.data.data.splice(0, 1);
            this.glike1 = res.data.data;
            //console.log(res.data.data)
          },
          function(res) {
            console.log(res.status);
          }
        );
      //猜你喜欢列表渲染2
      this.$http
        .get(this.url + "/sx1211courseAdmin/listJson", {
          params: {
            page:3 ,
            limit: 4
          }
        })
        .then(
          function(res) {
            //console.log(res.data.data)
            this.glike22 = res.data.data[0];

            //console.log(this.limitclass22)
            res.data.data.splice(0, 1);
            this.glike2 = res.data.data;
            // console.log(res.data.data)

          },
          function(res) {
            console.log(res.status);
          }
        );
    },
    qidai:function()
  	{
  		 let toastCenter = this.$f7.toast.create({
              text: "敬请期待！",
              position: "center",
              closeTimeout: 2000
            });
            toastCenter.open();
  	}
  },

  //监听课程切换
  watch: {
    Topactive(newTopactive, oldTopactive) {
      //console.log(newTopactive, oldTopactive);
      window.clearInterval(this.timer);
      if (newTopactive == 1) {
        this.recommendtype = 121100302;
        this.limittype = 35202001;
        Global.limittype = 35202001;
        this.randerClass();
      } else if (newTopactive == 2) {
        this.recommendtype = 121100301;
        this.limittype = 35202002;
        Global.limittype = 35202002;
        this.randerClass();
      } else if (newTopactive == 3) {
        this.recommendtype = 121100303;
        this.limittype = 35202003;
        Global.limittype = 35202003;

        this.randerClass();
      }
    }
  },

  created: function() {
    this.randerClass();
    //验证登录
    this.$http
      .get(this.url + "/personal/loginState", {
        params: {

        }
      })
      .then(
        function(res) {
          console.log(res)
          if(res.body.code != 1){
            this.$f7router.navigate('/login/');
          }
        }
      );
  },
  mounted: function() {}
};
</script>
<style lang="less">
.navbar {
  background-color: #fff !important;
  .navbar-inner {
    background-color: #fff;
    z-index: 10;
    .iconfont {
      color: #000;
      font-size: 20px;
    }
    .icon-zuo {
      color: #000;
      font-size: 24px;
    }
    .title {
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
  .link {
    position: relative;
    width: 20%;
    > span {
      width: 22px;
      height: 22px;
      background-color: #000;
      position: absolute;
      top: 2px;
    }
    > p {
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
  .iconfont {
    font-size: 12px;
  }
  .lefth31 {
    background: url(../../assets/jingling.png) no-repeat -32px -188px;
    background-color: transparent !important;
  }
  .lefth32 {
    background: url(../../assets/jingling.png) no-repeat -51px -514px;
    background-color: transparent !important;
  }
  .lefth33 {
    background: url(../../assets/jingling.png) no-repeat 0px -188px;
    background-color: transparent !important;
  }
  .lefth34 {
    background: url(../../assets/jingling.png) no-repeat -129px -188px;
    background-color: transparent !important;
  }
  .lefth35 {
    background: url(../../assets/jingling.png) no-repeat -66px -188px;
    background-color: transparent !important;
  }
  .lefth36 {
    background: url(../../assets/jingling.png) no-repeat -98px -188px;
    background-color: transparent !important;
  }
  .toolbarlog1 {
    background: url(../../assets/jingling.png) no-repeat -50px -87px;
    background-color: transparent !important;
  }
  .toolbarlog2 {
    background: url(../../assets/jingling.png) no-repeat -116px -137px;
    background-color: transparent !important;
  }
  .toolbarlog3 {
    background: url(../../assets/jingling.png) no-repeat -39px -137px;
    background-color: transparent !important;
  }
  .toolbarlog4 {
    background: url(../../assets/jingling.png) no-repeat -77px -137px;
    background-color: transparent !important;
  }
  .toolbarlog5 {
    background: url(../../assets/jingling.png) no-repeat -155px -137px;
    background-color: transparent !important;
  }
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
                width: 60px;
                height: 60px;
                background: url(../../assets/jingling.png) no-repeat 0 0;
              }
              > p {
                margin: 0;
              }
            }
          }
          .col-20:nth-of-type(1) {
            .link {
              > span {
                background: url(../../assets/jingling.png) no-repeat -256px -1px;
              }
            }
          }
          .col-20:nth-of-type(2) {
            .link {
              > span {
                background: url(../../assets/jingling.png) no-repeat -83px -1px;
              }
            }
          }
          .col-20:nth-of-type(3) {
            .link {
              > span {
                background: url(../../assets/jingling.png) no-repeat -3px -1px;
              }
            }
          }
          .col-20:nth-of-type(4) {
            .link {
              > span {
                background: url(../../assets/jingling.png) no-repeat -169px -1px;
              }
            }
          }
          .col-20:nth-of-type(5) {
            .link {
              > span {
                background: url(../../assets/jingling.png) no-repeat -343px -1px;
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
                      background: url(https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1519301525135&di=dd2fed90de9f2622da9e2c6f51d3888b&imgtype=0&src=http%3A%2F%2F5b0988e595225.cdn.sohucs.com%2Fimages%2F20170922%2Fca414a2cf9b34ec49aff78f350b0ec87.gif)
                        no-repeat center center;
                      background-size: cover;
                      border-radius: 12px;
                      position: absolute;
                      left: 0;
                      top: 0;
                    }
                    > div {
                      vertical-align: top;
                      width: 100%;
                      float: left;
                      padding-left: 128px;
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
                        > span {
                          float: right;
                          color: #333333;
                          > i {
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
                background: url(https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1519301525135&di=dd2fed90de9f2622da9e2c6f51d3888b&imgtype=0&src=http%3A%2F%2F5b0988e595225.cdn.sohucs.com%2Fimages%2F20170922%2Fca414a2cf9b34ec49aff78f350b0ec87.gif)
                  no-repeat center center;
                background-size: cover;
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
