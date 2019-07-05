<template>
	<!--购物车-->
	<div class="ShoppingCart">
		<div class="top">
  			<i class="iconfont icon-menu-line"></i>
  			<div>
  				<span  @click="tab=2" :class="tab==2?'tab_active':''">收藏</span>
  				<span>|</span>
  				<span  @click="tab=1 " :class="tab==1?'tab_active':''">购物车</span>
  			</div>
  			<i class="iconfont icon-sousuo"></i>
  		</div>
  		
  		<!--收藏-->
  		
  		<div class="Collection">
  			
  		</div>
  		
  		<!--购物车-->
  		
  		<div class="Shopping">
  			<!--店铺-->
  			<div class="Shop" v-for="(val,index) in shoppingCart">
  				<div>
  					<label :class="val.isCheck?'label':''" ><input @change="ShopSelect(index)" type="checkbox" v-model="val.isCheck" /><i class="iconfont icon-gou" v-if="val.isCheck"></i></label>
  					<div><i class="iconfont icon-dianpu"></i>{{val.shopName}}<i class="iconfont icon-jiantou"></i></div>
  				</div>
  				<div v-for="item in val.commodity" class="commodity">
  					<label :class="item.isCheck?'label':''" @change="check(index)"><input type="checkbox" v-model="item.isCheck"  /><i class="iconfont icon-gou" v-if="item.isCheck"></i></label>
  					<div>
  						<div><img src="../assets/img/6.jpg"/></div>
  						<div>
  							<p>{{item.commodityName}}</p>
  							<span>{{item.color}}/{{item.size}}</span>
  							<div class="div">
  								<div>
  									<span style="color:#fb5e32;font-size: 14px;margin-right: 1vw;">￥{{item.price}}</span><span style="text-decoration:line-through; color: #9D9D9D;font-size: 12px;transform: scale(0.6);">￥{{item.originalPrice}}</span>
  								</div>
  								<div @click="Calculation()">
									<span style="border-right:1px solid #9D9D9D;" @click="item.quantity>1?item.quantity--:item.quantity=1">-</span>
									<span>{{item.quantity}}</span>
									<span style="border-left:1px solid #9D9D9D;" @click="item.quantity++">+</span>
  								</div>
  							</div>
  						</div>
  					</div>
  				</div>
  			</div>
  		</div>
  		<div class="Settlement">
  				<label>
  					<label  :class="allSelect?'label':''" ><input @change="all()" type="checkbox" v-model="allSelect" /><i class="iconfont icon-gou" v-if="allSelect"></i></label>全选
  				</label>
  			<div>
  				<div>
  					<p>总计：<span style="color:#fb5e32 ;">￥{{totalPrice}}</span></p>
  					<p style="font-size: 14px; color: #9D9D9D;text-align: right;" >共{{number}}件,不含运费</p>
  				</div>
  				<div>结算</div>
  			</div>
  		</div>
  		
		<tabBar :idx="3"></tabBar>
	</div>
</template>

<script>
	import tabBar from "@/components/tabBar.vue"
	export default {
		data(){
			return{
				tab:1,
				allSelect:false,
				totalPrice:"0.00",
				number:0,
				shoppingCart:[
					{
						shopName:"初沫服装商行",
						isCheck:false,
						commodity:[
							{	
								//单价
								price:160,
								//原价
								originalPrice:998,
								size:"M",
								color:"黑色",
								//库存
								inventory:"222",
								//商品名称
								commodityName:"2018年早秋潮流新款九分裤男士休闲裤九分棉麻",
								//数量
								quantity:1,
								//选中
								isCheck:false,
								imgUrl:""
							},
							{
								price:188,
								originalPrice:1998,
								size:"L",
								color:"白色",
								inventory:"122",
								commodityName:"2018年早秋潮流新款五分裤男士休闲裤五分棉麻",
								quantity:1,
								isCheck:false,
								imgUrl:""
							}
						]
					},
					{
						shopName:"蒙马特先生",
						isCheck:false,
						commodity:[
							{	
								price:160,
								originalPrice:998,
								size:"M",
								color:"黑色",
								inventory:"222",
								commodityName:"2018年早秋潮流新款九分裤男士休闲裤九分棉麻",
								quantity:1,
								isCheck:false,
								imgUrl:""
							},
							{
								price:188,
								originalPrice:1998,
								size:"L",
								color:"白色",
								inventory:"122",
								commodityName:"2018年早秋潮流新款五分裤男士休闲裤五分棉麻",
								quantity:1,
								isCheck:false,
								imgUrl:""
							},
							{
								price:188,
								originalPrice:1998,
								size:"L",
								color:"白色",
								inventory:"122",
								commodityName:"2018年早秋潮流新款五分裤男士休闲裤五分棉麻",
								quantity:1,
								isCheck:false,
								imgUrl:""
							},
							{
								price:188,
								originalPrice:1998,
								size:"L",
								color:"白色",
								inventory:"122",
								commodityName:"2018年早秋潮流新款五分裤男士休闲裤五分棉麻",
								quantity:1,
								isCheck:false,
								imgUrl:""
							}
						]
					}
				]
			}
		},
		components:{
			tabBar
		},
		methods:{
			all(){
				if(this.allSelect){
					for(let i=0;i<this.shoppingCart.length;i++){
						this.shoppingCart[i].isCheck = true;
						this.ShopSelect(i);
					}
				}
				else{
					for(let i=0;i<this.shoppingCart.length;i++){
						this.shoppingCart[i].isCheck = false;
						this.ShopSelect(i);
					}
				}
				this.Calculation();
			},
			Calculation(){
				var num = 0;
				var that = this;
				for(let i=0;i<that.shoppingCart.length;i++){
					for(let j=0;j<that.shoppingCart[i].commodity.length;j++){
						if(this.shoppingCart[i].commodity[j].isCheck == true){
							num += (this.shoppingCart[i].commodity[j].price * this.shoppingCart[i].commodity[j].quantity)
						}
					}
				}
				this.totalPrice = num.toFixed(2);
			},
			ShopSelect(idx){
				if(this.shoppingCart[idx].isCheck){
					for(let i=0;i<this.shoppingCart[idx].commodity.length;i++){
						this.shoppingCart[idx].commodity[i].isCheck = true;
					}
					this.allSelect = true;
					for(let i=0;i<this.shoppingCart.length;i++){
						if(this.shoppingCart[i].isCheck==false){
							this.allSelect = false;
						}
					}
				}
				else{
					for(let i=0;i<this.shoppingCart[idx].commodity.length;i++){
						this.shoppingCart[idx].commodity[i].isCheck = false;
					}
					this.allSelect = false;
				}
				this.Calculation();
			},
			check(idx){
				let isAll = true;
				for(let i=0;i<this.shoppingCart[idx].commodity.length;i++){
					if(this.shoppingCart[idx].commodity[i].isCheck == false){
						isAll = false;
						this.shoppingCart[idx].isCheck = false;
						this.allSelect = false;
					}
				}
				if(isAll){
					this.shoppingCart[idx].isCheck = true;
					this.allSelect = true;
					for(let i=0;i<this.shoppingCart.length;i++){
						if(this.shoppingCart[i].isCheck==false){
							this.allSelect = false;
						}
					}
				}
				this.Calculation();
			}
		}
	}
</script>

<style lang="scss" scoped="scoped" >
	@import url("//at.alicdn.com/t/font_1275272_h5na9v0wd1v.css");
	.tab_active{
		color: #ff3300;
	}
	.Settlement{
		height: 8vh;
		width: 100vw;
		box-sizing: border-box;
		border: 1px solid #DCDCDC;
		background: white;
		display: flex;
		align-items: center;
		justify-content: space-between;
		padding-left:3vw ;
		>label{
			display: flex;
			.label{
				border: 1px solid #fb5e32;
				background: #fb5e32;
			}
			>label{
				margin-right: 2vw;
				width: 5vw;
				height: 5vw;
				background: white;
				border-radius:50% ;
				border: 1px solid #9D9D9D;
				position: relative;
				>i{
					color: white;
					font-size: 12px;
					position: absolute;
					top: 50%;
					left: 50%;
					transform: translate(-50%,-50%);
				}
				input{
					display: none;
				}
			}
		}
		>div{
			display: flex;
			align-items: center;
			>div:nth-of-type(2){
				margin-left: 2vw;
				width:30vw;
				height: 8vh;
				background: #fb5e32;
				text-align: center;
				line-height: 8vh;
				color: white;
			}
		}

	}
	.commodity{
		width: 100%;
		height:16vh;
		display: flex;
		align-items: center;
		box-sizing: border-box;
		padding: 0 3vw;
		.label{
			border: 1px solid #fb5e32;
			background: #fb5e32;
		}
		>label{
			margin-right: 2vw;
			width: 5vw;
			height: 5vw;
			background: white;
			border-radius:50% ;
			border: 1px solid #9D9D9D;
			position: relative;
			>i{
				color: white;
				font-size: 12px;
				position: absolute;
				top: 50%;
				left: 50%;
				transform: translate(-50%,-50%);
			}
			input{
				display: none;
			}
		}
		>div{
			>div:nth-of-type(1){
				width: 20vw;
				height: 20vw;
				border-radius:1vw ;
				overflow: hidden;
				>img{
					width: 100%;
					height: 100%;
				}
			}
			>div{
				display: inline-block;
			}
			>div:nth-of-type(2){
				margin-left: 2vw;
				width:62vw;
				>p{
					font-size: 14px;
				}
				>span{
					font-size: 12px;
					color: #9D9D9D;
				}
				.div{
					display: flex;
					justify-content: space-between;
					>div:nth-of-type(2){
						width: 20vw;
						border:1px solid #9D9D9D ;
						box-sizing: border-box;
						>span{
							width: 33%;
							text-align: center;
							display: inline-block;
						}
					}
					
				}
			}
		}
	}
	.Shopping{
		width: 100vw;
		height:76vh;
		overflow: hidden;
		overflow-y: scroll;
		>.Shop{
			width: 98%;
			margin:0 auto;
			border-radius:3vw;
			background: white;
			>div:nth-of-type(1){
				width: 100%;
				margin-top:1vh ;
				height:6vh;
				display: flex;
				align-items: center;
				box-sizing: border-box;
				padding: 0 3vw;
				border-bottom:1px solid #9D9D9D ;
				.label{
					border: 1px solid #fb5e32;
					background: #fb5e32;
				}
				>label{
					margin-right: 2vw;
					width: 5vw;
					height: 5vw;
					background: white;
					border-radius:50% ;
					border: 1px solid #9D9D9D;
					position: relative;
					>i{
						color: white;
						font-size: 12px;
						position: absolute;
						top: 50%;
						left: 50%;
						transform: translate(-50%,-50%);
					}
					input{
						display: none;
					}
				}
				>div{
					>i{
						margin-right: 1vw;
					}
				}
			}
		}
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
	.ShoppingCart{
		width: 100%;
		height: 100%;
		background: aliceblue;
		position: relative;
	}
</style>