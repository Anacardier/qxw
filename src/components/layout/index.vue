<template>
  <el-container class="qxw">
    <el-header height="auto" class="qxw-header">
      <Nav />
    </el-header>
    <el-main>
      <router-view />
    </el-main>
  </el-container>
</template>

<script setup>
import Nav from "./nav.vue"
</script>

<style lang="scss" scoped>

</style>