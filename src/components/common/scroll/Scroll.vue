<template>
  <div class="wrapper" ref="wrapper">
    <div>
      <slot></slot>
      <div class="scrollEnd" v-show="!isHidden">
        <img src="~assets/img/common/loading.svg" alt="end">
      </div>
    </div>
  </div>
</template>

<script>
  import BScroll from 'better-scroll'

  export default {
    name: "Scroll",
    props: {
      /**
       * 0 即不派发 scroll 事件
       * 1 滚动的时候会派发scroll事件，会截流。
       * 2 滚动的时候实时派发scroll事件，不会截流。
       * 3 除了实时派发scroll事件，在swipe的情况下仍然能实时派发scroll事件
       */
      probeType: {
        type: Number,
        default: 0
      },
      /**
       * 点击列表是否派发click事件
       */
      click: {
        type: Boolean,
        default: true
      },
      /**
       * 是否派发滚动到底部的事件，用于上拉加载
       */
      pullup: {
        type: Boolean,
        default: false
      },
      /**
       * 是否派发滚动事件
       */
      listenScroll: {
        type: Boolean,
        default: false
      },
      /**
       * 是否隐藏末尾的图片
       * */
      isHidden: {
        type: Boolean,
        default: false
      }
    },
    mounted() {
      // 保证在DOM渲染完毕后初始化better-scroll
      setTimeout(() => {
        this._initScroll()
      }, 20)
    },
    methods: {
      _initScroll() {
        if (!this.$refs.wrapper) {
          return
        }
        // better-scroll的初始化
        this.scroll = new BScroll(this.$refs.wrapper, {
          probeType: this.probeType,
          click: this.click
        })

        // 是否派发滚动事件
        if (this.listenScroll) {
          this.scroll.on('scroll', (pos) => {
            this.$emit('scroll', pos)
          })
        }

        // 是否派发滚动到底部事件，用于上拉加载
        if (this.pullup) {
          this.scroll.on('scrollEnd', () => {
            // 滚动到底部
            if (this.scroll.y <= (this.scroll.maxScrollY + 50)) {
              this.$emit('scrollToEnd')
            }
          })
        }
      },
      refresh() {
        // 代理better-scroll的refresh方法
        this.scroll && this.scroll.refresh()
      },
      scrollTo(x, y, time = 100) {
        // 代理better-scroll的scrollTo方法
        this.scroll && this.scroll.scrollTo(x, y, time);
      },
      getScrollY() {
        return this.scroll.y;
      }
    }
  }
</script>

<style scoped>
  .scrollEnd {
    text-align: center;
    font-size: 0;
  }

  .scrollEnd img {
    width: 60px;
    height: 60px;
  }
</style>
