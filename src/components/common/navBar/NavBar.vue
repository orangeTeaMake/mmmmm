<template>
  <div class="navBar">
    <div class="navBarLeft">
      <slot name="left"></slot>
    </div>
    <div class="navBarCenter">
      <slot name="center">标题</slot>
    </div>
    <div class="navBarRight">
      <slot name="right"></slot>
    </div>
  </div>
</template>

<script>
  export default {
    name: "NavBar"
  }
</script>

<style scoped>
  .navBar {
    display: flex;

    height: 44px;

    text-align: center;
    align-items: center;
    font-size: 0;

    box-shadow: 0 1px 5px 2px rgba(230, 230, 230, .5);
  }

  .navBarLeft, .navBarRight {
    width: 44px;
  }

  .navBarCenter {
    flex: 1;
  }

  .navBar img {
    width: 25px;
    height: 25px;
  }
</style>
