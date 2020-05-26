<template>
  <div class="cartOrderListItem" v-if="Object.keys(order).length !== 0">
    <img class="tickImg"
         :class="{selected: order.checked}"
         @click="clickOrder"
         src="~assets/img/common/tick.svg" alt="select">
    <div class="showImg">
      <img :src="order.image" alt="img">
    </div>
    <div class="introduce">
      <div>{{order.title}}</div>
      <div>商品描述：{{order.desc}}</div>
      <div class="bottom">
        <span>￥{{order.price}}</span>
        <span>X{{order.count}}</span>
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    name: "CartOrderLIstItem",
    props: {
      order: {
        type: Object,
        default() {
          return {}
        }
      }
    },
    methods: {
      clickOrder() {
        this.order.checked = !this.order.checked;
      }
    }
  }
</script>

<style scoped>
  .cartOrderListItem {
    display: flex;
    align-items: center;

    padding: 10px 5px;
    border-bottom: 1px solid #cccccc;
  }

  .cartOrderListItem .tickImg {
    width: 20px;
    height: 20px;

    border-radius: 50%;
    background-color: #d6d6d6;
  }

  .cartOrderListItem .showImg img {
    width: 80px;
    height: 100px;
    border-radius: 6px;

    margin: 0 10px;
    display: block;
  }

  .cartOrderListItem .introduce {
    padding-right: 5px;
    overflow: hidden;
  }

  .cartOrderListItem .introduce div {
    overflow: hidden;
    white-space: nowrap;
    text-overflow: ellipsis;
  }

  .cartOrderListItem .introduce div:first-child {
    font-size: 18px;
    color: #222222;

    padding-bottom: 15px;
  }

  .cartOrderListItem .introduce div:nth-of-type(2) {
    font-size: 14px;
    padding-bottom: 30px;
  }

  .cartOrderListItem .introduce .bottom {
    padding-bottom: 5px;
    font-weight: 700;

    display: flex;
    justify-content: space-between;
  }

  .cartOrderListItem .introduce .bottom span:first-child {
    color: red;
  }

  .cartOrderListItem .selected {
    background-color: orangered !important;
  }
</style>
