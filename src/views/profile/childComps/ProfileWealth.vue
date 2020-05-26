<template>
  <div class="profileWealth">
    <div class="balance">
      <div>
        <span class="numberSpan">0.00</span>元
      </div>
      <div>我的余额</div>
    </div>
    <div class="coupon">
      <div>
        <span class="numberSpan">0</span>个
      </div>
      <div>我的优惠</div>
    </div>
    <div class="integral">
      <div>
        <span class="numberSpan">0</span>分
      </div>
      <div>我的积分</div>
    </div>
  </div>
</template>

<script>
  export default {
    name: "ProfileWealth"
  }
</script>

<style scoped>
  .profileWealth{
    display: flex;

    border-bottom: 10px solid #f2f2f2;
  }
  .profileWealth>div{
    flex: 1;
    text-align: center;

    padding: 20px 0;

    font-size: 15px;
  }
  .profileWealth .numberSpan{
    font-size: 26px;
    color: red;
    font-weight: 700;
  }
  .profileWealth>div:not(:last-child) {
    border-right: 2px solid #f8f8f8;
  }
</style>
