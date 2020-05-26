<template>
  <div class="home-nav-bar">
    <nav-bar>
<!--      <img src="~assets/img/common/back.svg" alt="" slot="left">-->
      <div slot="center" class="text">购物街</div>
    </nav-bar>
  </div>
</template>

<script>
  import NavBar from "components/common/navBar/NavBar";

  export default {
    name: "HomeNavBar",
    components:{
      NavBar
    }
  }
</script>

<style scoped>
  .home-nav-bar{
    background-color: #ff8198;
  }
  .home-nav-bar .text{
    font-size: 16px;
    font-weight: 700;
    color: white;
  }
</style>
