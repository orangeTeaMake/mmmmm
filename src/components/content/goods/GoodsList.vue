<template>
  <div class="goodsList">
    <goods-list-item
      v-for="(item,index) in goodsList"
      :goods="item"
      @click.native="clickGoods(getGoodsId(item))"
      :key="item.acm"/>
  </div>
</template>

<script>
  import GoodsListItem from "./GoodsListItem";

  export default {
    name: "GoodsList",
    props: {
      goodsList: {
        type: Array,
        default() {
          return []
        }
      }
    },
    components: {
      GoodsListItem
    },
    methods: {
      clickGoods(iid) {
        this.$router.push({
          path: '/details',
          query: {
            iid
          }
        });
      },
      getGoodsId(item) {
        return item.iid || item.item_id;
      }
    }
  }
</script>

<style scoped>
  .goodsList {
    display: flex;
    justify-content: space-evenly;

    flex-wrap: wrap;
  }
</style>
