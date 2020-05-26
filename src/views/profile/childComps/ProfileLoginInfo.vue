<template>
  <div class="profileLoginInfo">
    <div class="loginState">
      <div class="icon">
        <img src="~assets/img/profile/icon.svg" alt="头像">
      </div>
      <div class="info">
        <div>登录/注册</div>
        <div>
          <img src="~assets/img/profile/phone.svg" alt="手机">
<!--          <span></span>-->
          暂无绑定手机号
        </div>
      </div>
    </div>
    <img class="right-button" src="~assets/img/profile/right.svg" alt="right">
  </div>
</template>

<script>
  export default {
    name: "ProfileLoginInfo"
  }
</script>

<style scoped>
  .profileLoginInfo{
    display: flex;
    justify-content: space-between;
    align-items: center;

    padding: 15px 0 15px 15px;

    background-color: var(--color-high-text);
  }
  .profileLoginInfo .loginState{
    display: flex;
    align-items: center;
  }
  .profileLoginInfo .icon img{
    width: 100%;
    height: 100%;
  }
  .profileLoginInfo .icon{
    width: 64px;
    height: 64px;
    background-color: #ffffff;

    border-radius: 50%;
  }

  .profileLoginInfo .info{
    color: white;
    margin-left: 10px;
  }
  .profileLoginInfo .info img{
    width: 25px;
    height: 25px;

    position: relative;
    top: -1px;
  }
  .profileLoginInfo .info div:last-child{
    font-size: 14px;
    display: flex;

    position: relative;
    left: -5px;
    top: 3px;
  }

  .profileLoginInfo .right-button{
    width: 50px;
    height: 50px;
  }
</style>
