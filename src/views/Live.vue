<template>
  <div class="Live">
  	<div class="top">
  			<i class="iconfont icon-menu-line"></i>
  			<div>
  				<span @click="TopBar=1" :class="TopBar==1?'top_active':''">直播</span>
  				<span>|</span>
  				<span @click="TopBar=2" :class="TopBar==2?'top_active':''">关注</span>
  			</div>
  			<i class="iconfont icon-sousuo"></i>
  	</div>
  	
  	<!--直播-->
  	
  	<div v-if="TopBar==1">
  		<div class="sel">
	  		<ul>
	  			<li :class="Sel==1?'Sel_active':''"  @click="Sel=1">推荐</li>
	  			<li :class="Sel==2?'Sel_active':''"  @click="Sel=2">女装</li>
	  			<li :class="Sel==3?'Sel_active':''"  @click="Sel=3">美妆</li>
	  			<li :class="Sel==4?'Sel_active':''"  @click="Sel=4">男装</li>
	  			<i class="iconfont icon-shaixuan"></i>
	  		</ul>
	  	</div>
	  	<div class="content" v-if="Sel==1" >
	  		
	  		<div class="content_Live" @click="$router.push({path:'/Video',query:{play_id:val.play_id}})" v-for="(val,index) in list">
	  			<div class="img squarePhoto" :style="'background: url('+val.play_logo+');'">
	  				<span>{{val.play_title}}</span>
	  				<span>{{val.toponline_count}}个人在看</span>
	  			</div>
	  			<div class="Details">
	  				<div>
	  					<div class="HeadImage"><img :src="val.shop_logo"/></div>
	  					<p>{{val.shop_name}}</p>
	  				</div>
	  				<i class="iconfont icon-weizhi">{{val.province_name}}</i>
	  			</div>
	  		</div>
	  		
	  	</div>
  	</div>
  	
  	<!--关注-->
  	
  	<div class="center" v-if="TopBar==2">
  		<div class="center_live">
  			<div><img src="../assets/img/5.jpg"/></div>
  			<div>
  				<div><img src="../assets/img/5.jpg"/></div>
  				<p>夏美美的原创</p>
  				<span>|</span>
  				<span>杭州市</span>
  			</div>
  			<div>
  				<div>
  					<p>废话不多说先来抽波奖</p>
						<p class="center_live_span"><span>直播中</span>7651观看</p>
  				</div>
  				<div>
  					<p>
  						<i  class="iconfont icon-chandizhibodibuxihuan1"></i>
  					</p>
  					<p>14024</p>
  				</div>
  			</div>
  		</div>
  		<div class="center_live">
  			<div><img src="../assets/img/4.jpg"/></div>
  			<div>
  				<div><img src="../assets/img/4.jpg"/></div>
  				<p>大Z定制</p>
  				<span>|</span>
  				<span>广州市</span>
  			</div>
  			<div>
  				<div>
  					<p>哈哈哈哈哈哈哈</p>
						<p class="center_live_span"><span>直播中</span>8881观看</p>
  				</div>
  				<div>
  					<p>
  						<i  class="iconfont icon-chandizhibodibuxihuan1"></i>
  					</p>
  					<p>12024</p>
  				</div>
  			</div>
  		</div>
  		<div class="center_live">
  			<div><img src="../assets/img/2.jpg"/></div>
  			<div>
  				<div><img src="../assets/img/2.jpg"/></div>
  				<p>菠萝赛东</p>
  				<span>|</span>
  				<span>广州市</span>
  			</div>
  			<div>
  				<div>
  					<p>歪！！！！！！</p>
						<p class="center_live_span"><span>直播中</span>8881观看</p>
  				</div>
  				<div>
  					<p>
  						<i  class="iconfont icon-chandizhibodibuxihuan1"></i>
  					</p>
  					<p>12024</p>
  				</div>
  			</div>
  		</div>
  	</div>
  	<tabBar :idx="1"></tabBar>
  </div>
</template>

<style type="text/css" lang="scss" scoped="scoped">
	@import url("//at.alicdn.com/t/font_1275272_8o5gxuk20cl.css");
	.Live{
		width: 100%;
		height: 100%;
		background: aliceblue;
		position: relative;
	}
	.top{
		width: 100%;
		height: 8vh;
		display: flex;
		justify-content: space-between;
		align-items: center;
		background: white;
		box-sizing: border-box;
		padding: 0 3vw;
		>i{
			font-size: 30px;
		}
		span{
			margin:0 1vw;
		}
	}
	.Sel_active{
		color: #6cd6f6;
	}
	.center{
		width: 100vw;
		height:84vh;
		overflow-y: scroll;
		overflow-x: hidden;
	}
	.center_live{
		width: 95vw;
		height: 100vw;
		border-radius:5vw ;
		margin:2vh auto;
		position: relative;
		overflow: hidden;
		>div:nth-of-type(1){
			width: 100%;
			height: 100%;
			>img{
				width: 100%;
				height: 100%;
			}
		}
		>div:nth-of-type(2){
			width: 100%;
			position: absolute;
			top: 1vh;
			display: flex;
			align-items: center;
			padding:0 4vw;
			>div{
				width: 10vw;
				height: 10vw;
				border-radius:5vw;
				overflow: hidden;
				>img{
					width: 100%;
					height: 100%;
				}
			}
			>p,>span{
				color: white;
				font-size: 14px;
				margin: 0 1vw;
			}
		}
		>div:nth-of-type(3){
			width: 100%;
			position: absolute;
			bottom:2vh;
			display: flex;
			justify-content: space-between;
			align-items: center;
			padding:0 4vw;
			>div{
				color: white;
				>p{
					margin: 1vh 0;
					text-align: center;
					>i{
						display: inline-block;
						background: #ff2851;
						font-size: 14px;
						width: 6vw;
						height:6vw;
						border-radius:3vw ;
						line-height: 6vw;
					}
				}
				>p:nth-of-type(2){
					font-size: 12px;
				}
			}
		}
	}
	.center_live_span{
		background: rgba(0,0,0,0.3);
		display: inline-block;
		height:3vh;
		line-height: 3vh;
		padding-right:2vw ;
		border-radius:1vw ;
		>span{
			display: inline-block;
			border-radius:1vw ;
			margin-right: 2vw;
			background: linear-gradient(left,#ff1e84,#fe2854);
			height: 100%;
			width: 16vw;
			text-align: center;
			line-height: 3vh;
			vertical-align: top;
		}
	}
	.sel{
		width: 100vw;
		height: 6vh;
		margin: 0.5vh 0;
		background: white;
		>ul{
			display: flex;
			align-items: center;
			height: 6vh;
			>li,>i{
				text-align: center;
				width: 20vw;
				box-sizing: border-box;
			}
			>li{
				font-size: 14px;
			}
			>i{
				font-size: 24px;
			}
		}
	}
	.content{
		width: 100%;
		height:77vh;
		overflow-y: scroll;
	}
	.content_Live{
		display: inline-block;
		box-sizing: border-box;
		margin:0.1vh 1vw ;
		width: 48vw;
		height:60vw;
		background: white;
		overflow: hidden;
	}
	.img{
		width: 100%;
		height: 80%;
		position: relative;
		>span{
			transform: scale(0.8);
			position: absolute;
			bottom: 0.5vw;
			font-size: 12px;
			color: white;
		}
		>span:nth-of-type(1){
			left: 0.5vw;
		}
		>span:nth-of-type(2){
			right: 0.5vw;
		}
	}
	.Details{
		width: 100%;
		height: 20%;
		display: flex;
		align-items: center;
		justify-content: space-between;
		box-sizing: border-box;
		padding: 0 1vw;
		>div{
			display: flex;
			justify-content: space-between;
			align-items: center;
			>p{
				margin-left: 2vw;
				font-size: 12px;
			}
		}
		
		>i{
			font-size: 12px;
		}
	}
	.HeadImage{
		width:8vw;
		height:8vw;
		border-radius:50%;
		overflow: hidden;
		>img{
			width: 100%;
			height: 100%;
		}
	}
	.top_active{
		color: #ff0000;
	}
</style>

<script>
import tabBar from "@/components/tabBar.vue"
export default {
	data(){
		return{
			TopBar:1,
			Sel:1,
			list:[],
		}
	},
	methods:{
		getList(){
			this.$require.get("http://wechat.poso2o.com/SmallPlayManage.htm?Act=query",{
				params:{
					app_openid:"wx9accca47f099b162",
					currPage:1
				}
			}).then((res)=>{
				console.log(res);
				this.list = res.data.data.list;
				console.log(this.list)
			}).catch(err=>{
				console.log(err);
			})
		},
		Close(){
			
		}
	},
	components:{
		tabBar
	},
	created(){
		this.getList();
	}
}
</script>
