<template>
  <div class="detailSwiper">
    <swiper>
      <swiper-item v-for="(item,index) in images" :key="index">
        <div class="detailsImg">
          <img :src="item" alt="">
        </div>
      </swiper-item>
    </swiper>
  </div>
</template>

<script>
  import Swiper from "components/common/swiper/Swiper";
  import SwiperItem from "components/common/swiper/SwiperItem";

  export default {
    name: "DetailSwiper",
    props: {
      images: {
        type: Array,
        default() {
          return []
        }
      }
    },
    components: {
      Swiper,
      SwiperItem
    }
  }
</script>

<style scoped>
  @keyframes scaleDraw {  /*定义关键帧、scaleDrew是需要绑定到选择器的关键帧名称*/
    0%{
      transform: translateY(-10%);  /*开始为原始大小*/
    }
    25%{
      transform: translateY(-25%); /*放大1.1倍*/
    }
    50%{
      transform: translateY(-30%);
    }
    75%{
      transform: translateY(-45%);
    }
  }
  .detailSwiper .detailsImg{
    height: 300px;
    overflow: hidden;
  }
  .detailSwiper img{
    width: 100%;
    animation: scaleDraw 4s ease-in-out infinite;
  }
</style>
