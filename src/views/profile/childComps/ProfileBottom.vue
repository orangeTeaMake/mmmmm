<template>
  <div class="profileBottom">
      <div class="option">
        <div>
          <img src="~assets/img/profile/msg.svg" alt="msg">
          <div class="desc">我的消息</div>
        </div>
        <div>
          <img src="~assets/img/profile/mall.svg" alt="mall">
          <div class="desc">积分商城</div>
        </div>
        <div>
          <img src="~assets/img/profile/vip.svg" alt="vip">
          <div class="desc">会员卡</div>
        </div>
      </div>
      <div class="option">
        <div>
          <img src="~assets/img/profile/cart.svg" alt="cart">
          <div class="desc">我的购物车</div>
        </div>
        <div>
          <img src="~assets/img/profile/download.svg" alt="mall">
          <div class="desc">下载购物APP</div>
        </div>
      </div>
  </div>
</template>

<script>
  export default {
    name: "ProfileBottom"
  }
</script>

<style scoped>
  .profileBottom .option>div{
    display: flex;
    align-items: center;
  }
  .profileBottom img{
    width: 25px;
    height: 25px;
    margin-left: 20px;
    margin-right: 3px;
  }
  .profileBottom .desc{
    width: 100%;
    padding: 15px 5px;
  }
  .profileBottom .option>div:not(:last-child) .desc {
    border-bottom: 1px solid #efefef;
  }
  .profileBottom>div:not(:last-child){
    border-bottom: 10px solid #f2f2f2;
  }
</style>
