<template>
	<!--直播回顾-->
	<div class="Review">
		<div class="top">
  			<i class="iconfont icon-fanhui" @click="$router.push({path:'/Mine'})"></i>
  			<div>
  				<span>直播回顾</span>
  			</div>
  		</div>
  		<div class="content">
  			<div class="live">
  				<div>
  					<img src="../assets/img/2.jpg"/>
  					<div>
  						<span>回放</span>
  						<span>22222观看</span>
  					</div>
  				</div>
  				<div>
  					<div><img src="../assets/img/2.jpg"/></div>
  					<p>荣耀官方旗舰店</p>
  				</div>
  			</div>
  			<div class="live">
  				<div>
  					<img src="../assets/img/2.jpg"/>
  					<div>
  						<span>回放</span>
  						<span>22222观看</span>
  					</div>
  				</div>
  				<div>
  					<div><img src="../assets/img/2.jpg"/></div>
  					<p>荣耀官方旗舰店</p>
  				</div>
  			</div>
  			<div class="live">
  				<div>
  					<img src="../assets/img/2.jpg"/>
  					<div>
  						<span>回放</span>
  						<span>22222观看</span>
  					</div>
  				</div>
  				<div>
  					<div><img src="../assets/img/2.jpg"/></div>
  					<p>荣耀官方旗舰店</p>
  				</div>
  			</div>
  			<div class="live">
  				<div>
  					<img src="../assets/img/2.jpg"/>
  					<div>
  						<span>回放</span>
  						<span>22222观看</span>
  					</div>
  				</div>
  				<div>
  					<div><img src="../assets/img/2.jpg"/></div>
  					<p>荣耀官方旗舰店</p>
  				</div>
  			</div>
  			<div class="live">
  				<div>
  					<img src="../assets/img/2.jpg"/>
  					<div>
  						<span>回放</span>
  						<span>22222观看</span>
  					</div>
  				</div>
  				<div>
  					<div><img src="../assets/img/2.jpg"/></div>
  					<p>荣耀官方旗舰店</p>
  				</div>
  			</div>
  		</div>
	</div>
</template>

<script>
</script>

<style scoped="scoped" lang="scss">
	@import url("//at.alicdn.com/t/font_1275272_yvge9izac0b.css");
	.Review{
		width: 100%;
		height: 100%;
		overflow: hidden;
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
		position: relative;
		>i{
			font-size: 30px;
		}
		>div{
			position: absolute;
			top: 50%;
			left: 50%;
			transform: translate(-50%,-50%);	
		}
	}
	.content{
		width: 100vw;
		height: 92vh;
		overflow: hidden;
		overflow-y: scroll;
		.live{
			width: 48vw;
			height: 40vh;
			display: inline-block;
			margin: 1vh 1vw;
			>div:nth-of-type(1){
				width: 100%;
				height: 30vh;
				overflow: hidden;
				position: relative;
				border-radius:3vw ;
				>img{
					width: 100%;
					height: 100%;
				}
				>div{
					font-size: 0;
					color: white;
					position: absolute;
					bottom: 2vh;
					left: 5vw;
					background: rgba(0,0,0,0.4);
					height: 3vh;
					border-radius:1vw ;
					box-sizing: border-box;
					>span{
						margin: 0 1vw;
						display: inline-block;
						height: 3vh;
						line-height: 3vh;
						font-size: 12px;
					}
					>span:nth-of-type(1){
						padding:0 2vw;
						background: #6f85ac;
						border-radius:1vw ;
					}
				}
			}
			>div:nth-of-type(2){
				display: flex;
				align-items: center;
				box-sizing: border-box;
				padding: 1vh 2vw;
				>div{
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
			}
		}
	}
</style>