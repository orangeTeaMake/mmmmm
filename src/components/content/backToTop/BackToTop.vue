<template>
  <div class="backToTap" @click="clickTop" v-show="isShowTop">
    <img src="~assets/img/backToTap/top.svg" alt="top">
  </div>
</template>

<script>
  export default {
    name: "BackToTop",
    props: {
      isShowTop: {
        type: Boolean,
        default: false
      }
    },
    methods: {
      clickTop() {
        this.$emit('clickTop')
      }
    }
  }
  /*
  * 点击返回顶部
  * */
</script>

<style scoped>
  .backToTap {
    position: absolute;
    right: 10px;
    bottom: 10px;
    margin-bottom: 60px;

    font-size: 0;

    background-color: #f6f6f6;
    border-radius: 50%;
    padding: 5px;

    box-shadow: 0 0 5px 2px rgba(246, 246, 246, .6);
  }

  .backToTap img {
    width: 50px;
    height: 50px;
  }
</style>
