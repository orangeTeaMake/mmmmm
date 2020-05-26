<template>
  <div class="profile">
    <profile-nav-bar/>
    <profile-login-info/>
    <profile-wealth/>
    <profile-bottom/>
  </div>
</template>

<script>
  import ProfileNavBar from "./childComps/ProfileNavBar";
  import ProfileLoginInfo from "./childComps/ProfileLoginInfo";
  import ProfileWealth from "./childComps/ProfileWealth";
  import ProfileBottom from "./childComps/ProfileBottom";

  export default {
    name: "Profile",
    components: {ProfileBottom, ProfileWealth, ProfileLoginInfo, ProfileNavBar}
  }
</script>

<style scoped>

</style>
