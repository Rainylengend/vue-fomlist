<template>
  <div id="app">
    <router-view></router-view>
  </div>
</template>

<script>
  export default {
    name: 'app'
  }
</script>

<style lang="scss">
  @import "./assets/scss/common.scss";
  header{
    height:61px;
    border-bottom:1px solid #ddd;
    background-color: #fff;
    box-shadow: 5px 0 5px rgba(0,0,0,.3);
    position: relative;
    z-index:100;
  }
</style>
