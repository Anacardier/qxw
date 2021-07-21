<template>
  <div class="qxw-search">
    <el-input
      v-model="keywords"
      placeholder="请输入搜索内容"
      :input-style="{...inputStyle}"
    >
      <template #suffix>
        <font-awesome-icon icon="search" />
      </template>
    </el-input>
  </div>
</template>

<script setup>
import { defineProps } from "vue";
defineProps({
  keywords: String,
  inputStyle: Object,
});
</script>

<style lang="scss" scoped>
.qxw-search {
  ::v-deep(.el-input) {
    transition: all 0.3s;
    width: 19rem;
    height: 2rem;
    .el-input__inner {
      color: $primary;
      font-size: 0.88rem;
      border: 2px solid $primary;
      border-radius: 1.25rem;
      &::placeholder {
        color: $primary;
        font-size: 0.88rem;
      }
    }
    .el-input__suffix {
      color: $primary;
      font-size: 1.13rem;
      margin-right: .75rem;
      .el-input__suffix-inner {
        vertical-align: middle;
      }
    }
  }
}
</style>