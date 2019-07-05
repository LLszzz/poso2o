<template>
	<!--消息-->
	<div class="message">
		<div class="top">
  			<i class="iconfont icon-menu-line"></i>
  			<div>
  				<span>消息</span>
  			</div>
  			<i class="iconfont icon-sousuo"></i>
  		</div>
		<tabBar :idx="2"></tabBar>
	</div>
</template>

<script>
	import tabBar from "@/components/tabBar.vue"
	export default {
		data(){
			return{
			}
		},
		components:{
			tabBar
		}
	}
</script>

<style lang="scss" scoped="scoped" >
	@import url("//at.alicdn.com/t/font_1275272_8qeh8645ytk.css");	
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
	.message{
		width: 100%;
		height: 100%;
		background: aliceblue;
		position: relative;
	}
</style>