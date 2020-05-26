<template>
  <div class="detailNavBar">
    <nav-bar>
      <img src="~assets/img/common/back.svg" alt="back" slot="left"
           @click="backClick">
      <div slot="center" class="text">
        <span v-for="(item,index) in titles"
              @click="clickNav(index)"
              :style="currentIndex === index ? getStyle : ''"
              :key="index">
          {{item}}
        </span>
      </div>
    </nav-bar>
  </div>
</template>

<script>
  import NavBar from "components/common/navBar/NavBar";

  export default {
    name: "DetailNavBar",
    data() {
      return {
        titles:['商品','参数','评论','推荐'],
        currentIndex: 0
      }
    },
    components: {
      NavBar
    },
    computed: {
      getStyle() {
        return {color: 'red'};
      }
    },
    methods: {
      clickNav(index) {
        this.currentIndex = index;
        this.$emit('clickNav', index);
      },
      backClick() {
        this.$router.back();
      }
    }
  }
</script>

<style scoped>
  .detailNavBar {
    background-color: #ffffff;
  }

  .detailNavBar .text {
    font-size: 14px;
    color: #222222;
    display: flex;
    justify-content: space-evenly;
  }
</style>
