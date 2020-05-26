import BackToTop from "components/content/backToTop/BackToTop";

export const BackToMixin = {
  data() {
    return {
      isShowTop: false
    }
  },
  components:{
    BackToTop
  },
  methods:{
    clickToTop() {
      this.$refs.scroll.scrollTo(0, 0, 500);
    }
  }
}
