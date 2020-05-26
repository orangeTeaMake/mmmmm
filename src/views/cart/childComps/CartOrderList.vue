<template>
  <div class="orderList">
    <cart-order-lIst-item v-for="(item,index) in list"
                          :order="item"
                          :key="index"/>
  </div>
</template>

<script>
  import CartOrderLIstItem from "./CartOrderLIstItem";

  import {mapGetters} from 'vuex';

  export default {
    name: "CartOrderList",
    components: {
      CartOrderLIstItem
    },
    computed: {
      ...mapGetters({
        list: 'orderList'
      })
    }
  }
</script>

<style scoped>

</style>
