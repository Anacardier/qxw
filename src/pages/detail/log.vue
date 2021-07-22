<template>
  <el-timeline class="game-log">
    <el-timeline-item color="#ae98be" timestamp="2018/4/12" placement="top">
      <el-card shadow="hover">
        <h4>更新 Github 模板</h4>
        <p>王小虎 提交于 2018/4/12 20:46</p>
      </el-card>
    </el-timeline-item>
    <el-timeline-item color="#ae98be" timestamp="2018/4/3" placement="top">
      <el-card shadow="hover">
        <h4>更新 Github 模板</h4>
        <p>王小虎 提交于 2018/4/3 20:46</p>
      </el-card>
    </el-timeline-item>
    <el-timeline-item color="#ae98be" timestamp="2018/4/2" placement="top">
      <el-card shadow="hover">
        <h4>更新 Github 模板</h4>
        <p>王小虎 提交于 2018/4/2 20:46</p>
      </el-card>
    </el-timeline-item>
  </el-timeline>
</template>

<script setup>

</script>

<style lang="scss" scoped>
.game-log {
  .el-timeline-item {
    &::marker {
      visibility: hidden;
      unicode-bidi: initial;
      font-variant-numeric:initial;
      text-transform: none;
      text-indent: 0px !important;
      text-align: initial !important;
      text-align-last: initial !important;
    }
  }
}
</style>
