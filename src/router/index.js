import Vue from 'vue'
import Router from 'vue-router'
import home from '../pages/home/Home'
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
import orderDetail from "../pages/OrderDetail"
import pay from "../pages/pay/Pay"
import address from "../pages/Address"
import addAddress from "../pages/AddAddress"
import sellerGoods from "../pages/seller/SellerGoods"
import goodsPublish from "../pages/seller/GoodsPublish"
Vue.use(Router)

export default new Router({
  routes: [
    { path: '/', name: 'home', component: home },
    { path: '/home', name: 'home', component: home,meta:{index:1} },
    { path: '/cart', name: 'cart', component: cart },
    { path: '/my', name: 'my', component: my },
    {
      path: '/good-detail',
      name: 'good-detail',
      component: goodDetail,
      meta:{index:0}
    },
    {
      path: '/seller-goods',
      name: 'seller-goods',
      component: sellerGoods,
      meta:{index:0}
    },
    {
      path: '/seller-goods-publish',
      name: 'seller-goods-publish',
      component: goodsPublish,
      meta:{index:0}
    },
    {
      path: '/order',
      name: 'order',
      component: order,
      children:[
       {
        path: '/order/order-detail',
        name: '/order/order-detail',
        component: orderDetail,
       }
      ]
    },
    { path: '/author', name: 'author', component: author },
    { path: '/choose', name: 'choose', component: choose },
    { path: '/news-detail', name: 'news-detail', component: newsDetail },
    { path: '/news', name: 'news', component: news },
    { path: '/parts', name: 'parts', component: parts },
    { path: '/change', name: 'change', component: change },
    { path: '/success',name:'success',component:success},
    { path: '/my-collection',name:'my-collection',component:myCollection},
    { path: '/classify',name:'classify',component:classify},
    { path: '/order-detail',name:'order-detail',component:orderDetail},
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
      path: '/add-address',
      name:'add-address',
      component:addAddress
    }
  ],
  //路由切换页面始终回到最顶部
  // scrollBehavior(to, from, savedPosition) {
  //   return { x: 0, y: 0 }
  // }
})
