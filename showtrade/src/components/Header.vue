<template>
  <el-header>
    <el-menu :default-active="activeIndex" :router=true class="tt-header-nav" mode="horizontal"
             @select="handleSelect">
      <el-menu-item index="Home" route="">大盘导航</el-menu-item>
      <el-menu-item index="Note" route="">笔记本</el-menu-item>
      <el-menu-item index="3" route="">个股指标</el-menu-item>
    </el-menu>
  </el-header>

</template>

<script>
export default {
  name: "TTHeader",
  data: function () {
    return {
      activeIndex: "1",
    }
  },
  methods: {
    // eslint-disable-next-line no-unused-vars
    handleSelect(key, keypath) {
      // eslint-disable-next-line no-debugger
      debugger;
    }
  }
}
</script>


<style scoped>
.tt-header-nav {
}
</style>