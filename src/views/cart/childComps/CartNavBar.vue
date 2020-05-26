<template>
  <div class="cartNavBar">
      <nav-bar>
        <div slot="center">购物车</div>
      </nav-bar>
  </div>
</template>

<script>
  import NavBar from "components/common/navBar/NavBar";

  export default {
    name: "CartNavBar",
    components:{
      NavBar
    }
  }
</script>

<style scoped>
  .cartNavBar{
    background-color: #ff8198;
  }
  .cartNavBar div{
    font-size: 16px;
    font-weight: 700;
    color: white;
  }
</style>
