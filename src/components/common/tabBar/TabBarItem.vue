<template>
  <div class="tabBarItem" @click="barClick">
    <div class="icon" v-show="!isShow">
      <slot name="icon"></slot>
    </div>
    <div class="icon_active" v-show="isShow">
      <slot name="icon_active"></slot>
    </div>
    <div class="text" :style="activeStyle">
      <slot name="text"></slot>
    </div>
  </div>
</template>

<script>
  export default {
    name: "TabBarItem",
    props: {
      link: {
        type: String,
        default: ''
      }
    },
    computed: {
      isShow() {
        return this.link !== '' && this.$route.path.indexOf(this.link) !== -1;
      },
      activeStyle() {
        return this.isShow ? {color: 'red'} : '';
      }
    },
    methods: {
      barClick() {
        this.link !== '' &&
        this.$router.replace(this.link).catch(err => {
          console.log(err)
        });
      }
    }
  }

  /*
  * 功能：
  * 1.点击会切换到对应的页面
  * 通过router.replace切换到对应的路由
  * 2.点击想应的div会变红
  * */
</script>

<style scoped>
  .tabBarItem {
    text-align: center;
    font-size: 0;
  }

  .tabBarItem img {
    width: 25px;
    height: 25px;
  }

  .text {
    font-size: 14px;
    color: #222222;
  }
</style>
