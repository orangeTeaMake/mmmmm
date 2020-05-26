<template>
  <div class="home">
    <!--1.顶部导航栏navbar-->
    <home-nav-bar ref="navBar"/>
    <!--2.中间的内容
      1.轮播图
      2.推荐图
      3.推荐
    -->
    <tab-control :titles="new Map(titles)"
                 @clickTabControl="clickTab"
                 ref="tabControl1"
                 v-show="isFixedTab"/>
    <scroll class="content" ref="scroll"
            :listen-scroll="true"
            :probe-type="3"
            :pullup="true"
            @scrollToEnd="scrollEnd"
            @scroll="contentScroll">
      <home-swiper :banner="carouselData"/>
      <home-recommend :recommend="recommend"/>
      <home-pop/>
      <tab-control ref="tabControl2"
                   v-show="!isFixedTab"
                   :titles="new Map(titles)"
                   @clickTabControl="clickTab"/>
      <goods-list :goods-list="getSelectGoodsList"/>
    </scroll>
    <back-to-top @clickTop="clickToTop" :is-show-top="isShowTop"/>
  </div>
</template>

<script>
  import HomeNavBar from "./childComps/HomeNavBar";
  import HomeSwiper from "./childComps/HomeSwiper";
  import HomeRecommend from "./childComps/HomeRecommend";
  import HomePop from "./childComps/HomePop";

  import GoodsList from "components/content/goods/GoodsList";
  import TabControl from "components/content/tabControl/TabControl";
  import Scroll from "components/common/scroll/Scroll";
  import BackToTop from "components/content/backToTop/BackToTop";

  import {getMultiData, getHomeData} from "network/home";

  import {POP, NEW, SELL} from "@/common/const";
  import {throttle} from "@/common/utils";
  import {BackToMixin} from "@/common/mixin";

  export default {
    name: "Home",
    mixins:[
      BackToMixin
    ],
    data() {
      return {
        carouselData: [],
        recommend: [],
        titles: [
          [POP, '流行'],
          [NEW, '新款'],
          [SELL, '精选']
        ],
        [POP]: {list: [], page: 0},
        [NEW]: {list: [], page: 0},
        [SELL]: {list: [], page: 0},
        currentKey: POP,
        lazyImgListener: null,
        scrollY: 0,
        isFixedTab: false,
        tc_OffsetTop: 0
      }
    },
    components: {
      HomeNavBar,
      HomeSwiper,
      HomeRecommend,
      HomePop,
      GoodsList,
      Scroll,

      TabControl
    },
    created() {
      this.getHomeSwiperData();
      this.getHomeRecommendData();

      this.getGoodsListData(POP);
      this.getGoodsListData(NEW);
      this.getGoodsListData(SELL);
    },
    mounted() {
      this.setImageLoaded();
    },
    activated() {
      if (!this.lazyImgListener) {
        this.setImageLoaded();
      }
      this.$refs.scroll.scrollTo(0, this.scrollY);
      this.$refs.scroll.refresh();
    },
    deactivated() {
      console.log('deactivated')
      this.scrollY = this.$refs.scroll.getScrollY();
      if (this.lazyImgListener) {
        this.$Lazyload.$off('loaded', this.lazyImgListener);
        this.lazyImgListener = null;
      }
    },
    methods: {
      getHomeSwiperData() {
        getMultiData().then(res => {
          this.carouselData = res.data.banner.list;
        }).catch(err => {
          console.log(err)
        })
      },
      getHomeRecommendData() {
        getMultiData().then(res => {
          this.recommend = res.data.recommend.list;
        }).catch(err => {
          console.log(err)
        })
      },
      getGoodsListData(type) {
        let nowPage = this[type].page + 1;
        return getHomeData(type, nowPage).then(res => {
          this[type].list.push(...res.data.list)
          this[type].page++;
          console.log(res)
          return true;
        }).catch(err => {
          console.log(err)
          return false;
        })
      },
      clickTab(key, index) {
        this.currentKey = key;

        this.$refs.tabControl2.currentIndex = index;
        this.$refs.tabControl1.currentIndex = index;
      },
      contentScroll(position) {
        this.isShowTop = (-position.y) > 1000;

        if (this.$refs.tabControl2.$el.offsetTop) {
          //由于scroll内部代码组件图片可能加载过慢
          this.tc_OffsetTop = this.$refs.tabControl2.$el.offsetTop;
        }
        this.isFixedTab = this.tc_OffsetTop < (-position.y);
      },
      scrollEnd() {
        console.log('scrollend');
        this.$refs.scroll.isHidden = false;
        // this.$refs.scroll.refresh();
        this.getGoodsListData(this.currentKey).catch(err => {
          console.log(err)
          this.$refs.scroll.isHidden = true;
        });
      },
      setImageLoaded() {
        let func = throttle(this.$refs.scroll.refresh, 1000);
        this.lazyImgListener = () => {
          console.log('home');
          func();
        }
        //使用vue-lazyload图片懒加载的插件结合better-scroll进行图片加载完毕后刷新scroll
        this.$Lazyload.$on('loaded', this.lazyImgListener);
      }
    },
    computed: {
      getSelectGoodsList() {
        return this[this.currentKey].list;
      }
    }
  }
</script>

<style scoped>
  .home {
    position: relative;

    background-color: #ffffff;
    height: calc(100vh - 44px);
  }

  .content {
    height: calc(100% - 47px);
    overflow: hidden;
  }
</style>
