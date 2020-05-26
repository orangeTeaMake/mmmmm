<template>
  <div class="detailBasicInfo" v-if="Object.keys(goods).length > 0">
    <div class="title">{{goods.title}}</div>
    <div class="priceInfo">
      <span class="price">{{goods.price}}</span>
      <span class="oldPrice">{{goods.oldPrice}}</span>
      <span class="dicountDesc" v-show="goods.discountDesc">
        {{goods.discountDesc}}
      </span>
    </div>
    <div class="goodInfo">
      <span v-for="(item,index) in goods.columns" :key="index">
        {{item}}
      </span>
    </div>
    <div class="servicesInfo">
      <div v-for="(item,index) in goods.services" class="services"
           v-if="item.icon"
           :key="index">
        <img :src="item.icon" :key="item.icon" alt="icon">
        <span>{{item.name}}</span>
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    name: "DetailBasicInfo",
    props: {
      goods: {
        type: Object,
        default() {
          return {}
        }
      }
    }
  }
</script>

<style scoped>
  .detailBasicInfo .title {
    padding: 15px 8px;

    font-size: 17px;
    color: #222222;
  }

  .priceInfo .price {
    font-size: 24px;
    color: var(--color-high-text);
    margin: 8px;
  }

  .priceInfo .oldPrice {
    font-size: 14px;
    color: #b3b2b5;
    text-decoration: line-through;
  }

  .priceInfo .dicountDesc {
    color: white;
    background-color: var(--color-high-text);

    font-size: 11px;
    padding: 2px 2px;

    border-radius: 30px;

    position: relative;
    top: -5px;
    margin-left: 8px;
  }

  .goodInfo {
    color: #b3b2b5;
    font-size: 14px;

    display: flex;
    justify-content: space-between;
    margin: 20px 8px 5px;
    padding-bottom: 5px;

    border-bottom: 1px solid #f1f1f1;
  }

  .servicesInfo {
    display: flex;
    justify-content: space-between;

    font-size: 14px;
    color: #222222;
    padding: 18px 8px 25px;

    border-bottom: 5px solid #f2f5f8;
  }

  .servicesInfo img {
    width: 14px;
    height: 14px;
  }

  .servicesInfo .services {
    display: flex;
    align-items: center;
  }
</style>
