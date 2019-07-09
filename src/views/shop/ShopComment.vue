<template>
	<!--商品评论-->
	<div class="Comment">
		<div class="top">
			<i class="iconfont icon-fanhui" @click="$router.go(-1)"></i>
			<span>评价</span>
		</div>
		<div class="content">
			<div>
				<span :class="sel==1?'active':''" @click="sel=1">非常好</span>
				<span :class="sel==2?'active':''" @click="sel=2">不错</span>
				<span :class="sel==3?'active':''" @click="sel=3">一般</span>
				<span :class="sel==4?'active':''" @click="sel=4">差评</span>
			</div>
			
			<div class="content_comment" v-for="val in goodsAppraise" v-if="val.appraise_grade==sel">
				<div>
					<span>{{val.buyer_nick}}</span>
					<span>{{val.build_time}}</span>
				</div>
				<div>
					<p>{{val.appraise_remark}}</p>
					<div>
						<div class="squarePhoto" v-for="item in val.appraise_imgs" :style="'background: url('+item+');'"></div>
					</div>
				</div>
				<div>
					<p>颜色分类：{{val.spec_colour}}</p>
					<p>尺码：{{val.spec_size}}</p>
				</div>
			</div>
		
		</div>
	</div>
</template>

<script>
	export default{
		data(){
			return{
				sel:1,
				goodsAppraise:[],
				appraiseTime:"",
				shop_id:"",
				goods_id:""
			}
		},
		created(){
			this.goodsAppraise = JSON.parse(this.$route.query.str)
			for(let i=0;i<this.goodsAppraise.length;i++){
				var newData = new Date(this.goodsAppraise[i].build_time);
				this.goodsAppraise[i].build_time = newData.getFullYear()+"-"+(newData.getMonth()+1)+"-"+newData.getDate();
				this.goodsAppraise[i].appraise_imgs = this.goodsAppraise[i].appraise_imgs.split(",")
			}
			this.shop_id = this.goodsAppraise[0].shop_id;
			this.goods_id = this.goodsAppraise[0].goods_id;
		}
	}
</script>

<style lang="scss" scoped="scoped">
	.content_comment{
		width: 100%;
		background: white;
		>div:nth-of-type(1){
			display: flex;
			justify-content: space-between;
			>span{
				color: #999;
				font-size: 12px;
			}
		}
		>div:nth-of-type(2){
			margin: 1vh 0;
			>p{
				font-size: 14px;
			}
			>div{
				margin-top: 1vh;
				display: flex;
				>div{
					margin: 0 2vw;
					width: 20vw;
					height: 14vh;
				}
			}
		}
		>div:nth-of-type(3){
			display: flex;
			>p{
				margin-right:2vw ;
				color: #999;
				font-size: 12px;
			}
		}
	}
	.active{
		background-color: #FF0036 !important;
    	color: #FFF !important;
	}
	.Comment{
		width: 100%;
		height: 100%;
		background: aliceblue;
		position: relative;
	}
	.top{
		height: 6vh;
		width: 100%;
		background: white;
		display: flex;
		align-items: center;
		position:relative;
		box-sizing: border-box;
		padding: 0 2vw;
		margin-bottom: 0.5vh;
		>i{
			font-size: 24px;
		}
		>span{
			position:absolute;
			top: 50%;
			left: 50%;
			transform: translate(-50%,-50%);
		}
	}
	.content{
		width: 100%;
		height: 94vh;
		overflow: hidden;
		overflow-y: scroll;
		>div{
			margin-bottom: 0.2vh;
			box-sizing: border-box;
			padding: 2vh 4vw;
			background: white;
			>span{
				display: inline-block;
				width: 16vw;
				height: 5vh;
			    border-radius: 10px;
			    background-color: #F5F5F5;
			    margin: 0 2vw;
			    font-size: 14px;
			    text-align: center;
			    line-height: 5vh;
			    color: #666;
			}
		}
	}
</style>