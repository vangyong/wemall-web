<template>
  <div class="home-swiper">
        <mt-swipe :auto="4000">
          <mt-swipe-item v-for="(list,index) in swiper" :key="index">
            <img :src= "getImgUrl(list.imgUrl)">
          </mt-swipe-item>
        </mt-swipe>
  </div>
</template>

<script>
export default {
  name:"HomeSwipe",
  data(){
    return{
      swiper:[]
    }
  },
  methods:{
    getBannerList:function(){
      this.$http.get('/v1/mall/banner/list').then(response => {
        this.swiper = response.data
      }, response => {
        console.log("getBannerList error");
      });
    },
    getImgUrl:function(imgUrl) {
      return '/v1/filecenter/download/'+imgUrl;
    }
  },
  created:function(){

  },
  mounted:function(){
    this.getBannerList()
  }
}
</script>


<style lang="stylus" scoped>
    .home-swiper
        height 6.5rem;
        margin-top 1px;
        img
            width 100%;
            height 6.5rem
</style>
