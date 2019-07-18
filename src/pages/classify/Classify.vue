<template>
<div>
<Classify-Header title="商品分类"></Classify-Header>
  <div class="calssify-con" >
        <div class="calssify-left" ref="wrapper">
            <ul class="calssify-left-ul" >
                <li v-for="(list,index) in left" :key="index" @click="swichCategory(index)" :class="{active:index===classifyIndex}">
                    {{list.categoryName}}
                </li>
            </ul>
        </div>
        <div class="calssify-rigth" ref="wrapper2">
            <ul class="calssify-left-ul">
                <li v-for="(list,index) in right" :key="index" @click="goDetails(list.goodsId)">
                     <img v-lazy="getImgUrl(list.listPictureUrl)">
                    <span>{{list.goodsName}}</span>
                </li>
            </ul>
        </div>
    </div>
<v-footer></v-footer>
</div>

</template>

<script>
import ClassifyHeader from "../../common/Header";
import footer from "../../common/Footer";
import axios from "axios";
import { mapGetters } from "vuex";
export default {
  data() {
    return {
      left: [],
      right: [],
      list: [],
      ce: [],
      key2: "",
      classifyIndex: 0
    };
  },
  components: {
    "v-footer": footer,
    ClassifyHeader
  },
  computed: {
    ...mapGetters(["this.$store.state.sindex"])
  },
  created() {
    var _this = this;
    axios.get("/v1/mall/category/list/1").then(function(res) {
     _this.left = res.data;
      if(_this.left){
        let first = _this.left[0];
        //获取对应商品
        _this.getGoodsByCategory(first.categoryId)
      }
    });

  },
  methods: {
    swichCategory(index) {
      var _this = this;
      let checked = _this.left[index];
      _this.classifyIndex = index;
      _this.getGoodsByCategory(checked.categoryId)
    },
    getImgUrl:function(imgUrl) {
      return '/v1/filecenter/download/'+imgUrl;
    },
    getGoodsByCategory:function(categoryId) {
      var _this = this;
      axios.get("/v1/mall/goods/page",{params:{page:1,limit:20, categoryId:categoryId}}).then(function(ret) {
        _this.right = ret.data.content;
      });
    },
    goDetails(id) {
      console.log(id);
      this.$router.push({
        path: "good-detail",
        query: { goodsId: id }
      });
    }
  }
};
</script>

<style lang="stylus" scoped>
.active {
    border-left: 2px solid;
    background: #ffffff;
    color: #199cfe;
}

.calssify-con {
    display: flex;
    overflow: hidden;
    position: absolute;
    width: 100%;
    top: 0;
    bottom: 0;
    padding-top: 1.45rem;

    .calssify-left {
        flex: 0 0 2.2rem;
        width: 4rem;
        height: 100%;
        background: #f6f6f6;
        // border-right: 10px solid #f6f6f6;
        margin-bottom: 1.51rem;
        font-size 0.35rem

        li {
            height: 1.3rem;
            line-height: 1.3rem;
            text-align: center;
        }
    }

    .calssify-rigth {
        flex: 1;
        height: 100%;
        background: white;
        margin-bottom: 1.51rem;

        ul {
            display: flex;
            flex-wrap: wrap;

            li {
                display: flex;
                flex-direction: column;
                text-align: center;
                width: 33%;
                margin-top: 0.3rem;
                font-size: 0.34rem;
                float: left;

                img {
                    width: 1.98rem;
                    display: block;
                    margin: auto;
                }

                span {
                    color: #999;
                    line-height: 0.9rem;
                    font-size: 0.34rem;
                }
            }
        }
    }
}
</style>
