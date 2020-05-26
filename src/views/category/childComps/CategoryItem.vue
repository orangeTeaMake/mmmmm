<template>
  <div class="categoryItem" v-if="Object.keys(item).length !== 0">
    <a :href="item.link">
      <img v-lazy="item.image" alt="image">
      <div>{{item.title}}</div>
    </a>
  </div>
</template>

<script>
  export default {
    name: "CategoryItem",
    props: {
      item: {
        type: Object,
        default() {
          return {}
        }
      }
    }
  }
</script>

<style scoped>
  .categoryItem {
    font-size: 14px;
    text-align: center;
  }
  .categoryItem img{
    width: 80%;
  }
</style>
