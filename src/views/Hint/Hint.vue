<template>
	<!--提示用户下载app-->
	<div class="Hint">
		<div>
			<h1>请下载手机客户端</h1>
			<div>
				<div></div>
				<div></div>
			</div>
		</div>
	</div>
</template>

<script>
</script>

<style scoped="scoped" lang="scss">
	.Hint{
		width: 100%;
		height: 100%;
		position: relative;
		background:linear-gradient(top left,rgba(0,0,255,0.6),rgba(255,0,0,0.6));
		>div{
			position: absolute;
			top: 50%;
			left: 50%;
			transform: translate(-50%,-50%);
			>h1{
				color: white;
				font-size: 20px;
				text-align: center;
				margin: 2vh 0;
			}
			>div{
				background: rgba(0,0,0,0.3);
				width: 60vw;
				height: 30vh;
				border-radius:4vw ;
				display: flex;
				flex-wrap:wrap ;
				align-items: center;
				>div{
					width: 80%;
					height:7vh;
					margin: 0 auto;
					border-radius:10vw ;
				}
			}
		}
	}
</style>