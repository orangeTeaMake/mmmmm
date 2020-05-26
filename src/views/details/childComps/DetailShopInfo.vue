<template>
  <div class="detailShopInfo" v-if="Object.keys(shopInfo).length > 0">
    <div class="shopName">
      <img :src="shopInfo.logo" alt="logo">
      <span>{{shopInfo.name}}</span>
    </div>
    <div class="shopDetails">
      <div class="shopGoods">
        <div>
          <div class="numberInfo">{{shopInfo.sells | formatPrice}}</div>
          <div>总销量</div>
        </div>
        <div>
          <div class="numberInfo">{{shopInfo.goodsTotal}}</div>
          <div>全部宝贝</div>
        </div>
      </div>
      <div>
        <table class="scoreInfo">
          <tr v-for="(item,index) in shopInfo.score" :key="index">
            <td>{{item.name}}</td>
            <td class="scoreNumber">{{item.score}}</td>
            <td class="low"><span>{{item.isBetter ? '高':'低'}}</span></td>
          </tr>
        </table>
      </div>
    </div>
    <div class="enterShop">
      <div >
        进店逛逛
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    name: "DetailShopInfo",
    props: {
      shopInfo: {
        type: Object,
        default() {
          return {}
        }
      }
    },
    filters:{
      formatPrice(value) {
        return (value / 10000).toFixed(1) + "万";
      }
    }
  }
</script>

<style scoped>
  .shopName{
    display: flex;
    align-items: center;

    font-size: 17px;
  }
  .shopName img{
    width: 50px;
    height: 50px;

    margin: 20px 8px;

    border: 1px solid #f4f4f4;
    border-radius: 50%;
  }

  .shopDetails{
    display: flex;
    align-items: center;
  }

  .shopDetails>div{
    flex: 1;
  }
  .shopGoods{
    display: flex;

    text-align: center;
    border-right: 1px solid #e5e5e5;
  }
  .shopGoods>div{
    flex: 1;

    font-size: 12px;
    color: #222222;
  }
  .shopGoods>div>div{
    margin: 5px;
  }
  .shopGoods .numberInfo{
    font-size: 18px;
    color: #454545;
  }
  .scoreInfo{
    margin: 0 auto;
    font-size: 14px;
    color: #222222;
  }
  .scoreInfo td{
    padding: 3px;
  }
  .scoreInfo .scoreNumber{
    color: red;
  }
  .scoreInfo .low span{
    background-color: red;
    color: white;
  }
  .enterShop{
    border-bottom: 5px solid #f2f5f8;
  }
  .enterShop div{
    font-size: 14px;
    width: 150px;
    height: 35px;

    background-color: #f2f5f8;
    margin: 20px auto;
    display: flex;
    align-items: center;
    justify-content: space-around;

    border-radius: 10px;
  }
</style>
