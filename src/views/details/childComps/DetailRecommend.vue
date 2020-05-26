<template>
  <div class="detailRecommend">
    <goods-list :goods-list="recommendList"/>
  </div>
</template>

<script>
  import GoodsList from "components/content/goods/GoodsList";

  export default {
    name: "DetailRecommend",
    props:{
      recommendList: {
        type: Array,
        default() {
          return []
        }
      }
    },
    components:{
      GoodsList
    }
  }
</script>

<style scoped>
  .detailRecommend {
    padding-top: 20px;
    padding-bottom: 20px;
  }
</style>
