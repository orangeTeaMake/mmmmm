<template>
  <div class="cart">
    <cart-nav-bar/>
    <scroll class="content" :is-hidden="true">
      <cart-order-list/>
    </scroll>
    <cart-bottom-bar/>
  </div>
</template>

<script>
  import CartNavBar from "./childComps/CartNavBar";
  import CartOrderList from "./childComps/CartOrderList";
  import CartBottomBar from "./childComps/CartBottomBar";
  import Scroll from "../../components/common/scroll/Scroll";

  export default {
    name: "Cart",
    components: {
      Scroll,
      CartBottomBar,
      CartNavBar,
      CartOrderList
    }
  }
</script>

<style scoped>
  .cart{
    height: calc(100vh - 47px);
  }
  .content{
    height: calc(100% - 44px - 50px);
    overflow: hidden;
  }
</style>
