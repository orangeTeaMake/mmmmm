<template>
  <div class="goodsListItem">
    <img v-lazy="getImg" alt="goods.title" :key="getImg" class="showImg">
    <div class="title">{{goods.title}}</div>
    <div>
      <span class="price">￥{{goods.price}}</span>
      <span class="star">{{goods.cfav}}</span>
    </div>
  </div>
</template>

<script>
  export default {
    name: "GoodsListItem",
    props: {
      goods: {
        type: Object,
        default() {
          return {}
        }
      }
    },
    computed:{
      getImg() {
        return  this.goods.image || this.goods.img || this.goods.show.img;
      }
    }
  }
</script>

<style scoped>
  .goodsListItem{
    width: 48%;

    overflow: hidden;
    padding-top: 12px;
    padding-bottom: 5px;

    font-size: 12px;
    text-align: center;
  }
  .showImg{
    width: 100%;
  }

  .title{
    overflow: hidden;
    white-space: nowrap;
    text-overflow: ellipsis;

    padding-top: 5px;
  }
  .price{
    margin-right: 5px;
    color: var(--color-high-text);
  }
  .star::before{
    content: '';
    width: 14px;
    height: 14px;
    display: inline-block;
    position: relative;
    right: -1px;
    top: 2px;
    background: url("~assets/img/common/star.svg") 0 0/ 14px 14px;
  }
</style>
