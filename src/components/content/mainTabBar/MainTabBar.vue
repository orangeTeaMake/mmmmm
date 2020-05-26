<template>
  <div class="mainTabBar">
    <tab-bar>
      <tab-bar-item link="/home">
        <img src="~assets/img/common/home.svg" alt="" slot="icon">
        <img src="~assets/img/common/home_s.svg" alt="" slot="icon_active">
        <div slot="text">首页</div>
      </tab-bar-item>
    </tab-bar>
    <tab-bar>
      <tab-bar-item link="/category">
        <img src="~assets/img/common/category.svg" alt="" slot="icon">
        <img src="~assets/img/common/category_s.svg" alt="" slot="icon_active">
        <div slot="text">分类</div>
      </tab-bar-item>
    </tab-bar>
    <tab-bar>
      <tab-bar-item link="/cart">
        <img src="~assets/img/common/cart.svg" alt="" slot="icon">
        <img src="~assets/img/common/cart_s.svg" alt="" slot="icon_active">
        <div slot="text">购物车</div>
      </tab-bar-item>
    </tab-bar>
    <tab-bar>
      <tab-bar-item link="/profile">
        <img src="~assets/img/common/man.svg" alt="" slot="icon">
        <img src="~assets/img/common/man_s.svg" alt="" slot="icon_active">
        <div slot="text">我的</div>
      </tab-bar-item>
    </tab-bar>
  </div>
</template>

<script>
  import TabBar from "common/tabBar/TabBar";
  import TabBarItem from "common/tabBar/TabBarItem";

  export default {
    name: "MainTabBar",
    components:{
      TabBar,TabBarItem
    }
  }
</script>

<style scoped>
  .mainTabBar {
    position: fixed;
    left: 0;
    right: 0;
    bottom: 0;

    display: flex;
    justify-content: space-around;

    padding: 3px 0;

    background-color: #f6f6f6;

    box-shadow: 0 -1px 2px 1px rgba(224, 224, 224, .5);
  }
</style>
