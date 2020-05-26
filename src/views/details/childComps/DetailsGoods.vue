<template>
  <div class="detailsGoods" v-if="Object.keys(detailInfo).length > 0">
    <div class="textInfo">
      <div class="start"></div>
      <div>{{detailInfo.desc}}</div>
      <div class="end"></div>
    </div>
    <div class="imgInfo">
      <p>{{detailInfo.detailImage[0].key}}</p>
      <div v-for="(item,index) in detailInfo.detailImage[0].list"
           :key="index">
        <img v-lazy="item" alt="image" :key="item">
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    name: "DetailsGoods",
    props: {
      detailInfo: {
        type: Object,
        default() {
          return {}
        }
      }
    }
  }
</script>

<style scoped>
  .textInfo{
    padding: 10px 20px;
    font-size: 14px;
  }
  .textInfo .start,.textInfo .end{
    width: 90px;
    border-bottom: 1px solid #222222;
  }
  .textInfo .start::before,.textInfo .end::after{
    content: '';
    height: 5px;
    width: 5px;
    background-color: #222222;
    display: block;
  }
  .textInfo .end{
    position: relative;
    left: calc(100% - 90px);
  }
  .textInfo .end::after{
    position: relative;
    left: calc(100% - 5px);
  }
  .textInfo div:nth-child(2){
    margin: 15px 0;
  }

  .imgInfo{
    padding-bottom: 20px;
    border-bottom: 5px solid #f2f5f8;
  }
  .imgInfo p{
    margin: 0 20px 10px;
  }
  .imgInfo img{
    width: 100%;
  }
</style>
