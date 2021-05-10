<template>
  <div id="app">
    <t-t-header></t-t-header>
    <el-main>
      <router-view class="tt-router-view">
      </router-view>
    </el-main>

  </div>
</template>

<script>

import TTHeader from "@/components/Header";
import {axios} from "axios";


export default {
  name: 'App',
  components: {
    TTHeader
  },
  mounted() {
  axios.get('http://localhost',{params:{
    name:'qinc'
    }}).then()
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  background-color: #f1f3f5;
  padding-top: 60px;
}

.tt-router-view {
  align-self: center;
}
</style>
