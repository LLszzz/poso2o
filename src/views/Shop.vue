<template>
	<div class="Shop">
		<div class="top">
			<i class="iconfont icon-fanhui"></i>
			<input type="text" name="" id="" value="" placeholder="商品" />
		</div>
		<div class="content" v-if="tabBar==1">
			<div>
				<swiper :options="swiperOption" >
				    <!-- slides -->
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
		</div>
		<div class="bottom">
			<ul>
				<li @click="tabBar=1" :class="tabBar==1?'active_bottom':''">
					<i class="iconfont icon-shouye"></i>
					<p>首页</p>
				</li>
				<li  @click="tabBar=2" :class="tabBar==2?'active_bottom':''">
					<i class="iconfont icon-gouwudai"></i>
					<p>商品</p>
				</li>
				<li  @click="tabBar=3" :class="tabBar==3?'active_bottom':''">
					<i class="iconfont icon-liaotian"></i>
					<p>客服</p>
				</li>
			</ul>
		</div>
	</div>
</template>

<script>
	export default {
		data(){
			return{
				tabBar:1,
				swiperOption: {
					autoplay:true,
					loop:true
        		}
			}
		}
	}
</script>

<style lang="scss" scoped="scoped">
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
		width: 100%;
		height: 84vh;
		overflow: hidden;
		overflow-y: scroll;
		>div:nth-of-type(1){
			width: 100%;
			img{
				width: 100%;
			}
		}
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