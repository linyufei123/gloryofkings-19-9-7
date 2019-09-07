<template>
  <div id="app">
    <router-view></router-view>
     <TabBar v-show="this.$route.meta.show"></TabBar>
  </div>
</template>

<script>
  import TabBar from "common/tabBar"
  export default {
    name:"APP",
  components:{
    TabBar
  }
  }
</script>

<style lang="scss">
  html,body{
       height:100%;
       } 
  *{
    list-style: none;
  }
  #app{
    display: flex;
    flex-direction:column;
    height:100%;
  }
</style>
