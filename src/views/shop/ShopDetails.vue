<template>
	<!--商品详情-->
	<div class="details" v-if="goods" >
		<div class="top">
			<i class="iconfont icon-fanhui" @click="$router.go(-1)"></i>
			<i class="iconfont icon-tubiaolunkuo-" @click="$router.push({path:'/ShoppingCart'})"></i>
		</div>
		<div class="content" @scroll="scroll()">
			<div class="swiper" v-if="goods.main_picture">
				<swiper :options="swiperOption">
					<!-- slides -->
					<swiper-slide>
						<div class="imgBox squarePhoto" :style="'background-image: url('+goods.main_picture+');'"></div>
					</swiper-slide>
					<div class="swiper-pagination" slot="pagination"></div>
				</swiper>
			</div>
			<div>
				<p><span>￥</span>{{goods.price}}</p>
				<span>价格:<span>￥{{goods.price+goods.goods_discount}}</span></span>
				<h5>{{goods.goods_name}}</h5>
				<div style="display: none;">
					<span>快递：0.00</span>
					<span>月销量545件</span>
					<span>广东广州</span>
				</div>
			</div>
			<div class="content_sel" style="display: none;">
				<div>
					<div>
						<span>促销</span>
						<p><span>积分</span>购买可得84积分</p>
					</div>
					<i class="iconfont icon-jiantou1"></i>
				</div>
				<h1></h1>
				<div>
					<div>
						<span>服务</span>
						<div>
							<span>正品保证</span>
							<span>急速退货</span>
							<span>急速退款</span>
							<span>七天退换</span>
						</div>
					</div>
					<i class="iconfont icon-jiantou1"></i>
				</div>
			</div>
			<div class="content_sel">
				<div @click="isCommodity=true">
					<div>
						<span>选择</span>
						<p>请选择颜色分类/尺码</p>
					</div>
					<i class="iconfont icon-jiantou1"></i>
				</div>
				<h1></h1>
				<div>
					<div>
						<span>参数</span>
						<p>品牌/尺码</p>
					</div>
					<i class="iconfont icon-jiantou1"></i>
				</div>
			</div>
			<div class="content_comment" v-if="goodsAppraiseNum">
				<div>
					<span>商品评价({{goodsAppraiseNum}})</span>
					<p @click="jump()">查看全部<i class="iconfont icon-jiantou1"></i></p>
				</div>
				<div>
					<div><img :src="goodsAppraise[0].buyer_logo" /></div>
					<p>{{goodsAppraise[0].buyer_nick}}</p>
				</div>
				<p class="onlyTwoLine">{{goodsAppraise[0].appraise_remark}}</p>
				<span>{{appraiseTime}} 颜色分类:{{goodsAppraise[0].spec_colour}};尺码:{{goodsAppraise[0].spec_size}}</span>
			</div>

			<!--推荐-->

			<div class="content_Recommended" style="display: none;">
				<p>看了又看</p>
				<div>
					<div>
						<div class="squarePhoto" style="background-image: url(//img.alicdn.com/bao/uploaded/O1CN010rLhXe1LEKL2VsRE6_!!0-item_pic.jpg_320x320Q50s50.jpg_.webp);"></div>
						<div>
							<h6 class="onlyTwoLine">2019春装新款连衣裙中长款棉麻水墨两件套装裙 背心连衣裙+开衫2</h6>
							<span>￥399</span>
							<p>￥109</p>
						</div>
					</div>
					<div>
						<div class="squarePhoto" style="background-image: url(//img.alicdn.com/bao/uploaded/O1CN01i3WcNS1LEKKmQtuX0_!!0-item_pic.jpg_320x320Q50s50.jpg_.webp);"></div>
						<div>
							<h6 class="onlyTwoLine">2019春装新款连衣裙中长款棉麻水墨两件套装裙 背心连衣裙+开衫2</h6>
							<span>￥399</span>
							<p>￥109</p>
						</div>
					</div>
					<div>
						<div class="squarePhoto" style="background-image: url(//img.alicdn.com/bao/uploaded/O1CN014we2HQ1LEKKnkxdMj_!!0-item_pic.jpg_320x320Q50s50.jpg_.webp);"></div>
						<div>
							<h6 class="onlyTwoLine">2019春装新款连衣裙中长款棉麻水墨两件套装裙 背心连衣裙+开衫2</h6>
							<span>￥399</span>
							<p>￥109</p>
						</div>
					</div>
				</div>
			</div>
		</div>

		<div class="bottom">
			<div @click="PageJump()">
				<span class="iconfont icon-dianpu"></span>
				<p>店铺</p>
			</div>
			<div>
				<span class="iconfont icon-liaotian2"></span>
				<p>客服</p>
			</div>
			<div @click="$router.push({path:'/Hint',query:{shop_id:$route.query.shop_id,goods_id:$route.query.goods_id}})">
				<span class="iconfont icon-aixin"></span>
				<p>收藏</p>
			</div>
			<span style="background-color: #FF9500;" @click="$router.push({path:'/Hint',query:{shop_id:$route.query.shop_id,goods_id:$route.query.goods_id}})">加入购物车</span>
			<span style="background-color: #FF0036;" @click="$router.push({path:'/Hint',query:{shop_id:$route.query.shop_id,goods_id:$route.query.goods_id}})">立即购买</span>
		</div>

		<!--商品-->
		<div class="commodity" v-if="isCommodity">
			<div>
				<div>
					<div class="squarePhoto" :style="'background-image:url('+goods.main_picture+') ;'"></div>
					<div>
						<div @click="isCommodity=false">
							<i class="iconfont icon-fork"></i>
						</div>
						<span>￥{{goods.price}}</span>
						<p>库存{{goods.goods_number}}件</p>
						<h5>选择尺码,颜色分类</h5>
					</div>
				</div>
				<div class="commodity_sel">
					<h5>尺码</h5>
					<ul>
						<li :class="commoditySel_1==index?'commodity_active':''" @click="commoditySel_1=index" v-for="(val,index) in goods.goods_spec" v-if="val.spec_size">{{val.spec_size}}</li>
					</ul>
				</div>
				<div class="commodity_sel">
					<h5>颜色分类</h5>
					<ul>
						<li :class="commoditySel_2==index?'commodity_active':''" @click="commoditySel_2=index" v-for="(val,index) in goods.goods_spec" v-if="val.spec_colour">
							<!--<div><img src="../../assets/img/6.jpg"/></div>-->
							<span>{{val.spec_colour}}</span>
						</li>
					</ul>
				</div>
				<div class="quantity">
					<h5>购买数量</h5>
					<div>
						<i @click="Quantity>1?Quantity--:Quantity=1">-</i>
						<span>{{Quantity}}</span>
						<i @click="Quantity++">+</i>
					</div>
				</div>
				<div class="commodity_bottom">
					<div>
						<div @click="$router.push({path:'/Hint',query:{shop_id:$route.query.shop_id,goods_id:$route.query.goods_id}})">
							<i class="iconfont icon-aixin"></i>
							<p>收藏</p>
						</div>
					</div>
					<div>
						<div>
							<i class="iconfont icon-liaotian2"></i>
							<p>联系</p>
						</div>
					</div>
					<span style="background: #FF5101;" @click="$router.push({path:'/Hint',query:{shop_id:$route.query.shop_id,goods_id:$route.query.goods_id}})">加入购物车</span>
					<span style="background: red;" @click="$router.push({path:'/Hint',query:{shop_id:$route.query.shop_id,goods_id:$route.query.goods_id}})">立即购买</span>
				</div>
			</div>
		</div>
	</div>
</template>

<script>
	export default {
		data() {
			return {
				isCommodity: false,
				Quantity: 1,
				commoditySel_1: 1,
				commoditySel_2: 1,
				goods: "",
				goodsAppraiseNum: 0,
				goodsAppraise: [],
				appraiseTime:"",
				swiperOption: {
					observer: true,
					observeSlideChildren: true,
					autoplay: true,
					loop: true,
					pagination: {
						el: '.swiper-pagination',
					}
				}
			}
		},
		methods: {
			getData() {
				this.$require.get("http://wechat.poso2o.com/OpenGoodsManage.htm?Act=info", {
					params: {
						app_openid: "wx9accca47f099b162",
						shop_id: this.$route.query.shop_id,
						goods_id: this.$route.query.goods_id
					}
				}).then((res) => {
					console.log(res);
					this.goods = res.data.data.goods;
					console.log(this.goods)
					this.goodsAppraiseNum = res.data.data.goodsAppraiseNum;
					this.goodsAppraise = res.data.data.goodsAppraise;
					var newData = new Date(this.goodsAppraise[0].build_time);
					this.appraiseTime = newData.getFullYear()+"-"+(newData.getMonth()+1)+"-"+newData.getDate();
				}).catch(err => {
					console.log(err);
				})
			},
			jump(){
				var str =  JSON.stringify(this.goodsAppraise);
				this.$router.push({
					path:"/ShopComment",
					query:{
						str
					}
				})
			},
			scroll(){
				var t = document.querySelector(".content").scrollTop;
				console.log(t)
				var dom = document.querySelector(".top");
				var arr = dom.querySelectorAll("i");
				if(t>10){
					dom.style.background = "rgba(255,255,255,1)"
					for(let i=0;i<arr.length;i++){
						arr[i].style.background = "none";
						arr[i].style.color = "black";
						arr[i].style.fontSize = "24px";
					}
				}
				else{
					dom.style.background = "rgba(255,255,255,0)"
					for(let i=0;i<arr.length;i++){
						arr[i].style.background = "rgba(0, 0, 0, 0.6)";
						arr[i].style.color = "white";
						arr[i].style.fontSize = "16px";
					}
				}
			},
			PageJump(){
				window.location.href = 'http://wechattest.poso2o.com/wxshop/shop_template/index_13824597674.jsp?shop_id='+this.shop_id+'&app_from=live_h5'
			}
		},
		created() {
			this.getData();
		},
		mounted(){
			
		}
	}
</script>

<style scoped="scoped" lang="scss">
	.commodity_active {
		border-color: #ff5101 !important;
		color: #ff5101;
		background-color: #FFFFFF !important;
	}
	
	.top {
		position: absolute;
		top: 0;
		left: 0;
		width: 100%;
		display: flex;
		justify-content: space-between;
		box-sizing: border-box;
		padding:0.5vh 4vw;
		z-index: 100;
		transition:all 1s;
		background: rgba(255,255,255,0);
		>i {
			font-size: 16px;
			width: 8vw;
			height: 8vw;
			background: rgba(0, 0, 0, 0.6);
			color: white;
			text-align: center;
			line-height: 8vw;
			border-radius: 50%;
		}
	}
	
	.content_Recommended {
		margin: 1vh 0;
		height: 30vh;
		background: white;
		padding: 1vh 2vw;
		>p {
			font-size: 14px;
			margin: 0.5vh 0;
		}
		>div {
			display: flex;
			justify-content: space-around;
			>div {
				width: 30%;
				>div:nth-of-type(1) {
					height: 16vh;
				}
				>div:nth-of-type(2) {
					>h6 {
						font-size: 12px;
						font-weight: 100;
					}
					>p {
						font-size: 12px;
					}
					>span {
						font-size: 12px;
						text-decoration: line-through;
						color: #ccc;
					}
				}
			}
		}
	}
	
	.content_comment {
		margin: 1vh 0;
		height: 18vh;
		background: white;
		padding: 1vh 2vw;
		>div:nth-of-type(1) {
			display: flex;
			justify-content: space-between;
			>span {
				color: #666;
			}
			>p {
				color: #FF0036;
			}
		}
		>div:nth-of-type(2) {
			margin: 0.5vh 0;
			display: flex;
			align-items: center;
			>div {
				width: 8vw;
				height: 8vw;
				overflow: hidden;
				border-radius: 50%;
				>img {
					width: 100%;
					height: 100%;
				}
			}
			>p {
				margin-left: 2vw;
				font-size: 12px;
				color: #666;
			}
		}
		>p {
			font-size: 14px;
		}
		>span {
			font-size: 12px;
			color: #999;
			margin-top: 1vh;
		}
	}
	
	.content_sel {
		margin-top: 1vh;
		background: white;
		box-sizing: border-box;
		>h1 {
			border-bottom: 1px solid #DDDDDD;
		}
		>div {
			padding: 3vh 2vw;
			height: 4vh;
			display: flex;
			justify-content: space-between;
			align-items: center;
			>i {
				color: #ccc;
			}
			>div {
				display: flex;
				align-items: center;
				>span {
					color: #999;
					font-size: 12px;
					margin-right: 2vw;
				}
				>p {
					font-size: 14px;
					>span {
						transform: scale(.7);
						display: inline-block;
						border: 1px solid #FFF5F7;
						background: #FFF5F7;
						border-radius: 2px;
						padding: 1px 3px;
						font-size: 14px;
						line-height: 1;
						color: #FF0036;
					}
				}
				>div {
					font-size: 14px;
					>span {
						margin: 0 1vw;
					}
				}
			}
		}
	}
	
	.content {
		height: 92vh;
		overflow: hidden;
		overflow-y: scroll;
		>div:nth-of-type(2) {
			background: white;
			padding: 1vh 2vw;
			>p {
				color: #FF0036;
				font-size: 24px;
				>span:nth-of-type(1) {
					font-size: 18px;
				}
				>span:nth-of-type(2) {
					vertical-align: 16%;
					margin: 0 2vw;
					background-color: #fb6878;
					color: #FFF;
					font-size: 12px;
					padding: 1px 2px;
				}
			}
			>span {
				color: #888;
				font-size: 12px;
				margin: 0 1vw;
				>span {
					text-decoration: line-through;
				}
			}
			>h5 {
				font-weight: 100;
				margin: 0 1vw;
				font-size: 14px;
				color: #051B28;
			}
			>div {
				display: flex;
				justify-content: space-between;
				margin: 1vh 1vw;
				font-size: 12px;
				color: #999;
			}
		}
	}
	
	.bottom {
		position: absolute;
		width: 100%;
		height: 8vh;
		background: white;
		bottom: 0;
		left: 0;
		display: flex;
		align-items: center;
		>div {
			color: #999;
			width: 20vw;
			display: inline-block;
			text-align: center;
			>i {
				font-size: 20px;
			}
			>p {
				text-align: center;
				width: 100%;
				font-size: 12px;
			}
		}
		>span {
			width: 30vw;
			display: inline-block;
			height: 8vh;
			line-height: 8vh;
			text-align: center;
			color: white;
		}
	}
	
	.swiper {
		width: 100%;
		position: relative;
	}
	
	.imgBox {
		width: 100vw;
		height: 60vh;
	}
	
	.details {
		width: 100%;
		height: 100%;
		position: relative;
		background: aliceblue;
	}
	
	.quantity {
		box-sizing: border-box;
		padding: 2vh 4vw;
		width: 96%;
		margin: 0 auto;
		border-bottom: 1px solid #f5f5f5;
		display: flex;
		justify-content: space-between;
		align-items: center;
		>div {
			display: flex;
			align-items: center;
			>i,
			>span {
				display: inline-block;
				background: #f5f5f5;
				width: 8vw;
				height: 8vw;
				text-align: center;
				line-height: 8vw;
				font-style: normal;
				border-radius: 1vw;
			}
			>span {
				margin: 0 1vw;
				border-radius: 0;
			}
		}
	}
	
	.commodity_bottom {
		width: 100vw;
		height: 8vh;
		display: flex;
		position: absolute;
		bottom: 0;
		left: 0;
		background: #f5f5f5;
		align-items: center;
		>div {
			width: 20vw;
			display: inline-flex;
			height: 8vh;
			align-items: center;
			justify-content: center;
			align-items: center;
			>div {
				text-align: center;
				>i {
					font-size: 20px;
				}
				>p {
					text-align: center;
					width: 100%;
					font-size: 12px;
				}
			}
		}
		>span {
			width: 30vw;
			display: inline-block;
			height: 8vh;
			line-height: 8vh;
			text-align: center;
			color: white;
		}
	}
	
	.commodity {
		z-index: 110;
		width: 100vw;
		height: 100vh;
		background: rgba(0, 0, 0, 0.6);
		position: absolute;
		top: 0;
		left: 0;
		>div {
			position: relative;
			height: 70vh;
			width: 100%;
			background: white;
			position: absolute;
			left: 0;
			bottom: 0;
			>div:nth-of-type(1) {
				box-sizing: border-box;
				padding: 2vh 4vw;
				display: flex;
				width: 100%;
				>div:nth-of-type(1) {
					width: 34vw;
					height: 34vw;
					overflow: hidden;
					border-radius: 2vw;
					>img {
						width: 100%;
						height: 100%;
					}
				}
				>div:nth-of-type(2) {
					width: 58vw;
					box-sizing: border-box;
					padding: 1vh 0;
					padding-left: 4vw;
					>div {
						text-align: right;
						>i {
							display: inline-block;
							width: 5vw;
							height: 5vw;
							border: 1px solid black;
							border-radius: 50%;
							font-size: 12px;
							text-align: center;
							line-height: 5vw;
						}
					}
					>span {
						color: #ff5101;
						font-weight: bold;
					}
					>p {
						font-size: 12px;
						color: #b2b2b2;
						margin: 2vh 0;
					}
					>h5 {
						font-weight: 100;
					}
				}
			}
			.commodity_sel {
				box-sizing: border-box;
				padding: 2vh 4vw;
				width: 96%;
				margin: 0 auto;
				border-bottom: 1px solid #f5f5f5;
				overflow: hidden;
				overflow-x: scroll;
				>ul {
					display: flex;
					margin-top: 2vh;
					>li {
						box-sizing: border-box;
						border: 1px solid transparent;
						margin-right: 4vw;
						min-width: 20vw;
						min-height: 5vh;
						text-align: center;
						padding: 0.5vh 2vw;
						background: #f5f5f5;
						border-radius: 2vw;
						display: flex;
						justify-content: center;
						align-items: center;
						>div {
							width: 6vw;
							height: 6vw;
							margin-right: 2vw;
							overflow: hidden;
							border-radius: 1vw;
							>img {
								width: 100%;
								height: 100%;
							}
						}
						>span {
							font-size: 12px;
						}
					}
				}
			}
		}
	}
</style>