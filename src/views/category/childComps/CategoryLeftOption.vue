<template>
  <div class="categoryLeftOption">
    <scroll class="content" :is-hidden="true">
      <div v-for="(item,index) in categoryList"
           class="title"
           :class="{selected:currentIndex === index}"
           @click="selectCategory(index)"
           :key="index">
        {{item.title}}
      </div>
    </scroll>
  </div>
</template>

<script>
  import Scroll from "components/common/scroll/Scroll";
  export default {
    name: "CategoryLeftOption",
    components: {Scroll},
    props: {
      categoryList: {
        type: Array,
        default() {
          return []
        }
      }
    },
    data() {
      return {
        currentIndex: 0
      }
    },
    methods: {
      selectCategory(index) {
        this.currentIndex = index;
        this.$emit('selectedItem', index);
      }
    }
  }
</script>

<style scoped>
  .categoryLeftOption{
    height: calc(100vh - 47px);
  }
  .categoryLeftOption .content{
    height: calc(100% - 44px);
    overflow: hidden;
  }
  .categoryLeftOption .title {
    background-color: #f6f6f6;
    /*height: 46px;*/
    width: 100px;
    line-height: 46px;
    text-align: center;
    font-size: 14px;
  }

  .categoryLeftOption .selected {
    background-color: #ffffff;
    color: var(--color-high-text);
    font-weight: 700;
    position: relative;
  }

  .categoryLeftOption .selected::before {
    content: '';
    position: absolute;
    left: 0;
    top: 0;

    height: 100%;
    width: 5px;
    background-color: red;
  }
</style>
