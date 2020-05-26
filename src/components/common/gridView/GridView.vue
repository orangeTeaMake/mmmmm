<template>
  <div class="grid-view" ref="gridView">
    <slot></slot>
  </div>
</template>

<script>
  export default {
    name: "GridView",
    props: {
      cols: {
        type: Number,
        default: 3
      },
      hMargin: {
        type: Number,
        default: 8
      },
      vMargin: {
        type: Number,
        default: 8
      },
      itemSpace: {
        type: Number,
        default: 8
      },
      lineSpace: {
        type: Number,
        default: 8
      }
    },
    mounted() {
      setTimeout(this._autoLayout, 20);
    },
    updated() {
      this._autoLayout();
    },
    methods: {
      _autoLayout() {
        //1.获取gridEl和children
        let gridEl = this.$refs.gridView;
        let child = gridEl.children;

        //2.设置gridEl内边距
        gridEl.style.padding = `${this.vMargin}px ${this.hMargin}px`;

        //3.计算每个child宽度
        let itemWidth = (gridEl.clientWidth - this.hMargin * 2 - (this.cols - 1) * this.itemSpace)
          / this.cols;
        for (let i = 0; i < child.length; i++) {
          let item = child[i];
          item.style.width = itemWidth + "px";
          if ((i + 1) % this.cols !== 0) {
            item.style.marginRight = this.itemSpace + 'px';
          }
          if (i >= this.cols) {
            item.style.marginTop = this.lineSpace + 'px';
          }
        }
      }
    }
  }
</script>

<style scoped>
  .grid-view{
    display: flex;
    flex-wrap: wrap;
  }
</style>
