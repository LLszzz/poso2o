<template>
	<div class="Complaints">
		<div class="top">
	      <i class="iconfont icon-fanhui" @click="$router.go(-1)"></i>
	      <div>
	        <span>投诉</span>
	      </div>
	    </div>
	    <div class="title">
	    	<span>投诉对象:</span>
	    	<span style="color: #B2B2B2;">{{$route.query.shop_name}}</span>
	    </div>
	    <div class="content">
	    	<span>投诉原因:</span>
	    	<ul>
	    		<li>
	    			<label><input type="radio" name="radio" id="" value="存在欺诈骗钱行为" v-model="radio" />存在欺诈骗钱行为</label>
	    		</li>
	    		<li>
	    			<label><input type="radio" name="radio" id="" value="发布仿冒品信息" v-model="radio" />发布仿冒品信息</label>
	    		</li>
	    		<li>
	    			<label><input type="radio" name="radio" id="" value="发布骚扰内容" v-model="radio" />发布骚扰内容</label>
	    		</li>
	    		<li>
	    			<label><input type="radio" name="radio" id="" value="其他" v-model="radio" />其他</label>
	    			<textarea  @input="text()" name="" v-model="textarea" rows="" cols="" placeholder="请填写投诉原因"></textarea>
	    			<span>{{textarea.length}}/300</span>
	    		</li>
	    	</ul>
	    </div>
	    <div class="button" @click="Submit()">提交</div>
	    <div class="Toast" v-if="isloading">
			<div>
				<i class="iconfont icon-jiazai"></i>
				<p v-if="isloading">提交中</p>
			</div>
		</div>
		<div class="Toast" v-if="isToast">
			<div>
				<span class="iconfont icon-success_no_circle"></span>
				<p>提交成功</p>
			</div>
		</div>
	</div>
</template>

<script>
	export default {
		data(){
			return{
				textarea:'',
				radio:"存在欺诈骗钱行为",
				isToast:false,
				isloading:false
			}
		},
		methods:{
			text(){
				if(this.textarea.length>300){
					this.textarea = this.textarea.slice(0,299);
				}
			},
			Submit(){
				this.isloading = true;
				if(this.radio !="其他"){
					this.$require.get("http://wechat.poso2o.com/SmallPlayOrderManage.htm?Act=complaint",{
						params:{
							app_openid:this.$route.query.open_id,
							shop_id:this.$route.query.shop_id,
							complaint_remark:this.radio,
							complaint_imgs:"",
							order_id:""
						}
					}).then(res=>{
						console.log(res);
						this.isloading = false;
						this.isToast = true;
						setTimeout(()=>{
							this.isToast = false;
						},1000)
					}).catch(err=>{
						console.log(err);
					})
				}
				else{
					this.$require.get("http://wechat.poso2o.com/SmallPlayOrderManage.htm?Act=complaint",{
						params:{
							app_openid:this.$route.query.open_id,
							shop_id:this.$route.query.shop_id,
							complaint_remark:this.textarea,
							complaint_imgs:"",
							order_id:""
						}
					}).then(res=>{
						console.log(res);
						this.isloading = false;
						this.isToast = true;
						setTimeout(()=>{
							this.isToast = false;
						},1000)
					}).catch(err=>{
						console.log(err);
					})
				}
			}
		}
	}
</script>

<style scoped="scoped" lang="scss">
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
	.button{
		background: #01BCB5;
		color: white;
		width: 60%;
		margin: 4vh auto;
		border-radius:2px ;
		height: 8vh;
		line-height: 8vh;
		text-align: center;
	}
	.Complaints{
		width: 100%;
		height: 100%;
		position: relative;
		background: aliceblue;
	}
	.top{
		background: white;
		height: 8vh;
		padding: 1vh 2vw;
		box-sizing: border-box;
		position: relative;
		display: flex;
		align-items: center;
		>i{
			font-size:30px;
		}
		>div{
			position: absolute;
			top: 50%;
			left: 50%;
			transform: translate(-50%,-50%);
			color: #FE2854;
		}
	}
	.title{
		padding: 1vh 5vw;
		height: 8vh;
		box-sizing: border-box;
		display: flex;
		background: white;
		margin-top: 1vh;
		align-items: center;
		>span{
			margin-right: 2vw;
		}
	}
	.content{
		padding-top:1vh ;
		box-sizing: border-box;
		background: white;
		margin-top: 1vh;
		>span{
			margin-left: 4vw;
		}
		>ul{
			width: 100%;
			>li{
				box-sizing: border-box;
				padding: 0 4vw;
				min-height: 6vh;
				line-height: 6vh;
				padding-left:6vw ;
				color: #B2B2B2;
				border-bottom:1px solid #CCCCCC ;
				font-size: 14px;
				position: relative;
				label{
					display: flex;
					align-items: center;
				}
				input{
					margin-right: 4vw;
				}
				textarea{
					width: 80vw;
					margin-top: 2vh;
					height: 15vh;
					background: #DCDCDC;
					padding: 5px;
				}
				>span{
					position: absolute;
					top: 17vh;
					left: 70%;
					color: #999999;
				}
			}
		}
	}
</style>