<template>
  <div class="Home">
    <iframe class="home_iframe" frameborder="0" src="https://naughty-swirles-4f2d6c.netlify.app/"
    ></iframe>
  </div>
</template>
<script>

export default {
  name: 'Home',
  mounted() {
  }
}
</script>

<style scoped>
.Home {
  height: 1000px;
  width: 1600px;
  margin: auto;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  background-color: #f1f3f5;
  align-content: center;
}

.home_iframe {
  height: inherit;
  width: inherit;
}
</style>