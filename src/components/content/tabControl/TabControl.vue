<template>
  <div class="tabControl">
    <div v-for="(key,index) in titles.keys()"
         @click="tabClick(index,key)"
         :class="{nowSelected:currentIndex === index}"
         :key="index">
      {{titles.get(key)}}
    </div>
  </div>
</template>

<script>
  export default {
    name: "TabControl",
    props: {
      titles: {
        type: Map,
        default() {
          return {}
        }
      }
    },
    data() {
      return {
        currentIndex: 0
      }
    },
    methods: {
      tabClick(index, key) {
        this.currentIndex = index;
        this.$emit('clickTabControl', key, index);
      }
    }
  }
</script>

<style scoped>
  .tabControl {
    display: flex;

    justify-content: space-evenly;

    padding-top: 10px;
    padding-bottom: 5px;

    z-index: 9;
    background-color: #ffffff;
    position: relative;
  }

  .tabControl div {
    padding: 0 4px 3px;
  }

  .nowSelected {
    color: var(--color-high-text);
    border-bottom: 2px solid var(--color-high-text);
  }
</style>
