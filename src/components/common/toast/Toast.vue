<template>
  <div class="toast" v-show="isShow">
    {{message}}
  </div>
</template>

<script>
  export default {
    name: "Toast",
    data() {
      return {
        message: '',
        isShow: false
      }
    },
    methods: {
      show(message, duration = 1500) {
        this.isShow = true;
        this.message = message;
        console.log(message);

        setTimeout(() => {
          this.isShow = false;
          this.message = '';
        }, duration);
      }
    }
  }
</script>

<style scoped>
  .toast {
    position: absolute;
    left: 50%;
    bottom: 50%;

    transform: translate(-50%, -50%);
    padding: 10px 30px;
    border-radius: 25px;

    color: #ffffff;
    background-color: rgba(0, 0, 0, .8);

    min-width: 200px;
    max-width: 500px;
    text-align: center;
  }
</style>
