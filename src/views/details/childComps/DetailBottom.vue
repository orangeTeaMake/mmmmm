<template>
  <div class="detailBottom">
    <div class="icon">
      <img src="~assets/img/detail/service.svg" alt="客服">
      <div>客服</div>
    </div>
    <div class="icon">
      <img src="~assets/img/detail/shop.svg" alt="店铺">
      <div>店铺</div>
    </div>
    <div class="icon">
      <img src="~assets/img/detail/like.svg" alt="收藏">
      <div>收藏</div>
    </div>
    <div class="buttonDiv" @click="clickCart">加入购物车</div>
    <div class="buttonDiv">购买</div>
  </div>
</template>

<script>
  export default {
    name: "DetailBottom",
    methods:{
      clickCart() {
        this.$emit('addCart');
      }
    }
  }
</script>

<style scoped>
  .detailBottom{
    display: flex;
    align-items: center;

    text-align: center;

    position: relative;
    z-index: 9;
    background-color: #ffffff;
    box-shadow: 0 0 3px 2px rgba(242, 245, 248, .6);
  }
  .buttonDiv{
    width: 95px;
    height: 60px;
    display: flex;
    align-items: center;
    justify-content: center;
  }
  .detailBottom .buttonDiv:nth-last-child(2){
    background-color: #ffe817;
    /*font-size: 14px;*/
    color: #222222;
  }
  .detailBottom .buttonDiv:last-child{
    background-color: #ff6699;
    color: white;
  }
  .icon{
    flex: 1;
    white-space: nowrap;
    font-size: 14px;
    color: #222222;
  }
  .icon img{
    height: 25px;
    width: 25px;
  }
</style>
