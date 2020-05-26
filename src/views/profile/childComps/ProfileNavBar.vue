<template>
  <div class="profileNavBar">
    <nav-bar>
      <div slot="center">我的商城</div>
    </nav-bar>
  </div>
</template>

<script>
  import NavBar from "components/common/navBar/NavBar";

  export default {
    name: "ProfileNavBar",
    components: {NavBar}
  }
</script>

<style scoped>
  .profileNavBar{
    background-color: #ff8198;
  }
  .profileNavBar div{
    font-size: 16px;
    font-weight: 700;
    color: white;
  }
</style>
