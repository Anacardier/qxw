<template>
  <el-container class="qxw">
    <el-header height="auto">
      <Nav />
    </el-header>
    <el-main>
      <!-- <keep-alive> -->
        <router-view />
      <!-- </keep-alive> -->
    </el-main>
  </el-container>
</template>

<script setup>
import Nav from "./nav.vue"
</script>

<style lang="scss" scoped>
.qxw {
  min-width: 23.438rem;
}
</style>