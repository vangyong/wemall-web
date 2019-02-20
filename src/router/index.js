import Vue from 'vue'
import Router from 'vue-router'
import Home from '../pages/home/Home'
import cart from '../pages/cart/Cart'
import my from '../pages/my/My'
import goodDetail from '../pages/detail/GoodDetail'
import order from '../pages/Order'
import author from '../pages/Author'
import choose from '../pages/Choose'
import news from '../pages/news/News'
import newsDetail from '../pages/news/NewsDetail'
import parts from '../pages/Parts'
import change from '../pages/detail/Change'
import success from '../common/Success'
import myCollection from '../pages/my/MyCollection'
import classify from "../pages/classify/Classify"
import OorderDetails from "../pages/OrderDetails"
import pay from "../pages/pay/Pay"
import address from "../pages/Address"
import add_address from "../pages/AddAddress"
Vue.use(Router)

export default new Router({
  routes: [
    { path: '/', name: 'Home', component: Home },
    { path: '/Home', name: 'Home', component: Home,meta:{index:1} },
    { path: '/cart', name: 'cart', component: cart },
    { path: '/my', name: 'my', component: my },
    {
      path: '/goodDetail',
      name: 'goodDetail',
      component: goodDetail,
      meta:{index:0}
    },
    {
      path: '/order',
      name: 'order',
      component: order,
      children:[
       {
        path: '/order/OrderDetails',
        name: '/order/OrderDetails',
        component: OrderDetails,
       }
      ]
    },
    { path: '/author', name: 'author', component: author },
    { path: '/choose', name: 'choose', component: choose },
    { path: '/newsDetail', name: 'newsDetail', component: newsDetail },
    { path: '/news', name: 'news', component: news },
    { path: '/parts', name: 'parts', component: parts },
    { path: '/change', name: 'change', component: change },
    { path: '/success',name:'success',component:success},
    { path: '/myCollection',name:'myCollection',component:MyCollection},
    { path: '/classify',name:'classify',component:classify},
    { path: '/orderDetails',name:'orderDetails',component:OrderDetails},
    {
      path: '/pay',
      name:'pay',
      component:pay
    },
    {
      path: '/address',
      name:'address',
      component:address
    },
    {
      path: '/add_address',
      name:'add_address',
      component:add_address
    }
  ],
  //路由切换页面始终回到最顶部
  // scrollBehavior(to, from, savedPosition) {
  //   return { x: 0, y: 0 }
  // }
})
