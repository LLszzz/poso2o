import Vue from 'vue'
import Router from 'vue-router'
import Live from './views/Live.vue'

Vue.use(Router)

export default new Router({
  routes: [
//  {
//    path: '/',
//    name: 'Live',
//    component: Live
//  },
//  {
//  	path:"/Message",
//  	name:"Message",
//  	component:()=>import("@/views/Message.vue")
//  },
//  {
//  	path:"/ShoppingCart",
//  	name:"ShoppingCart",
//  	component:()=>import("@/views/ShoppingCart.vue")
//  },
//  {
//  	path:"/Mine",
//  	name:"Mine",
//  	component:()=>import("@/views/Mine.vue")
//  },
//  {
//  	path:"/Review",
//  	name:"Review",
//  	component:()=>import("@/views/Review.vue")
//  },
    {
    	path:"/",
    	name:"Video",
    	component:()=>import("@/views/Video.vue")
    },
    {
    	path:"/Shop",
    	name:"Shop",
    	component:()=>import("@/views/Shop.vue")
    },
//  {
//  	path:"/personal/ChangePhone",
//  	name:"ChangePhone",
//  	component:()=>import("@/views/personal/ChangePhone.vue")
//  },
//  {
//  	path:"/personal/OrderList",
//  	name:"OrderList",
//  	component:()=>import("@/views/personal/OrderList.vue")
//  },
//  {
//  	path:"/ShopDetails",
//  	name:"ShopDetails",
//  	component:()=>import("@/views/shop/ShopDetails.vue")
//  },
//  {
//  	path:"/ShopComment",
//  	name:"ShopComment",
//  	component:()=>import("@/views/shop/ShopComment.vue")
//  },
//  {
//  	path:"/Hint",
//  	name:"Hint",
//  	component:()=>import("@/views/Hint/Hint.vue")
//  },
//  {
//  	path:"/Service",
//  	name:"Service",
//  	component:()=>import("@/views/Service.vue")
//  },
    {
    	path:"/Complaints",
    	name:"Complaints",
    	component:()=>import("@/views/Complaints/Complaints.vue")
    }
  ]
})
