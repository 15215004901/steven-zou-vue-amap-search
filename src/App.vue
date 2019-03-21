<template>
  <div id="app">
    <amap-search
      :searchCount="2"
      :autoConfirm="true"
      :useClick="true"
      :width="800"
      :height="340"
      @userInput="handleUserInput"
      @pickedLocation="handlePickedLocation">
    </amap-search>
  </div>
</template>

<script>
module.exports = require('./App.js').default
</script>

<style lang="less">
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
code{
  padding: 2px 4px;
  font-size: 90%;
  color: #c7254e;
  background-color: #f9f2f4;
  border-radius: 4px;
}
</style>
