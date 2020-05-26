<template>
  <div class="detailComment" v-if="Object.keys(commentInfo).length>0">
    <div class="title">
      <span>用户评论</span>
      <span>更多</span>
    </div>
    <div class="icon">
      <img v-lazy="commentInfo.user.avatar" alt="icon">
      <span>{{commentInfo.user.uname}}</span>
    </div>
    <div class="commentContent">{{commentInfo.content}}</div>
    <div class="time_style">
      <span>{{commentInfo.created | changeTimeFormat}}</span>
      <span>{{commentInfo.style}}</span>
    </div>
    <div class="imgInfo" v-if="commentInfo.images">
      <img v-for="(item,index) in commentInfo.images"
           :key="index"
           v-lazy="item" alt="img">
    </div>
  </div>
</template>

<script>
  import {formatDate} from "@/common/utils";

  export default {
    name: "DetailComment",
    props: {
      commentInfo: {
        type: Object,
        default() {
          return {}
        }
      }
    },
    filters: {
      changeTimeFormat(time) {
        return formatDate(new Date(time * 1000), 'yyyy-MM-dd hh:mm:ss');
      }
    }
  }
</script>

<style scoped>
  .detailComment {
    padding: 5px 8px 20px;
    border-bottom: 5px solid #f2f5f8;
  }

  .detailComment .title {
    display: flex;
    justify-content: space-between;
    align-items: center;

    color: #222222;

    padding: 20px 0;
    border-bottom: 1px solid #e5e5e5;
  }

  .detailComment .title span:last-child {
    padding-right: 20px;
  }

  .icon {
    display: flex;
    align-items: center;
    margin: 10px 0;
    color: #222222;
  }

  .icon img {
    width: 50px;
    height: 50px;
    border-radius: 50%;
    margin-right: 8px;
  }

  .commentContent {
    font-size: 12px;
    color: #939393;
    line-height: 18px;
  }

  .time_style {
    margin-top: 10px;
    font-size: 11px;
    color: #999999;
  }
  .time_style span:first-child{
    margin-right: 10px;
  }
  .imgInfo{
    font-size: 0;
    margin-top: 10px;
  }
  .imgInfo img{
    width: 70px;
    height: 70px;
    margin: 1px;
  }
</style>
