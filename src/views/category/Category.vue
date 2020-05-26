<template>
  <div class="category">
    <category-nav-bar/>
    <div class="categoryContent">
      <category-left-option :category-list="categoryList" @selectedItem="selectedItem"/>
      <category-right-option :sub-category-list="subCategoryList"
                             :recommend-list="subcategoryRecommends"
                             @clickSelected="clickSelected"/>
    </div>
  </div>
</template>

<script>
  import {getCategoryData, getSubcategory, getSubcategoryRecommend} from "network/category";

  import {POP} from "@/common/const";

  import CategoryNavBar from "./childComps/CategoryNavBar";
  import CategoryLeftOption from "./childComps/CategoryLeftOption";
  import CategoryRightOption from "./childComps/CategoryRightOption";

  export default {
    name: "Category",
    data() {
      return {
        categoryList: [],
        subCategoryList: [],
        subcategoryRecommends: [],

        currentKey: POP,
        currentIndex: 0
      }
    },
    components: {CategoryRightOption, CategoryLeftOption, CategoryNavBar},
    created() {
      //获取分类的选项
      this.getCategoryOption().then(res => {
        this.getSubcategoryOption(this.currentIndex);//获取子分类的数据
      }).catch(err => {
        console.log(err);
      });
    },
    methods: {
      getCategoryOption() {
        return getCategoryData().then(res => {
          console.log(res);
          this.categoryList = res.data.category.list;
        })
      },
      getSubcategoryOption(index) {
        let item = this.categoryList[index];
        console.log(item)
        item?.maitKey && getSubcategory(item.maitKey).then(res => {
          console.log(res);
          this.subCategoryList = res.data.list;
        }).catch(err => {
          console.log(err);
        });

        this.getRecommend(item, this.currentKey);
      },
      getRecommend(item, key) {
        item?.miniWallkey && getSubcategoryRecommend(item.miniWallkey, key)
          .then(res => {
            this.subcategoryRecommends = res;
          }).catch(err => {
            console.log(err);
          })
      },
      selectedItem(index) {
        this.currentIndex = index;
        this.getSubcategoryOption(index);//获取子分类的数据
      },
      clickSelected(key) {
        console.log(key);
        this.currentKey = key;
        this.getRecommend(this.categoryList[this.currentIndex], this.currentKey);
      }
    }
  }
</script>

<style scoped>
  .categoryContent {
    display: flex;
  }
</style>
