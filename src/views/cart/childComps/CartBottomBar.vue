<template>
  <div class="cartBottomBar">
    <img class="tickImg"
         src="~assets/img/common/tick.svg" alt="select"
         :class="{allChecked: list.length > 0 && list.length <= getSelectOrderList.length}"
         @click="setAllCheck">
    <span>全选</span>
    <div>
      合计：{{getTotalPrice}}
    </div>
    <div class="settlement">去计算({{getSelectOrderList.length}})</div>
  </div>
</template>

<script>
  import {mapGetters} from 'vuex'

  export default {
    name: "CartBottomBar",
    computed: {
      ...mapGetters({
        list: 'orderList'
      }),
      getSelectOrderList() {
        return this.list.filter(order => {
          return order.checked;
        });
      },
      getTotalPrice() {
        return this.getSelectOrderList
          .reduce((initValue, order) => {
            return initValue + order.count * order.price;
          }, 0).toFixed(2);
      }
    },
    methods: {
      setAllCheck() {
        let nowCheckedState = this.list.length > 0
          && this.list.length <= this.getSelectOrderList.length;
        this.list.map(order => {
          order.checked = !nowCheckedState;
        });
      }
    }
  }
</script>

<style scoped>
  .cartBottomBar {
    height: 50px;
    width: 100%;
    background-color: #eeeeee;
    box-shadow: 0 -1px 6px 1px #d0d0d0;

    display: flex;
    align-items: center;
    position: relative;
  }

  .cartBottomBar .tickImg {
    width: 20px;
    height: 20px;

    border-radius: 50%;
    background-color: #d6d6d6;

    margin-left: 5px;
  }

  .cartBottomBar span {
    margin-right: 15px;
  }

  .cartBottomBar .settlement {
    width: 105px;
    height: 100%;
    color: white;
    background-color: red;

    position: absolute;
    right: 0;

    text-align: center;

    line-height: 50px;
  }

  .cartBottomBar .allChecked {
    background-color: red !important;
  }
</style>
