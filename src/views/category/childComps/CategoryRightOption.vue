<template>
  <div class="categoryRightOption">
    <scroll class="content" :is-hidden="true">
      <grid-view v-if="Object.keys(subCategoryList).length > 0">
        <category-item v-for="(item,index) in subCategoryList"
                       :item="item"
                       :key="item.image"/>
      </grid-view>
      <tab-control :titles="new Map(titles)" @clickTabControl="clickTab"/>
      <goods-list :goods-list="recommendList"/>
    </scroll>
  </div>
</template>

<script>
  import Scroll from "components/common/scroll/Scroll";
  import GridView from "components/common/gridView/GridView";
  import TabControl from "components/content/tabControl/TabControl";

  import {POP,NEW,SELL} from "@/common/const";

  import CategoryItem from "./CategoryItem";
  import GoodsList from "../../../components/content/goods/GoodsList";

  export default {
    name: "CategoryRightOption",
    props: {
      subCategoryList: {
        type: Array,
        default() {
          return []
        }
      },
      recommendList:{
        type: Array,
        default() {
          return [];
        }
      }
    },
    data() {
      return {
        titles: [
          [POP, '流行'],
          [NEW, '新款'],
          [SELL, '精选']
        ],
      }
    },
    components: {GoodsList, TabControl, GridView, Scroll, CategoryItem},
    methods:{
      clickTab(key, index) {
        this.$emit('clickSelected', key);
      }
    }
  }
</script>

<style scoped>
  .categoryRightOption {
    height: calc(100vh - 47px);
    width: calc(100% - 100px);
  }

  .categoryRightOption .content {
    height: calc(100% - 44px);
    overflow: hidden;
  }
</style>
