<template>
	<div class="bottom">
  		<ul>
  			<li :class="index==1?'active':''" @click="router('/')">
  				<i class="iconfont icon-zhibo"></i>
  				<p>直播</p>
  			</li>
  			<li :class="index==2?'active':''" @click="router('/Message')">
  				<i class="iconfont icon-icon--"></i>
  				<p>消息</p>
  			</li>
  			<li :class="index==3?'active':''" @click="router('/ShoppingCart')">
  				<i class="iconfont icon-tubiaolunkuo-"></i>
  				<p>购物车</p>
  			</li>
  			<li :class="index==4?'active':''" @click="router('/Mine')">
  				<i class="iconfont icon-wode"></i>
  				<p>我的</p>
  			</li>
  		</ul>
  	</div>
</template>

<script>
	export default {
		props:[
			"idx"
		],
		data(){
			return {
				index:""
			}
		},
		methods:{
			router(url){
				this.$router.push({
					path:url,
					query:{}
				})
			}
		},
		created(){
			this.index = this.idx;
		},
		mounted(){
			let ali = document.querySelectorAll(".bottom li");
			for(let i=0;i<ali.length;i++){
				ali[i].addEventListener("click",()=>{
					this.index = i+1;
				})
			}
		}
		
	}
</script>

<style lang="scss" scoped="scoped">
	@import url("//at.alicdn.com/t/font_1275272_8qeh8645ytk.css");
	.active{
		color:#fd772e;
	}
	.bottom{
		width: 100%;
		height: 8vh;
		position: absolute;
		bottom: 0;
		background: white;
		>ul{
			width: 100%;
			height: 100%;
			display: flex;
			align-items: center;
			>li{
				width:25%;
				text-align: center;
				>p{
					font-size: 12px;
				}
				>i{
					font-size: 24px;
				}
			}
		}
	}
</style>