<template>
  <div >
    <!--<News-Header></News-Header>-->
    <!--<News-Container :NewsContainer="NewsContainer"></News-Container>-->
    <div> this is seller goods</div>
    <div> <button @click="publish()"> 链接</button></div>
    <News-Footer></News-Footer>

  </div>
</template>

<script>
import axios from 'axios';
// import NewsHeader from '../../pages/news/component/NewsHeader'
// import NewsContainer from '../../pages/news/component/NewsContainer'
import NewsFooter from '../../common/Footer'
export default {
    name:"sellerGoods",
    components:{
        // NewsHeader,
        // NewsContainer,
        NewsFooter
    },
    data(){
        return{
            NewsContainer:[]
        }
    },
    created(){
        var _this=this;
        axios.get("/static/ceshi.json").then(function(res) {
           _this.NewsContainer=res.data.data.news
        })

    },
    methods: {
         publish:function(){
            this.$router.push({path:"seller-goods-publish",query:{id:1}})
        },
    }


}
</script>


<style lang="stylus" scoped>
</style>
