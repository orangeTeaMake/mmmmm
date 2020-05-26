<template>
  <div class="homeRecommend">
    <div v-for="(item,index) in recommend" :key="index">
      <a :href="item.link">
        <img :src="item.image" :alt="item.title">
        <div>{{item.title}}</div>
      </a>
    </div>
  </div>
</template>

<script>
  export default {
    name: "HomeRecommend",
    props: {
      recommend: {
        type: Array,
        default() {
          return []
        }
      }
    }
  }
</script>

<style scoped>
  .homeRecommend{
    display: flex;
    justify-content: space-around;
    text-align: center;

    padding: 15px;
    margin-bottom: 20px;
  }

  .homeRecommend img{
    width: 80px;
    height: 80px;
  }
</style>
