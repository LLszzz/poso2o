<template>
	<!--播放页面-->
	<div class="Video">
		<div class="live" @click="isShop=false">
			<video :width="width" :height="height"  autoplay="autoplay">
				<source src="@/assets/video/video.mp4" type="video/mp4"></source>
				<source src="myvideo.ogv" type="video/ogg"></source>
				<source src="myvideo.webm" type="video/webm"></source>
				<object  type="application/x-shockwave-flash" data="myvideo.swf">
					<param name="movie" value="myvideo.swf" />
					<param name="flashvars" value="autostart=true&amp;file=myvideo.swf" />
				</object>
				当前浏览器不支持 video直接播放，点击这里下载视频： <a href="myvideo.webm">下载视频</a>
			</video>
		</div>
		<div class="top">
			<div>
				<div><img src="../assets/img/4.jpg"/></div>
				<div>
					<p>夏美美的原创</p>
					<p><span>1234</span>观看</p>
				</div>
			</div>
			<div>
				<span class="iconfont icon-chakantieziguanzhu">关注</span>
			</div>
			<i class="iconfont icon-fork" @click="$router.push({path:'/'})"></i>
		</div>
		<div class="left">
			<div>
				<i class="iconfont icon-icon2"></i>
				<span>2</span>
				<p>亲密度待领取</p>
				<i class="iconfont icon-jiantou1"></i>
			</div>
			<div>
				<div>
					<h4>喜讯61进店福利</h4>
					<p>INFORMATION</p>
					<div>每天四场抢八个免单</div>
					<div>全场下单立减60元</div>
					<div>红色字体秒杀价属实</div>
				</div>
				<div>
					<h4>芳芳</h4>
					<p>INFORMATION</p>
					<div>157身高</div>
					<div>85斤</div>
					<div>上方关注芳芳哦</div>
				</div>
			</div>
			<div>
				<i class="iconfont icon-tubiaolunkuo-"></i>
				<span>W********8真正去买</span>
			</div>
			<div>
				<div>
					<p><span>铁粉3</span><span>蔡丽丽123456</span>看着舒服</p>
					<p><span>铁粉3</span><span>邻家小丫头</span>7号可以试穿一下吗？</p>
					<p><span>新粉1</span><span>小小</span>看看5号叻</p>
					<p><span>新粉1</span><span>123</span>穿着透吗</p>
					<p><span>铁粉3</span><span>蔡丽丽123456</span>平时能穿吗</p>
				</div>
			</div>
			<div>
				<div><img src="../assets/img/6.jpg"/></div>
				<div>
					<p>牛油果绿吊带</p>
					<span>￥188.00</span>
				</div>
			</div>
		</div>
		<div class="bottom">
			<i class="iconfont icon-gouwudai" @click="isShop=true"></i>
			<input type="text" @focus="placeholder=''"  :value="placeholder" />
			<i class="iconfont icon-gengduo"></i>
			<i class="iconfont icon-fanhui1"></i>
			<i class="iconfont icon-aixin1"></i>
		</div>
		<div class="shop" :class="isShop?'isShop':''">
			<div>
				<div>
					<div><img src="../assets/img/2.jpg"/></div>
					<div>
						<h5>山谷驰</h5>
						<span>综合评分 4.85</span>
					</div>					
				</div>
				<div>进店逛逛</div>
			</div>
			<div class="shop_commodity">
				<div><img src="../assets/img/6.jpg"/></div>
				<div>
					<p>牛油果吊带连衣裙两件套....</p>
					<div>
						<span>￥188</span>
						<i class="iconfont icon-tubiaolunkuo-"></i>
					</div>
				</div>
			</div>
			<div class="shop_commodity">
				<div><img src="../assets/img/6.jpg"/></div>
				<div>
					<p>牛油果吊带连衣裙两件套....</p>
					<div>
						<span>￥188</span>
						<i class="iconfont icon-tubiaolunkuo-"></i>
					</div>
				</div>
			</div>
			<div class="shop_commodity">
				<div><img src="../assets/img/6.jpg"/></div>
				<div>
					<p>牛油果吊带连衣裙两件套....</p>
					<div>
						<span>￥188</span>
						<i class="iconfont icon-tubiaolunkuo-"></i>
					</div>
				</div>
			</div>
			<div class="shop_commodity">
				<div><img src="../assets/img/6.jpg"/></div>
				<div>
					<p>牛油果吊带连衣裙两件套....</p>
					<div>
						<span>￥188</span>
						<i class="iconfont icon-tubiaolunkuo-"></i>
					</div>
				</div>
			</div>
			<div class="shop_commodity">
				<div><img src="../assets/img/6.jpg"/></div>
				<div>
					<p>牛油果吊带连衣裙两件套....</p>
					<div>
						<span>￥188</span>
						<i class="iconfont icon-tubiaolunkuo-"></i>
					</div>
				</div>
			</div>
			<div class="shop_commodity">
				<div><img src="../assets/img/6.jpg"/></div>
				<div>
					<p>牛油果吊带连衣裙两件套....</p>
					<div>
						<span>￥188</span>
						<i class="iconfont icon-tubiaolunkuo-"></i>
					</div>
				</div>
			</div>
			<div class="shop_commodity">
				<div><img src="../assets/img/6.jpg"/></div>
				<div>
					<p>牛油果吊带连衣裙两件套....</p>
					<div>
						<span>￥188</span>
						<i class="iconfont icon-tubiaolunkuo-"></i>
					</div>
				</div>
			</div>
		</div>
	</div>
</template>

<script>
	export default {
		data(){
			return{
				width:0,
				height:0,
				placeholder:"跟主播聊什么?",
				isShop:false
			}
		},
		methods:{
			getSize(){
				var width = document.body.offsetWidth;
				var height = document.body.offsetHeight;
				console.log({width,height})
				this.width = width;
				this.height = height;
			}
		},
		mounted(){
			this.getSize();
		}
		
	}
</script>

<style scoped="scoped" lang="scss">
	@import url("//at.alicdn.com/t/font_1275272_uoha0p3daat.css");
	.isShop{
		transform: translateY(-55vh);
	}
	.shop{
		transition: all 1s;
		width: 94vw;
		margin: 0 auto;
		border-top-left-radius:5vw ;
		border-top-right-radius:5vw ;
		height: 55vh;
		background: white;
		overflow: hidden;
		overflow-y: scroll;
		>div:nth-of-type(1){
			display: flex;
			justify-content: space-between;
			padding: 0 2vw;
			align-items: center;
			width:88vw;
			margin:0 auto;
			height:10vh;
			border-bottom:1px solid #f7f8f8;
			>div:nth-of-type(1){
				display: flex;
				>div:nth-of-type(1){
					margin-right:2vw;
					width: 10vw;
					height: 10vw;
					overflow: hidden;
					border-radius:50%;
					>img{
						width: 100%;
						height: 100%;
					}
				}
				span{
					font-size: 12px;
					color: #bfbfbf;
				}
			}
			>div:nth-of-type(2){
				width: 18vw;
				height: 4vh;
				background: linear-gradient(left,#ff8b01,#ff5501);
				font-size: 12px;
				text-align: center;
				line-height: 4vh;
				color: white;
				border-radius:5vw ;
				margin-right: 2vw;
			}
		}
	}
	.shop_commodity{
		display: flex;
		justify-content: space-between;
		padding: 0 2vw;
		align-items: center;
		width:88vw;
		margin:0 auto;
		height:20vh;
		border-bottom:1px solid #f7f8f8;
		>div:nth-of-type(1){
			width: 28vw;
			height: 28vw;
			overflow: hidden;
			border-radius:2vw ;
			>img{
				width: 100%;
				height: 100%;
			}
		}
		>div:nth-of-type(2){
			height: 26vw;
			display: flex;
			flex-direction: column;
			justify-content: space-between;
			>p{
				font-weight: bold;
				width: 55vw;
			}
			>div{
				display: flex;
				justify-content: space-between;
				align-items: center;
				>span{
					color: #f34364;
				}
				>i{
					color: #ed99aa;
					font-size:14px;
					width: 7vw;
					height: 7vw;
					text-align: center;
					line-height: 7vw;
					border: 1px solid #ed99aa;
					border-radius:50% ;
				}
			}
		}
	}
	.Video{
		width: 100vw;
		height: 100vh;
		overflow: hidden;
		position: relative;
	}
	.live{
		width: 100%;
		height: 100%;
		video{
			height: 100%;
		}
	}
	.top{
		position: absolute;
		top: 1vh;
		width: 100%;
		display: flex;
		justify-content: space-between;
		color: white;
		padding: 0 5vw;
		height:8vh;
		align-items: center;
		box-sizing: border-box;
		font-size: 12px;
		>div:nth-of-type(1){
			display: flex;
			align-items: center;
			>div:nth-of-type(1){
				width: 10vw;
				height: 10vw;
				border-radius:5vw;
				overflow: hidden;
				margin-right: 2vw;
				>img{
					width: 100%;
					height: 100%;
				}
			}
		}
		>div:nth-of-type(2){
			>span{
				background: #ff2851;
				font-size: 12px;
				padding:1vh 2vw;
				border-radius:4vw ;
				box-sizing: border-box;
			}
		}
		>i{
			font-size: 24px;
		}
	}
	.left{
		position:absolute;
		top: 9vh;
		left: 0;
		padding:0 4vw;
		box-sizing: border-box;
		>div:nth-of-type(1){
			background: rgba(0,0,0,0.1);
			border-radius:4vw ;
			padding: 0 2vw;
			display: flex;
			align-items: center;
			i{
				font-size: 24px;
			}
			>i,>span{
				color: #ff4144;
			}
			>p{
				color: white;
				margin:0 2vw;
				font-size: 12px;
			}
		}
		>div:nth-of-type(2){
			background: rgba(0,0,0,0.1);
			color: white;
			display: inline-block;
			margin-top: 2vh;
			>div{
				padding: 2vw;
				color: #FFFFFF;
				>h4{
					margin: 0.5vh 0;
					font-weight:100;
				}
				>div{
					font-size: 12px;
					margin: 0.5vh 0;
				}
				>p{
					font-size: 12px;
					padding-bottom: 1vh;
					border-bottom:3px solid #FFFFFF ;
				}
			}
		}
		>div:nth-of-type(3){
			margin-top: 1vh;
			background: #e55c3a;
			color: white;
			padding:0.5vh 2vw;
			border-radius:2vw ;
			display: flex;
			align-items: center;
			>i{
				font-size: 20px;
			}
			>span{
				font-size: 14px;
				margin-left: 1vw;
			}
		}
		>div:nth-of-type(4){
			overflow: hidden;
			width: 60vw;
			height: 24vh;
			overflow-y:scroll;
			>div{
				>p{
					color: white;
					margin: 1vh 0;
					font-size: 14px;
					line-height: 4vh;
					>span{
						margin-right:1vw ;
					}
					>span:nth-of-type(1){
						font-size: 12px;
						background:deepskyblue;
						padding:0.5vh 1vw;
						border-radius:1vw ;
						box-sizing: border-box;
					}
					>span:nth-of-type(2){
						color: #8ad2f1;
					}
				}
			}
		}
		>div:nth-of-type(5){
			width: 45vw;
			height: 8vh;
			background: white;
			border-radius:1vw ;
			overflow: hidden;
			display: flex;
			>div:nth-of-type(1){
				width: 8vh;
				height: 8vh;
				>img{
					width: 100%;
					height: 100%;
				}
			}
			>div:nth-of-type(2){
				padding: 2vw;
				box-sizing: border-box;
				>p{
					font-size: 14px;
				}
				>span{
					font-size: 12px;
					color: #f23558;
				}
			}
		}
	}
	.bottom{
		position: absolute;
		left: 0;
		bottom:0;
		width: 100%;
		height: 8vh;
		display: flex;
		align-items: center;
		justify-content: space-around;
		>i{
			color: white;
			font-size: 20px;
		}
		>i:nth-of-type(1){
			color: #ff3064;
			font-size: 40px;
		}
		input{
			padding: 1vw 2vw;
			border: none;
			border-bottom: 1px solid #696e79;
			background: transparent;
			color: #F0F8FF;
		}
	}
</style>