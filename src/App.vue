<template>
  <div id="app">
    <keep-alive include="Home">
      <router-view/>
    </keep-alive>
    <!--底部选择栏-->
    <main-tab-bar/>
  </div>
</template>

<script>
  import MainTabBar from "components/content/mainTabBar/MainTabBar";

  export default {
    name: "App",
    components:{
      MainTabBar
    }
  }
</script>

<style>
  @import "assets/css/base.css";

  #app {
    position: relative;
  }


</style>
