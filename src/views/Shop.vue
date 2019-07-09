<template>
	<div class="Shop">
		<div class="top">
			<i class="iconfont icon-fanhui" @click="$router.go(-1)"></i>
			<input v-model="keywords" @input="getList()" type="text" name="" id="" value="" placeholder="商品" />
		</div>
		
		<!--首页-->
		<!--<div class="content"  >
			<div>
				<swiper :options="swiperOption" >
				    <swiper-slide><img src="../assets/img/1.png"/></swiper-slide>
				    <swiper-slide><img src="../assets/img/1.png"/></swiper-slide>
				    <swiper-slide><img src="../assets/img/1.png"/></swiper-slide>
			  	</swiper>
			</div>
			<div class="tab">
				<ul>
					<li>
						<i class="iconfont icon-ziyuan"></i>
						<p>拼团</p>
					</li>
					<li>
						<i class="iconfont icon-miaosha"></i>
						<p>秒杀</p>
					</li>
					<li>
						<i class="iconfont icon-youhuiquan"></i>
						<p>领劵</p>
					</li>
					<li>
						<i class="iconfont icon-guajiang"></i>
						<p>刮刮乐</p>
					</li>
					<li>
						<i class="iconfont icon-egg"></i>
						<p>砸金蛋</p>
					</li>
				</ul>
			</div>
			<div class="Commodity_1">
				<div>
					<div><img src="../assets/img/3.png"/></div>
					<span>新品</span>
					<p>纯棉T恤</p>
					<span>￥299.00</span>
				</div>
				<div>
					<div><img src="../assets/img/4.png"/></div>
					<span>新品</span>
					<p>纯棉T恤</p>
					<span>￥299.00</span>
				</div>
			</div>
			<div class="Commodity_2">
				<div><img src="../assets/img/4.png"/></div>
				<span>新品</span>
				<p>纯棉T恤</p>
				<span>￥299.00</span>
			</div>
			<div class="Commodity_1">
				<div>
					<div><img src="../assets/img/3.png"/></div>
					<span>新品</span>
					<p>纯棉T恤</p>
					<span>￥299.00</span>
				</div>
				<div>
					<div><img src="../assets/img/4.png"/></div>
					<span>新品</span>
					<p>纯棉T恤</p>
					<span>￥299.00</span>
				</div>
			</div>
			<div class="Commodity_1">
				<div>
					<div><img src="../assets/img/3.png"/></div>
					<span>新品</span>
					<p>纯棉T恤</p>
					<span>￥299.00</span>
				</div>
				<div>
					<div><img src="../assets/img/4.png"/></div>
					<span>新品</span>
					<p>纯棉T恤</p>
					<span>￥299.00</span>
				</div>
			</div>
			<div class="Commodity_2">
				<div><img src="../assets/img/4.png"/></div>
				<span>新品</span>
				<p>纯棉T恤</p>
				<span>￥299.00</span>
			</div>
		</div>-->
		
		<div class="content_shop" v-if="tabBar==1" >
			<div class="content_shop_sel">
				<ul>
					<li @click="orderByName='goods_sale_number';getList();sort=''" :class="orderByName=='goods_sale_number'?'active':''">销量</li>
					<li @click="orderByName='build_time';getList();sort=''" :class="orderByName=='build_time'?'active':''">新品</li>
					<li @click="sort=isSort?'ASC':'DESC';isSort=!isSort;orderByName='';getList()" :class="orderByName==''?'active':''">
						<p>价格</p>
						<div>
							<p class="iconfont icon-shang" :class="sort=='ASC'?'active':'noActive'"></p>
							<p class="iconfont icon-xia" :class="sort=='DESC'?'active':'noActive'"></p>
						</div>
					</li>
					<li>
						<div>
							<i class="iconfont icon-caidan1"></i>
						</div>
						<div>
							<p>筛选</p>
							<i class="iconfont icon-shaixuan"></i>
						</div>
					</li>
				</ul>
			</div>
			<div class="content_shop_list" id="content_shop_list"  @scroll="scroll">
				<div @click="$router.push({path:'/ShopDetails',query:{shop_id:val.shop_id,goods_id:val.goods_id}})" v-for="(val,index) in list">
					<div class="squarePhoto" :style="'background-image:url('+val.main_picture+')'"></div>
					<div>
						<p class="onlyTwoLine">{{val.goods_name}}</p>
						<div>
							<span>￥{{val.price}}</span>
							<span>{{val.goods_sale_number}}人购买</span>
						</div>
					</div>
				</div>
			</div>
		</div>
		<div class="bottom">
			<ul>
				<li @click="PageJump()">
					<i class="iconfont icon-shouye"></i>
					<p>首页</p>
				</li>
				<li  @click="tabBar=1" :class="tabBar==1?'active_bottom':''">
					<i class="iconfont icon-gouwudai"></i>
					<p>商品</p>
				</li>
				<li>
					<i class="iconfont icon-liaotian"></i>
					<p>客服</p>
				</li>
			</ul>
		</div>
		
		<div class="Toast" v-if="isToast">
			<div>
				<i class="iconfont icon-jiazai"></i>
				<p>加载更多</p>
			</div>
		</div>
		
	</div>
</template>

<script>
	export default {
		data(){
			return{
				tabBar:1,
				list:[],
				keywords:"",
				shop_id:this.$route.query.shop_id,
				orderByName:"goods_sale_number",
				isSort:false,
				sort:"",
				page:1,
				isPage:true,
				arr:[],
				isToast:false,
				swiperOption: {
					autoplay:true,
					loop:true,
        		}
			}
		},
		methods:{
			getList(){
				this.$require.get("http://wechat.poso2o.com/OpenGoodsManage.htm?Act=query",{
					params:{
						app_openid:"wx9accca47f099b162",
						shop_id:this.shop_id,
						keywords:this.keywords,
						orderByName:this.orderByName,
						sort:this.sort,
						page:this.page,
					}
				}).then((res)=>{
					this.list = this.arr.concat(res.data.data.list);
					this.arr = [];
					console.log(this.list)
					setTimeout(()=>{
					this.isPage  = true;
						
						this.isToast = false;
					},1000)
					
				}).catch(err=>{
					console.log(err);
				})
			},
			PageJump(){
				window.location.href = 'http://wechattest.poso2o.com/wxshop/shop_template/index_13824597674.jsp?shop_id='+this.shop_id+'&app_from=live_h5'
			},
			scroll(){
				var t = document.querySelector(".content_shop_list").scrollTop;
				if(this.isPage && t>document.querySelector(".content_shop_list").scrollHeight-600){
					this.list.forEach((val)=>{
						this.arr.push(val);
					});
					this.isPage  = false;
					this.page++;
					this.getList();
					this.isToast = true;
				}
			}
		},
		created(){
			this.getList();
		},
		mounted(){

		}
		
	}
</script>

<style lang="scss" scoped="scoped">
	@keyframes move{
		from{transform: rotate(0deg);}
		to{transform:rotate(360deg);}
	}
	.Toast{
		width: 100vw;
		height: 100vh;
		position: fixed;
		top:0;
		left: 0;
		>div{
			width:30vw;
			height: 30vw;
			position: absolute;
			border-radius:4vw ;
			left: 50%;
			top: 50%;
			transform: translate(-50%,-50%);
			background: rgba(0,0,0,0.8);
			color: white;
			display: flex;
			justify-content: center;
			align-content: center;
			flex-wrap:wrap ;
			>i{
				animation: move 1s infinite linear;
			}
			>p{
				margin-top: 1vh;
				width: 100%;
				text-align: center;
			}
		}
	}
	.noActive{
		color: black;
	}
	.active{
		color:#ff4146 ;
	}
	.content{
		width: 100vw;
		height:92vh;
	}
	.content_shop_list{
		width: 100%;
		height: 76vh;
		overflow: hidden;
		overflow-y: scroll;
		>div{
			display: inline-block;
			margin: 0 1vw;
			margin-bottom: 0.5vh;
			width: 48vw;
			height: 38vh;
			border-radius:2vw ;
			background: white;
			overflow: hidden;
			>div:nth-of-type(1){
				width: 100%;
				height:70%;
			}
			>div:nth-of-type(2){
				width: 100%;
				height: 30%;
				display: flex;
				flex-direction:column;
				justify-content: space-between;
				padding:1vh 4vw;
				box-sizing: border-box;
				>p{
					font-size: 14px;
				}
				>div{
					display: flex;
					justify-content: space-between;
					align-items: center;
					>span:nth-of-type(1){
						color: #e2774f;
						font-size: 16px;
					}
					>span:nth-of-type(2){
						font-size: 12px;
						color: #a0a0a0;
					}
				}
			}
		}
	}
	.content_shop_sel{
		width: 100%;
		overflow: hidden;
		height: 7vh;
		background: white;
		margin:0.5vh 0;
		>ul{
			display: flex;
			justify-content:space-around;
			>li{
				height: 7vh;
				text-align: center;
				display: flex;
				align-items: center;
				font-size: 14px;
			}
			>li:nth-of-type(3){
				>p{
					font-size: 14px;
				}
				>div{
					>p{
						font-size: 12px;
					}
				}
			}
			>li:nth-of-type(4){
				i{
					font-size: 24px;
				}
				>div:nth-of-type(1){
					padding-right: 2vw;
				}
				>div:nth-of-type(2){
					border-left:2px solid #eaeaea ;
					padding-left: 2vw;
					display: flex;
					align-items: center;
					>p{
						font-size: 14px;
					}
				}
			}
		}
	}
	.active_bottom{
		>i{
			color: #ff4146;	
		}	
		>p{
			color: #ff4146;				
		}
	}
	.bottom{
		width: 100%;
		height: 8vh;
		position: absolute;
		bottom: 0;
		left: 0;
		background: white;
		>ul{
			width: 100%;
			display: flex;
			height: 8vh;
			align-items: center;
			>li{
				display: inline-block;
				text-align: center;
				width: 33.3333333%;
				>i{
					font-size: 24px;
				}
				>p{
					font-size: 14px;
				}
			}
		}
	}
	.Shop{
		width: 100%;
		height: 100%;
		position: relative;
		background: aliceblue;
	}
	.Commodity_1{
		display: flex;
		justify-content: space-between;
		>div{
			width: 49vw;
			text-align: center;
			>p{
				font-size: 14px;
			}
			>span{
				font-size: 12px;
			}
			>div{
				width: 100%;
				>img{
					width: 100%;
				}
			}
		}
	}
	.Commodity_2{
		width: 100%;
		text-align: center;
		>p{
			font-size: 14px;
		}
		>span{
			font-size: 12px;
		}
		>div{
			width: 100%;
			>img{
				width: 100%;
			}
		}
	}
	.content{
		/*width: 100%;
		overflow: hidden;
		overflow-y: scroll;
		>div:nth-of-type(1){
			width: 100%;
			img{
				width: 100%;
			}
		}*/
	}
	.tab{
		width: 100%;
		height: 10vh;
		>ul{
			width: 100%;
			height: 10vh;
			display: flex;
			align-items: center;
			>li{
				width: 25%;
				text-align: center;
				>i{
					font-size: 30px;
				}
			}
		}
	}
	.top{
		width: 100%;
		height: 8vh;
		display: flex;
		align-items: center;
		background: white;
		box-sizing: border-box;
		padding: 0 3vw;
		>i{
			font-size: 30px;
			margin-right: 5vw;
		}
		>input{
			display: inline-block;
			width: 80vw;
			background: #f4f4f4 url(../assets/img/Search.png);
			background-size:6% 64% ;
			background-position:5px 4px;
			background-repeat:no-repeat ;
			border-radius:1vw ;
			padding: 0 2vw;
			padding-left:8vw;
			height:5vh;
			border: 1px solid #d5d5d5;
		}
	}
</style>