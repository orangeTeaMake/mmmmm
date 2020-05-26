<template>
  <div class="categoryNavBar">
    <nav-bar>
      <div slot="center">商品分类</div>
    </nav-bar>
  </div>
</template>

<script>
  import NavBar from "components/common/navBar/NavBar";

  export default {
    name: "CategoryNavBar",
    components: {NavBar}
  }
</script>

<style scoped>
  .categoryNavBar{
    background-color: #ff8198;
  }
  .categoryNavBar div{
    font-size: 16px;
    font-weight: 700;
    color: white;
  }
</style>
