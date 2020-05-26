<template>
  <div class="details">
    <detail-nav-bar @clickNav="clickNav" ref="navBar"/>
    <scroll class="content" ref="scroll"
            @scroll="scrollContent"
            :probe-type="3"
            :listen-scroll="true"
            :is-hidden="true">
      <detail-swiper :images="goods.topImages"/>
      <detail-basic-info :goods="goods"/>
      <detail-shop-info :shop-info="shopInfo"/>
      <details-goods :detail-info="detailInfo"/>
      <detail-params :detail-params="detailParams" ref="paramComp"/>
      <detail-comment :comment-info="commentInfo" ref="commentComp"/>
      <detail-recommend :recommend-list="recommendList" ref="recommendComp"/>
    </scroll>
    <back-to-top :is-show-top="isShowTop" @clickTop="clickToTop"/>
    <detail-bottom @addCart="addCart"/>
  </div>
</template>

<script>
  import {getDetailData, getRecommend, Goods, ShopInfo} from "network/details";
  import {throttle} from "@/common/utils";
  import {BackToMixin} from "@/common/mixin";

  import Scroll from "components/common/scroll/Scroll";
  import BackToTop from "components/content/backToTop/BackToTop";

  import DetailNavBar from "./childComps/DetailNavBar";
  import DetailSwiper from "./childComps/DetailSwiper";
  import DetailBasicInfo from "./childComps/DetailBasicInfo";
  import DetailShopInfo from "./childComps/DetailShopInfo";
  import DetailsGoods from "./childComps/DetailsGoods";
  import DetailParams from "./childComps/DetailParams";
  import DetailRecommend from "./childComps/DetailRecommend";
  import DetailComment from "./childComps/DetailComment";
  import DetailBottom from "./childComps/DetailBottom";

  export default {
    name: "Details",
    mixins: [
      BackToMixin
    ],
    components: {
      DetailNavBar,
      DetailSwiper,
      DetailBasicInfo,
      DetailShopInfo,
      DetailsGoods,
      DetailParams,
      DetailRecommend,
      DetailComment,
      DetailBottom,

      Scroll,
    },
    data() {
      return {
        goods: {},
        shopInfo: {},
        detailInfo: {},
        detailParams: {},
        recommendList: [],
        commentInfo: {},
        lazyImgListener: null,
        themeTopY: null,
        iid: null
      }
    },
    created() {

      getDetailData(this.$route.query.iid).then(res => {
        console.log(res)
        this.iid = this.$route.query.iid;
        let data = res.result;
        //取出关于商品的信息
        this.goods = new Goods(data.itemInfo, data.columns,
          data.shopInfo.services);

        //取出关于店铺的信息
        this.shopInfo = new ShopInfo(data.shopInfo);

        //取出店铺下方的效果图
        this.detailInfo = data.detailInfo;
        //取出参数信息
        this.detailParams = data.itemParams;

        //取出评论信息
        if (data.rate.cRate !== 0) {
          this.commentInfo = data.rate.list[0];
        }
      }).catch(err => {
        console.log(err)
      });

      //取出评论下方的推荐信息
      getRecommend().then(res => {
        console.log(res)
        this.recommendList = res.data.list;
      }).catch(err => {
        console.log(err)
      })
    },
    mounted() {
      let func = throttle(this.$refs.scroll.refresh, 1000);
      let recordingFunc = throttle(() => {
        //记录定位的数值
        this.themeTopY = [];
        this.themeTopY.push(0);
        this.themeTopY.push(this.$refs.paramComp?.$el?.offsetTop);
        this.themeTopY.push(this.$refs.commentComp?.$el?.offsetTop);
        this.themeTopY.push(this.$refs.recommendComp?.$el?.offsetTop);
      }, 1000);
      recordingFunc();
      this.lazyImgListener = () => {
        console.log('detail')
        func();
        recordingFunc();
      }
      //使用vue-lazyload图片懒加载的插件结合better-scroll进行图片加载完毕后刷新scroll
      this.$Lazyload.$on('loaded', this.lazyImgListener);
    },
    destroyed() {
      this.$Lazyload.$off('loaded', this.lazyImgListener);
      this.lazyImgListener = null;
    },
    methods: {
      clickNav(index) {
        if (this.themeTopY?.length > 0) {
          this.$refs.scroll.scrollTo(0, -(this.themeTopY[index]), 100);
        }
      },
      scrollContent(position) {
        let nowY = -position.y;
        this.isShowTop = nowY > 1000;

        if (this.themeTopY?.length > 0) {
          for (let i = this.themeTopY.length - 1; i >= 0; i--) {
            if (nowY >= this.themeTopY[i]) {
              this.$refs.navBar.currentIndex = i;
              break;
            }
          }
        }
      },
      addCart() {
        //获取购物车需要展示的信息
        const product = {};

        product.image = this.goods.topImages[0];
        product.title = this.goods.title;
        product.desc = this.goods.desc;
        product.iid = this.iid;
        product.price = this.goods.lowPrice;

        this.$store.dispatch('operatingCart', product)
          .then(res => {
            this.$toast.show(res);
          }).catch(err => {
          console.log(err);
        })

      }
    }
  }
</script>

<style scoped>
  .details {
    height: 100vh;

    background-color: #ffffff;
  }

  .content {
    height: calc(100% - 44px - 60px);
    overflow: hidden;
  }
</style>
