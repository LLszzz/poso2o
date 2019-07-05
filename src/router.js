import Vue from 'vue'
import Router from 'vue-router'
import Live from './views/Live.vue'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Live',
      component: Live
    },
    {
    	path:"/Message",
    	name:"Message",
    	component:()=>import("@/views/Message.vue")
    },
    {
    	path:"/ShoppingCart",
    	name:"ShoppingCart",
    	component:()=>import("@/views/ShoppingCart.vue")
    },
    {
    	path:"/Mine",
    	name:"Mine",
    	component:()=>import("@/views/Mine.vue")
    },
    {
    	path:"/Review",
    	name:"Review",
    	component:()=>import("@/views/Review.vue")
    },
    {
    	path:"/Video",
    	name:"Video",
    	component:()=>import("@/views/Video.vue")
    },
    {
    	path:"/Shop",
    	name:"Shop",
    	component:()=>import("@/views/Shop.vue")
    },
    {
    	path:"/personal/ChangePhone",
    	name:"ChangePhone",
    	component:()=>import("@/views/personal/ChangePhone.vue")
    },
    {
    	path:"/personal/OrderList",
    	name:"OrderList",
    	component:()=>import("@/views/personal/OrderList.vue")
    }
  ]
})
