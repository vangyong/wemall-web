<template>
  <div class="container">
      <div class="container-bj">
          <img src="/static/img/tou.jpg">
          <span>Myfwk</span>
          <p>不要被人言左右，要相信自己的判断</p>
      </div>

      <div class="container-integral">
          <p @click="get1()">
              <span>0</span>
              <span>优惠券</span>
          </p>
          <p @click="get2()">
              <span>0</span>
              <span>换鼓励金</span>
          </p>
          <p>
              <span>{{jifeng}}</span>
              <span>积分</span>
          </p>
      </div>

     <div class="container-seller">
         <div class="container-seller-1">
             <p class="left">掌柜店铺</p>
         </div>
         <div class="container-seller-2">
           <p class="" v-for="list in container_seller">
             <img :src="list.img">
             <span>{{list.name}}</span>
           </p>
         </div>
     </div>



      <div class="container-buyer">
          <!--<router-link to="/my-collection" class="con">-->
                 <!--<div class="con-left">-->
                  <!--<i class="iconfont icon-collection"></i>-->
                  <!--<span>我的收藏</span>-->
              <!--</div>-->
              <!--<div class="con-rigth">-->
                  <!--<i class="iconfont icon-youjiantou"></i>-->
              <!--</div>-->
          <!--</router-link>-->

            <!--<router-link to="/address" class="con" id="transition">-->
                 <!--<div class="con-left">-->
                  <!--<i class="iconfont icon-gouwuche"></i>-->
                  <!--<span>我的收货地址</span>-->
              <!--</div>-->
              <!--<div class="con-rigth">-->
                  <!--<i class="iconfont icon-youjiantou"></i>-->
              <!--</div>-->
          <!--</router-link>-->

           <!--<router-link to="/cart" class="con" id="transition">-->
                 <!--<div class="con-left">-->
                  <!--<i class="iconfont icon-gouwuche"></i>-->
                  <!--<span>我的购物车</span>-->
              <!--</div>-->
              <!--<div class="con-rigth">-->
                  <!--<i class="iconfont icon-youjiantou"></i>-->
              <!--</div>-->
          <!--</router-link>-->

          <div class="container-buyer-1">
            <p class="left">买家信息</p>
          </div>
          <div class="container-buyer-2">
            <p class="" v-for="list in container_buyer">
              <img :src="list.img">
              <span>{{list.name}}</span>
            </p>
          </div>

      </div>
  </div>
</template>

<script>
import { mapState, mapMutations, mapGetters } from "vuex";
export default {
  name:"Mycontainer",
  data(){
      return{
          container_seller:[
              {
                  img:"/static/img/111.png",
                  name:"店铺管理"
              },
               {
                  img:"/static/img/222.png",
                  name:"商品管理"
              },
               {
                  img:"/static/img/333.png",
                  name:"订单管理"
              }, {
                  img:"/static/img/444.png",
                  name:"统计对账"
              }
          ],
          container_buyer:[
            {
              img:"/static/img/111.png",
              name:"我的订单"
            },
            {
              img:"/static/img/222.png",
              name:"红包"
            }, {
              img:"/static/img/333.png",
              name:"优惠券"
            },{
              img:"/static/img/444.png",
              name:"入驻商城"
            },{
              img:"/static/img/444.png",
              name:"联系客服"
            },
          ]
      }
  },
    computed:{
      ...mapGetters(["this.$store.state.orders"]),
       jifeng(){
          var jifeng=0
          this.$store.state.orders.forEach(list => {
            jifeng += parseInt(list.price)
        });
         return jifeng;
      }
  },
  methods:{
    get1:function(){
      //http://localhost:13000/v1/user/1
      this.$http.get('/v1/user/1').then(response => {
        console.log(response.data);
        // this.someData = response.body;
      }, response => {
        console.log("error");
      });
    },
    get2:function() {
      this.$http.get('/v1/user/2').then(response => {
        console.log(response.data);
        // this.someData = response.body;
      }, response => {
        console.log("error");
      });
    }
  }
}
</script>


<style lang="stylus" scoped>




.container {
    width: 100%;
    height: 5rem;
    position: absolute;
    top: 1.45rem;
    .container-bj {
        width: 100%;
        height: 100%;
        background: url('/static/img/bj.png') no-repeat;
        background-size: 100% 100%;
        display: flex;
        justify-content: center;
        align-items: center;
        flex-direction: column;

        img {
            width: 2.0rem;
            height: 2.0rem;
            border-radius: 50%;
        }

        span {
            color: #ffffff;
            font-size: 0.5rem;
        }

        p {
            font-size 0.35rem;
            color: #ffffff;
        }
    }
    .container-integral{
        width 100%
        height 1.5rem
        background #ffffff
        display: flex;
        justify-content: center
        p{
            width 33%
            height 100%
            font-size .36rem
            line-height .6rem
            font-weight 500
            float left
            display flex
            flex-direction column
            text-align center
            justify-content: center;
        }
    }

    .container-seller{
      width 100%
      height 3.5rem
      background white
      display block
      margin-bottom .15rem
      margin-top .15rem
      font-size 0.35rem
      .container-seller-1{
        width 100%
        height 1.5rem
        .left{
          float: left;
          display: block;
          line-height: 1.5rem;
          margin-left: .5rem;
          font-size: 0.4rem;
        }
        .right {
          float: right;
          line-height: 1.5rem;
          margin-right: .6rem;
          font-size: 0.4rem;
        }
      }
      .container-seller-2{
        width 100%
        height 1.5rem
        display flex
        justify-content center
        align-items center

        p{
          width 25%
          display flex
          flex-direction column
          margin-top .3rem

          img{
            width .8rem
            height .8rem
            margin auto
          }
          span{
            text-align center
            padding-top .3rem
          }
        }
      }
    }

    .container-buyer{
      width 100%
      height 3.5rem
      background white
      display block
      margin-bottom .15rem
      margin-top .15rem
      font-size 0.35rem
      .container-buyer-1{
        width 100%
        height 1.0rem
        .left{
          float: left;
          display: block;
          line-height: 1.0rem;
          margin-left: .5rem;
          font-size: 0.4rem;
        }
        .right {
          float: right;
          line-height: 1.5rem;
          margin-right: .6rem;
          font-size: 0.4rem;
        }
      }
      .container-buyer-2{
        width 100%
        height 1.0rem
        display flex
        justify-content center
        align-items center

        p{
          width 25%
          display flex
          flex-direction column
          margin-top .3rem

          img{
            width .8rem
            height .8rem
            margin auto
          }
          span{
            text-align center
            padding-top .3rem
          }
        }
      }
    }


}
</style>
